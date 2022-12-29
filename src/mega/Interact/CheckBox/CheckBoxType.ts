export type CheckBoxType = 'Simplicity';

export interface CheckBoxCtxProps{
    /**
     * checkbox默认值
     */
    defaultChecked: boolean;

    /**
     * checkbox跟随文本
     */
    label: string;
}

/**
 * checkbox子组件通用约束
 */
export interface CheckBoxChildProps{
    onChange?:(label:string, checked:boolean)=>void;
    onClick?:(e:any)=>void;
    onFocus?:(e:any)=>void;
}
