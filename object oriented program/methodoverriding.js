class Parent{
    bike(){
        console.log("passion pro");
    }
    phone(){
        console.log("samsung");
    }
}
class child extends Parent{
    phone(){
        console.log("iphone");
    }
    bike(){
        console.log("re350");
    }
}
var child=new child()
child.phone()
child.bike()