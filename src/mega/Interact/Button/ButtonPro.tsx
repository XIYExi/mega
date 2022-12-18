import React, {createContext, CSSProperties, FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {_color} from "../../InputControls/Button/ButtonCss";
import {defaultTheme} from "../../../styles";
import {ButtonBaseType, ButtonColorType} from './ButtonType';
import styled from "styled-components";
import ButtonCyber from "./Button-Cyber";
import {HandleButtonProAutoWithAttr, HandleButtonProFontColor} from "./ButtonFunc";
import {AutoJson} from "./Auto";

export interface ButtonBaseProps{
    id?:string;

    className?:string;

    style?:CSSProperties;

    color?: string;

    type: ButtonBaseType;

    children?:ReactNode;

    text?:string;

    subText?:string;

    vminWidth?: number;

    vminHeight?:number;

    fontSize?:number;

    onClick?:()=>void;

    onFocus?:()=>void;

    onMouseEnter?:()=>void;
}

export interface ButtonAutoProps extends ButtonBaseProps{
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
`

const ButtonPro:FC<ButtonProProps> = (props) => {

    const {
        auto,
        id,
        className,
        style,
        color,
        type,
        text,
        subText,
        vminHeight,
        vminWidth,
        fontSize,
        onClick,
        onFocus,
        onMouseEnter,
    } = props;

    const [autoTable, setAutoTable] = useState<ButtonBaseProps>(auto?auto:AutoJson);
    const [buttonBaseStyle, setButtonBaseStyle] = useState<any>(null);

    useEffect(()=>{
        //console.log('begin',autoTable)
        try{
            if(!type && !auto)
                throw 'Error: You must pass in at least one attribute value in `type` and `auto`';
            else{
                if(auto && props)
                    setAutoTable(HandleButtonProAutoWithAttr(auto ,props));
                else
                    setAutoTable(HandleButtonProAutoWithAttr(AutoJson, props));
                //console.log(autoTable);
                /**
                 * 根据 buttonStyleProps 组装父组件 Css 属性
                 * */
                setButtonBaseStyle({
                    fontColor: autoTable.color!=='' ? autoTable.color : `#000`,
                    text: autoTable.text === '' ? 'Button' : autoTable.text,
                    subText: autoTable.subText ? autoTable.subText : 'default',
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
            //console.log('\x1B[31m%s\x1B[0m', e)
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
        <React.Fragment>
            <BaseButtonThemeWrapper
                id={id}
                className={className}
                onFocus={onFocus} onMouseEnter={onMouseEnter} onClick={onClick}
                style={style}
            >
                <buttonBaseCtx.Provider value={buttonBaseStyle}>
                    {renderBtn(type)}
                </buttonBaseCtx.Provider>
            </BaseButtonThemeWrapper>
        </React.Fragment>
    )
}

export default ButtonPro;
