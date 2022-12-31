import React, {FC, useCallback, useContext, useRef, useState} from "react";
import styled from "styled-components";
import {checkCtx} from "../CheckBoxPro";
import {CheckBoxChildProps} from "../CheckBoxType";
import {CheckBoxSimplicityConstant} from "../CheckBoxStyle";

const CheckBoxSimplicityMark = styled.div`
  position: relative;
  top: ${CheckBoxSimplicityConstant.top};
  left: ${CheckBoxSimplicityConstant.left};
  height: ${CheckBoxSimplicityConstant.height};
  width: ${CheckBoxSimplicityConstant.width};
  background: ${CheckBoxSimplicityConstant.background};
  border-radius: ${CheckBoxSimplicityConstant.borderRadius};
  box-shadow: ${CheckBoxSimplicityConstant.boxShadow};
  
  &:after{
    content: "";
    position: absolute;
    display: none;
  }
`

const CheckBoxSimplicityInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: ${CheckBoxSimplicityConstant.inputHeight};
  width: ${CheckBoxSimplicityConstant.inputWidth};
  
  &:checked ~ ${CheckBoxSimplicityMark}{
    background-image: ${CheckBoxSimplicityConstant.markBackground};
  }
  
  &:checked ~ ${CheckBoxSimplicityMark}:after{
    display: block;
  }
`

const CheckBoxSimplicityWrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: ${CheckBoxSimplicityConstant.fontSize};
  user-select: none;
  
  & ${CheckBoxSimplicityMark}:after{
    left: 0.45em;
    top: 0.20em;
    width: 0.24em;
    height: 0.6em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: ${CheckBoxSimplicityConstant.iconTransform};
  }
`

const CheckBoxSimplicity:FC<CheckBoxChildProps> = (props) => {

    const {
        onClick,
        onChange,
        onFocus
    } = props;


    const ctx = useContext(checkCtx);

    const ctxValue = {
        label: ctx?.label ? ctx.label : 'label',
        defaultChecked: ctx?.defaultChecked ? ctx.defaultChecked : false,
    }

    const [isChecked, setIsChecked] = useState<boolean>(ctxValue.defaultChecked)
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = useCallback(()=>{

        // TODO 保存checked
        const checked = (inputRef.current as HTMLInputElement).checked;
        setIsChecked(checked);

        // TODO onchange...
        onChange && onChange(ctxValue.label, checked);
    },[onChange])

    return(
        <React.Fragment>
            <CheckBoxSimplicityWrapper>
                <CheckBoxSimplicityInput
                    ref={inputRef}
                    type='checkbox'
                    onChange={handleChange}
                    onClick={onClick}
                    onFocus={onFocus}
                    defaultChecked={isChecked}
                />
                <CheckBoxSimplicityMark/>
            </CheckBoxSimplicityWrapper>

        </React.Fragment>
    )
}

export default CheckBoxSimplicity;
