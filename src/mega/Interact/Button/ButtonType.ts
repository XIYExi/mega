import {Keyframes} from "styled-components";

export type ButtonColorType = 'gray' | 'dark' | 'light' | 'primary';

export type ButtonPrimaryBarType = 'primary' // 默认长条
    |'rightIcon' //Right Icon With Text
    |'leftIcon' //Left Icon With Text
    |'icon' //Button Icon

export type ButtonType = 'mini' | 'primary' | 'rectangle' | 'circle';

export type ButtonBaseType = 'Cyber' | 'Svg' | 'Hover' | 'Social';

export type ButtonProSizeType = 'tiny' | 'small' | 'medium' | 'large' | 'huge';

export type ButtonAnimationScaleType = 'scarcely' | 'moderate' | 'intensity';


interface BaseButtonWrapperCustom{
    color: string,
    vminFontSize: number,
    vminWidth: number,
    vminHeight: number,
    fontWeight: number,
    animatorType:number,
}



/**
 * =========================================
 *
 * Button按钮通用约束
 *
 * =========================================
 */
export interface ButtonChildProps{
    onClick?:(e:any)=>void;
    onFocus?:(e:any)=>void;
    onMouseEnter?:(e:any)=>void;
}



/**
 * =========================================
 *
 * Button Cyber Interface
 *
 * =========================================
 */
export interface CyberButtonProps{
    custom:CyberButtonWrapperCustom,
}
export interface CyberButtonWrapperCustom extends BaseButtonWrapperCustom{

}



/**
 * =========================================
 *
 * Button Svg Interface
 *
 * =========================================
 */
export interface SvgButtonProps{
    custom: SvgButtonWrapperCustom
}
export interface SvgButtonWrapperCustom extends Omit<BaseButtonWrapperCustom, 'animatorType'>{
    animationScale: Keyframes;
}

export interface SvgAnimationProps{

}



/**
 * =========================================
 *
 * Button Hover Interface
 *
 * =========================================
 */
export interface HoverButtonProps{
    width: string;

}




/**
 * =========================================
 *
 * Button Social Interface
 *
 * =========================================
 */
export interface ButtonSocialProps{
    param: SocialValue,
    color: string,
}
interface SocialValue{
    wrapperWidth: string,
    wrapperHeight: string,
    iconHeight: string,
    iconWidth: string,
    svgWidth: string,
    svgHeight: string,
    textMarginLeft:string,
}




/**
 * =========================================
 *
 * Button Text Interface
 *
 * =========================================
 */
export interface ButtonTextProps{
    param: TextValue,
}
interface TextValue{
    wrapperHeight: string,
    wrapperWidth: string,
    svgWidth: string,
    textAfterBottom: string,
    textAfterHoverWidth: string,
}
