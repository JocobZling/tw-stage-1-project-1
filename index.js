let sentence = 'good afternoon, my mletike.';
let result=sentence.split(' ').reduce((obj,item,index,src)=>{
    obj=obj[0].toUpperCase()+obj.slice(1)+' ';
    //console.log(item);//没得第一个值
    return obj+=item[0].toUpperCase()+item.slice(1)+' ';
});
//console.log(result);
//能够转换为 false 的表达式有：null , NaN , 0 , 空字符串("") , undefined
console.log("hello" && 88 ? true:false);
console.log(null && 66?true:false);
console.log(" " || 88?true:false);
console.log(undefined || true?true:false);
console.log(!""?true:false);
console.log(!8866?true:false);