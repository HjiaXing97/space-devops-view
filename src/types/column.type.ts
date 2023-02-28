export interface IColumnProps {
  label: string;
  prop: string;
  slot?: boolean;
  attrs?: any;
  formHidden?: boolean;
  tableHidden?: boolean;
  detailHidden?: boolean;

  [key: string]: any;
}
