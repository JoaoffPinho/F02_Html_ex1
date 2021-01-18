/*function countWordsAndChars(words){

    let WordNumber = words.length
    
        
    //let char = list.toString()
    //let char_one = char.replace(",","")
    //let charnumb = char_one.lenght 

    let charsNumber= 0
    for (let i in words){
        charsNumber += words[i].length
    }

    averchar = charsNumber/WordNumber

    console.log("Total number of words: "+ WordNumber)
    console.log("Total number of Chars: "+ charsNumber)
    console.log("Average number of char per word"+ averchar)

}

let word = ["jogging","running","swimming"]
console.log("Array: "+word)
countWordsAndChars(word)*/



function countWordsAndChars(words) {

    // total number of words
    let totalNumberWords = words.length

    // total number of chars in all words
    let totalCharsInWords = 0
    for (let i in words) {
        totalCharsInWords += words[i].length
    }

    // average number of chars per word
    averageCharsInWords = totalCharsInWords/totalNumberWords

    // output the results
    console.log('Total number of words: ' + totalNumberWords)
    console.log('Total number of chars: ' + totalCharsInWords)
    console.log('Average number of chars per word: ' + averageCharsInWords)
}

let wordsArray = ['jogging', 'running', 'swimming']
console.log('Array: ' + wordsArray);
countWordsAndChars(wordsArray)