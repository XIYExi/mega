import React from 'react';
import {ButtonBaseType} from "./mega/Interact/Button/ButtonType";
import styled from "styled-components";
import {ButtonConstant} from "./mega/Interact/Button/ButtonStyle";
import TypeSettingDesigner from "./mega/design/TypeSetting/tool/TypeSettingDesigner";
import TextAreaSimplicity from "./mega/Interact/TextArea/TextArea-Simplicity";


const json = {
    id: 'cyber_btn',
    className: 'button_common',
    style: {
        margin: 0,
        padding: 0
    },
    color: '#42e5f6',
    type: 'Svg' as ButtonBaseType,
    children: null,
    text: '我敲，Button',
    subText: 'click',
    vminWidth: 3,//建议保持为fontSize的12倍
    vminHeight: 3,//建议保持为fontSize的3倍
    fontSize: 3,//value in [2,3,4,5]
    onClick: () => {console.log('你按下了一个Button')},
    onFocus: () => {console.log('Focus')},
    onMouseEnter: () => {console.log('孩子不懂事，移着玩的')},
}

const TestDiv = styled.div`
  overflow: hidden;
  background: #f8f8d9;
  min-height: 100vmin;
  flex-wrap: wrap;
  flex-direction: row;
  min-width: 100vmin;
`

const SvgIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path fill="currentColor"
              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
    </svg>
)





function App() {

  return (
      <div>

        <TestDiv className="App">
            <TypeSettingDesigner />
   {/*         <div style={{width:'90%'}}>
                <TextAreaSimplicity />
            </div>*/}

        </TestDiv>
      </div>
  );
}

export default App;
