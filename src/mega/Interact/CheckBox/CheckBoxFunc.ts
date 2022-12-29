import {CheckBoxBaseProps, CheckBoxProProps} from "./CheckBoxPro";

export const HandleCheckBoxProAutoWithAttr = (auto: CheckBoxBaseProps, props: CheckBoxProProps) => {
    const arr = ['type', 'id', 'className', 'style',
        'label', 'defaultChecked',
    ];

    arr.map((item, index) => {

        if(props[`${item}` as keyof CheckBoxProProps]){
            // @ts-ignore
            auto[`${item}` as keyof CheckBoxBaseProps] = props[`${item}` as keyof CheckBoxProProps];
        }
    })
    return auto;
}
