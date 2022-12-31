import {ButtonConstant, SvgAnimationIntensity, SvgAnimationModerate, SvgAnimationScarcely} from "./ButtonStyle";
import {ButtonBaseProps, ButtonProProps} from "./ButtonPro";

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

    const attr = ['id', 'className', 'style', 'color', 'background',
        'type', 'children', 'text', 'subText',
        'vminHeight', 'vminWidth', 'fontSize', 'animationScale', 'svg', 'size'
    ];

    attr.map((item:string,_)=>{

        if(props[`${item}` as keyof ButtonProProps]){
            // @ts-ignore
            auto[`${item}` as keyof ButtonBaseProps] = props[`${item}` as keyof ButtonProProps];
            //console.log(auto[`${item}` as keyof ButtonBaseProps] , props[`${item}` as keyof ButtonProProps])
        }
    })
    //console.log('auto success',auto)
    return auto;
}

/**
 * 处理Svg Button中 svg 图标上下运动动画的剧烈程度
 * @param scale
 * @constructor
 */
export const HandleSvgButtonAnimationScale = (scale:string) => {
    switch (scale) {
        case 'scarcely': return SvgAnimationScarcely;
        case 'moderate':return SvgAnimationModerate;
        case 'intensity':return SvgAnimationIntensity;
        default:return SvgAnimationModerate;
    }
}

/**
 * 处理带后缀的数字
 * 正则匹配前序的数字，除以n之后拼接返回
 * @param str
 * @param n
 * @constructor
 */
export const HandleNumberWithSuffix = (str:string, n: number = 4):string=>{
    const re = str.match(/[0-9]*/);
    let value:string = '';
    if (re) {
        //console.log(re[0])
        const list = str.split(re[0]);
        let arr:string = re[0];
        arr = (Number(arr) / n).toString();
        //console.log(arr)
        value = arr + list[1];
        //console.log(value)
    }
    //
    return value;
}


export const HandleHoverSize = (param:string):string => {
    switch (param){
        case 'tiny':return '9rem';
        case 'small':return '10rem';
        case 'medium':return '11rem';
        case 'large':return '12rem';
        case 'huge':return'13rem'
        default:return '11rem';
    }
}

export const SplicingKeyWords = (keywords:string, head:string) => {
    const newKeywords = keywords.charAt(0).toUpperCase() + keywords.slice(1);
    console.log(head+newKeywords)
    return head+newKeywords;
}

