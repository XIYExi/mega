import React, {CSSProperties, FC, ReactNode, useCallback, useContext} from "react";
import {buttonCtx} from "./Button";
import styled from "styled-components";
import {elementShape, elementSize} from "../../../styles";

interface OtherButtonProps{
    children?:ReactNode;
    style?:CSSProperties;
}

const CircleButtonWrapper = styled.div`
  
  background-color: ${props => props.color};
  position: relative;
  width: ${(props:{width:string})=>props.width};
  height: ${(props:{width:string})=>props.width};
  border-radius: ${elementShape.circleEdge};
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
    transition: 0s;
  }
`
const CircleButtonBar = styled.div`
  
  position: absolute;
  width: 30px;
  height: 30px;
  left: calc(50% - 30px/2 - 0.5px);
  top: calc(50% - 30px/2 + 0.5px);
  background-color: #fff;
  border-radius: 5px;
`

const RectangleButtonWrapper = styled.div`
  background-color: ${props => props.color};
  position: relative;
  width: ${(props:{width:string})=>props.width};
  height: ${(props:{width:string})=>props.width};
  border-radius: ${elementShape.elementEdge};
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
    transition: 0s;
  }
`
const RectangleButtonBar = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  left: calc(50% - 30px/2 - 0.5px);
  top: calc(50% - 30px/2 + 0.5px);
  background-color: #fff;
  border-radius: ${elementShape.elementEdge};
`

const OtherTextWrapper = styled.div`
  & div, & span, & p{
    margin: 0!important;
    padding: 0!important;
    position: absolute;
    font-size: ${elementSize.textMaxHeight + 1};
    font-weight: 450;
    width: ${(props:{width:string})=>props.width};
    top: calc(50% - 12px);
    text-align: center;
    user-select: none;
  }
`

export const OtherButton:FC<OtherButtonProps> = props => {

    const {style} = props;
    const ctx = useContext(buttonCtx);

    const OtherButtonType = useCallback(()=>{
        switch (ctx.type) {
            case 'circle':
                return(
                    <>
                        {
                            props.children?<CircleButtonWrapper color={ctx.color} style={style} width={ctx.size}>
                                    <OtherTextWrapper width={ctx.size}>{props.children}</OtherTextWrapper>
                                </CircleButtonWrapper>
                                :<CircleButtonWrapper color={ctx.color} style={style} width={ctx.size}><CircleButtonBar /></CircleButtonWrapper>
                        }
                    </>
                )
            case 'rectangle':
                return(
                    <>
                        {
                            props.children?<RectangleButtonWrapper color={ctx.color} style={style} width={ctx.size}>
                                    <OtherTextWrapper width={ctx.size}>{props.children}</OtherTextWrapper>
                                </RectangleButtonWrapper>
                                :<RectangleButtonWrapper color={ctx.color} style={style} width={ctx.size}><RectangleButtonBar /></RectangleButtonWrapper>
                        }
                    </>
                )
            default:
                return null;
        }
    },[ctx])

    return(
        <OtherButtonType />
    )
}
