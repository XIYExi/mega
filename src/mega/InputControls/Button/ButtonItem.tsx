import React, {FC, useCallback, useContext} from "react";
import {buttonCtx} from "./Button";
import {defaultTheme, elementShape, elementSize} from "../../../styles";
import styled from "styled-components";
import {MiniButtonBar, MiniButtonWrapper} from "./MiniButton";

interface ButtonItemProps{
    children?:React.ReactNode,
    [key:string]:any
}

/**
 * bar - primary
 * */
export const ButtonHolderBarPrimary = styled.div`
  
  position: relative;
  height: 12px;
  width: 150px;
  margin: auto;
  top: calc(50% - 12px/2 - 0.5px);
  border-radius: ${elementShape.elementEdge};
  background-color: ${props => {
    if(props.children)
      return null
    return (props.color)
  }};
  & span,
  & div,
  & p{
    position: absolute;
    top: calc(-50%);
    left: calc(-50% + 20px);
    width:260px;
    font-size: ${elementSize.textMaxHeight + 1};
    font-weight: 450;
    margin: 0!important;
    padding: 0 !important;
  }
`

/**
 * bar - rightIcon
 * */
export const ButtonHolderBarRightIcon = styled.div`
  
  border-radius: ${elementShape.popupsEdge};
  background-color: ${props => props.color};
  position: absolute;
  width: 25px;
  height: 25px;
  left: calc(50% - 30px/2 - 56.5px);
  top: calc(50% - 30px/2 + 1px);
`
const ButtonHolderBarRightIconBar = styled.div`
  
  border-radius: ${elementShape.elementEdge};
  background-color: ${props => {
    if(props.children)
        return null
    return (props.color)
  }};
  position: absolute;
  width: 100px;
  height: 12px;
  left: calc(50% - 100px/2 + 21.5px);
  top: calc(50% - 12px/2 - 0.5px);
  & span,
  & div,
  & p{
    position: absolute;
    top: calc(-50%);
    width:160px;
    font-size: ${elementSize.textMaxHeight + 1};
    font-weight: 450;
    margin: 0!important;
    padding: 0 !important;
  }
`

/**
 * bar - leftIcon
 * */
const ButtonHolderBarLeftIcon = styled.div`
  border-radius: ${elementShape.elementEdge};
  position: absolute;
  width: 25px;
  height: 25px;
  right: 24px;
  top: calc(50% - 25px/2);
  background-color: ${props => props.color};
`
const ButtonHolderBarLeftIconBar = styled.div`
  border-radius: ${elementShape.elementEdge};
  position: absolute;
  width: 115px;
  height: 12px;
  left: 25px;
  top: calc(50% - 12px/2 + 0.5px);
  background-color: ${props => {
    if(props.children)
      return null
    return (props.color)
  }};
  & span,
  & div,
  & p{
    position: absolute;
    top: calc(-50%);
    width:220px;
    font-size: ${elementSize.textMaxHeight + 1};
    font-weight: 450;
    margin: 0!important;
    padding: 0 !important;
  }
`

/**
 * bar - icon
 * */
const ButtonHolderBarIcon = styled.div`
  background-color: ${props => {
    if(props.children)
      return null
    return (props.color)
  }};
  border-radius: ${elementShape.elementEdge};
  position: relative;
  width: 30px;
  height: 30px;
  left: calc(50% - 30px/2 - 0.5px);
  top: calc(50% - 30px/2 + 0.5px);
`

export const ButtonItem:FC<ButtonItemProps> = (props) => {
    const ctx = useContext(buttonCtx);

    const barColor = '#ffffff'; // 预留接口，后续通过其余接口修改bar的颜色

    const BarPrimaryType = useCallback(()=>{
        switch(ctx.primaryBar){
            case 'primary':
                return (<ButtonHolderBarPrimary color={barColor}>{props.children}</ButtonHolderBarPrimary>);
            case 'rightIcon':
                return (
                    <>
                        <ButtonHolderBarRightIcon color={barColor} />
                        <ButtonHolderBarRightIconBar color={barColor}>
                            {props.children}
                        </ButtonHolderBarRightIconBar>
                    </>
                );
            case 'leftIcon':
                return (
                    <>
                        <ButtonHolderBarLeftIconBar color={barColor}>
                            {props.children}
                        </ButtonHolderBarLeftIconBar>
                        <ButtonHolderBarLeftIcon color={barColor}/>
                    </>
                );
            case 'icon':
                return (
                    <>
                        {
                            props.children ? <ButtonHolderBarPrimary color={barColor}>{props.children}</ButtonHolderBarPrimary>
                                : <ButtonHolderBarIcon color={barColor} />
                        }
                    </>
                )
            default:
                return <></>;
        }
    },[ctx]);

    return(
        <React.Fragment>
            <BarPrimaryType/>
        </React.Fragment>
    )
}


