export interface ITableProps {
  [key: string]: any;
}

export interface IColumnProps {
  label: string;
  prop: string;
  slot?: boolean;
  attrs?: any;

  [key: string]: any;
}
