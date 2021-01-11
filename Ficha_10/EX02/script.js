function countWordsAndChars(words){

    let WordNumber = words.length
    
        
    /* let char = list.toString()
    let char_one = char.replace(",","")
    let charnumb = char_one.lenght */

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
countWordsAndChars(word)