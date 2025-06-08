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

export const navigateFontSize = (currentSize, direction) => {
    let fontSet = [
        {
            "h1":26,
            "h3":20,
            "p":14
        },
        {
            "h1":30,
            "h3":24,
            "p":16
        },
        {
            "h1":32,
            "h3":28,
            "p":18
        }
    ]

    console.log('running?')

    if (direction == "inc" && currentSize < fontSet.length- 1){
        console.log('inc?')
        return {
            fontSet: fontSet[currentSize + 1],
            size:currentSize + 1,
            
        };
    }
    
    if (direction == "dec" && currentSize > 0){
        console.log('dec?')
        return {
            fontSet: fontSet[currentSize - 1],
            size:currentSize - 1,
            
        };
    } 


    return {
        fontSet: fontSet[currentSize],
        size:currentSize,  
    };
}