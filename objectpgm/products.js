var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:50,aval_qty:5},
]
//print product names only
var product_names=products.map(item=>item.name)
console.log(product_names);

var p_names=products.map(item=>item.name.toUpperCase())
console.log(p_names);
//print all products whose mrp<50
var below_fifty=products.filter(item=>item.mrp<50)
console.log(below_fifty);
//print out of stock items
var out_of_stock=products.filter(item=>item.aval_qty==0)
console.log(out_of_stock);
//print product available in range of price 50-100
var mid_range=products.filter(item=>item.mrp>50&item.mrp<100)
console.log(mid_range);

var names_with_b=products.filter(item=>item.name[0]=='b')
console.log(names_with_b);

//if mrp>55 add offer of 5% mrp<50 offer:0%
var pdt_offer=products.filter(item=>(item.mrp>55?item.offer="5%":item.offer="0%"))
console.log(pdt_offer);

//costly product

var costly_pdt=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2)
console.log(costly_pdt);

var low_pdt=products.reduce((item1,item2)=>item1.mrp<item2.mrp?item1:item2)
console.log(low_pdt);

// find()
var product_details=products.find(item=>item.name=="carrot")
console.log(product_details);

var is_available=products.some(item=>item.mrp>30 & item.mrp<50)
console.log(is_available);
