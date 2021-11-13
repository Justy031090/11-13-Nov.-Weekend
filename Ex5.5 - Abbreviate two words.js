// Ex5.5 - Abbreviate two words

initials = (name) => {
    name = name.split(' ')
    for (let i = 0; i<name.length; i++){
        name[i] = name[i].slice(0,1)
    } 
    return name.join('.')
}
initials('')