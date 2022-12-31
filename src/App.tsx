import React from 'react';
import {ButtonBaseType} from "./mega/Interact/Button/ButtonType";
import styled from "styled-components";
import {ButtonConstant} from "./mega/Interact/Button/ButtonStyle";
import TypeSettingDesigner from "./mega/design/TypeSetting/tool/TypeSettingDesigner";
import TextAreaSimplicity from "./mega/Interact/TextArea/TextArea-Simplicity";
import CheckBoxSimplicity from "./mega/Interact/CheckBox/CheckBox-Simplicity";
import {CheckBoxType} from "./mega/Interact/CheckBox/CheckBoxType";
import CheckBoxPro from "./mega/Interact/CheckBox/CheckBoxPro";
import ButtonHover from "./mega/Interact/Button/Button-Hover";


const TestDiv = styled.div`
  overflow: hidden;
  background: #f8f8d9;
  
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 100vmin;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SvgIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
    </svg>
)


const checkBoxJson = {
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



function App() {



  return (
      <div>

        <TestDiv className="App">
            {/*<TypeSettingDesigner />*/}
            {/*<CheckBoxPro auto={checkBoxJson}/>*/}
            <ButtonHover />

        </TestDiv>
      </div>
  );
}

export default App;
