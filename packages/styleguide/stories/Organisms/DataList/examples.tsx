import {
  Box,
  ColumnConfig,
  DataList,
  DataListProps,
  FillButton,
  FlexBox,
  Text,
  useLocalQuery,
} from '@codecademy/gamut';
import { ColorModes } from '@codecademy/gamut-styles';
import React, { useCallback, useMemo, useState } from 'react';

const cols = [
  {
    header: 'Name',
    key: 'name',
    size: 'lg',
    queryType: 'sort',
    type: 'header',
  },
  { header: 'Rank', key: 'role', size: 'lg', queryType: 'sort' },
  { header: 'Ship', key: 'ship', size: 'xl', queryType: 'filter' },
  {
    header: 'Power',
    key: 'power',
    size: 'xl',
    fill: true,
  },
  {
    header: 'Species',
    key: 'species',
    size: 'lg',
    justify: 'right',
    queryType: 'filter',
  },
] as ColumnConfig<typeof crew[number]>[];

const crew = [
  {
    name: 'Jean Luc Picard',
    role: 'Captain',
    ship: 'USS Enterprise',
    species: 'Human',
    power: 'Monologues',
  },
  {
    name: 'Wesley Crusher',
    role: 'Deus Ex Machina',
    ship: 'USS Enterprise',
    species: 'Mary Sue',
    power: 'Being super preachy',
  },
  {
    name: 'Geordie LaForge',
    role: 'Rascal',
    ship: 'USS Enterprise',
    species: 'Human',
    power: 'Really bad a first dates',
  },
  {
    name: 'Data',
    role: 'Scamp',
    ship: 'USS Enterprise',
    species: 'Android',
    power: 'Annoying existentialism.  Real magnet for zany adventures',
  },
  {
    name: 'Tasha Yar',
    role: 'Fond Memory',
    ship: "Yesterday's Enterprise",
    species: 'Ectoplasm',
    power:
      'Coming back to the show after getting written off as their own clone',
  },
  {
    name: 'Beverly Crusher',
    role: 'Medical Officer',
    ship: "Jean Luc's Dreams",
    species: 'Human',
    power: 'Knowing glances',
  },
  {
    name: 'William Riker',
    role: 'Numba One',
    ship: 'Pleasure Cruiser',
    species: 'Hedonist',
    power: 'Seduction of alien dignataries',
  },
  {
    name: 'Barclay',
    role: 'Punching Bag',
    ship: 'Titanic (Holodeck)',
    species: 'Demigod',
    power: 'Immunity to addiction therapies',
  },
  {
    name: 'Worf',
    role: 'Security Officer',
    ship: 'Just another victim of the ambient honorability',
    species: 'Klingon',
    power: 'Combusts if they act dishonorably',
  },
  {
    name: 'Q',
    role: 'Costume Budget Line Item',
    ship: 'USS Moral Quandry',
    species: 'Q',
    power: 'World class showman',
  },
  {
    name: 'Deanna Troi',
    role: 'Hot Chocolate Enthusiast',
    ship: 'USS Enterprise',
    species: 'Human / Betazoid',
    power: 'Really good at asking the ship for hot chocolate',
  },
  {
    name: 'Guinan',
    role: "Picking up Deanna's slack",
    ship: 'Saucer Section every few seasons',
    species: "Q d'etat",
    power: 'Quantum sensitivity, talk therapy',
  },
];

export const DataListTemplate = () => {
  const [selectedRows, setSelectedRows] = useState<
    typeof crew[number]['name'][]
  >([]);
  const [expandedRows, setExpandedRows] = useState<
    typeof crew[number]['name'][]
  >([]);

  const { idKey, query, rows, onQueryChange } = useLocalQuery({
    idKey: 'name',
    rows: crew,
    columns: cols,
  });

  const allIds = useMemo(() => crew.map(({ [idKey]: id }) => id), [idKey]);

  const onRowSelect = useCallback(
    ({ type, payload: { toggle, rowId } }) => {
      if (type === 'select') {
        return setSelectedRows((prev = []) => {
          return toggle ? prev?.filter((id) => id !== rowId) : [...prev, rowId];
        });
      }
      if (type === 'select-all') {
        return setSelectedRows(toggle ? [] : allIds);
      }
    },
    [setSelectedRows, allIds]
  );

  const onRowExpand = useCallback(({ payload: { toggle, rowId } }) => {
    return setExpandedRows((prev = []) => {
      return toggle ? prev?.filter((id) => id !== rowId) : [...prev, rowId];
    });
  }, []);

  const expandedContent = useCallback(
    ({ onCollapse }) => (
      <FlexBox column flex={1}>
        <FlexBox borderTop={1} opacity={0.5} />
        <FlexBox center column p={32} gap={16}>
          <Text variant="title-md">Nothing to see here</Text>
          <FillButton onClick={onCollapse} size="small">
            Get me out of here!
          </FillButton>
        </FlexBox>
      </FlexBox>
    ),
    []
  );

  return (
    <DataList
      height={500}
      id="example"
      idKey={idKey}
      rows={rows}
      columns={cols}
      selected={selectedRows}
      onRowSelect={onRowSelect}
      expanded={expandedRows}
      onRowExpand={onRowExpand}
      expandedContent={expandedContent}
      query={query}
      onQueryChange={onQueryChange}
    />
  );
};
