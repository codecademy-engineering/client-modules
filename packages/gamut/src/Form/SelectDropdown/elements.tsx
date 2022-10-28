import {
  ArrowChevronDownIcon,
  CloseIcon,
  MiniChevronDownIcon,
  MiniDeleteIcon,
  SearchIcon,
} from '@codecademy/gamut-icons';
import { ColorMode, css, theme, useColorModes } from '@codecademy/gamut-styles';
import styled from '@emotion/styled';
import React, { CSSProperties, KeyboardEvent, Ref, useContext } from 'react';
import ReactSelect, {
  components as SelectDropdownElements,
  GroupBase,
  MultiValueProps,
  MultiValueRemoveProps,
  Props,
} from 'react-select';

import { Box } from '../../Box';
import {
  CustomContainerProps,
  ExtendedOption,
  ReactSelectAdditionalProps,
  SelectDropdownGroup,
  SizedIndicatorProps,
} from './types';

const {
  DropdownIndicator,
  MultiValue,
  MultiValueRemove,
  SelectContainer,
  Input,
} = SelectDropdownElements;

export const SelectDropdownContext = React.createContext({
  currentFocusedValue: undefined,
  setCurrentFocusedValue: undefined,
  selectRef: undefined,
  removeAllButtonRef: undefined,
});

export const MultiValueWithColorMode = (props: MultiValueProps) => {
  /// TODO: kindof an antipattern, but setState to PROVIDER then access here

  const { currentFocusedValue, setCurrentFocusedValue } = useContext(
    SelectDropdownContext
  );

  if (
    props.isFocused &&
    setCurrentFocusedValue &&
    currentFocusedValue !== props.data.value
  ) {
    setCurrentFocusedValue(props.data.value);
  }
  if (
    !props.isFocused &&
    setCurrentFocusedValue &&
    currentFocusedValue === props.data.value
  ) {
    setCurrentFocusedValue(undefined);
  }

  const [mode] = useColorModes();
  return (
    // we want the tags to be opposite color mode
    <ColorMode mode={mode === 'light' ? 'dark' : 'light'}>
      <MultiValue {...props} />
    </ColorMode>
  );
};

export const MultiValueRemoveButton = (props: MultiValueRemoveProps) => {
  // TODO: reimplement aria-label fix here lol

  // props?.innerProps.['aria-label'] = `Remove ${props.data.label}`;

  return (
    <MultiValueRemove {...props}>
      <MiniDeleteIcon size={12} />
    </MultiValueRemove>
  );
};

const iconSize = { small: 12, medium: 16 };
const indicatorIcons = {
  small: {
    size: iconSize.small,
    icon: MiniChevronDownIcon,
  },
  medium: {
    size: iconSize.medium,
    icon: ArrowChevronDownIcon,
  },
  smallRemove: {
    size: iconSize.small,
    icon: MiniDeleteIcon,
  },
  mediumRemove: {
    size: iconSize.medium,
    icon: CloseIcon,
  },
};

export const DropdownButton = (props: SizedIndicatorProps) => {
  const { size, isSearchable } = props.selectProps;
  const color = props.isDisabled ? 'text-disabled' : 'text';
  const { ...iconProps } = indicatorIcons[size ?? 'medium'];
  let { icon: IndicatorIcon } = iconProps;

  if (isSearchable) {
    IndicatorIcon = SearchIcon;
  }

  return (
    <DropdownIndicator {...props}>
      <IndicatorIcon {...iconProps} color={color} />
    </DropdownIndicator>
  );
};

const CustomStyledRemoveAllDiv = styled('div')(
  css({
    '&:focus': {
      outline: `2px solid ${theme.colors.primary}`,
    },
    '&:focus-visible': {
      outline: `2px solid ${theme.colors.primary}`,
    },
  })
);

export const RemoveAllButton = (props: SizedIndicatorProps) => {
  const {
    getStyles,
    innerProps: { ...restInnerProps },
    selectProps,
  } = props;

  const { removeAllButtonRef, selectRef } = useContext(SelectDropdownContext);
  const { size } = selectProps;
  const { ...iconProps } = indicatorIcons[
    size ? 'smallRemove' : 'mediumRemove'
  ];
  const { icon: IndicatorIcon } = iconProps;

  const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && restInnerProps.onMouseDown) {
      restInnerProps.onMouseDown(e as any);
    }

    if (
      e.key === 'ArrowRight' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowDown'
    ) {
      selectRef.current.focus();
    }
  };

  const style = getStyles('clearIndicator', props) as CSSProperties;

  return (
    <CustomStyledRemoveAllDiv
      aria-label="Remove all selected"
      tabIndex={0}
      role="button"
      {...restInnerProps}
      style={style}
      onKeyDown={onKeyPress}
      ref={removeAllButtonRef}
    >
      <IndicatorIcon {...iconProps} color="text" />
    </CustomStyledRemoveAllDiv>
  );
};

export const CustomContainer = ({
  children,
  ...rest
}: CustomContainerProps) => {
  // in the react-select documentation, this line is ts-ignore'd so its safe to say there's no nice way to do this.
  const { inputProps, name } = rest.selectProps as any;

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

export const formatOptionLabel = ({
  label,
  icon: Icon,
  size,
  subtitle,
  rightLabel,
  disabled,
}: ExtendedOption) => {
  const textColor = disabled ? 'text-disabled' : 'inherit';
  return (
    <Box
      color={textColor}
      display="flex"
      justifyContent="space-between"
      width="100%"
    >
      <Box display="flex" flexDirection="column">
        <Box>
          {Icon && (
            <Icon size={size === 'small' ? 16 : 24} color="text" ml={4} />
          )}
          <Box color={textColor} as="span" pl={Icon ? 16 : 0}>
            {label}
          </Box>
        </Box>
        <Box as="span" fontSize={14} color="text-disabled">
          {subtitle}
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
        textAlign="right"
        fontSize={14}
      >
        {rightLabel}
      </Box>
    </Box>
  );
};

export const formatGroupLabel = ({ label, divider }: SelectDropdownGroup) => {
  if (divider) {
    return (
      <Box display="flex" justify-content="center">
        <Box
          width="100%"
          fit
          height="1px"
          bg="text-disabled"
          borderRadius="2px"
          mx={16}
        />
      </Box>
    );
  }
  return label;
};

interface TypedReactSelectProps extends ReactSelectAdditionalProps {
  selectRef?: Ref<HTMLDivElement>;
}

export function TypedReactSelect<
  OptionType,
  IsMulti extends boolean = false,
  GroupType extends GroupBase<OptionType> = GroupBase<OptionType>
>({
  selectRef,
  ...props
}: Props<OptionType, IsMulti, GroupType> & TypedReactSelectProps) {
  return <ReactSelect {...props} ref={selectRef} />;
}
