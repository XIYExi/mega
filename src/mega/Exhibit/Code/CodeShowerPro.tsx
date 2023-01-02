import React, {createContext, CSSProperties, FC, ReactNode} from "react";
import styled from "styled-components";
import {CodeShowerCtxProps} from "./CodeShowerType";

export interface CodeShowerBaseProps{
    /**
     * id属性
     */
    id?:string;

    /**
     * class属性
     */
    className?:string;

    /**
     * style属性
     */
    style?:CSSProperties;

    /**
     * 对应展示效果的实现代码
     */
    code:string;

    /**
     * 展品，用于展示的组件，或者代码
     */
    exhibit:ReactNode;
}

export interface CodeShowerProProps extends Partial<CodeShowerBaseProps>{
    auto?: CodeShowerBaseProps;
}


const CodeShowWrapper = styled.div`

`

export const codeShowCtx = createContext<CodeShowerCtxProps|null>(null);

const CodeShowerPro:FC<CodeShowerProProps> = (props) => {




    return(
        <React.Fragment>
            <CodeShowWrapper>

            </CodeShowWrapper>
        </React.Fragment>
    )
}

export default CodeShowerPro;
