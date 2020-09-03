//odd and even number
/**function evenify(num){
    if(num % 2 == 0){
        console.log(num, ':is even number');
    }
    else{
        //console.log(num, ':is odd number');
        console.log(num*2, ':is odd number');
    }

}
nums = [39, 3, 55, 56, 32, 11, 4];
for(let i = 0; i < nums.length; i++){
   const num = nums[i];
   //console.log(num * 2);
   evenify(num) //passing peramiter

}*/

//friend age
/**friendAge = [21, 16, 22, 28, 25, 20, 23];
for (let i = 0; i < friendAge.length; i++) {
    const age = friendAge[i];
    console.log(age);
    if(age % 2 == 0){
        console.log(age,':is even number');

    }else{
        console.log(age, ': is odd number');
    }
}*/

function evenify(num){
    if(num % 2 == 0){
        console.log(num, ':is even number');
    }
    else{
        console.log(num*2, ':is odd number');
    }
}

function evenifyAll(nums){
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        evenify(num)
     }
}

nums = [21, 16, 22, 28, 25, 20, 23];
evenifyAll(nums)

