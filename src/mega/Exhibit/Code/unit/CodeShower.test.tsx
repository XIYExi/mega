import {AnalyzeCodeAndGenerateAttr, AnalyzeCodeAndGenerateTag, generateCode} from "../CodeShowerFunc";

describe('dev func',()=>{
    it('attr ', function () {
        AnalyzeCodeAndGenerateAttr();
    });
    it('tag', function (){
        AnalyzeCodeAndGenerateTag();
    });
    it('nodes', function () {
        generateCode()
    });
})
