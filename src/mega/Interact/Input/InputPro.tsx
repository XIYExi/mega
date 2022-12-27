import React, {createContext, CSSProperties, FC, useEffect, useState} from "react";
import styled from "styled-components";
import InputSimplicity from "./Input-Simplicity";
import {InputProCtxProps, InputType} from "./InputTypes";
import {AutoJson} from './Auto';
import {HandleInputProAutoWithAttr} from "./InputFunc";

export interface InputBaseProps {

    /**
     * 必填项，需要渲染的input类型
     */
    type: InputType;

    /**
     * input标签id属性
     * */
    id?: string

    /**
     * input的class属性
     */
    className?: string;

    /**
     * input的style属性
     */
    style?: CSSProperties;

    /**
     * 设置input的背景，不设置或者设置违规则默认为transparent
     */
    background: string;

    /**
     * 拟态风格选项，控制input的box-shadow，自带的阴影风格可能和背景不搭配，可选择手动关闭
     * 默认开启
     */
    mimetic?: boolean;

    /**
     * 长度
     */
    width?:string;

    /**
     * 宽度
     */
    height?:string;

    /**
     * label的显示文本
     */
    text: string;

    onClick?: (e:any) => void;

    onChange?: (e:any) => void;

    onFocus?: (e:any) => void;
}


export interface InputProProps extends Partial<InputBaseProps>{
    auto?: InputBaseProps;
}


const InputProWrapper = styled.div`
    
`


export const inputCtx = createContext<InputProCtxProps | null>(null);


const InputPro:FC<InputProProps> = (props) => {
    const {
        auto,
        id,
        className,
        style,
        type,
        mimetic,
        background,
        width,
        height,
        onChange,
        onFocus,
        onClick,
        text,
    } = props;

    const [autoTable, setAutoTable] = useState<InputBaseProps>(auto ? auto : AutoJson);
    const [inputCtxValue, setInputCtxValue] = useState<InputProCtxProps>();


    useEffect(()=>{
        try{
            if(!type && !auto)
                throw 'Error: You must pass in at least one attribute value in `type` and `auto` to <InputPro/>';
            else{
                if(auto && props)
                    setAutoTable(HandleInputProAutoWithAttr(auto ,props));
                else if(!auto && props)
                    setAutoTable(HandleInputProAutoWithAttr(AutoJson, props));
                else
                    setAutoTable(auto as InputBaseProps);
                //console.log(props)
                /**
                 * 根据 跟新后的autoTable值 组装子组件 ctx内容
                 * */
                setInputCtxValue({
                    background: autoTable.background ? autoTable.background : 'transparent',
                    mimetic: autoTable.mimetic===true ? 0 : 1,
                    width: autoTable.width ? autoTable.width : '250px',
                    height: autoTable.height ? autoTable.height : '25px',
                    text: autoTable.text ? autoTable.text : 'input',
                });
                // 此处无法通过打印日志查看封装的ctx参数，需要到浏览器中f12去react开发插件里面看
                // console.log(inputCtxValue)
            }
        }
        catch (e: unknown){
            /**
             * TODO 添加一个消息通知栏，推送错误日志
             */
            console.log('\x1B[31m%s\x1B[0m', e)
        }
    }, [type, auto])

    const renderInput = (type:string | undefined) => {
        const tmp = (type === undefined) ? 'Simplicity' : type;
        switch (tmp) {
            case 'Simplicity':
                return <InputSimplicity onClick={onClick} onChange={onChange} onFocus={onFocus}/>
            default:
                return <div style={{color:'red'}}>Error: render Input type</div>
        }
    }


    return (
        <React.Fragment>
            <InputProWrapper
                id={id}
                className={className}
                style={style}
            >
                <inputCtx.Provider value={inputCtxValue as InputProCtxProps}>
                    {
                        renderInput(autoTable.type)
                    }
                </inputCtx.Provider>
            </InputProWrapper>
        </React.Fragment>
    )
}

export default InputPro;
