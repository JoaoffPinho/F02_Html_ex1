/*let color_array = ["red","orange","yellow","pink"]
let position_Array = ["st","nd","rd","th"]

for(let i = 0; i < color_array.length;i++){
    console.log("My #"+[i+1]+" color is "+color_array[i])
}

for(let i = 0; i < color_array.length;i++){
    console.log("My "+[i+1]+position_Array[i]+" color is "+color_array[i])
}*/




let choices = ['red', 'orange', 'pink', 'yellow']

// first output
/*
for (let i = 0; i < choices.length; i++) {
    console.log('My #' + (i + 1) + ' choice is ' + choices[i])
}
*/
// second output
for (let i = 0; i < choices.length; i++) {

    let choiceNum = i + 1
    let choiceNumSuffix

    if (choiceNum == 1) {
        choiceNumSuffix = 'st'
    } else if (choiceNum == 2) {
        choiceNumSuffix = 'nd'
    } else if (choiceNum == 3) {
        choiceNumSuffix = 'rd'
    } else {
        choiceNumSuffix = 'th'
    }

    console.log(
        'My ' + choiceNum + choiceNumSuffix + ' choice is ' + choices[i]
    )
}