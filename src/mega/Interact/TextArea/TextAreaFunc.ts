import {TextAreaBaseProps, TextAreaProProps} from "./TextAreaPro";


export const HandleTextAreaProAutoWithAttr = (auto:TextAreaBaseProps, props: TextAreaProProps) => {
    const arr = ['type', 'id', 'className', 'style',
        'width', 'height','text',
    ];

    arr.map((item, index) => {

        if(props[`${item}` as keyof TextAreaProProps]){
            // @ts-ignore
            auto[`${item}` as keyof InputBaseProps] = props[`${item}` as keyof InputProProps];
        }
    })
    return auto;
}
