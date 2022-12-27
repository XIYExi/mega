import React, {FC, useContext} from "react";
import styled from "styled-components";
import {InputChildBaseProps, InputSimplicityWrapperProps} from "./InputTypes";
import {inputCtx} from "./InputPro";
import {InputSimplicityConstant} from "./InputStyle";

const InputSimplicityWrapper = styled.div<InputSimplicityWrapperProps>`
    background-color:${props => props.background};
  padding: 40px;
  box-shadow: ${props => props.mimetic === 0 ? InputSimplicityConstant.shadow : 'none'};
  border-radius: 8px;
  width: ${props => props.width ? props.width : '250px'};
`

const InputWrapper = styled.div<{ height: string }>`
  position: relative;
  width: 100%;
  height: ${props => props.height ? props.height : '25px'};
  
  & label{
    /*采用绝对定位*/
    position: absolute;
    bottom: 10px;
    left: 0;
    color: #808080;
    /*关闭鼠标事件, 使得点击label也能作用到input*/
    pointer-events: none;
    transition: all 0.3s ease;
  }
`

const InputUnderline = styled.div`
  position: absolute;
  bottom: 0;
  height: 2px;
  //调整为85%，否则100%的宽度会超过显示框
  width: 85%;
  background-color: #2c6fdb;
  /*沿X轴缩小*/
  transform: scaleX(0);
  transition: all 0.3s ease;
`

const InputBox = styled.input`
    width: 100%;
  height: 100%;
  border: none!important;
  font-size: 17px;
  border-bottom: 2px solid #c0c0c0;
  background-color: transparent;
  /*消除input的黑框*/
  outline: none;
   
  /*Input获得焦点，或者输入合法时均触发样式*/
  &:focus ~ label, 
  &:valid ~ label{
    /*使label上移*/
    transform: translateY(-25px);
    font-size: 15px;
    color: #2c6fdb;
  }
  
  &:valid ~ ${InputUnderline},
  &:focus ~ ${InputUnderline}{
    /*沿X轴放大*/
    transform: scaleX(1);
  }
`


const InputSimplicity:FC<InputChildBaseProps> = (props) => {

    const ctx = useContext(inputCtx);

    const {onChange, onClick, onFocus} = props;

    const inputSimplicityParam = {
        background: ctx?.background ? ctx.background : 'transparent',
        mimetic: ctx?.mimetic ? ctx.mimetic : 0,
        height: ctx?.height ? ctx.height : '25px',
        width: ctx?.width ? ctx.width : '250px',
    }


    return(
        <React.Fragment>
            <InputSimplicityWrapper
                background={inputSimplicityParam.background}
                mimetic={inputSimplicityParam.mimetic}
                width={inputSimplicityParam.width}
            >
                <InputWrapper height={inputSimplicityParam.height}>
                    <InputBox type='text' required
                              onChange={onChange}
                              onClick={onClick}
                              onFocus={onFocus}
                    />
                    <InputUnderline></InputUnderline>
                    <label>{ctx?.text ? ctx.text : 'input'}</label>
                </InputWrapper>

            </InputSimplicityWrapper>
        </React.Fragment>
    )
}

export default InputSimplicity;
