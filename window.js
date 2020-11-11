var name = 'asha';
function add(num1, num2){
     var result = num1 + num2;
    //console.log('result inside', result);
    console.log('name inside', name);
    function double (num){
        return num * 2;
       
    }
    //return result;
    var total = double(result);
    return total;
}
console.log('result out site', name);
var sum = add(13, 21);
console.log(sum);