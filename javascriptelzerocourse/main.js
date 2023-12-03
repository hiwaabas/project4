
// lesson 7
// window.alert("hello from js file");
// console.log("hellow console");
// document.write("<h2>hy</h2> ");

// lesson 8 console methode
// console.error("error");
// console.error("log");
// console.table(["osama","ahmad","laila"]);
// console.log("hello from %c js file","color: red; font-size: 40px");
// console.log("hi %c hello %c hiwa","color: yellow; font-size: 50px","color: blue; font-size: 40px")

// lesson 9 ES6 
// var myName = "osama";
// console.log("hello" + myName);
// console.log(`hello ${myName}`);
// var Name="fatoosh";
// console.log("hello" + Name);
// console.log(`hello ${Name}`);

// lesson 10 datatype 
// console.log(typeof"hiwa");
// console.log(typeof 55);
// console.log(typeof 55.2);
// // array 
// console.log(typeof [5, 6, 7]);
// console.log(typeof ["osama", "saiid", "ahmad"]);
// console.log(typeof {name :"hiwa",age:29 ,country:"homs" });
// console.log(typeof undefined);
// console.log(typeof null)


// lesson 11 variable 
// var Name = "hiwa",
//     age = 29;
// var hello = "hi hi";
// console.log(Name);
// console.log(age);    
// console.log(age);    
// console.log(Name); 
// helloo.innerHTML = "no no iam not hiwa iam ella";//لم ينجح الامر

// lesson 12 writing rules 
// do not start Number 
// no space 
// can i start with underscore and  $ 

// lesson 13 redeclare 
// var a = 1;
// var a = 3;
// console.log(a);
// let b = 4;
// console.log(b);
// //var it will add to window object but let and const will not added
// var aabb = 15;

// lesson 14 string syntax 
// console.log("hello how are you 'hiwa'");
// console.log('hello hi "lilav"');
// console.log('hello hi \"lilav\"');
// console.log("hello elzero \
// elzero \
// web school");
// console.log("elzero\nweb\nschool");
// console.log("hello\\lilav");

// lesson 15 concatination 
// let a = 15;
// let b = 20;
// document.write(a + b);
// document.write("\n");
// document.write(a);

// let d= "hiwa";
// let e = "abbas";
// document.write(d + e); 
// let h =" ";
// document.write(d + h + e);
// document.write(d + " " + e);

// lesson 16 template literals (template strings)
// let a = "we love";
// let b = "javascript";
// let c = "and";
// let d = "programming";
// console.log(a+" "+b+
// "\n"+c+" "+d);
// console.log(`${a} ${b} ${c} ${d}`);
// console.log(`${a} ${b}
// ${c} ${d}`);
// console.log("\"\"");
// console.log(`${a} ${b} "" '' \\ ${c} ${d}`);
// let e = 5;
// let f = 10;
// console.log(`${e*f}`);
// in Es6 way 
// let title = "elzero";
// let desk = "elzero web school";
// let markup = `
// <div class="card">
//   <div class="child">
//     <h2>Title ${title}</h2>
//     <p>Paragraph ${desk}</p>
//   </div>
// </div>
// `;
// document.write(markup);

// lesson 17 c
// let theTitle = "Elzero";
// let theDescription = "Elzero Web School";
// let theDate = 25/10;
// let v = `
// <div class="card">
//     <h3>${theTitle}</h3>
//     <p>${theDescription}</p>
//     <span>${theDate}</span>
// </div>
// <div class="card">
//     <h3>${theTitle}</h3>
//     <p>${theDescription}</p>
//     <span>${theDate}</span>
// </div>
// <div class="card">
//     <h3>${theTitle}</h3>
//     <p>${theDescription}</p>
//     <span>${theDate}</span>
// </div>
// <div class="card">
//     <h3>${theTitle}</h3>
//     <p>${theDescription}</p>
//     <span>${theDate}</span>
// </div>
// `;
// document.write(`${v}`);


// lesson 18 arithmetic operators ****
// console.log(10-10);
// console.log(10-20);
// console.log(10+10);
// console.log(10+"osama");
// console.log(typeof NaN);
// console.log(10*10);
// console.log(10*-10);
// console.log(10/10);
// console.log(10/3);
// console.log(10**4);
// console.log(10*10*10*10);
// console.log(10%2);
// console.log(9%2);//remove 1
// increment++ and decrement--
// num = 1;
// console.log(++num);//pre
// console.log(num++);//post
// console.log(num);
// console.log(--num);//pre
// console.log(num--);//post
// console.log(num);

// lesson 19 unary plus and negation 
// unary plus + 
// console.log(+100);
// console.log(+"100");
// console.log(+"-100");
// console.log(+"osama");
// console.log(+"2.15");
// console.log(+0xff);
// console.log(+null);
// console.log(+false);
// console.log(+true);
// // unary negation - 
// console.log(-100);
// console.log(-"100");
// console.log(-"-100");
// console.log(-"osama");
// console.log(-"2.5");
// console.log(-0xff);
// console.log(-null);
// console.log(-false);
// console.log(-true);
// // number constructer move string to number
// console.log(Number("100"));

