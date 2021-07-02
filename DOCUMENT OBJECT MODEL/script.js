function checkAge(){
    let age=document.querySelector("#age").value
    // let html_data=age>18?"eligible":"noteligible"
    // document.querySelector("#result").innerHTML=html_data
     let html_data="";
     if(age>=18){
         html_data=`<p style="color:seagreen;">eligible</p>`
    
     }
     else{
         html_data=`<p style="color:red;">not eligible</p>`
     }
     result.innerHTML=html_data
}