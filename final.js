/** Problem -01 ( Divide the Asset ) */

//রহিম করিম ২ ভাই।  তাদের বাবার একটা জমি আছে  যার ক্ষেত্রফল  area নামে একটা ভ্যারিয়েবলে সেভ করা আছে।  তাদের বাবা তাদের কে সমান  ২  ভাগে সম্পত্তি ভাগ করে দিতে চান। এখন ২ জন ঠিক কতটুকু জমি পাবে সেটা প্রোগ্রাম করে বের করো এবং নিচের মতো করে আউটপুট হিসেবে দেখাও।

var area = 800;
//write your code here
 var result = area/2;
console.log(result);

/** Problem -02 ( Cycle or Laptop ) */
//মন্টূ  SSC পরীক্ষায় GPA 5 পেয়েছে ।  সে তার বাবার কাছে বায়না ধরেছে যে তাকে Cycle কিনে দিতে হবে কিংবা Laptop কিনে দিতে হবে।  মন্টুর বাবার  কাছে  যত টাকা আছে সেটা money নামে একটা ভ্যারিয়েবলে সেইভ করা আছে।  মন্টুর বাবা কিছু শর্তের ভিত্তি তে সিদ্ধান্ত নিবেন যে মন্টু কে কি কিনে দিবেন। 
//মন্টুর বাবার টাকা 25000 কিংবা তার থেকে বেশি  থাকলে Laptop কিনে দিবেন। 
//মন্টুর বাবার টাকা 10000 কিংবা তার থেকে বেশি  থাকলে Cycle কিনে দিবেন। 
//এরথেকে কম থাকলে মন্টু কে স্বান্তনা পুরষ্কার হিসেবে Chocolate কিনে দিবেন। 
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
//মাসের ১ তারিখে রহিমা বেগম কে ডাক্তার কিছু ঔষধ দিয়েছেন  যেটা ঠিক ৩  দিন পর পর খেতে হবে। রহিমা বেগম কে যতদিন ঔষধ খেতে হবে সেটা lastDay নামে একটা ভ্যারিয়েবলে সেইভ করা আছে। 
//রহিমা বেগম কোন কোন দিন ঔষধ খাবে এবং কোন কোন দিন ঔষধ খাবেনা  তার একটা লিস্ট তোমাকে প্রোগ্রামিং করে বানিয়ে দিতে হবে। এবং নিচের মতো করে আউটপুট দিতে হবে। 
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

 /** Problem -04 */
 //( পিসি তে অনেক অনেক ফাইল জমে গেছে। সুমনা pdf , docx ফাইল গুলো এবং যেসব ফাইলের নামের প্রথমে # আছে সেগুলো ছাড়া বাকী ফাইল  গুলো কে ডিলিট করে  দিতে চায়।  ফাইল এর  নাম fileName নামক ভ্যারিয়েবলে স্টোর করা আছে।   সুমনার জন্য একটা প্রোগ্রাম লিখে দাও  যেটা সুমনা কে নির্দেশনা দিবে ফাইল টি সে রাখবে না ডিলিট করবে। 
//ফাইলের নামের প্রথমে # থাকলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
//ফাইল টা pdf হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store" 
//ফাইল টা docx হলে প্রোগ্রাম টি আউটপুট দেখাবে  "Store"
//এর বাইরে অন্য সব কিছুর জন্য output দেখাবে  "Delete"	/** Problem 04 - (Delete / Store) */)

var fileName= "result.pdf";
//write your code here

if(
 fileName.startsWith("#")||
 fileName.endsWith(".pdf")||
 fileName.endsWith(".docx")
){
  console.log("store");
}
else{
    console.log("Delete");
}
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
