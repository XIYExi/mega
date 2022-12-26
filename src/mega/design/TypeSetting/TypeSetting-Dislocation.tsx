import React, {FC, ReactNode, useEffect, useState} from "react";
import styled from "styled-components";
import {TypeSettingDesignerSpanProps, TypeSettingDislocationAlign, TypeSpanProps} from "./TypeSettingType";


const TypeSettingWrapper = styled.div`
    display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
`

const TypeSettingSpanWrapper = styled.div<TypeSettingDislocationAlign>`
  
  display: ${props => props.align === 0 ? 'flex' : 'block'};
  
  & div:first-child{
    font-size: 38px;
  }
  
  & div:nth-child(2){
    font-size: 28px;
  }

  & div:nth-child(3){
    font-size: 28px;
  }
  
  & div:last-child{
    font-size: 20px;
  }
`

const TypeSettingSpan = styled.div<TypeSettingDesignerSpanProps>`
    margin-top: ${props => props.align === 0 ? props.config+'px':0};
    margin-left: ${props=>props.align === 1 ? props.config+'px' : 0};
  font-weight: bold;
  font-size: 30px;
  line-height: unset;
`


export interface TypeSettingDislocationBaseProps{
    configure?: number[];
    text: string;

    /**
     * vertical 垂直 horizontal 水平
     */
    show?:'vertical' | 'horizontal';


}

export interface TypeSettingDislocationProProps extends Partial<TypeSettingDislocationBaseProps>{
    auto?:TypeSettingDislocationBaseProps;
}



const TypeSettingDislocation:FC<TypeSettingDislocationProProps> = (props) => {

    const {
        configure,
        auto,
        text='',
        show='vertical'
    } = props;


    const [textItem, setTextItem] = useState<TypeSpanProps[]>();

    useEffect(()=>{
        const arr:string[] = text.split('');
        const res:any = [];
        //console.log(arr)
        arr.map((item, index) => {
            res.push(
                {
                    text: item,
                    id: `typeSetting_ID${index}_${item}`,
                    className: `typeSetting_Class${index}`
                }
            );
        })
        //console.log(res)
        setTextItem(res);

    }, [text]);




    return(
        <TypeSettingWrapper>
            <TypeSettingSpanWrapper align={show === 'vertical' ? 0 : 1}>
                {
                    textItem?.map((item,index) => {
                        return (
                            /**
                             * 整合ctx信息，调整每一个span字符的位置，同时动态渲染列表
                             */
                            <TypeSettingSpan align={show === 'vertical' ? 0 : 1} config={configure ? configure[index] : 0} id={item.id} className={item.className} key={item.id}>{item.text}</TypeSettingSpan>
                        )
                    })
                }
            </TypeSettingSpanWrapper>
        </TypeSettingWrapper>
    )
}

export default TypeSettingDislocation;
