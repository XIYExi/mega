import React, {FC, useCallback, useContext, useState} from "react";
import styled from "styled-components";
import {TextAreaChildProps, TextAreaSimplicityWrapperProps} from "../TextAreaType";
import {textAreaCtx} from "../TextAreaPro";


const TextArea = styled.textarea<TextAreaSimplicityWrapperProps>`
    
  width: ${props=>props.param.width ? props.param.width : '85%'};
  height: ${props=>props.param.height ? props.param.height : '100px'};
  margin: 20px;
  border-radius: 8px;
  padding: 12px;
  outline: none;
  font-size: 14px;
  // 输入框大小不可以改变
  resize: none;

  &:focus ~ label{
    transform: translateY(-20px);
    color: #2c6fdb;
  }
  
`

const TextAreaWrapper = styled.div<{len:number}>`
  position: relative;
  
  & label{
    /*采用绝对定位*/
    position: absolute;
    top: 20px;
    left: 30px;
    /*关闭鼠标事件, 使得点击label也能作用到input*/
    pointer-events: none;
    transition: all 0.3s ease;
    transform: ${props=>props.len > 0 ? `translateY(-20px)` : '0'};
    color: ${props=>props.len > 0 ?'#2c6fdb':'#808080'};
  }
`

const TextAreaSimplicityWrapper = styled.div`
  border-radius: 8px;
  box-sizing: border-box;
`


const TextAreaSimplicity:FC<TextAreaChildProps> = (props) => {

    const {
        onChange,
        onFocus,
        onClick
    } = props;


    const [area,setArea] = useState<string>('');
    const [areaLen, setAreaLen] = useState<number>(0);

    const ctx = useContext(textAreaCtx);

    const ctxValue = {
        width: ctx?.width ? ctx.width : '450px',
        height: ctx?.height ? ctx.height : '250px',
        text: ctx?.text ? ctx.text : 'textarea',
    }

    const param = {
        width: ctxValue.width,
        height: ctxValue.height,
    }

    const handleOnChange = useCallback((e:any) => {
        //TODO 用户传进来的onChange ...
        onChange && onChange(e);

        setArea(e.target.value);
        setAreaLen(e.target.value.length);
    }, [onChange]);



    return(
        <React.Fragment>

            <TextAreaSimplicityWrapper>
                <TextAreaWrapper len={areaLen}>
                    <TextArea value={area}
                              param={param}
                              onChange={handleOnChange}
                              onFocus={onFocus}
                              onClick={onClick}
                    />
                    <label>{ctxValue.text}</label>
                </TextAreaWrapper>
            </TextAreaSimplicityWrapper>

        </React.Fragment>
    )
}

export default TextAreaSimplicity;
