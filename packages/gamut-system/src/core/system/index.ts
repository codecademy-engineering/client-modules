import { entries, mapValues, merge, values } from 'lodash';

import * as BaseConfig from '../../props';
import {
  AbstractPropertyConfig,
  AbstractProps,
  AbstractTheme,
  Handler,
} from '../../types/config';
import { ComplexCss, CSSObject } from '../../types/css';
import { System, SystemConfig } from '../../types/system';
import { compose } from '../compose';
import { createHandler } from '../createHandler';
import { splitSelectors } from '../utils/pseudoSelectors';

const create = <
  Theme extends AbstractTheme,
  Config extends SystemConfig<Theme>
>(
  config?: Config
): System<Theme, Config> => {
  // Initializes the return object
  const system: {
    properties: Record<string, Handler<AbstractProps>>;
    groups: Record<string, Handler<AbstractProps>>;
    css?: (config: AbstractProps) => CSSObject;
    variant?: (config: AbstractProps) => CSSObject;
  } = {
    properties: {},
    groups: {},
  };

  const propertyToHandler: Record<string, unknown> = {};
  // Merge the the default prop configurations and user defined ones together.
  const propGroups = merge(BaseConfig, config || {});

  // Iterate over all the property groups
  entries(propGroups).forEach(([groupKey, groupProps]) => {
    const propertyFns: Record<string, Handler<AbstractProps>> = {};
    // Create the style functions (handlers) for each of the specifieed properties.
    Object.entries(groupProps).forEach(
      ([key, propertyConfig]: [string, AbstractPropertyConfig]) => {
        const { propName, dependentProps = [] } = propertyConfig;
        const handler = createHandler(propertyConfig);
        const cssProperties = [propName, ...dependentProps];

        cssProperties.forEach((prop) => {
          propertyToHandler[prop] = handler;
        });

        propertyFns[key] = handler;
      }
    );

    // Create a composed group handler for the group (handles all group properties at once)
    const groupHandler = compose(...values(propertyFns));

    // Add them to the default props group.
    system.properties = {
      ...system.properties,
      ...propertyFns,
    };

    // Add the composite group handler to the correct propGroups key
    system.groups[groupKey] = groupHandler;
  });

  const allSystemProps = compose(...values(system.properties));

  const css = (config: any = {}) => {
    let cache: ComplexCss<CSSObject>;
    const [base, pseudos] = splitSelectors(config);

    return ({ theme = {} }) => {
      if (cache) return cache;
      const css = {
        ...allSystemProps({ ...base, theme }),
        ...mapValues(pseudos, (styles) => allSystemProps({ ...styles, theme })),
      } as ComplexCss<CSSObject>;
      cache = css;
      return css;
    };
  };

  // Initialize the createVariant API inside the closure to ensure that we have access to all the possible handlers
  const variant = (config: any) => {
    const variants = config?.variants || config;
    const propKey: string = config?.prop || 'variant';
    const defaultKey: string = config?.default;
    const cache: Record<string, Record<string, CSSObject> | CSSObject> = {};
    const variantSelectors = mapValues(variants, splitSelectors);

    // Return the variant function
    return ({
      [propKey]: selectedVariant = defaultKey,
      ...rest
    }: Record<typeof propKey, string>) => {
      if (!selectedVariant) return {};

      const theme = rest.theme || {};
      const cachedCss = cache[selectedVariant];
      if (cachedCss) return cachedCss;

      const [base, pseudos = {}] = variantSelectors[selectedVariant];
      const css = {
        ...allSystemProps({ ...base, theme }),
        ...mapValues(pseudos, (styles) => allSystemProps({ ...styles, theme })),
      } as ComplexCss<CSSObject>;

      cache[selectedVariant] = css;
      return css;
    };
  };

  // add the function to the returned object
  return {
    ...system.groups,
    properties: system.properties,
    css,
    variant,
  } as any;
};

export const system = {
  create: <Config extends SystemConfig<{}>>(config: Config) => {
    return create<{}, Config>(config);
  },
  withTheme: <Theme extends AbstractTheme>() => {
    return {
      create: <Config extends SystemConfig<Theme>>(config: Config) => {
        return create<Theme, Config>(config);
      },
    };
  },
};
