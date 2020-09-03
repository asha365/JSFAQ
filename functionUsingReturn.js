function evenify(num){
if(num % 2 == 0){
    console.log(num, ': is even number');

}else{
    console.log(num * 2, ': is odd number');
    }
}
function evenify_all(nums){
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        evenify(num)
    }
}

    nums = [38, 48, 21, 22, 11, 2];
     evenify_all(nums)

