import React from 'react';
import ButtonPro from "./mega/Interact/Button/ButtonPro";
import {ButtonBaseType} from "./mega/Interact/Button/ButtonType";
import styled from "styled-components";
import {ButtonConstant} from "./mega/Interact/Button/ButtonStyle";


const json = {
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
    subText: 'click',
    vminWidth: 60,//建议保持为fontSize的12倍
    vminHeight: 15,//建议保持为fontSize的3倍
    fontSize: 5,//value in [2,3,4,5]
    onClick: () => {console.log('你按下了一个Button')},
    onFocus: () => {console.log('Focus')},
    onMouseEnter: () => {console.log('孩子不懂事，移着玩的')},
}

const TestDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: ${ButtonConstant.itemAlign};
  align-items: ${ButtonConstant.itemAlign};
  overflow: hidden;
  background: linear-gradient(70deg, #fff700 50%, #f0e900 50%);
`


function App() {
  return (
      <div>

        <TestDiv className="App">
            <ButtonPro auto={json}/>
            <ButtonPro auto={json}/>
            <ButtonPro auto={json}/>
        </TestDiv>


      </div>
  );
}

export default App;
