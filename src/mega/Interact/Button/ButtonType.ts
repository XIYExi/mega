export type ButtonColorType = 'gray' | 'dark' | 'light' | 'primary';

export type ButtonPrimaryBarType = 'primary' // 默认长条
    |'rightIcon' //Right Icon With Text
    |'leftIcon' //Left Icon With Text
    |'icon' //Button Icon

export type ButtonType = 'mini' | 'primary' | 'rectangle' | 'circle';

export type ButtonBaseType = 'Cyber' | 'xxx';


export interface CyberButtonProps{
    custom:CyberButtonWrapperCustom,
}
export interface CyberButtonWrapperCustom{
    color: string,
    vminFontSize: number,
    vminWidth: number,
    vminHeight: number,
    fontWeight: number,
    animatorType:number,
}
