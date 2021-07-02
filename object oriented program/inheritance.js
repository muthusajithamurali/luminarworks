//single inheritance
class Parent{
    phone(){
        console.log("samsungf41");
    }
}
class Child extends Parent{

}
var obj=new Child();
obj.phone();

//multilevel inheritance
class Parent{
    m1(){
        console.log("inside m1 method");
    }
}
class child extends Parent{
    m2(){
        console.log("inside m2 method");

    }
}
class subchild extends Parent{
    m3(){
        console.log("inside m3 method");
    }
}