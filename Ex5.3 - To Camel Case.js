// Ex5.3 - To Camel Case

let toCamelCase2 = ("the-stealth-warrior") // returns "theStealthWarrior"
let toCamelCase1 = ("The_Stealth_Warrior") // returns "TheStealthWarrior"
let steveSay = 'Did I do that?'
let toCamelCase = (str)=>{
    let capitalize = (str) =>{
        return str[0].toUpperCase() + str.slice(1)
    }
    let newStr = str.split('-').join(' ').split('_').join(' ').split(' ')
    let newArr = newStr [0];
    for (let i = 1; i< newStr.length; i++){
        newArr += capitalize(newStr[i])
    } return newArr;
}
toCamelCase('Did I do that ?')

