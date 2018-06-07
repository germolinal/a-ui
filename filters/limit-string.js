module.exports = function (value,maxLength) {
    
    if (!value) return ''
    if(value.length <= maxLength){
        return value;
    }

    value = value.substring(0,maxLength);
    
    return value+"...";
}