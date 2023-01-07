import React, {createContext, CSSProperties, FC, ReactNode, useEffect, useMemo, useState} from 'react';
import {ButtonAnimationScaleType, ButtonBaseType, ButtonProSizeType} from './ButtonType';
import styled from "styled-components";
import ButtonCyber from "./model/Button-Cyber";
import {HandleButtonProAutoWithAttr} from "./ButtonFunc";
import {AutoJson} from "./Auto";
import ButtonSvg from "./model/Button-Svg";
import ButtonHover from "./model/Button-Hover";
import ButtonSocial from "./model/Button-Social";
import ButtonText from "./model/Button-Text";
import ButtonPlayer from "./model/Button-Player";

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
     * button背景颜色, 部分按钮不提供此接口
     */
    background?: string;

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
     * 尺寸，自动配置
     */
    size?: ButtonProSizeType;

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
     * 部分Button中使用的Svg，非提供组件配置不生效
     */
    svg?:ReactNode;

    /**
     * 动画表现程度
     */
    animationScale?: ButtonAnimationScaleType;

    /**
     * 点击回调
     */
    onClick?:(e:any)=>void;

    /**
     * 聚焦回调
     */
    onFocus?:(e:any)=>void;

    /**
     * 鼠标移入回调
     */
    onMouseEnter?:(e:any)=>void;
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

    animationScale?:string;

    svg?:ReactNode;

    size?:string;

    background?:string;
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
        color,
        type,
        text,
        subText,
        background,
        vminHeight,
        vminWidth,
        fontSize,
        onClick,
        onFocus,
        onMouseEnter,
        animationScale,
        svg,
        size,
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
                console.log(props)
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
                    svg: autoTable.svg ? autoTable.svg : null,
                    size: autoTable.size ? autoTable.size : 'medium',
                    background: autoTable.background ? autoTable.background : 'transparent'
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
            case'Cyber':
                return (<ButtonCyber onMouseEnter={onMouseEnter} onFocus={onFocus} onClick={onClick}/>);
            case'Svg':
                return (<ButtonSvg onMouseEnter={onMouseEnter} onFocus={onFocus} onClick={onClick}/>);
            case 'Hover':
                return (<ButtonHover onMouseEnter={onMouseEnter} onFocus={onFocus} onClick={onClick}/>);
            case 'Social':
                return (<ButtonSocial onMouseEnter={onMouseEnter} onFocus={onFocus} onClick={onClick}/> );
            case 'Text':
                return (<ButtonText onMouseEnter={onMouseEnter} onFocus={onFocus} onClick={onClick}/> );
            case 'Player':
                return (<ButtonPlayer onMouseEnter={onMouseEnter} onFocus={onFocus} onClick={onClick}/> );
            default:
                return(<div style={{color:'red'}}>Error: render in Button</div>);
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
                    {
                        renderBtn(autoTable.type)
                    }
                </buttonBaseCtx.Provider>
            </BaseButtonThemeWrapper>
        </div>
    )
}


export default ButtonPro;
