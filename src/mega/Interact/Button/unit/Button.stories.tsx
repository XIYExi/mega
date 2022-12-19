import React from "react";
import {ComponentMeta, ComponentStory, storiesOf} from "@storybook/react";
import styled from "styled-components";

import ButtonPro from "../index";
import {ButtonBaseType} from "../ButtonType";

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
    onClick: () => {console.log('你按下了一个Button')},
    onFocus: () => {console.log('Focus')},
    onMouseEnter: () => {console.log('孩子不懂事，移着玩的')},
}
Cyber_Btn.args = {
    id: 'Cyber',
    className: 'cyber_btn cyber wrapper',
    auto: jsonCyber,
    subText:'click'
}
