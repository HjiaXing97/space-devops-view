interface IColumn {
  label: string;
  prop: string;
  slot?: boolean;
  slotHeader?: boolean;
}

export default function (): IColumn[] {
  return [
    {
      prop: "companyAbbreviation",
      label: "公司简称",
      slot: true,
      slotHeader: true
    },
    {
      prop: "companyName",
      label: "公司全称"
    },
    {
      prop: "customerCode",
      label: "客户编码"
    },
    {
      prop: "companyContact",
      label: "客户联系人"
    },
    {
      prop: "companyAddress",
      label: "公司地址"
    },
    {
      prop: "contactPhone",
      label: "联系人号码"
    },
    {
      prop: "remark",
      label: "备注"
    }
  ];
}
