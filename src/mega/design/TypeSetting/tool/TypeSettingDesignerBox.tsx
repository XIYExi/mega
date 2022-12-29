import React, {FC} from "react";
import styled from "styled-components";
import {InputType} from "../../../Interact/Input/InputTypes";
import {TextAreaType} from "../../../Interact/TextArea/TextAreaType";
import {CheckBoxType} from "../../../Interact/CheckBox/CheckBoxType";


export const TypeDesignerAutoControl = {
    type: 'Simplicity' as InputType,
    id: '',
    className: '',
    style: {
        margin: 0,
        padding: 0
    },
    background: '#fff',
    mimetic: false,
    width: '450px',
    height:'25px',
    text: 'input',
}

export const TypeDesignerAutoTextArea = {
    type: 'Simplicity' as TextAreaType,
    id: '',
    className: '',
    width: '450px',
    height: '80px',
    text: 'font-family'
}

export const TypeDesignerCheckBox = {
    type: 'Simplicity' as CheckBoxType,
    id: '_id',
    className: 'checkBox_Wrapper__Class',
    style: {
        margin: '0',
        padding: '0'
    },
    label: '垂直排列',
    defaultChecked: false,
}


export const DesignerBoxWrapper = styled.div`
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  min-width: 550px;
  padding-top: 15px;
  background-color: #fff;
  margin: 20px;
`

export const ShowBox = styled.div`
  min-width: 25vmin;
`

export const ShowText = styled.label`
  position: relative;
  left: 20px;
  font-size: larger;
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 650;
  line-height: 1.1;
`


