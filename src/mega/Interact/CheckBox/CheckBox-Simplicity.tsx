import React, {FC, useCallback, useContext, useRef, useState} from "react";
import styled from "styled-components";
import {checkCtx} from "./CheckBoxPro";
import {CheckBoxChildProps} from "./CheckBoxType";

const CheckBoxSimplicityMark = styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 1.3em;
  width: 1.3em;
  background: #606062;
  border-radius: 7px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.30), 0px 1px 1px rgba(0,5);
  
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
  height: 0;
  width: 0;
  
  &:checked ~ ${CheckBoxSimplicityMark}{
    background-image: linear-gradient(#255CD2,#1D52C1);
  }
  
  &:checked ~ ${CheckBoxSimplicityMark}:after{
    display: block;
  }
`

const CheckBoxSimplicityWrapper = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  user-select: none;
  
  & ${CheckBoxSimplicityMark}:after{
    left: 0.45em;
    top: 0.20em;
    width: 0.24em;
    height: 0.6em;
    border: solid white;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
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
