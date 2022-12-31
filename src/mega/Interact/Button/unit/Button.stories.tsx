import React from "react";
import {ComponentMeta, ComponentStory, storiesOf} from "@storybook/react";
import styled from "styled-components";

import ButtonPro from "../index";
import {ButtonBaseType, ButtonProSizeType} from "../ButtonType";

const TestDiv = styled.div`
  align-items: center;
  display: flex;
  background: linear-gradient(70deg, #fff700 50%, #f0e900 50%);
  box-sizing: border-box;
  justify-content: center;
`

export default {
    title: 'Mega-LoLe Pro Max / Button',
    component: ButtonPro,

} as ComponentMeta<typeof ButtonPro>;


const Template: ComponentStory<typeof ButtonPro> = (args) =>(
    <TestDiv className="App">
        <ButtonPro {...args}/>
    </TestDiv>
)

export const Cyber_Btn = Template.bind({});
const jsonCyber = {
    id: 'cyber_btn',
    className: 'button_common',
    style: {
        margin: 0,
        padding: 0
    },
    color: '#42e5f6',
    type: 'Cyber' as ButtonBaseType,
    children: null,
    text: '我敲，Button',
    subText: 'R18',
    vminWidth: 60,//建议保持为fontSize的12倍
    vminHeight: 15,//建议保持为fontSize的3倍
    fontSize: 5,//value in [2,3,4,5]
}
Cyber_Btn.args = {
    id: 'Cyber',
    className: 'cyber_btn cyber wrapper',
    auto: jsonCyber,
    subText:'click'
}


export const Svg_Btn = Template.bind({});
const SvgIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
    </svg>
)
const jsonSvg = {
    id: 'svg_btn',
    className: 'button_common',
    style: {
        margin: 0,
        padding: 0
    },
    color: '#fff',
    type: 'Svg' as ButtonBaseType,
    children: null,
    text: 'Svg Button',
    subText: 'svg',
    vminWidth: 60,//建议保持为fontSize的12倍
    vminHeight: 15,//建议保持为fontSize的3倍
    fontSize: 5,//value in [2,3,4,5]
    svg: <SvgIcon/>,
}
Svg_Btn.args = {
    auto: jsonSvg
}


export const Hover_btn = Template.bind({});
const jsonHover = {
    id: 'hover_btn',
    className: 'button_common',
    style: {
        margin: 0,
        padding: 0
    },
    color: '#fff',
    type: 'Hover' as ButtonBaseType,
    text: 'Hover Button',
    fontSize: 5,//value in [2,3,4,5]
    size: 'medium' as ButtonProSizeType,
}
Hover_btn.args = {
    auto: jsonHover
}

export const Social_btn = Template.bind({});
const jsonSocial = {
    id: 'social_btn',
    className: 'button_common',
    style: {
        margin: 0,
        padding: 0
    },
    color: '#ffffff',
    background: '#2CA0D9',
    type: 'Social' as ButtonBaseType,
    text: 'Social Button',
    fontSize: 5,//value in [2,3,4,5]
    size: 'medium' as ButtonProSizeType,
}
const DefaultSvg = () => (
    <svg viewBox="0 0 16 16" className="bi bi-telegram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"></path>
    </svg>
)
Social_btn.args = {
    auto: jsonSocial,
    svg: <DefaultSvg/>,
    text: 'Button',
}
