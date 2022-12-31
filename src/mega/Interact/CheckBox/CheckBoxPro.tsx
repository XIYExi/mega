import React, {createContext, CSSProperties, FC, useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import {CheckBoxCtxProps, CheckBoxType} from "./CheckBoxType";
import {AutoJson} from './Auto';
import {HandleCheckBoxProAutoWithAttr} from "./CheckBoxFunc";
import CheckBoxSimplicity from "./model/CheckBox-Simplicity";


export interface CheckBoxBaseProps{
    /**
     * checkbox渲染类型
     */
    type:CheckBoxType;

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
     * 作用于label的文字
     */
    label:string;

    /**
     * 是否默认勾选
     */
    defaultChecked?:boolean;

    /**
     * onChange回调
     * @param label 当前checked标签
     * @param checked 当前选中值
     */
    onChange?:(label:string, checked:boolean)=>void;


    onClick?:(e:any)=>void;

    onFocus?:(e:any)=>void;
}

export interface CheckBoxProProps extends Partial<CheckBoxBaseProps>{
    auto?:CheckBoxBaseProps;
}

const CheckBoxWrapper = styled.div`
    display: flex;
`

const CheckBoxLabel = styled.label`
    width:150px;
  margin-right: 30px;
  user-select: none;
  font-size: 16px;
  font-weight:350;
`


export const checkCtx = createContext<CheckBoxCtxProps | null>(null);


const CheckBoxPro:FC<CheckBoxProProps> = (props) => {

    const {
        auto,
        id,
        className,
        type,
        style,
        label,
        defaultChecked,
        onClick,
        onChange,
        onFocus,
    } = props;

    const [autoTable, setAutoTable] = useState<CheckBoxBaseProps>(auto ? auto : AutoJson);
    const [checkBoxCtxValue, setCheckBoxCtxValue] = useState<CheckBoxCtxProps>()

    useEffect(()=>{
        try{
            if(!type && !auto)
                throw 'Error: You must pass in at least one attribute value in `type` and `auto` to <TextAreaPro/>';
            else{
                if(auto && props)
                    setAutoTable(HandleCheckBoxProAutoWithAttr(auto ,props));
                else if(!auto && props)
                    setAutoTable(HandleCheckBoxProAutoWithAttr(AutoJson, props));
                else
                    setAutoTable(auto as CheckBoxBaseProps);

                setCheckBoxCtxValue({
                    label: autoTable.label ? autoTable.label : 'label',
                    defaultChecked: autoTable.defaultChecked ? autoTable.defaultChecked : false,
                });
            }
        }
        catch (e: unknown){
            /**
             * TODO 添加一个消息通知栏，推送错误日志
             */
            console.log('\x1B[31m%s\x1B[0m', e)
        }
    }, [auto, type])


    const renderCheckBox = useCallback((type:string|undefined)=>{
        const tmp = type === undefined ? 'Simplicity' : type;
        switch(tmp){
            case 'Simplicity':
                return <CheckBoxSimplicity onChange={onChange} onClick={onClick} onFocus={onFocus}/>
            default:
                return <div style={{color:'red'}}>Error: render in CheckBox</div>
        }

    }, [type]);


    return(
        <React.Fragment>
            <CheckBoxWrapper
                id={id}
                className={className}
                style={style}
            >
                <CheckBoxLabel>{autoTable.label}</CheckBoxLabel>
                <checkCtx.Provider value={checkBoxCtxValue as CheckBoxCtxProps}>
                    {
                        renderCheckBox(type)
                    }
                </checkCtx.Provider>
            </CheckBoxWrapper>
        </React.Fragment>
    )
}

export default CheckBoxPro;
