var flag=0;
var c_name1="AbAC"
var c_name2="BABC"
    

for(let i=0;i<=c_name1;i++){
    
    for(let j=i+1;j<=c_name2;j++){
        if(c_name1[i]==c_name2[j]){
         flag++;
         break;
        }
        else{
            if(flag!==0){
                console.log("repeated element",c_name1[i],c_name2[j]);
            }
            else{
                console.log("not repeated");
            }
        }    
        }
    
    
}
