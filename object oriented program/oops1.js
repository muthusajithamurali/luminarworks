class student{
    constructor(rol,nme,course,total){
        this.name=nme;
        this.roll=rol;
        this.courses=course;
        this.total=total;
    }
    printstudent(){
        console.log(this.name,this.roll,this.courses,this.total);
    }
}

var obj=new student("nithi",19,"mean",450)

obj.printstudent()