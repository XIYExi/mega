import React, {createContext, CSSProperties, FC} from "react";
import styled from "styled-components";
import {CheckBoxCtxProps, CheckBoxType} from "./CheckBoxType";


export interface CheckBoxBaseProps{
    type:CheckBoxType;
    id?:string;
    className?:string;
    style?:CSSProperties;

}

export interface CheckBoxProProps extends Partial<CheckBoxBaseProps>{
    auto?:CheckBoxBaseProps;
}

const CheckBoxWrapper = styled.div`

`



export const checkCtx = createContext<CheckBoxCtxProps | null>(null);


const CheckBoxPro:FC<CheckBoxProProps> = (props) => {

    const {
        auto,
        id,
        className,
        type,
    } = props;

    return(
        <React.Fragment>
            <CheckBoxWrapper>
                <checkCtx.Provider value={null}>

                </checkCtx.Provider>
            </CheckBoxWrapper>
        </React.Fragment>
    )
}

export default CheckBoxPro;
