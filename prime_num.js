let num=12
count=0;
for(i=0;i<=num;i++){
    if(num%i==0){
        count++
    }if(count=2){
        console.log("Palindrome")
    }else{
        console.log ("Not a  palindrome")
    }
}
//should change from yes no to palindrome or not a palindrome