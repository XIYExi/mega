import React, {FC, useContext, useEffect} from "react";
import styled from "styled-components";
import {buttonBaseCtx} from "./ButtonPro";
import {ButtonBaseColor, ButtonBaseSize, ButtonConstant, SvgAnimationModerate} from "./ButtonStyle";
import {SvgButtonProps} from "./ButtonType";
import {HandleSvgButtonAnimationScale} from "./ButtonFunc";


const SVG = styled.div<SvgButtonProps>`
  svg{
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }
`

const SvgWrapper = styled.div<SvgButtonProps>`
    background: transparent;
`

const SvgButtonWrapper = styled.button<SvgButtonProps>`
  font-family: inherit;
  font-size: ${props=>props.custom.vminFontSize}vmin;
  background: royalblue;
  color: ${props=>props.custom.color};
  padding: ${ButtonConstant.svgInnerPadding};
  padding-left: ${ButtonConstant.svgInnerPaddingLeft};
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  border: none;
  border-radius: ${ButtonConstant.svgBorderRadius};
  overflow: ${ButtonConstant.buttonBaseOverflow};
  transition: all 0.2s;
  min-width: ${props=>props.custom.vminWidth}vmin;
  min-height: ${props=>props.custom.vminHeight}vmin;
  
  span{
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }
  
  &:hover ${SvgWrapper}{
    animation: ${props => props.custom.animationScale} 0.6s ease-in-out infinite alternate;
  }
  &:hover svg{
    transform: ${ButtonConstant.svgMove};
  }
  &:hover span{
    transform: translateX(${ButtonConstant.svgFontMove});
  }
  &:active{
    transform: scale(0.95);
  }
`

const ButtonSvg:FC = (props) => {

    const ctx = useContext(buttonBaseCtx);

    const wrapperProps = {
        color: ctx?.fontColor ? ctx.fontColor : ButtonBaseColor.svgFont,
        vminFontSize: ctx?.fontSize? ctx.fontSize : ButtonBaseSize.cyberVminSize,
        vminWidth: ctx?.vminWidth? ctx.vminWidth : ButtonBaseSize.cyberVminSize,
        vminHeight: ctx?.vminHeight?ctx.vminHeight: ButtonBaseSize.cyberVminSize,
        fontWeight: ctx?.fontWeight?ctx.fontWeight : ButtonBaseSize.cyberFontWeight,
        //animatorType: ctx?.fontSize? (ctx.fontSize === 2 || ctx.fontSize===3) ? 1 : 0 : 1,
        animationScale: ctx?.animationScale ? HandleSvgButtonAnimationScale(ctx.animationScale) : SvgAnimationModerate,
    }

    useEffect(()=>{
        try {
            if(!ctx?.svg)
                throw 'Error: You dont transmit attr Svg!';
        }
        catch (e:unknown){
            console.log('\x1B[31m%s\x1B[0m', e);
        }
    }, [ctx])

    return (
        <React.Fragment>
            <SvgButtonWrapper custom={wrapperProps}>
                <SvgWrapper custom={wrapperProps}>
                    <SVG custom={wrapperProps}>
                        {
                            ctx?.svg
                        }
                    </SVG>
                </SvgWrapper>
                <span>Send</span>
            </SvgButtonWrapper>
        </React.Fragment>
    )
}

export default ButtonSvg;