// lesson 20 type coercion (type casting) 
// let a = "10";
// let b = 20 ;
// let c = true ;
// console.log(a + b);
// console.log(+a + b);
// console.log(a - b);
// console.log(-a - b);
// console.log("");
// console.log(+"");
// console.log(false);
// console.log(+false);
// console.log(false-true);
// console.log(+false-true);
// console.log(-false-true);
// console.log(-false+true);
// console.log(+false- -true);
// console.log(""-2);
// console.log(-""-2);
// console.log(""+2);
// console.log(+""+2);
// // applay on variable 
// console.log(a + c);
// console.log(+a + c);
// console.log(+a + +c);
// console.log(a + b + c);

// lesson 21 asignment operators
// let a = 10 ;
// a = a + 20 ;
// a = a + 70 ;
// a += 20 ;
// a -= 20 ;
// a /= 2 ;
// a *= 2 ;
// console.log(a)

// lesson 22 challenges
// challenge 1 
// let a = 10 ;
// let b = "20";
// let c = 80 ;
// console.log( ++a + +b++ + +c++ - +a++);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(13-21+81+13+14)
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(--c + +b + --a * +b++ - +b *a + --a - +true);
// console.log(81 + 21 + 13*21 - 22*13 + 12 -1)
// console.log(a);
// console.log(b);
// console.log(c);
// challenge 2
// let d = "-100";
// let e = "20";
// let f = 30 ;
// let g = true;
// console.log(- +d * +e);//2000
//console.log(-d + ++g * ++e + ++f);//173


// lesson 23 number
// console.log(1000000);
// console.log(1_000_000);
// console.log(1000000.0);
// console.log(10 ** 6);
// console.log(10*10*10*10*10*10);
// console.log(1e6);
// console.log(Number("500"));
// console.log(typeof(Number));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE + 20000000);//we can not add number to max-value 

// lesson 24 method of number 
// console.log((100).toString());
// console.log(100..toString());

// console.log(100.2555.toFixed(3));//it is string

// console.log(parseInt("100 osama"));
// console.log(parseInt("osama 100 osama"));
// console.log(parseInt("100.05 osama"));
// console.log(parseInt(100.05));

// console.log(Number("100 osama"));
// console.log(+"100 osama");

// console.log(Number.isInteger("100"));
// console.log(Number.isInteger(100.500));
// console.log(Number.isInteger(100));

// console.log(Number.isNaN(100 /52));
// console.log(Number.isNaN("100"/"osama"));
// console.log(Number.isNaN("osama"/20));

// lesson 25 math object
// console.log(Math.round(99.2));
// console.log(Math.round(99.5));

// console.log(Math.ceil(99.2));
// console.log(Math.floor(99.9));

// console.log(Math.min(10, 20, 100, -100, 90));
// console.log(Math.max(10, 20, 100, -100, 90));

// console.log(Math.pow(2, 4));//it is like 2**4

// console.log(Math.random());//empty

// console.log(Math.trunc(99.5));//return integer


// lesson 26 challenge (number )
// let a = 1_00;
// let b = 2_00.5; 
// let c = 1e2; 
// let d = 2.4; 

// console.log(Math.trunc(Math.min(a, b, c, d)));

// console.log(Math.pow(a, Math.trunc(d)));

// console.log(Math.trunc(d));
// console.log(Math.round(d));
// console.log(Math.floor(d));
// console.log(Math.trunc(Math.min(a, b, c, d)));

// console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2));

// console.log(Math.ceil(Math.trunc(b)/Math.ceil(d)));


// lesson 27  string methods part1
// let theName = "  ahmad  ";
// let theList = [1,2,3,4,5];
// console.log(theName);//print name with space
// console.log(theName.trim());//remove space

// console.log(theName[5]);//pring undefined
// console.log(theName[1]);//with index[]

// console.log(theName.charAt(1));//with .charat() 
// console.log(theName.charAt(5));//do not pring undefined

// console.log(theName.length);//pring the length as number
// console.log(theName.trim());//bring the name without space

// console.log(theName.toUpperCase());//change style to upper case
// console.log(theName.toLowerCase());//change style to lower case

// console.log(theName.trim().charAt(2).toUpperCase);//remove space then bring index [2] then uppercase



// lesson 28  string methods part2
// let a = "elzero|web|school";
// console.log(a.indexOf("web"));//start from 0 return number
// console.log(a.indexOf("web",8));//not existed return -1

// console.log(a.indexOf("o"));//the first o/start search from the begening/ return number
// console.log(a.lastIndexOf("o"));//the last o /start search from end /return number

