import InputPro from "../InputPro";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import styled from "styled-components";
import {InputType} from "../InputTypes";


export default {
    title: 'Mega-LoLe Pro Max / Input',
    component: InputPro,
} as ComponentMeta<typeof InputPro>;


const TestDiv = styled.div`
  align-items: center;
  display: flex;
  background: linear-gradient(70deg, #ffffff 50%, #ffffff 50%);
  box-sizing: border-box;
  justify-content: center;
`

const Template: ComponentStory<typeof InputPro> = (args) => (
    <TestDiv>
        <InputPro {...args}/>
    </TestDiv>
)

export const Input_Simplicity = Template.bind({});
const jsonSimplicity = {
    type: 'Simplicity' as InputType,
    id: 'simplicity',
    className: '_simplicity_Class',
    style: {
        margin: 0,
        padding: 0
    },
    background: 'transparent',
    mimetic: true,
    text: 'input',
    height: '20px',
    width: '250px',
};
Input_Simplicity.args = {
    auto: jsonSimplicity
}

