
export interface TextAreaCtxProps{
    width:string;
    height:string;
    text:string;
}


export type TextAreaType = 'Simplicity';


/**
 * TextArea子组件通用属性
 */
export interface TextAreaChildProps{
    onChange?:(e:any)=>void;
    onFocus?:(e:any)=>void;
    onClick?:(e:any)=>void;
}


export interface TextAreaSimplicityWrapperProps{
    param:TextAreaSimplicitySmallProps
}

export interface TextAreaSimplicitySmallProps{
    width:string;
    height:string;
}
