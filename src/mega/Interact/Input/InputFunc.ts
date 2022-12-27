import {InputBaseProps, InputProProps} from "./InputPro";


export const EmptyFunc = () => {

}

/**
 * @param color InputBaseProps传入的color值
 * 函数用于判断传入的是否为RGB值，不是则置为transparent
 * */
export const HandleInputProBackground = (color:string) => {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    if(reg.test(color))
        return color;
    else
        return `transparent`;
}


export const HandleInputProAutoWithAttr = (auto:InputBaseProps, props: InputProProps) => {
    const arr = ['type', 'id', 'className', 'style',
        'background', 'mimetic', 'width', 'height','text',
    ];

    arr.map((item, index) => {
        if(props[`${item}` as keyof InputProProps] && item === 'background'){
            // @ts-ignore
            auto[`${item}` as keyof InputBaseProps] = HandleInputProBackground(props[`${item}` as keyof InputProProps]);
        }
        else if(props[`${item}` as keyof InputProProps]){
            // @ts-ignore
            auto[`${item}` as keyof InputBaseProps] = props[`${item}` as keyof InputProProps];
        }
    })
    return auto;
}
