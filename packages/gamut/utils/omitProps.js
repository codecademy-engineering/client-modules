import invariant from 'invariant';
import { isPlainObject, omit, without } from 'lodash';

/**
 * omitProps
 *
 * removes a provided array of props from a props object,
 * leaving necessary props like children intact
 */
export default function omitProps(initialPropsToOmit, props) {
  const propsToOmit = isPlainObject(initialPropsToOmit)
    ? Object.keys(initialPropsToOmit)
    : initialPropsToOmit;

  invariant(
    Array.isArray(propsToOmit),
    `omitProps expected an Object or Array, received: ${initialPropsToOmit}`
  );

  // allow all data-* props, mainly used for testing libraries
  const dataProps = propsToOmit.filter(p => p.match(/^data-.*/));

  return omit(
    props,
    without(propsToOmit, 'children', 'className', ...dataProps)
  );
}
