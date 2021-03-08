import { mount, ReactWrapper } from 'enzyme';
import React, { ReactNode } from 'react';

import { ToolTipProps } from '../../../ToolTip';
import {
  stubCheckboxField,
  stubFileField,
  stubRadioGroupField,
  stubSelectField,
  stubTextareaField,
  stubTextField,
} from '../../__tests__/stubs';
import {
  GridFormCheckboxField,
  GridFormFileField,
  GridFormRadioGroupField,
  GridFormSelectField,
  GridFormTextAreaField,
  GridFormTextField,
} from '../../types';
import { GridFormCheckboxInput } from '../GridFormCheckboxInput';
import { GridFormFileInput } from '../GridFormFileInput';
import { GridFormRadioGroupInput } from '../GridFormRadioGroupInput';
import { GridFormSelectInput } from '../GridFormSelectInput';
import { GridFormTextArea } from '../GridFormTextArea';
import { GridFormTextInput } from '../GridFormTextInput';
import { GridFormToolTipWrapper } from '../GridFormToolTipWrapper';
import { GridFormToolTip } from '../GridFromToolTip';

export const renderGridFormSelectInput = (
  extraProps: Partial<GridFormSelectField> = {}
): ReactWrapper => {
  return mount(
    <GridFormSelectInput
      field={{ ...stubSelectField, ...extraProps }}
      register={jest.fn()}
      {...extraProps}
    />
  );
};

export const renderGridFormTextInput = (
  extraProps: Partial<GridFormTextField> = {}
) => {
  return mount(
    <GridFormTextInput
      field={{ ...stubTextField, ...extraProps }}
      register={jest.fn()}
      {...extraProps}
    />
  );
};

export const renderGridFormTextArea = (
  extraProps: Partial<GridFormTextAreaField> = {}
) => {
  return mount(
    <GridFormTextArea
      field={{ ...stubTextareaField, ...extraProps }}
      register={jest.fn()}
      {...extraProps}
    />
  );
};

export const renderGridFormRadioGroupInput = (
  extraProps: Partial<GridFormRadioGroupField> = {}
) => {
  return mount(
    <GridFormRadioGroupInput
      field={{ ...stubRadioGroupField, ...extraProps }}
      setValue={jest.fn()}
      register={jest.fn()}
      {...extraProps}
    />
  );
};

export const renderGridFormFileInput = (
  extraProps: Partial<GridFormFileField> = {}
): ReactWrapper => {
  return mount(
    <GridFormFileInput
      field={{ ...stubFileField, ...extraProps }}
      register={jest.fn()}
      {...extraProps}
    />
  );
};

export const renderGridFormCheckboxInput = (
  extraProps: Partial<GridFormCheckboxField> = {}
): ReactWrapper => {
  return mount(
    <GridFormCheckboxInput
      field={{ ...stubCheckboxField, ...extraProps }}
      register={jest.fn()}
      {...extraProps}
    />
  );
};

export const renderGridFormToolTip = (
  extraProps: ToolTipProps
): ReactWrapper => {
  return mount(<GridFormToolTip tooltip={extraProps} />);
};

export const renderGridFormToolTipWrapper = (
  tooltip: ToolTipProps,
  children: ReactNode
): ReactWrapper => {
  return mount(
    <GridFormToolTipWrapper tooltip={tooltip}>
      {children}
    </GridFormToolTipWrapper>
  );
};

export const getComponent = (componentName: string, extraProps: any) => {
  switch (componentName) {
    case 'GridFormTextInput':
      return renderGridFormTextInput(extraProps);
    case 'GridFormSelectInput':
      return renderGridFormSelectInput(extraProps);
    case 'GridFormTextArea':
      return renderGridFormTextArea(extraProps);
    case 'GridFormRadioGroupInput':
      return renderGridFormRadioGroupInput(extraProps);
    case 'GridFormFileInput':
      return renderGridFormFileInput(extraProps);
    case 'GridFormCheckboxInput':
      return renderGridFormCheckboxInput(extraProps);
    case 'GridFormToolTip':
      return renderGridFormToolTip(extraProps);
    default:
      throw new Error(`Unknown component name: ${componentName}`);
  }
};
