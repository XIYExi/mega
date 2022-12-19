import {ButtonAnimationScaleType, ButtonBaseType} from "./ButtonType";
import React from "react";

export const AutoJson = {
    id: '',
    className: '',
    style: {
        margin: 0,
        padding: 0
    },
    color: '#fff',
    type: 'Cyber' as ButtonBaseType,
    children: null,
    text: 'Button',
    animationScale:'moderate' as ButtonAnimationScaleType,
    svg: null,
    subText: '',
    vminWidth: 60,//建议保持为fontSize的12倍
    vminHeight: 15,//建议保持为fontSize的3倍
    fontSize: 5,//value in [2,3,4,5]
    onClick: () => {},
    onFocus: () => {},
    onMouseEnter: () => {},
}
