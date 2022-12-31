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
