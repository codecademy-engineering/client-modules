import { ComponentProps, useMemo } from 'react';

import { List } from '../List';
import { EmptyRows } from './EmptyRows';
import { ListControlContext, useListControls } from './hooks/useListControls';
import { ListStateContext } from './hooks/useListState';
import { HeaderRow } from './Tables/Rows/TableHeaderRow';
import { DataRow, MarshaledColProps } from './Tables/Rows/TableRow';
import { ColumnConfig, DataListControls, IdentifiableKeys } from './types';

export interface DataGridProps<
  Row,
  IdKey extends IdentifiableKeys<Row>,
  Cols extends ColumnConfig<Row>[],
> extends MarshaledColProps,
    DataListControls<Row, IdKey, Cols>,
    Omit<ComponentProps<typeof List>, 'header' | 'id'> {
  /** Whether the data inside is loading and should be indicated to the user somehow */
  loading?: boolean;
  /** Whether an additional header element should be added */
  header?: boolean;
  /** Whether Select All checkmark should be hidden in the header. Defaults to false */
  hideSelectAll?: boolean;
}

export function DataGrid<
  Row,
  IdKey extends IdentifiableKeys<Row>,
  Cols extends ColumnConfig<Row>[],
>(props: DataGridProps<Row, IdKey, Cols>) {
  const listControls = useListControls(props);

  const {
    variant = 'table',
    spacing = 'condensed',
    scrollable = true,
    shadow = false,
    height = scrollable ? '100%' : 'initial',
    columns,
    idKey,
    rows,
    selected,
    expanded,
    query,
    loading,
    minHeight = 0,
    header = true,
    showOverflow,
    emptyMessage,
    hideSelectAll = false,
    scrollToTopOnUpdate = false,
    ...rest
  } = props;

  const empty = rows.length === 0;

  const allSelected = useMemo(() => {
    if (empty) return false;
    const ids = rows.map(({ [idKey]: id }) => id);
    const unselected = ids.filter((id) => !selected?.includes(id));
    return unselected.length === 0;
  }, [rows, selected, idKey, empty]);

  const selectedRows = useMemo(() => {
    return selected?.reduce(
      (carry, next) => ({ ...carry, [String(next)]: true }),
      {}
    );
  }, [selected]);

  const expandedRows = useMemo(() => {
    return expanded?.reduce(
      (carry, next) => ({ ...carry, [String(next)]: true }),
      {}
    );
  }, [expanded]);

  const loadingRows = useMemo<Row[]>(() => {
    const loadingRow = {} as Record<keyof Row, string>;

    columns.forEach((elem) => {
      const { key } = elem;
      loadingRow[key] = '';
    });

    const placeholderRows = Array(5)
      .fill(loadingRow, 0)
      .map((elem, index) => ({ ...elem, [idKey]: `loading-${index}` }));

    return placeholderRows;
  }, [columns, idKey]);

  const renderedRows = loading && empty ? loadingRows : rows;

  return (
    <ListStateContext.Provider value={{ query }}>
      <ListControlContext.Provider value={listControls}>
        <List
          {...rest}
          as="table"
          emptyMessage={emptyMessage ?? <EmptyRows />}
          header={
            header ? (
              <HeaderRow
                columns={columns}
                selected={allSelected}
                empty={empty}
                hideSelectAll={hideSelectAll}
              />
            ) : null
          }
          height={height}
          minHeight={minHeight}
          scrollable={scrollable}
          scrollToTopOnUpdate={scrollToTopOnUpdate}
          shadow={shadow}
          spacing={spacing}
          variant={variant}
        >
          {renderedRows.map((row) => {
            const rowId = row[idKey];
            const key = listControls.prefixId(`${rowId}-row`);
            return (
              <DataRow
                key={key}
                id={rowId}
                row={row}
                columns={columns}
                selected={selectedRows?.[rowId as keyof typeof selectedRows]}
                expanded={expandedRows?.[rowId as keyof typeof expandedRows]}
                loading={loading}
                showOverflow={showOverflow}
              />
            );
          })}
        </List>
      </ListControlContext.Provider>
    </ListStateContext.Provider>
  );
}
