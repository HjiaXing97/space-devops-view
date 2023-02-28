import { ITableProps } from "types/tableProps.type";
import { IColumnProps } from "types/column.type";

function useTableProps(): ITableProps {
  return {
    searProps: {
      add: true,
      addText: "新 增",
      reset: false
    },
    columnAfterWidth: 160
  };
}

function useColumnProps(): IColumnProps[] {
  return [
    {
      label: "公司名称",
      prop: "companyAbbreviation"
    },
    {
      label: "公司全称",
      prop: "companyName"
    },
    {
      label: "客户编码",
      prop: "customerCode"
    },
    {
      label: "公司联系人",
      prop: "companyContact"
    },
    {
      label: "联系人号码",
      prop: "contactPhone"
    },
    {
      label: "公司地址",
      prop: "companyAddress"
    }
  ];
}

export { useTableProps, useColumnProps };
