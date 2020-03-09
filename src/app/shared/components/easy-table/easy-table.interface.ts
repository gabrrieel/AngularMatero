/**
 * 可编辑单元格矩阵
 */
export interface Cell {
  key: string;
  value: string;
  visible: boolean;
}

/**
 * 标签信息
 */
export interface EasyColumnTag {
  [key: number]: EasyColumnTagValue;
  [key: string]: EasyColumnTagValue;
}
export interface EasyColumnTagValue {
  text?: string;
  color?: string;
}

/**
 * 按钮配置
 */
export interface EasyColumnButton {
  icon?: string;
  text?: string;
  type?: string;
  color?: string;
  click?: (record: any) => void;
  pop?: boolean;
  popTitle?: string;
  children?: EasyColumnButton[];
  iif?: (record: any) => boolean;
  tooltip?: string;
}

/**
 * 表格
 */
export interface EasyColumn {
  title: string;
  index?: string;
  label?: string; // === title
  value?: string; // === index
  checked?: boolean;
  disabled?: boolean;
  fixed?: string;
  left?: string;
  right?: string;
  width?: string;
  desc?: string;
  sort?: boolean | string;
  type?:
    | 'text'
    | 'checkbox'
    | 'tag'
    | 'badge'
    | 'button'
    | 'link'
    | 'img'
    | 'number'
    | 'currency'
    | 'percent'
    | 'format';
  edit?: boolean; 
  editType?: 'text' | 'number' | 'select' | 'textarea';
  format?: (data: any) => any; 
  tag?: EasyColumnTag;
  cat?: string; 
  static?: boolean; 
  buttons?: EasyColumnButton[];
  videoLink?: string;
  iif?: boolean | (() => any);
  sum?: string;
  order?: number;
}
