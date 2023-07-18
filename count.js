var countMatches = function(items, ruleKey, ruleValue) {
    // first make a count variable and initialize it to zero 
    let count = 0
    // Loop through the items array and find the one with matching values
    for (let i=0; i<items.length; i++){
        if(ruleKey==="type" && items[i][0]===ruleValue){
            count ++
        }else if(ruleKey==="color" && items[i][1]===ruleValue){
            count ++
        }else if(ruleKey==="name" && items[i][2]===ruleValue){
            count ++
    
    }
    }
    return count
    
};