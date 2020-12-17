function capital (word) {

    let result=[];

    for(let i = 0; i < word.length; i++){
        if (word[i]==word[i].toUpperCase())
          result[i]=i;
        else result[i]=null;
    }
    let filtered = result.filter(function (el) {
        return el != null;
    });

return filtered;

}

console.log(capital("wOoWOoOD"))