var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1000,"raju","qa",20000,1],
    [1000,"nikhil","mrkt",30000,2]
    
]
//print employee names only
for(let employee of employees){
    console.log(employee[1]);
}
for(let emp of employees){
    if(emp[2]=="developer"){
        console.log(emp);
    }
}
for(let emp of employees){
    if(emp[3]<22000){
        console.log(emp);
    }
}