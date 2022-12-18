import {ButtonBaseColor, ButtonConstant} from "./ButtonStyle";
import {ButtonBaseProps, ButtonProProps} from "./ButtonPro";
import {AutoJson} from "./Auto";

export const HandleCyberButtonVmin=(vmin:number)=>{
    let index:string = `vmin${vmin}`
    return ButtonConstant.cyberTagBottom[index];
}

/**
 * @param color ButtonBaseProps传入的color值
 * 函数用于判断传入的是否为RGB值，不是则置为#000
 * */
export const HandleButtonProFontColor = (color:string) => {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    if(reg.test(color))
        return color;
    else
        return `#000`;
}


export const HandleButtonProAutoWithAttr = (auto:ButtonBaseProps, props: ButtonProProps) => {

    const attr = ['id', 'className', 'style', 'color', 'type', 'children', 'text', 'subText', 'vminHeight', 'vminWidth', 'fontSize', 'onClick','onFocus', 'onMouseEnter'];

    attr.map((item:string,_)=>{
        if(auto[`${item}` as keyof ButtonBaseProps] && props[`${item}` as keyof ButtonProProps]){
            // @ts-ignore
            auto[`${item}` as keyof ButtonBaseProps] = props[`${item}` as keyof ButtonProProps];
        }
    })
    //console.log('auto success',auto)
    return auto;
}
