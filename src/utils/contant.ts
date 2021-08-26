export interface componentItem {
  name: string,
  componentName: string,
  content?: string,
  componentStyle: { [key: string] : string },
  componentProps: { [key: string] : string }
}

export const componentsList: Array<componentItem> = [
    {
        name: '按钮',
        componentName: 'Button',
        componentStyle: {},
        componentProps: {}
    }
];