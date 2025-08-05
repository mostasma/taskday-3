/** Problem -01 ( Divide the Asset ) */
var area = 800;
//write your code here
 var result = area/2;
console.log(result);



/** Problem -02 ( Cycle or Laptop ) */
var money = 9999;
//write your code here

if (money >= 25000) {
    console.log("Laptop");
} else if (money >= 10000) {
    console.log("Cycle");
} else {
    console.log("Chocolate");
}


/** Problem -03 ( Medicine Planner ) */
var lastDay = 15;
//write your code here
 for (var Day = 1; Day <=lastDay; Day++){
    if(Day % 3 === 1){
        console.log("Day" + Day + ": take medicine");
    }
    else{
       console.log("Day" + Day + ":no medicine");
    }
 }