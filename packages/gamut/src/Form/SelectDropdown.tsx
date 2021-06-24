import { ArrowChevronDownIcon } from '@codecademy/gamut-icons';
import { theme } from '@codecademy/gamut-styles';
import { css } from '@emotion/react';
import React, { SelectHTMLAttributes, useMemo, useState } from 'react';
import ReactSelect, {
  components as SelectDropdownElements,
  ContainerProps,
  IndicatorProps,
  InputProps,
  NamedProps,
  OptionTypeBase,
  StylesConfig,
} from 'react-select';

import { SelectComponentProps } from './Select';
import {
  colorStates,
  conditionalBorderStyles,
  formDropdownStyles,
  formFieldStyles,
} from './styles/shared';
import { conditionalStyleProps } from './styles/shared-system-props';
import { parseOptions } from './utils';

const { DropdownIndicator, Input } = SelectDropdownElements;

type SelectDropdownBaseProps = Omit<
  SelectComponentProps,
  'onChange' | 'defaultValue'
>;
interface SelectDropdownProps
  extends SelectDropdownBaseProps,
    Pick<NamedProps, 'onChange'>,
    Pick<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'disabled'> {
  inputId?: string;
  inputProps?: Record<string, string | number | boolean>;
  name?: string;
  placeholder?: string;
}

type OptionStrict = {
  label: string;
  value: string;
};

type CustomInputProps = InputProps &
  ContainerProps<OptionStrict, false> & {
    selectProps?: SelectDropdownProps;
  };

const ChevronDropdown = (props: IndicatorProps<OptionTypeBase, false>) => {
  return (
    <DropdownIndicator {...props}>
      <ArrowChevronDownIcon size={16} />
    </DropdownIndicator>
  );
};

const CustomInput = (props: CustomInputProps) => {
  const value = props.hasValue ? props.getValue()[0].value : '';

  if (props.selectProps?.inputProps) {
    const { inputProps } = props.selectProps;
    const newProps = { ...inputProps, ...props, value };
    return <Input {...newProps} />;
  }
  return <Input {...props} />;
};

const selectBaseStyles = ({
  error,
  activated,
  isFocused,
  isDisabled,
}: conditionalStyleProps) => css`
  ${formFieldStyles}
  ${conditionalBorderStyles({ error, activated, isFocused, isDisabled })}
  line-height: ${theme.lineHeight.base};
  display: flex;
`;

const errorColorState = (error: boolean) => {
  const color = error ? colorStates.error.color : colorStates.base.color;
  return color;
};

const customStyles: StylesConfig<OptionTypeBase, false> = {
  dropdownIndicator: (provided, state) => ({
    color: errorColorState(state.selectProps.error),
    display: 'flex',
    padding: '0',
    pointerEvents: 'none',
  }),

  container: (provided) => ({
    ...provided,
    pointerEvents: 'visible',
    cursor: 'pointer',
    width: '100%',
    minWidth: '7rem',
  }),

  menu: (provided, state) => ({
    ...provided,
    ...formDropdownStyles(state.selectProps.error),
  }),

  input: (provided, state) => ({
    background: 0,
    border: 0,
    fontSize: 'inherit',
    outline: 0,
    padding: 0,
    width: '1px',
    color: 'transparent',
    left: '-100px',
    opacity: '0',
    position: 'relative',
    transform: 'scale(0)',
  }),

  option: (provided, state) => ({
    padding: '14px 11px 14px 11px',
    cursor: 'pointer',
    backgroundColor:
      (state.isSelected && colorStates.dropdown.selected.backgroundColor) ||
      (state.isFocused && colorStates.dropdown.focused.backgroundColor) ||
      'transparent',
    '&:hover': {
      backgroundColor: colorStates.dropdown.focused.backgroundColor,
    },
  }),

  control: (provided, state) => ({
    ...selectBaseStyles({
      error: state.selectProps.error,
      activated: state.selectProps.activated,
      isFocused: state.isFocused,
      isDisabled: state.isDisabled,
    }),
  }),

  singleValue: (provided, state) => ({
    color: errorColorState(state.selectProps.error),
    display: 'flex',
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
};

const defaultProps = {
  name: undefined,
  isSearchable: true,
  isMulti: false,
  styles: customStyles,
  components: {
    Input: CustomInput,
    DropdownIndicator: ChevronDropdown,
    IndicatorSeparator: () => null,
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
      {...rest}
    />
  );
};
