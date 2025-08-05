//Problem 05 - PH Email Generator
//{ name: string , roll: number ,department: string  }


//উপরের অব্জেক্ট এর Structure টি লক্ষ্য করো।  ph university তে  পড়া student এর Data   student  নামের একটা ভ্যারিয়েবলে সেইভ করা আছে  ।  তোমাকে এমন একটা প্রোগ্রাম লিখতে হবে যেটা   student  অব্জেক্ট এর ডাটা এর উপর ভিত্তি করে  একটা ইমেইল  জেনারেট করে দেবে। ইমেইল টা হবে ঠিক নিচের স্ট্রাকচারে 
//name
//roll
//.
//department 
//@ph.ac.bd

//নিচের আউটপুট গুলো লক্ষ্য করো। 
//Value of  Student ( object ) 
//Output (string)
//{ name: "jhankar" , roll: 1014 ,department: "cse"  }
//jhankar1014.cse@ph.ac.bd
//{ name: "monu" , roll: 99,department: "eee"  }
//monu99.eee@ph.ac.bd
//{ name: "mewo" , roll: 96 ,department: "cse"  }
//mewo96.cse@ph.ac.bd

//Solve

var student= { name: "jhankar" , roll: 1014 ,department: "cse"};
//write your code here


var student ={
    name: "mewo",
    roll: 96,
    department:"cse" 
}

console.log(student.name+student.roll+"." +student.department +"@ph.ac.bd");
