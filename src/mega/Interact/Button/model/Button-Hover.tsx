import React, {FC, useContext, useEffect, useRef} from "react";
import styled from "styled-components";
import {buttonBaseCtx} from "../ButtonPro";
import {ButtonChildProps, HoverButtonProps} from "../ButtonType";
import {HandleHoverSize, HandleNumberWithSuffix} from "../ButtonFunc";

const HoverButtonIconArrow = styled.span<HoverButtonProps>`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  background: #fff;
  left: ${props=>HandleNumberWithSuffix(props.width, 10)};
  width: 1.125rem;
  height: 0.125rem;
  background: none;
  
  &:before{
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }
`

const HoverButtonText = styled.span<HoverButtonProps>`
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  position: absolute;
  flex-wrap: nowrap;
  left: 0.8rem;
  right: 0;
  top: 50%;
  bottom: 0;
  
  margin: 0 0 0 1.85rem;
  color: #282936;
  font-weight: 700;
  line-height: 1.6;
  text-align: center;
  text-transform: uppercase;
  vertical-align: top;
`

const HoverButtonCircleIcon = styled.span<HoverButtonProps>`
    transition: all 0.45s cubic-bezier(0.65,0,0.076,1);
  position: relative;
  display: block;
  margin: 0;
  width:${props=>HandleNumberWithSuffix(props.width, 3)};
  height:${props=>HandleNumberWithSuffix(props.width, 3)};
  border-radius: ${props=>HandleNumberWithSuffix(props.width, 6)};
  background: #282936;
`

const HoverButtonWrapper = styled.button<HoverButtonProps>`
  position: relative;
  display: flex;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: inherit;
  font-family: inherit;
  
  width: ${props=>HandleNumberWithSuffix(props.width, 0.8)};
  height: auto;
  
  &:hover ${HoverButtonCircleIcon}{
    width:100%;
  }
  &:hover ${HoverButtonCircleIcon} ${HoverButtonIconArrow}{
    background: #fff;
    transform: translate(1rem, 0);
  }
  &:hover ${HoverButtonText}{
    color: #fff;
  }
`



const ButtonHover:FC<ButtonChildProps> = (props) => {

    const {
        onClick,
        onFocus,
        onMouseEnter
    } = props;

    const ctx = useContext(buttonBaseCtx);

    const ctxValue = {
        size: ctx?.size ? HandleHoverSize(ctx.size) : '11rem', //[9,10,11,12,13]
        text: ctx?.text ? ctx.text : 'Learn More',
    }

    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(()=>{
        // @ts-ignore
        console.log(textRef.current?.offsetHeight * 0.5);

        if(textRef.current)
        { // @ts-ignore
            //console.log('render')
            textRef.current.style.marginTop = `-${textRef.current?.offsetHeight * 0.5}px`;
        }

    },[])


    return(
        <React.Fragment>
            <HoverButtonWrapper
                width={ctxValue.size}
                onClick={onClick}
                onMouseEnter={onMouseEnter}
                onFocus={onFocus}
            >
                <HoverButtonCircleIcon
                    width={ctxValue.size}
                >
                    <HoverButtonIconArrow
                        width={ctxValue.size}/>
                </HoverButtonCircleIcon>
                <HoverButtonText
                    ref={textRef}
                    width={ctxValue.size}
                >
                    {ctxValue.text}
                </HoverButtonText>
            </HoverButtonWrapper>
        </React.Fragment>
    )
}

export default ButtonHover;


