
export const AnalyzeCodeAndGenerateAttr = () => {

    const html = `<button class="class Name" id="dada"></button>`

    const regex = /(\w+)=("\w+\s*\w+")/g
    const res = html.match(regex);
    console.log(res)
    if (res) {
        console.log(res[0])
    }
}

export const AnalyzeCodeAndGenerateTag = () => {
    const html = `<button class="class Name" id="dada"><div>hello</div><div>dada</div><img/></button>`

    const tagRegex = /<\/?.+?>/g
    const tagRes = html.match(tagRegex);
    console.log('tag', tagRes);
    if(tagRes){
        console.log(tagRes[0])
        return tagRes;
    }
    return [];
}

export const generateCode = () => {
    const html = `<button class="class Name" id="dada"><div>hello</div><div>dada</div><img/></button>`

    let div = document.createElement('template');
    div.innerHTML = html;
    console.log(div)




}
