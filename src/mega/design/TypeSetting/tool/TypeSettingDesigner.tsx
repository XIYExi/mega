import React, {FC, useState} from "react";
import styled from "styled-components";
import TypeSettingDislocation from "../TypeSetting-Dislocation";
import {TypeSettingDislocationTextProps} from "../TypeSettingType";
import InputPro from "../../../Interact/Input";
import {
    DesignerBoxWrapper,
    ShowText,
    TypeDesignerAutoControl,
    TypeDesignerAutoTextArea
} from "./TypeSettingDesignerBox";
import TextAreaPro from "../../../Interact/TextArea/TextAreaPro";


export interface TypeToolsProps{
    /**
     * 必填，需要调整的文字，将根据文字生成对应的调整框
     */
    text: string;
}

const ToolContainer = styled.div`
  overflow: hidden;
  min-width: 100%;
  background-color: transparent;
`

const ShowWrapper = styled.div`
  width: 57%;
  position: fixed;
  justify-content: center;
  align-items: center;
  align-content: center;
  display: flex;
  height: 95vmin;
  margin: 15px;
  border: 1px solid #333333;
  border-radius: 8px;
  box-shadow: inset 14px 14px 22px #cfd6dc,
  inset -14px -14px 22px #fdffff;
  background: transparent!important;
`

const ToolWrapper = styled.div`
  display: block;
  width: 40%;
  right: 0;
  position: absolute;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  background-color: #f6f4f4;
`

const ArrControls = styled.div`
  display: block;
  padding-right: 20px;
  padding-bottom: 10px;
`


const TypeSettingDesigner:FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const [valueArr, setValueArr] = useState<TypeSettingDislocationTextProps[]>([]);
    const [inputArr, setInputArr] = useState<any[]>();
    const [fontFamily, setFontFamily] = useState<string>('');

    const generateControls = () => {
        if (inputText === '')
            return;
        const arr:string[] = inputText.split('');
        const res:any = [];
        const values:TypeSettingDislocationTextProps[] = new Array(arr.length).fill({});

        values.map((item, index) => {
            item['align'] = 0;
            item['fontSize'] = '24';
            item['fontWeight'] = 450;
        })

        // 生成数组保存每个字符的定制值
        setValueArr(values);

        //console.log(arr)
        arr.map((item, index) => {
            res.push(
                {
                    id: item,
                    key: item,
                    index: index,
                    value: valueArr[index],
                    text: item,
                }
            );
        })
        setInputArr(res);
    }

    const changeAlignValue = (text:string, index:number) => {
        //console.log(text, index);
        const copy = [...valueArr];
        //console.log('copy', copy);
        copy[index] = {
            align: Number(text),
            fontWeight: copy[index]['fontWeight'],
            fontSize: copy[index]['fontSize']
        };
        setValueArr(copy);
    }

    const changeSizeValue = (text:string, index:number) => {
        console.log(text, index);
        const copy = [...valueArr];
        copy[index] = {
            align: copy[index]['align'],
            fontWeight: copy[index]['fontWeight'],
            fontSize: text
        }
        setValueArr(copy);
    }

    const changeWeightValue = (text:string, index:number) => {
        //console.log(text, index);
        const copy = [...valueArr];
        copy[index] = {
            align: copy[index]['align'],
            fontWeight: Number(text),
            fontSize: copy[index]['fontSize']
        }
        setValueArr(copy);
    }

    const handleFontFamilyValue = (text:string) => {
        console.log('textarea', text)
        setFontFamily(text);
    }

    const show = () => {
        console.log(valueArr)
    }

    // @ts-ignore
    return (
        <React.Fragment>

            <ToolContainer>

                <ShowWrapper>
                    {
                        (valueArr.length > 0)
                        && <TypeSettingDislocation fontFamily={fontFamily} key='dislocation' show='horizontal' configure={valueArr} text={inputText}/>
                    }
                </ShowWrapper>

                <ToolWrapper>
                    <div>
                        <input type='text' value={inputText} onChange={e => setInputText(e.target.value)}/>
                        <button onClick={generateControls}>Generate</button>
                        <button onClick={show}>show details</button>
                    </div>

                    <DesignerBoxWrapper>
                        <ShowText style={{paddingBottom:'10px'}}>整体定制</ShowText>
                        <TextAreaPro auto={TypeDesignerAutoTextArea} onChange={e => handleFontFamilyValue(e.target.value)}/>
                    </DesignerBoxWrapper>


                    <ArrControls>
                        {
                            inputArr &&
                                inputArr.map((item, index) =>(
                                    <DesignerBoxWrapper key={item.key+index}>
                                        <ShowText>{item.text}</ShowText>
                                        <InputPro
                                            auto={TypeDesignerAutoControl}
                                            text='偏移'
                                            onChange={e => changeAlignValue(e.target.value, index)}
                                        />
                                        <InputPro
                                            auto={TypeDesignerAutoControl}
                                            text='字号'
                                            onChange={e => changeSizeValue(e.target.value, index)}
                                        />
                                        <InputPro
                                            auto={TypeDesignerAutoControl}
                                            text='字重'
                                            onChange={e => changeWeightValue(e.target.value, index)}
                                        />
                                    </DesignerBoxWrapper>
                                ))
                        }
                    </ArrControls>
                </ToolWrapper>

            </ToolContainer>
        </React.Fragment>
    )
}


export default TypeSettingDesigner;
