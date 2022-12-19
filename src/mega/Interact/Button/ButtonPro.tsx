import React, {createContext, CSSProperties, FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {ButtonBaseType} from './ButtonType';
import styled from "styled-components";
import ButtonCyber from "./Button-Cyber";
import {HandleButtonProAutoWithAttr} from "./ButtonFunc";
import {AutoJson} from "./Auto";

export interface ButtonBaseProps{
    /**
     * 组件Id
     */
    id?:string;

    /**
     * 组件类名
     */
    className?:string;

    /**
     * 组件style属性
     */
    style?:CSSProperties;

    /**
     * 个性化设置，字体颜色，将会覆盖统一主题
     */
    color?: string;

    /**
     * 按钮样式类型
     */
    type: ButtonBaseType;

    /**
     * 子组件，现不提供接口
     */
    children?:ReactNode;

    /**
     * 内容，必填项
     */
    text?:string;

    /**
     * 子标题，部分样式提供，非提供组件配置不生效
     */
    subText?:string;

    /**
     * 最小宽度，建议默认
     */
    vminWidth?: number;

    /**
     * 最小高度，建议默认
     */
    vminHeight?:number;

    /**
     * 字体大小，建议默认
     */
    fontSize?:number;

    /**
     * 点击回调
     */
    onClick?:()=>void;

    /**
     * 聚焦回调
     */
    onFocus?:()=>void;

    /**
     * 鼠标移入回调
     */
    onMouseEnter?:()=>void;
}

export interface ButtonAutoProps extends ButtonBaseProps{
    /**
     * 统一配置项，使用模板json直接配置项目属性，额外配置的属性将会覆盖auto中的内容
     */
    auto?:ButtonBaseProps;
}

export type ButtonProProps = Partial<ButtonAutoProps>;

interface ButtonBaseCtx{

    fontColor?:string;

    fontSize?:number;

    vminWidth?:number;

    vminHeight?:number;

    fontWeight?:number;

    text?:string;

    subText?:string;

}

export const buttonBaseCtx = createContext<ButtonBaseCtx | null>(null);

const BaseButtonThemeWrapper = styled.div`
    z-index: 10;
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
`

const ButtonPro:FC<ButtonProProps> = (props) => {

    const {
        auto,
        id,
        className,
        style,
        color = '#fff',
        type = 'Cyber',
        text = 'Button',
        subText,
        vminHeight = 60,
        vminWidth = 15,
        fontSize = 5,
        onClick,
        onFocus,
        onMouseEnter,
    } = props;

    const [autoTable, setAutoTable] = useState<ButtonBaseProps>(auto ? auto : AutoJson);
    const [buttonBaseStyle, setButtonBaseStyle] = useState<any>(null);

    useEffect(()=>{
        try{
            if(!type && !auto)
                throw 'Error: You must pass in at least one attribute value in `type` and `auto`';
            else{
                if(auto && props)
                    setAutoTable(HandleButtonProAutoWithAttr(auto ,props));
                else if(!auto && props)
                    setAutoTable(HandleButtonProAutoWithAttr(AutoJson, props));
                else
                    setAutoTable(auto as ButtonBaseProps);
                console.log('auto',autoTable)
                /**
                 * 根据 buttonStyleProps 组装父组件 Css 属性
                 * */
                setButtonBaseStyle({
                    fontColor: autoTable.color!=='' ? autoTable.color : `#000`,
                    text: autoTable.text === '' ? 'Button' : autoTable.text,
                    subText: autoTable.subText !== '' ? autoTable.subText : 'default',
                    vminWidth: autoTable.vminWidth,
                    vminHeight: autoTable.vminHeight,
                    fontSize: autoTable.fontSize? autoTable.fontSize : 5,
                });
            }
        }
        catch (e: unknown){
            /**
             * TODO 添加一个消息通知栏，推送错误日志
             */
            console.log('\x1B[31m%s\x1B[0m', e)
        }

    },[type, auto]);

    /**
     * 根据type决定渲染Button类型
     * @param type
     */
    const renderBtn = (type:string|undefined) => {
        const tmp = (type === undefined) ? 'Cyber' : type;
        switch (tmp){
            case 'Cyber':return (<ButtonCyber></ButtonCyber>);

            default: return(<React.Fragment></React.Fragment>);
        }
    }

    return (
        <div style={{display:"flex"}}>
            <BaseButtonThemeWrapper
                id={id}
                className={className}
                onClick={onClick}
                style={style}
            >
                <buttonBaseCtx.Provider value={buttonBaseStyle}>
                    {renderBtn(type)}
                </buttonBaseCtx.Provider>
            </BaseButtonThemeWrapper>
        </div>
    )
}

ButtonPro.defaultProps = {
    color:'#fff',
    type:'Cyber',
    vminHeight:15,
    vminWidth:60,
    fontSize:5
}

export default ButtonPro;
