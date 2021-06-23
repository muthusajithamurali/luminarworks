var product=[
    [100,"rice powder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantancy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10]
]
for(let shop of product){
    console.log(shop[1]);
}
for(let stock of product){
    if(!stock[3]==0){
    console.log(stock[3]);
    }
}
for(let cost of product){
    if(cost[2]>200){
        console.log(cost[2]);
    }
}
for(let cost of product){
    if(cost[2]<10){
        console.log(cost[2]);
    }
}
for(let stock of product){
    if(stock=="boost"){
    console.log(stock[2]);
    }


}