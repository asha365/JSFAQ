function explain_callback(name, age, task){
    console.log('Hello', name);
    console.log('your age', age);
    task()
    //washHand();
    //takeShower();
}
//function pera miter pass
function washHand(){
    console.log('wash hand with shop');
}
function takeShower(){
    console.log('Take shower');
}
function game(){
    console.log('play game');
}
explain_callback('Asha afrin', 23, washHand);
explain_callback('Rokiya', 16, takeShower);
explain_callback('Mahbub', 22, game);