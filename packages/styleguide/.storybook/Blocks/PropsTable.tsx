import React, { useContext, useState, useMemo } from 'react';
import * as system from '@codecademy/gamut-styles/src/system';
import { Toggle } from '@codecademy/gamut/src';
import { ArgsTable, DocsContext } from '@storybook/addon-docs/blocks';
import { intersection } from 'lodash';
import styled from '@emotion/styled';
import {
  boxShadow,
  colors,
  fontAccent,
  fontMonospace,
  spacing,
} from '@codecademy/gamut-styles';

const { properties, variant, ...groups } = system;

const systemProps = Object.entries(properties).reduce<string[]>(
  (carry, [key, handler]) => {
    return [...carry, ...handler.propNames];
  },
  []
);

const PropList = styled.ul`
  display: none;
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translate(-50%, 0);
  padding: ${spacing[8]} ${spacing[12]};
  background-color: ${colors['gray-100']};
  list-style: none;
  margin: 0;
  ${boxShadow(2)}
`;

const PropItem = styled.li`
  margin: ${spacing[8]} 0;
  font-size: 11px;
  font-family: ${fontMonospace};
  text-align: center;
  text-transform: none;
  color: ${colors['gray-700']};
`;

const Tag = styled.span`
  position: relative;
  display: inline-block;
  padding: ${spacing[4]} ${spacing[8]};
  font-size: 12px;
  font-family: ${fontAccent};
  margin: ${spacing[4]};
  margin-top: 0;
  color: ${colors['gray-500']};
  border: 1px solid ${colors['gray-300']};
  border-radius: 4px;
  text-transform: uppercase;

  &:first-of-type {
    margin-left: 0;
  }

  &:hover {
    ${PropList} {
      display: block;
    }
  }
`;

const PropTag: React.FC<{ prop: keyof typeof groups }> = ({ prop }) => {
  const subprops = groups[prop].propNames;
  return (
    <Tag>
      {prop}
      <PropList>
        {subprops.map((propName) => (
          <PropItem key={propName}>{propName}</PropItem>
        ))}
      </PropList>
    </Tag>
  );
};

const Header = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
`;

const Title = styled.p`
  display: inline-block;
  margin: 0;
  margin-right: ${spacing[8]};
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleLabel = styled.span`
  margin-right: 4px;
  font-size: 14px;
  line-height: 2;
`;

export const PropsTable: React.FC<Parameters<typeof ArgsTable>[0]> = (
  props
) => {
  const context = useContext(DocsContext);
  const {
    parameters: { argTypes },
  } = context;
  const [showSystemProps, toggleSystemProps] = useState(false);

  const usedProps = useMemo(
    (): string[] =>
      Object.keys(argTypes).filter((prop) => systemProps.includes(prop)),
    [argTypes]
  );

  const systemPropGroups = useMemo(() => {
    return Object.entries(groups).reduce<string[]>(
      (carry, [groupKey, handler]) => {
        if (intersection(handler.propNames, usedProps).length > 0) {
          return [...carry, groupKey];
        }
        return carry;
      },
      []
    );
  }, [usedProps]);

  return (
    <div>
      {usedProps.length > 0 && (
        <React.Fragment>
          <Header>
            <Title>System Props</Title>
            <div>
              {systemPropGroups.map((group) => (
                <PropTag prop={group as keyof typeof groups} />
              ))}
            </div>
            <div>
              <ToggleContainer>
                <ToggleLabel>Show in table</ToggleLabel>
                <Toggle
                  size="small"
                  label="Show in table"
                  checked={showSystemProps}
                  onChange={() => toggleSystemProps(!showSystemProps)}
                />
              </ToggleContainer>
            </div>
          </Header>
        </React.Fragment>
      )}

      <ArgsTable
        {...props}
        exclude={showSystemProps ? [] : usedProps}
      ></ArgsTable>
    </div>
  );
};
