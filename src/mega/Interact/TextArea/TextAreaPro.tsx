import React, {createContext, CSSProperties, FC, useEffect, useState} from "react";
import styled from "styled-components";
import {TextAreaCtxProps, TextAreaType} from "./TextAreaType";
import {AutoJson} from "./Auto";
import {HandleTextAreaProAutoWithAttr} from "./TextAreaFunc";
import TextAreaSimplicity from "./TextArea-Simplicity";

export interface TextAreaBaseProps{
    /**
     * 渲染类型
     */
    type:TextAreaType;

    /**
     * id属性
     */
    id?:string;

    /**
     * class属性
     */
    className?:string;

    /**
     * style属性
     */
    style?:CSSProperties;

    /**
     * 宽度
     */
    width?:string;

    /**
     * 高度
     */
    height?:string;

    /**
     * label文本显示的内容
     */
    text?:string;

    onChange?:(e:any)=>void;

    onClick?:(e:any)=>void;

    onFocus?:(e:any)=>void;
}

export interface TextAreaProProps extends Partial<TextAreaBaseProps>{
    auto?:TextAreaBaseProps;
}

export const textAreaCtx = createContext<TextAreaCtxProps | null>(null);


const TextAreaWrapper = styled.div`
    justify-content: center;
  align-items: center;
`


const TextAreaPro:FC<TextAreaProProps> = (props) => {

    const {
        auto,
        type,
        id,
        className,
        style,
        width,
        height,
        text,
        onChange,
        onClick,
        onFocus
    } = props;

    const [autoTable, setAutoTable] = useState<TextAreaBaseProps>(auto ? auto : AutoJson);
    const [textAreaCtxValue, setTextAreaCtxValue] = useState<TextAreaCtxProps>();

    useEffect(()=>{
        try{
            if(!type && !auto)
                throw 'Error: You must pass in at least one attribute value in `type` and `auto` to <TextAreaPro/>';
            else{
                if(auto && props)
                    setAutoTable(HandleTextAreaProAutoWithAttr(auto ,props));
                else if(!auto && props)
                    setAutoTable(HandleTextAreaProAutoWithAttr(AutoJson, props));
                else
                    setAutoTable(auto as TextAreaBaseProps);
                //console.log(props)
                /**
                 * 根据 跟新后的autoTable值 组装子组件 ctx内容
                 * */
                setTextAreaCtxValue({
                    width: autoTable.width ? autoTable.width : '250px',
                    height: autoTable.height ? autoTable.height : '25px',
                    text: autoTable.text ? autoTable.text : 'input',
                });
            }
        }
        catch (e: unknown){
            /**
             * TODO 添加一个消息通知栏，推送错误日志
             */
            console.log('\x1B[31m%s\x1B[0m', e)
        }
    },[auto, type])

    const renderTextArea = (type:string|undefined) => {
        const tmp:string = (type === undefined) ? 'Simplicity' : type;
        switch (tmp) {
            case 'Simplicity':
                return <TextAreaSimplicity onChange={onChange} onClick={onClick} onFocus={onFocus}/>
            default:
                return <div style={{color:'red'}}>Error: render TextArea type</div>

        }
    }

    return(
        <React.Fragment>
            <TextAreaWrapper
                id={id}
                className={className}
                style={style}
            >
                <textAreaCtx.Provider value={textAreaCtxValue as TextAreaCtxProps}>
                    {
                        renderTextArea(type)
                    }
                </textAreaCtx.Provider>
            </TextAreaWrapper>
        </React.Fragment>
    )

}

export default TextAreaPro;
