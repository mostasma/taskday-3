//Problem 06 :  Current Salary ( Challenge Problem ) 
//হাসান সাহেব সরকারী চাকুরী করেন ।  তিনি কত বছর ধরে  চাকুরী করেন  সেটা  experience নামে একটা ভ্যারিয়েবলে Save করা আছে । হাসান সাহেবে যে salary দিয়ে জয়েন করেছেন সেটা startingSalary নামে একটা ভ্যারিয়েবলে save করা আছে। 
//প্রতি বছর হাসান সাহেবের স্যালারি ৫% করে বৃদ্ধি হয় । হাসান সাহেবের বর্তমান স্যালারি  কত সেটা বের করার জন্য প্রোগ্রাম লেখো। দশমিকের পর সর্বোচ্চ ২ ডিজিট সংখ্যা থাকবে।  এবং নিচের মতো করে আউটপুট দেখাবে। 
//startingSalary
//(0 < number <=106 ) 
//experience
//(0 < number <=50 ) 
//Output ( up to 2 Decimal ) 
//45000
//30 
//194487.41


/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;

//write your code here
var rate = 0.05;
for(var year=1; year <=experience; year++){
    startingSalary *=(1+rate);
}
console.log( startingSalary.toFixed(2));