// console.log(a.slice(0));
// console.log(a.slice(2,5));//include 2 but do not including 5
// console.log(a.slice(-5,-3));//do not including begening and end /start from end as index

// console.log(a.split(""));//split each letter
// console.log(a.split("|"));
// console.log(a.split("o",2));//do not include "o"

// console.log(a.repeat(3));//repeat the string 3 times



// lesson 29 string methods part3 
// let a = "elzero|web|school";
// console.log(a.substring(2));
// console.log(a.substring(2,6));
// console.log(a.substring(6,2));//he make swap between 2 and 6
// console.log(a.substring(-8));//each number younger than zero it consider start from 0
// console.log(a.substring(-8,6));//(0 to 6)do take 6
// console.log(a.length);
// console.log(a.length - 1);
// console.log(a.substring(a.length - 1));//bring last index
// console.log(a.substring(a.length - 5));//the last five letter
// console.log(a.substring(a.length - 5,a.length - 3));
// console.log(a.substr(0));//appear after 0
// console.log(a.substr(0,6));
// console.log(a.substr(17));//empty//appear after 17
// console.log(a.substr(-3));
// console.log(a.substr(-5,2));//يعد من الاخر ويرجع برجوع حرفين ch
// console.log(a.substr(-5),a.substr(-2));
// console.log(a.includes("web"));//true or false
// console.log(a.includes("web",8));//start search after index 8
// console.log(a.startsWith("e"));
// console.log(a.startsWith("e",3));
// console.log(a.endsWith("e"));
// console.log(a.endsWith("e",4));

// lesson 30 challenge


// lesson 31 comparison operators 
// console.log(10 =="10");
// console.log(-10 == "-10");
// console.log(10 != "10");

// console.log(10 === "10");
// console.log(10 !== "10");
// console.log(10 !== 10);

// console.log(10 > 5);
// console.log(10 > 10);
// console.log(10 >= 10);

// console.log(10 < 5);
// console.log(10 < 10);
// console.log(10 <= 2);
// console.log("osama"==="ahmad");
// console.log(typeof"osama"===typeof"ahmad");

// lesson 32 logical operators 
// console.log(true);
// console.log(!true);
// console.log(!(10 =="10"));
// console.log(10 =="10" && 10 > 5 && 5 > 2);
// console.log(10 =="10" || 10 < 5 || 5 < 2);

// lesson 33 
// if condition
// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "egypt";
// if (discount === true) {
//     price -= discountAmount;
// }
// console.log(price);

// else if condition
// let price = 100;
// let discount = true;
// let discountAmount = 30;
// let country = "egypt";
// if (discount === false) {
//     price -= discountAmount;
// }else if(country === "egypt"){
//     price -= discountAmount;
// }
// console.log(price);

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "egypt";
// if (discount === false) {
//     price -= discountAmount;
// }else if(country === "egypt"){
//     price -= 70;
// }
// console.log(price);

// else condition
// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "egypt";
// if (discount === true) {
//     price -= discountAmount;
// }else if(country === "syria"){
//     price -= 70;
// }else {
//     price -= 10;
// }
// console.log(price);

// lesson 34 nested if condition 
// if the father is true and son not true it will not go to another father 
// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "egypt";
// let student = true;
// if (discount === true) {//father
//     price -= discountAmount;
// }else if(country === "egypt"){//father
//     if (student === false){//son
//         price -= discountAmount + 30;
//     }
  
// }else {//father
//     price -= 10;
// }
// console.log(price);

// simple example -+

// let price = 100;
// let discount = false;
// let discountAmount = 30;
// let country = "egypt";
// let student = true;
// if (discount === true) {
//     price -= discountAmount;
// }else if(country === "gypt"){
//     if (student === false){
//         price -= discountAmount + 30;
//     }
  
// }else {
//     price -= 10;
// }
// console.log(price);


// lesson 35 conditional ternary  
// let theName = "mona";
// let theGender = "male";
// let theAge = 50;
// if(theGender ==="male"){
//     console.log("mr")
// }else{
//     console.log("mrs")
// }
// example ternary operator (condition ? if true : if false)
// theGender ==="male" ? console.log("mr") : console.log("mrs");
// let a = theGender ==="male" ? "mr" : "mrs";
// console.log(a);
// console.log( theGender ==="male" ? console.log("mr") : console.log("mrs"));
// console.log(`hello ${theGender ==="male" ? "mr" : "mrs"} ${theName}`);

// many condition 
// theAge > 50 //if
// ? console.log("old") 
// : theAge < 50 //else if
// ? console.log("young") 
// : theAge = 50 && theAge > 20 //else if
// ? console.log("20 to 50") 
// : console.log("none");//else


// lesson 36 logical operator and nullish coalescing operator 
// console.log(Boolean(100));
// console.log(Boolean(-100));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(""));

// let price = 500;//you will change this value to see the result (null "" 0 number)

// console.log(`the price is ${price || 200}`);
// console.log(`the price is ${price ?? 200}`);
