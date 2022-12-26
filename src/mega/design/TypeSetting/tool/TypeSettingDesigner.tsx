import React, {FC, useEffect, useState} from "react";
import styled from "styled-components";
import TypeSettingDislocation from "../TypeSetting-Dislocation";

export interface TypeToolsProps{
    /**
     * 必填，需要调整的文字，将根据文字生成对应的调整框
     */
    text: string;
}

const ShowWrapper = styled.div`
    min-width: 35vmin;
`


const ToolContainer = styled.div`
    display: flex;
  box-sizing: border-box;
`

const ToolWrapper = styled.div`
    display: block;
  min-width: 40vmin;
`

const ArrControls = styled.div`
  display: block;
`


const TypeSettingDesigner:FC = () => {

    const [inputText, setInputText] = useState<string>('');
    const [valueArr, setValueArr] = useState<number[]>([]);
    const [inputArr, setInputArr] = useState<any[]>();

    const generateControls = () => {
        if (inputText === '')
            return;
        const arr:string[] = inputText.split('');
        const res:any = [];
        const values:number[] = new Array(arr.length).fill(0);
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

    const changeValue = (text:string, index:number) => {
        //console.log(text, index);
        const copy = [...valueArr];
        copy[index] = Number(text);
        setValueArr(copy);
    }

    const show = () => {
        console.log(valueArr)
    }

    return (
        <React.Fragment>

            <ToolContainer>

                <ShowWrapper>
                    <TypeSettingDislocation show='horizontal' configure={valueArr} text={inputText}/>
                </ShowWrapper>

                <ToolWrapper >
                    <div>
                        <input type='text' value={inputText} onChange={e => setInputText(e.target.value)}/>
                        <button onClick={generateControls}>Generate</button>
                        <button onClick={show}>show details</button>
                    </div>

                    <ArrControls>
                        {
                            inputArr &&
                                inputArr.map((item, index) =>(
                                    <div>
                                        <span>{item.text}: &nbsp;&nbsp;</span>
                                        <input id={item.id+index}
                                               key={item.key+index}
                                               type='text'
                                               value={item.value}
                                               onChange={e=>changeValue(e.target.value, item.index)}
                                        />
                                    </div>
                                ))
                        }
                    </ArrControls>
                </ToolWrapper>

            </ToolContainer>
        </React.Fragment>
    )
}


export default TypeSettingDesigner;
