import CheckBoxPro from "../CheckBoxPro";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import styled from "styled-components";
import {CheckBoxType} from "../CheckBoxType";

const TestDiv = styled.div`
  align-items: center;
  display: flex;
  background: linear-gradient(70deg, #ffffff 50%, #ffffff 50%);
  box-sizing: border-box;
  justify-content: center;
`

export default {
    title: 'Mega-LoLe Pro Max / CheckBox',
    component: CheckBoxPro,
} as ComponentMeta<typeof CheckBoxPro>;


const Template: ComponentStory<typeof CheckBoxPro> = (args) => (
    <TestDiv className="App">
        <CheckBoxPro {...args}/>
    </TestDiv>
)

export const CheckBox_Simplicity = Template.bind({});
const jsonSimplicity = {
    type: 'Simplicity' as CheckBoxType,
    id: 'simplicity',
    className: '_simplicity_Class',
    style: {
        margin: '0',
        padding: '0'
    },
    label: 'check',
    defaultChecked: false,

}
CheckBox_Simplicity.args = {
    auto: jsonSimplicity
}
