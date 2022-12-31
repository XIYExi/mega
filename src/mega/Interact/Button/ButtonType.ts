import {Keyframes} from "styled-components";
import exp from "constants";

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
 * Cyber Button
 * */
export interface CyberButtonProps{
    custom:CyberButtonWrapperCustom,
}
export interface CyberButtonWrapperCustom extends BaseButtonWrapperCustom{

}

export interface SvgButtonProps{
    custom: SvgButtonWrapperCustom
}
export interface SvgButtonWrapperCustom extends Omit<BaseButtonWrapperCustom, 'animatorType'>{
    animationScale: Keyframes;
}

export interface SvgAnimationProps{

}


export interface HoverButtonProps{
    width: string;

}

export interface ButtonChildProps{
    onClick?:(e:any)=>void;
    onFocus?:(e:any)=>void;
    onMouseEnter?:(e:any)=>void;
}

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

