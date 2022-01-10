export const stringSlicer=(string)=>{
    if(string.length >= 45){
        return string.slice(0,45)+'...'
    }else{
        return string
    }
}