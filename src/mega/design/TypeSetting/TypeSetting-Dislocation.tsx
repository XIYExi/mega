import React, {FC, ReactNode, useEffect, useState} from "react";
import styled from "styled-components";
import {
    TypeSettingDesignerSpanProps,
    TypeSettingDislocationAlign,
    TypeSettingDislocationTextProps,
    TypeSpanProps
} from "./TypeSettingType";


const TypeSettingWrapper = styled.div<{family:string}>`
    display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  
  & > *{
    font-family: ${props => props.family ? props.family : ''}!important;
  }

`

const TypeSettingSpanWrapper = styled.div<TypeSettingDislocationAlign>`
  
  display: ${props => props.align === 0 ? 'flex' : 'block'};
  

`

const TypeSettingSpan = styled.div<TypeSettingDesignerSpanProps>`
    margin-top: ${props => props.align === 0 ? props.config+'px':0};
    margin-left: ${props=>props.align === 1 ? props.config+'px' : 0};
  font-size: ${props => props.fontSize ? props.fontSize+'px' : '24px'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 450};
  line-height: unset;
`


export interface TypeSettingDislocationBaseProps{
    configure?: TypeSettingDislocationTextProps[];

    text: string;

    /**
     * vertical 垂直 horizontal 水平
     */
    show?:'vertical' | 'horizontal';

    fontFamily:string;
}

export interface TypeSettingDislocationProProps extends Partial<TypeSettingDislocationBaseProps>{
    auto?:TypeSettingDislocationBaseProps;
}


const TypeSettingDislocation:FC<TypeSettingDislocationProProps> = (props) => {

    const {
        configure,
        auto,
        text='',
        show='vertical',
        fontFamily,
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

    const [size, setSize] = useState<any>([]);

    useEffect(()=>{
        const arr:{}[] = [];
        configure?.map((item, index) => {
            const _item = {
                fontSize: `${item['fontSize']}`
            };
            arr.push(_item);
        })
        setSize(arr);

    }, [configure])



    return(
        // @ts-ignore
        <TypeSettingWrapper family={fontFamily}>
            <TypeSettingSpanWrapper align={show === 'vertical' ? 0 : 1}>
                {
                    textItem?.map((item,index) => {
                        return (
                            /**
                             * 整合ctx信息，调整每一个span字符的位置，同时动态渲染列表
                             */
                            <TypeSettingSpan
                                fontSize={configure ? configure[index]['fontSize'] : '24'}
                                align={show === 'vertical' ? 0 : 1}
                                fontWeight = {configure ? configure[index]['fontWeight'] : 450}
                                config={configure ? configure[index]['align'] : 0}
                                id={item.id}
                                key={item.id}
                                className={item.className}
                            >
                                {item.text}
                            </TypeSettingSpan>
                        )
                    })
                }
            </TypeSettingSpanWrapper>
        </TypeSettingWrapper>
    )
}

export default TypeSettingDislocation;
