import {
  ArrowChevronDownIcon,
  GamutIconProps,
  MiniChevronDownIcon,
} from '@codecademy/gamut-icons';
import { useTheme } from '@emotion/react';
import React, {
  ReactNode,
  SelectHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react';
import ReactSelect, {
  components as SelectDropdownElements,
  ContainerProps,
  IndicatorProps,
  NamedProps,
  OptionsType,
  OptionTypeBase,
  StylesConfig,
} from 'react-select';

import { Box } from '../Box';
import { SelectComponentProps, SelectOptions } from './Select';
import {
  conditionalBorderStates,
  dropdownBorderStates,
  dropdownBorderStyles,
  optionBackground,
  placeholderColor,
  selectDropdownStyles,
  sizeVariants,
  textColor,
} from './styles';
import { parseOptions } from './utils';

export interface IconOption {
  label: string;
  value: string;
  icon?: React.ComponentType<GamutIconProps>;
}

export interface SelectDropdownSizes {
  size?: 'small' | 'medium';
}

type SelectDropdownBaseProps = Omit<
  SelectComponentProps,
  'onChange' | 'defaultValue' | 'options'
> &
  SelectDropdownSizes;

export type SelectDropdownOptions = SelectOptions | IconOption[];

interface SelectDropdownCoreProps
  extends SelectDropdownBaseProps,
    Omit<
      NamedProps<OptionStrict, boolean>,
      | 'formatOptionLabel'
      | 'isDisabled'
      | 'value'
      | 'options'
      | 'components'
      | 'styles'
      | 'theme'
      | 'onChange'
      | 'isMulti'
    >,
    Pick<
      SelectHTMLAttributes<HTMLSelectElement>,
      'value' | 'disabled' | 'onClick'
    > {
  inputProps?: Record<string, string | number | boolean>;
  name?: string;
  placeholder?: string;
  options?: SelectDropdownOptions;
  shownOptionsLimit?: 1 | 2 | 3 | 4 | 5 | 6;
}

interface SingleSelectDropdownProps extends SelectDropdownCoreProps {
  isMulti?: false;
  onChange?: NamedProps<OptionStrict, false>['onChange'];
}

interface MultiSelectDropdownProps extends SelectDropdownCoreProps {
  isMulti: true;
  onChange?: NamedProps<OptionStrict, true>['onChange'];
}

type SelectDropdownProps = SingleSelectDropdownProps | MultiSelectDropdownProps;

interface BaseOnChangeProps {
  isMulti?: boolean;
  onChange:
    | SingleSelectDropdownProps['onChange']
    | MultiSelectDropdownProps['onChange'];
}

const isMultiSelectProps = (
  props: BaseOnChangeProps
): props is MultiSelectDropdownProps => !!props.isMulti;

const isSingleSelectProps = (
  props: BaseOnChangeProps
): props is SingleSelectDropdownProps => !props.isMulti;

const { DropdownIndicator, SelectContainer } = SelectDropdownElements;

export interface OptionStrict {
  label: string;
  value: string;
}

type CustomContainerProps = ContainerProps<OptionStrict, false> & {
  children?: ReactNode[];
};

const indicatorSizes = {
  small: {
    size: 12,
    icon: MiniChevronDownIcon,
  },
  medium: {
    size: 16,
    icon: ArrowChevronDownIcon,
  },
};

interface SizedIndicatorProps extends IndicatorProps<OptionTypeBase, false> {
  selectProps: SelectDropdownSizes;
}

const ChevronDropdown = (props: SizedIndicatorProps) => {
  const { size } = props.selectProps;
  const color = props.isDisabled ? 'text-disabled' : 'text';
  const { icon: IndicatorIcon, ...iconProps } = indicatorSizes[
    size ?? 'medium'
  ];

  return (
    <DropdownIndicator {...props}>
      <IndicatorIcon {...iconProps} color={color} />
    </DropdownIndicator>
  );
};

const CustomContainer = ({ children, ...rest }: CustomContainerProps) => {
  const { inputProps, name } = rest.selectProps;
  const value = rest.hasValue
    ? rest
        .getValue()
        .map(({ value }) => value)
        .join(', ')
    : '';

  return (
    <SelectContainer {...rest}>
      {children}
      <input type="hidden" value={value} name={name} {...inputProps} />
    </SelectContainer>
  );
};

const formatOptionLabel = ({ label, icon: Icon, size }: any) => {
  return (
    <Box display="flex" alignItems="center">
      {Icon && <Icon size={size === 'small' ? 16 : 24} color="text" ml={4} />}
      <Box as="span" pl={Icon ? 16 : 0}>
        {label}
      </Box>
    </Box>
  );
};

const defaultProps = {
  name: undefined,
  components: {
    DropdownIndicator: ChevronDropdown,
    IndicatorSeparator: () => null,
    SelectContainer: CustomContainer,
    MultiValue: SelectDropdownElements.MultiValue,
    MultiValueLabel: SelectDropdownElements.MultiValueLabel,
  },
};

const onChangeAction = 'select-option';

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  id,
  size,
  error,
  disabled,
  onChange,
  value,
  name,
  placeholder = 'Select an option',
  inputProps,
  isMulti,
  isSearchable,
  shownOptionsLimit = 6,
  ...rest
}) => {
  const [activated, setActivated] = useState(false);

  const selectOptions = useMemo(() => {
    return parseOptions({ options, id, size });
  }, [options, id, size]);

  const parsedValue = useMemo(
    () => selectOptions.find((option) => option.value === value),
    [selectOptions, value]
  );

  const [multiValues, setMultiValues] = useState(
    selectOptions.filter((option) => option.value === value)
  );

  const changeHandler = useCallback(
    (optionEvent: OptionStrict | OptionsType<OptionStrict>) => {
      setActivated(true);

      // We have to do this because the version of typescript we have doesn't have the transitivity of these type guards yet. But, we will soon!
      // Should probably come with: https://codecademy.atlassian.net/browse/GM-354
      const onChangeProps = { onChange, isMulti };

      if (isSingleSelectProps(onChangeProps)) {
        const singleOptionEvent = optionEvent as OptionStrict;

        onChangeProps.onChange?.(singleOptionEvent, {
          action: onChangeAction,
          option: singleOptionEvent,
        });
      }

      if (isMultiSelectProps(onChangeProps)) {
        setMultiValues(optionEvent as OptionStrict[]);

        onChangeProps.onChange?.(optionEvent as OptionsType<OptionStrict>, {
          action: onChangeAction,
          option: undefined, // At the moment this isn't used, but when multi select is built for real, boom (https://codecademy.atlassian.net/browse/GM-354)
        });
      }
    },
    [onChange, isMulti]
  );

  const theme = useTheme();
  const memoizedStyles: StylesConfig<OptionTypeBase, false> = useMemo(() => {
    return {
      container: (provided, state) => ({
        ...provided,
        pointerEvents: 'visible',
        cursor: state.selectProps.isSearchable ? 'text' : 'pointer',
        width: '100%',
        minWidth: '7rem',
      }),

      control: (provided, state) => {
        return {
          ...selectDropdownStyles({ theme }),
          ...sizeVariants({ size: state.selectProps.size, theme }),
          ...conditionalBorderStates({
            isFocused: state.isFocused,
            isDisabled: state.isDisabled,
            error: state.selectProps.error,
            activated: state.selectProps.activated,
            theme,
          }),
        };
      },

      dropdownIndicator: () => ({
        color: 'currentColor',
        display: 'flex',
        padding: '0',
        pointerEvents: 'none',
      }),

      input: () => ({
        ...textColor({ theme }),
        padding: '0',
        margin: '0',
      }),

      menu: (provided, state) => ({
        ...provided,
        ...dropdownBorderStyles({ theme }),
        ...dropdownBorderStates({ error: state.selectProps.error, theme }),
      }),

      menuList: (provided, state) => {
        const sizeInteger = state.selectProps.size === 'small' ? 2 : 3;
        const maxHeight = `${
          state.selectProps.shownOptionsLimit * sizeInteger
        }rem`;
        return {
          ...provided,
          maxHeight,
        };
      },

      placeholder: (provided) => ({
        ...provided,
        ...placeholderColor({ theme }),
      }),

      option: (provided, state) => ({
        padding: state.selectProps.size === 'small' ? '3px 14px' : '11px 14px',
        cursor: 'pointer',
        ...optionBackground(state.isSelected, state.isFocused)({ theme }),
      }),

      singleValue: () => ({
        ...textColor({ theme }),
        display: 'flex',
      }),

      valueContainer: (provided) => ({
        ...provided,
        padding: 0,
      }),
    };
  }, [theme]);

  return (
    <ReactSelect
      {...defaultProps}
      id={id || rest.htmlFor}
      options={selectOptions}
      value={isMulti ? multiValues : parsedValue}
      activated={activated}
      error={Boolean(error)}
      formatOptionLabel={formatOptionLabel}
      onChange={changeHandler}
      inputProps={{ ...inputProps, name }}
      placeholder={placeholder}
      styles={memoizedStyles}
      isMulti={isMulti}
      isDisabled={disabled}
      isSearchable={isSearchable}
      size={size}
      shownOptionsLimit={shownOptionsLimit}
      {...rest}
    />
  );
};
