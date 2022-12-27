
export interface EmptyTypes{

}

/**
 * input context的属性约束
 */
export interface InputProCtxProps{
    /**
     * mimetic需要经过预先处理，传0就是开，传1就是关
     */
    mimetic: number;
    /**
     * background需压经过预先处理，校验为16进制颜色值就传，不然一律传transparent
     */
    background: string;

    width:string;

    height: string;

    /**
     * input 前label需要显示的内容
     */
    text:string;

}

export type InputType = 'Simplicity';

/**
 * 所有input子组件通用的约束（只接受用户回调）
 */
export interface InputChildBaseProps{
    onClick?:(e:any)=>void;
    onFocus?:(e:any)=>void;
    onChange?:(e:any)=>void;
}


export interface InputSimplicityWrapperProps{
    background?:string;
    mimetic?:number;
    width?:string;
    height?:string;
}
