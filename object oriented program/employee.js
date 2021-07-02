class Employee{
    constructor(id,name,desing,salary,exp){
        this.id=id;
        this.name=name;
        this.desing=desing;
        this.salary=salary;
        this.exp=exp;
    }
    printemp(){
        console.log(this.id,this.name,this.desing,this.salary,this.exp);
    }
}
var obj1= new Employee(101,"ram","finance manger",50000,2);
obj1.printemp()
var obj2= new Employee(102,"ravi","operations manger",40000,1);
obj2.printemp()
var obj3= new Employee(103,"dev","technology manger",70000,3);
obj3.printemp()
var obj4= new Employee(104,"sam","marketing manger",30000,1);
obj4.printemp()
var obj5= new Employee(101,"ram","legal manger",100000,4);
obj5.printemp()

//highest salaried emp
employees=[]
employees.push(obj1,obj2,obj3,obj4,obj5)

