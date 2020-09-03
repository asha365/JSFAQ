/**function addNumbers(num1, num2){
    console.log(arguments); // argument is array like object
    //console.log(arguments[2]);
    return num1 + num2;
}
//call and passing pera miter
//var result = addNumbers(10, 4);
var result = addNumbers(10, 4, 3, 10);
console.log(result);*/



//function ar pera miter pass, access ,sum
/**function addNumbers(num1, num2){
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        //console.log(num);
        sum = sum + num;
    }
    //return num1 + num2;
    return sum;
}
var result = addNumbers(10, 4, 3, 10);
console.log(result);*/




//double sum
function addNumbers(num1, num2){
    console.log('double', double);
    var sum = 0;
    for(let i = 0; i < arguments.length; i++){
        const num = arguments[i];
        sum = sum + num;
        function logInfo(massage){
            console.log(massage);
        }
    }
    logInfo('Good Morning');
    //return sum;
    var double = sum * 2;
    return double;
    
}
var result = addNumbers(10, 4, 3, 10);
console.log(result);