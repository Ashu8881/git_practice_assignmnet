let num=12
count=0;
for(i=0;i<=num;i++){
    if(num%i==0){
        count++
    }if(count=2){
        console.log("Yes")
    }else{
        console.log ("No")
    }
}
//should change from yes no to palindrom or not a palindrom