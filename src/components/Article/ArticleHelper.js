//1. calculate word count


export const getWordCount = (article) =>{
    let sum = 0;
    let articleText = article.text
    for (let i=0; i < articleText.length; i++){
        let articleContent = articleText[i].content;
        for (let j = 0; j < articleContent.length; j++){
            let arr = articleContent[j].split(' ')
            sum += arr.length;
        }
    }
    return sum;
}