export interface IColumnProps {
  label: string;
  prop: string;
  slot?: boolean;
  attrs?: any;

  [key: string]: any;
}

function useColumnProps(): IColumnProps[] {
  return [
    {
      label: "制品名称",
      prop: "productName",
      attrs: {
        minWidth: 180
      }
    },
    {
      label: "取消说明",
      prop: "cancelExplain",
      attrs: {
        minWidth: 180
      }
    },
    {
      label: "客户名称",
      prop: "customerManagementName"
    },
    {
      label: "发布环境",
      prop: "runtimeEnv"
    },
    {
      label: "预计上线时间",
      prop: "expectOnlineTime"
    },
    {
      label: "是否手动部署",
      prop: "manualDeploy"
    },
    {
      label: "自动部署时间",
      prop: "autoDeployTime"
    },
    {
      label: "迭代版本号",
      prop: "iterationVersion"
    },
    {
      label: "制品负责人",
      prop: "productPrincipalName"
    },
    {
      label: "运维负责人",
      prop: "opsPrincipalName"
    },
    {
      label: "升级内容",
      prop: "upgradeContent",
      attrs: {}
    }
  ];
}

export { useColumnProps };
