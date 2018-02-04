module.exports = {}

module.exports.get_random_elmts = (size, min, max) => {
    if(typeof size !== "number" || size <= 0){
        throw "Size should be a positive integer";
    }
    if(typeof min !== "number" || typeof max !== "number" 
        || min > max || min < 0){
        throw "Min and Max should be positive integers and min <= max";
    }
    let i = 1, res = [];
    for(i=1; i <= size; i++){
        res.push( Math.floor(Math.random() * (1 + max-min) + min ));
    }

    return res;
}
