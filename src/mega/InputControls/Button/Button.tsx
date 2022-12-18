import React, {createContext, CSSProperties, FC, useMemo} from "react";
import {ButtonItem} from "./ButtonItem";
import {_color, _type} from "./ButtonCss";
import {defaultTheme, elementShape} from "../../../styles";
import styled from "styled-components";
import {MiniButton} from "./MiniButton";
import {OtherButton} from "./OtherButton";

/**
 * 参数接口
 * */
interface ButtonProps{
    children?:React.ReactNode,
    color?: ButtonColorType,
    primaryBar?: ButtonPrimaryBarType,
    type?: ButtonType,
    style?:CSSProperties,
}
type ButtonColorType = 'gray' | 'dark' | 'light' | 'primary';
type ButtonPrimaryBarType = 'primary' // 默认长条
    |'rightIcon' //Right Icon With Text
    |'leftIcon' //Left Icon With Text
    |'icon' //Button Icon
type ButtonType = 'mini' | 'primary' | 'rectangle' | 'circle';

/**
 * Button 最外层包裹容器
 * */
const ButtonWrapper = styled.div`
  position: relative;
  width: ${(props:{width:string})=>props.width};
  height: 75px;
  border-radius: ${elementShape.elementEdge};
  margin: 0;
  padding: 0;
  
  &:hover{
    background-color: ${defaultTheme.primaryColor};
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
    transition: 0s;
  }
`

export const buttonCtx = createContext<any|null>(null);

const Button:FC<ButtonProps> = (props) => {

    const {color, primaryBar, type='primary', style} = props;

    /**
     * 组装context
     * */
    const buttonStyleProps = {
        color: (color ? _color[color] : defaultTheme.primaryColor),
        primaryBar: primaryBar ? primaryBar : 'primary',
        size: type ? _type[type] : _type['primary'],
        type: type,
    };

    /**
     * 组装父组件 Css 属性
     * */
    const buttonStyle = {
        backgroundColor: buttonStyleProps.color,
        margin: '20px',
        width: buttonStyleProps.size,
    }

    return(
        <React.Fragment>
            {type==='primary'&&<ButtonWrapper width={buttonStyle.width} style={buttonStyle && style}>
                <buttonCtx.Provider value={buttonStyleProps}>
                    <ButtonItem>
                        {props.children}
                    </ButtonItem>
                </buttonCtx.Provider>
            </ButtonWrapper>
            }
            {type==='mini'&&
                <buttonCtx.Provider value={buttonStyleProps}>
                    <MiniButton>
                        {props.children}
                    </MiniButton>
                </buttonCtx.Provider>
            }
            {(type === 'circle' || type === 'rectangle') &&
                    <buttonCtx.Provider value={buttonStyleProps}>
                        <OtherButton>
                            {props.children}
                        </OtherButton>
                    </buttonCtx.Provider>
            }
        </React.Fragment>
    )
}

export default Button;
