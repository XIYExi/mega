import React, {createContext, FC, useState} from "react";
import styled from "styled-components";
import TypeSettingDislocation from "./TypeSetting-Dislocation";

export interface TypeSettingBaseProps{

}

export interface TypeSettingProProps extends Partial<TypeSettingBaseProps>{
    auto?: TypeSettingBaseProps;
}

export interface TypeSettingCtxProps{

}

export const typeSettingCtx = createContext<TypeSettingCtxProps | null>(null);



const TypeSettingPro:FC<TypeSettingProProps> = (props) => {


    const ctxJson = {

    }

    return(
        <React.Fragment>
            <typeSettingCtx.Provider value={ctxJson}>
                <TypeSettingDislocation />
            </typeSettingCtx.Provider>
        </React.Fragment>
    )
}

export default TypeSettingPro;
