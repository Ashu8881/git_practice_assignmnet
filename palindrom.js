let str="gdhdsfhs8";
bag="";
bag2="";


for (let i=0;i<=str.length-1;i++){
bag=bag+str[i];
}
for(let j=str.length-1;j>=0;j++){
bag2=bag2+str[i];
}if (bag===bag2){
    console.log("Yes");
}else {
console.log("no");
}