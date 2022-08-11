import styled from "styled-components";
import React, {CSSProperties, FC, ReactNode, useContext} from "react";
import {buttonCtx} from "./Button";
import {elementShape, elementSize} from "../../../styles";

interface MiniButtonProps{
    children?:ReactNode;
    style?:CSSProperties;
}

export const MiniButtonWrapper  = styled.div`
  
    background-color: ${props => {
      return props.color
    }};
    width: ${(props:{width:string})=>{return props.width}};
    position: relative;
    height: 50px;
    border-radius: ${elementShape.elementEdge};
      &:hover{
        opacity: 0.7;
      }
    
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
        background-image: radial-gradient(circle, #fff 10%, transparent 11%);
        background-repeat: no-repeat;
        background-position: 50%;
        transform: scale(12, 12);
        opacity: 0;
        transition: transform .6s, opacity .6s;
      }
      &:active::after {
        transform: scale(0, 0);
        opacity: .3;
        //设置初始状态
        transition: 0s;
      }
`

export const MiniButtonBar = styled.div`
  
  position: absolute;
  width: 50px;
  height: 12px;
  left: calc(50% - 50px/2 - 1.5px);
  top: calc(50% - 12px/2);
  background-color: #fff;
  border-radius: ${elementShape.elementEdge};

  
`

export const MiniButtonBarText = styled.div`
    & div, & span, & p{
      user-select: none;
      margin: 0!important;
      padding: 0!important;
      position: absolute;
      font-size: ${elementSize.textMaxHeight + 1};
      font-weight: 450;
      width: 100px;
      top: calc(50% - 12px);
      left: 10px;
      text-align: center;
    }
`

export const MiniButton:FC<MiniButtonProps> = (props) => {
    const {style} = props;
    const ctx = useContext(buttonCtx);

    return(
        <MiniButtonWrapper color={ctx.color} width={ctx.size} style={style}>
            {
                !props.children ? <MiniButtonBar/>
                    :<MiniButtonBarText>{props.children}</MiniButtonBarText>
            }
        </MiniButtonWrapper>
    )
}
