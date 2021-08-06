import {
  ArrowChevronDownIcon,
  MiniChevronDownIcon,
} from '@codecademy/gamut-icons';
import React, {
  ReactNode,
  SelectHTMLAttributes,
  useMemo,
  useState,
} from 'react';
import ReactSelect, {
  components as SelectDropdownElements,
  ContainerProps,
  IndicatorProps,
  NamedProps,
  OptionTypeBase,
  StylesConfig,
} from 'react-select';

import { SelectComponentProps } from './Select';
import {
  conditionalBorderStyles,
  formDropdownStyles,
  optionBackground,
  placeholderColor,
  selectDropdownStyles,
  sizeVariants,
} from './styles';
import { parseOptions } from './utils';

const { DropdownIndicator, SelectContainer } = SelectDropdownElements;

type SelectDropdownBaseProps = Omit<
  SelectComponentProps,
  'onChange' | 'defaultValue'
>;
interface SelectDropdownProps
  extends SelectDropdownBaseProps,
    Pick<NamedProps, 'onChange' | 'isSearchable'>,
    Pick<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'disabled'> {
  inputProps?: Record<string, string | number | boolean>;
  name?: string;
  placeholder?: string;
  size?: 'base' | 'small';
  shownOptions?: 1 | 2 | 3 | 4 | 5 | 6;
}

type OptionStrict = {
  label: string;
  value: string;
};

type CustomContainerProps = ContainerProps<OptionStrict, false> & {
  children?: ReactNode[];
};

const ChevronDropdown = (props: IndicatorProps<OptionTypeBase, false>) => {
  const { size } = props.selectProps;

  return (
    <DropdownIndicator {...props}>
      {size === 'small' ? (
        <MiniChevronDownIcon size={12} />
      ) : (
        <ArrowChevronDownIcon size={16} />
      )}
    </DropdownIndicator>
  );
};

const CustomContainer = ({ children, ...rest }: CustomContainerProps) => {
  const { inputProps, name } = rest.selectProps;
  const value = rest.hasValue ? rest.getValue()[0].value : '';

  return (
    <SelectContainer {...rest}>
      {children}
      <input type="hidden" value={value} name={name} {...inputProps} />
    </SelectContainer>
  );
};

const defaultProps = {
  name: undefined,
  isMulti: false,
  components: {
    DropdownIndicator: ChevronDropdown,
    IndicatorSeparator: () => null,
    SelectContainer: CustomContainer,
  },
};

export const SelectDropdown: React.FC<SelectDropdownProps> = ({
  options,
  error,
  id,
  disabled,
  onChange,
  value = undefined,
  name,
  placeholder = 'Select an option',
  inputProps,
  isSearchable = false,
  size = 'base',
  shownOptions,
  ...rest
}) => {
  const [activated, setActivated] = useState(false);
  const baseInputProps = { name };

  const changeHandler = (optionEvent: OptionStrict) => {
    onChange?.(optionEvent, {
      action: 'select-option',
      option: optionEvent,
    });
    setActivated(true);
  };

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
        const sizeStyle = sizeVariants(state.selectProps.size);
        let styles = { ...selectDropdownStyles, ...sizeStyle };
        const borderState = conditionalBorderStyles({
          error: state.selectProps.error,
          activated: state.selectProps.activated,
          isFocused: state.isFocused,
          isDisabled: state.isDisabled,
        });
        borderState ? (styles = { ...styles, ...borderState }) : null;
        return {
          ...styles,
        };
      },

      dropdownIndicator: (provided, state) => ({
        color: 'currentColor',
        display: 'flex',
        padding: '0',
        pointerEvents: 'none',
      }),

      input: (provided, state) => ({
        padding: '0',
        margin: '0',
      }),

      menu: (provided, state) => ({
        ...provided,
        borderColor: 'currentColor',
        position: 'absolute',
        marginTop: 0,
        borderRadius: 0,
        zIndex: 2,
        ...formDropdownStyles(state.selectProps.error),
      }),

      menuList: (provided, state) => {
        const heightInRem = state.selectProps.shownOptions ?? 6;
        const maxHeight = `${heightInRem * 3.33 + 0.5}rem`;
        return {
          ...provided,
          maxHeight,
        };
      },

      placeholder: (provided, state) => ({
        ...provided,
        ...placeholderColor,
      }),

      option: (provided, state) => ({
        padding: '14px 11px 14px 11px',
        cursor: 'pointer',
        ...optionBackground(state.isSelected, state.isFocused),
      }),

      singleValue: (provided, state) => ({
        color: 'currentColor',
        display: 'flex',
      }),

      valueContainer: (provided) => ({
        ...provided,
        padding: 0,
      }),
    };
  }, []);

  const selectOptions = useMemo(() => {
    return parseOptions({ options, id });
  }, [options, id]);

  const parsedValue = useMemo(() => {
    const currentValue = selectOptions.find(
      ({ value: optionValue }) => optionValue === value
    );

    return currentValue;
  }, [selectOptions, value]);

  return (
    <ReactSelect
      {...defaultProps}
      id={id || rest.htmlFor}
      value={parsedValue}
      activated={activated}
      error={Boolean(error)}
      onChange={changeHandler}
      inputProps={{ ...inputProps, ...baseInputProps }}
      isDisabled={disabled}
      options={selectOptions}
      placeholder={placeholder}
      styles={memoizedStyles}
      isSearchable={isSearchable}
      size={size}
      shownOptions={shownOptions}
      {...rest}
    />
  );
};
