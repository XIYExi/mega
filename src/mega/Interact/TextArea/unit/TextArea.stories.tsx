import TextAreaPro from "../TextAreaPro";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import styled from "styled-components";
import {TextAreaType} from "../TextAreaType";

const TestDiv = styled.div`
  align-items: center;
  display: flex;
  background: linear-gradient(70deg, #ffffff 50%, #ffffff 50%);
  box-sizing: border-box;
  justify-content: center;
`

export default {
    title: 'Mega-LoLe Pro Max / TextArea',
    component: TextAreaPro
} as ComponentMeta<typeof TextAreaPro>;

const Template:ComponentStory<typeof TextAreaPro> = (args) => (
    <TestDiv>
        <TextAreaPro {...args}/>
    </TestDiv>
)

export const TextArea_Simplicity = Template.bind({});
const jsonSimplicity = {
    type: 'Simplicity' as TextAreaType,
    id: 'simplicity',
    className: '_simplicity_Class',
    width: '450px',
    height: '250px',
    text: 'textarea'
}
TextArea_Simplicity.args = {
    auto: jsonSimplicity
};
