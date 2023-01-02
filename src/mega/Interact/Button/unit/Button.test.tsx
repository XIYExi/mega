import React from "react";
import {HandleNumberWithSuffix} from "../ButtonFunc";

describe('functionTest', ()=>{
    it('testNumberWithSuffix', ()=> {
        const rem = HandleNumberWithSuffix('12rem', 4);
        expect(rem).toEqual('3rem');
        const px = HandleNumberWithSuffix('200px',5);
        expect(px).toEqual('40px');
        const vmin = HandleNumberWithSuffix('400vmin',4);
        expect(vmin).toEqual('100vmin');
        const vw = HandleNumberWithSuffix('24vw',6);
        expect(vw).toEqual('4vw');
        const vh = HandleNumberWithSuffix('36vh',6);
        expect(vh).toEqual('6vh');
    })
})
