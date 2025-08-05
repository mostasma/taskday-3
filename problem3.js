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