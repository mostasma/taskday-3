
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