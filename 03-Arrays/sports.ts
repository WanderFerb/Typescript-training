let sports : string[] = ["Cricket" ,"Football", "Basketball", "Volleyball"]

for(let i = 0; i< sports. length; i++){
    console.log(sports[i]);
}

console.log('using single quotes');

for(let tempSports of sports){
    if(tempSports == "Football"){
        console.log(tempSports + " << YO My fav")
    }
    console.log(tempSports);
}