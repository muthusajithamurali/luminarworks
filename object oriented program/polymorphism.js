class Calculaton{
    add(){
        console.log("inside no arg method");
    }
    add(num1){
        console.log("inside one arg method");
    }
    add(num1,num2){
        console.log("inside two arg method");
    }
}
var calc = new calculation();
cala.add();
calc.add(10);
calc.add(10,20);