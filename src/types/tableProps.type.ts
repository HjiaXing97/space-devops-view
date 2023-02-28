export interface ISearchProps {
  add?: boolean;
  addText?: string;
  reset?: boolean;
  resetText?: string;
  search?: boolean;
  searchText?: string;
}

export interface ITableProps {
  attrs?: any;
  searProps?: ISearchProps;
  handleHidden?: boolean; //是否隐藏操作列
  columnAfterWidth?: number;
}
