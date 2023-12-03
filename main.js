// onload = function() {
// document.querySelector('h1').style.color = 'red';
// }
// 3
// document.write('hello world');
// console.log('hello console');
// window.alert('hi alert');
//4
// document.querySelector('h1').style.color = 'blue';
// document.write('<h1>kkkkkk</h1>');
// console.log('fatima');
// console.error('mistake');
// console.log("document.write('hi hiwa');");
// window.print();
// 5 
// document.write('<h1>test</h1>');
// document.write('<h1>test</h1>');
// document.write('<h1>test</h1>');
// document.write('<h1>test</h1>');
// document.write('<h1>test</h1>');
// document.write('<h1>test</h1>');
// 6 data type
// document.write('hello string');
// document.write('5'+'10');
// document.write("hello string");
// document.write(5);
// document.write(5+5);
// document.write(typeof 10);
// document.write(typeof 1.07);
// document.write(typeof 0.555555);
// document.write(typeof null);//object
// document.write(typeof '10');//string
// document.write(typeof undefined);
// 7 declare variable let var const
// var name ;
// var test = "#hash"
// name = "ahmed";
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(test);

// var can = 10;
// can = 9 ;
// console.log(can);

// let jan = 10;
// jan = 9 ;
// console.log(jan);

// const jane = 10;
// console.log(jane);

// var r = "like";
// var r = "a";
// console.log(r);

// let r = "like";
// let r = "a";
// console.log(r);
// 8 concatination الربط 
// let l = 5;
// let h = "tomato";
// console.log(l + h);
// let r = 6;
// console.log(l+r);
// let k = " ";
// console.log(l+k+h);
// console.log("hello world with"+ l + "and" + h);
// console.log(`hello world with number ${l} and welcome some ${h}`);
// 9 العمليات الحسابية
// let num = 10 ;
// let nom = 10 ;
// console.log(num + nom);
// console.log('num' + nom);

// console.log(num - nom);
// console.log('num'- nom);

// console.log(num * nom);
// console.log('num' * nom);

// console.log(num ** nom);
// console.log('num' ** nom);

// console.log(num / nom);
// console.log('num' / nom);

// console.log(num % nom);

// num = num + 2;
// console.log(num);
// num += 2;
// console.log(num);

// num++;
// console.log(num);

// num--;
// console.log(num);
// console.log(num++);
// console.log(num);

// console.log(++num);
// console.log(num);

// 10 تحويل النصوص الى ارقام
// console.log( +'5' + +'5');
// console.log(+'5');
// console.log(-'5');
// console.log(+'ahmad');
// console.log(+true);
// console.log(+false);
// console.log(+undefined);
// console.log(+null);
// 11 تحويل الارقام بطرق مختلفة
// console.log('4.5');
// console.log(Number('4.5'));
// console.log(Number('4.5 ahmad'));
// console.log(typeof(Number('4.5')));
// console.log(parseInt('4.5'));
// console.log(parseInt('4.5 ahmad'));
// console.log(parseInt('ahmad 4.5 ahmad'));
// console.log(parseFloat('4.5'));
// 12
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_VALUE);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.isSafeInteger(55));
// console.log(Number.isInteger('5'));
// console.log(Number.isInteger(5));
// console.log(Number.isNaN(5));
// console.log(Number.isNaN('5'));
// console.log(Number.isNaN('ahmad 5'));
// console.log(typeof(Number('5 ahmad')));
// console.log(Number.isNaN('ahmad' + 5  ));
// console.log(Number.isNaN('ahmad' - 5  ));
// console.log(Number.isNaN('ahmad' * 5  ));
// 13 math important
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.abs(-5));
// console.log(Math.sqrt(9));
// console.log(Math.pow(2,3));
// console.log(Math.round(10.5));
// console.log(Math.round(10.4));
// console.log(Math.ceil(10.4));
// console.log(Math.ceil(10.5));
// console.log(Math.floor(10.5));
// console.log(Math.floor(10.4));
// console.log(Math.min(10,5,6,-5));
// console.log(Math.max(10,5,4));
// 14   برنامج ضريبة ذكاء بنسبة %2.5
// let zakah = window.prompt('enter zakah value');
// console.log(0.025 * zakah + 'ليرة سورية');
// 15 تحويل الرقم لنص
// let x = 5;
// console.log(typeof String(x));
// console.log(typeof x.toString());
// console.log(typeof (100).toString());
// console.log(typeof 100..toString());
// 16 string
// let name = 'alik abbas ali li';
// console.log(name.repeat(1000));
// console.log (name[0]);

// console.log (name[10]);
// console.log (name.charAt(10));
// console.log (name.indexOf('l'));
// console.log (name.indexOf('ali'));
// console.log (name.lastIndexOf('l'));
// console.log (name.lastIndexOf(''));
// console.log (name.slice(2));
// console.log (name.slice(2,4));
// console.log (name.split('i'));
// console.log (name.split('i',4));//number of split
// console.log (name.split(' '));
// // 17  
// let name = 'i love javascript';
// // console.log(name.slice());
// console.log(name.slice(-6));//يقبل القيمة السالبة //t=-1,p=-2
// console.log(name.slice(-6,-4));

// console.log(name.substring(2,6));
// console.log(name.substr(2,7));//7 عدد الاحرف 

// 18
// let name = 'i love javascript';
// console.log (name.indexOf(''));
// console.log (name.lastIndexOf(''));
// console.log (name.includes('l',1));
// console.log(name.startsWith('i'));
// console.log(name.startsWith('o',3));//لتعامل مع الاحرف وليس مع اينديكس او الفراغات

// console.log(name.endsWith('t'));
// console.log(name.endsWith('',2));//التعامل مع الاحرف يعتبر الفراغ ايضا حرف
// console.log(name.endsWith('l',3));//هل الحرف الرابع هو حرف اللام

// 19 array
// let names = ['ahmad','ali','hiwa' ];
// console.log(names);
// console.log(names.length);
// console.log(names.length-2);
// console.log(names[names.length-2]);

// let objects = [1,2,3,'ahmad',true,null,undefined,[1,2,[5,6,7],3]];//nested array
// console.log(objects[7][2][1]);

// let names = ['ahmad','abd','ali'];
// names[0] = 'hiosh';
// console.log(names);

// 20 اضافة عناصر وحذف العناصر من المصفوفة
// let names = ['ahmed','ali','mazen','hiwa']
// names.unshift('roda','rami')
// console.log(names);
// names.push('lila')
// console.log(names);
// names.shift()
// // names.shift()
// // names.shift()
// // names.shift()
// // names.shift()
// // names.shift()
// // names.shift()

// console.log(names.shift());
// console.log(names);
// console.log(names.pop());
// console.log(names);

// 21 splice / slice
// let names = ['ahmed','ali','mazen','hiwa'];
// names.splice(1,3,'nafia')
// console.log(names);
// console.log(names.slice(0,1));
// console.log(names.slice(-3,-1));//اخذ نسخة من النهاية لا تتضمن القيمة الثانية
// console.log(names.slice(-1,-3));//لا يجوز الكبير قبل الصغير بالسالب

// 22  البحث في المصفوفة
// let names = ['ahmed','ali','mazen','hiwa','ahmed','sami'];
// console.log(names.indexOf('ahmed'))
// console.log(names.indexOf('ahmed',1))
// console.log(names.lastIndexOf('ahmed'))
// console.log(names.lastIndexOf('ahmed',2))//من عند 2 ابدا البحث
// console.log(names.lastIndexOf('hiwa',-2))
// console.log(names.includes('hiwa'))
// console.log(names.includes('hiwa',2))
// console.log(names.includes('hiwa',3))
// console.log(names.includes('hiwa',4))
// console.log(names.includes('hiwa',-2))
// console.log(names.includes('hiwa',-1))
// console.log(names.includes('hiwa',-4))

// 23 ترتيب المصفوفة وعكس الترتيب 
// let names = ['ahmed','ali','mazen','hiwa','ahmed','sami'];
// console.log(names.reverse())//عكس ترتيب المصفوفة
// console.log(names.sort())
// let arr = [1,2,3,8,6,9]
// console.log(arr.sort())

// 24 concat and join array 
// let arr1 = ['ahmed','ali','mazen','hiwa','ahmed','sami'];
// let arr2 = ['jano','ali','mazen','hiwa','ahmed','sami'];
// arr1 = arr1 + arr2
// arr1 += arr2
// console.log(arr1);
// console.log(typeof (arr1 = arr1 + arr2));
// console.log(arr1);
// console.log(arr1.concat(arr2));
// console.log(typeof arr1.concat(arr2));
// console.log(arr1);
// console.log(arr1.join('*'));
// console.log(arr1.join('/'));
// console.log(typeof arr1.join('*'));

// 25 المقارنة
// let x = 'ahmed';
// let y = 'ahmed';
// let b = 'Ahmed'
// console.log(x==y);
// console.log(x==b);//حساس لحالة الاحرف 

// let pop = prompt('enter your email');
// let email = 'ahmed@gmail.com';
// console.log(pop == email)

// console.log(pop.toUpperCase() == email)
// console.log(pop.toLowerCase() == email)
// let leng = '  ahmed '
// console.log(leng.trim().length);//يزيل المسافات من البداية والنهاية اي يحسب طول المصفوفة بدون مسافات البداية والنهاية 
// console.log(leng.length);

// 26 اشارات المقارنة <= >= < > != && || return true or false 

// 27 الجمل الشرطية 
// let rol = prompt('enter your section')
// if(rol == 'admin')
// {
//     document.write('creat ,update , delete')
// }
// else if(rol == 'boss')
// {
//     document.write('creat , update')
// }
// else
// {
//     document.write('hello')

// }

// 28 مثال عن الشروط
// let result = prompt('enter your result')
// if(result >= 90)
// {
//     document.write('excellant')
// }
// else if(result >= 80)
// {
//     document.write('very good')
// }
// else if(result >= 70)
// {
//     document.write('good')

// }else if(result >= 50)
// {
//     document.write('acceptable')

// }
// else
// {
//     document.write('fail')

// }
// 29 كتابة الشروط بطريقة جديدة
// let age = prompt('enter your age')
// age >= 18?
// document.write('hello user')
// :document.write('sorry you are not user')

// let result = age > 18?
// 'hello user'
// :age == 18?
// 'you are in 18 now'
// :'sorry you are young'
// console.log(result);

// 30 الاداة الشرطية الثانية switch 
// let role = prompt('enter your section');
// switch(role)
// {
//     case 'admin':
//         document.write('you have all permission');
//         breake;
//     case 'moderator':
//         document.write('you have some permission');
//         breake;
//     default :
//         document.write('you can just read');
// }

// 31 loop with for 
// عداد تصاعدي
// for(let s = 0; s<=3 ;s++)
// {
//     console.log('ahmed '+ s)
//     console.log(s)
// }
// عداد تنازلي
// for(let s = 10; s >= 5 ;s--)
// {
//     console.log(s)
// }

// 32 طباعة محتوى مصفوفة او احرف سلسلة باستحدام for
// let arr = ['ahmed','ali','mazen','hiwa','ahmed','sami'];
// for(i=0 ; i< arr.length ; i++)
// {
// console.log(arr[i]);
// }
// let nam = 'hiwa'
// for(i=0 ; i< nam.length ; i++)
// {
// console.log(nam[i]);
// }
// example
// let arr = ['ahmed','ali','mazen','hiwa','ahmed','sami'];
// for(i=arr.length-1 ; i>=0 ; i--)
// {
// console.log(arr[i]);
// }

// 33 nested loop for inside for
// let cars = ['bmv','mercedes','honda'];
// let models = ['2021','2022','2023'];
// let colors = ['black','blue','red'];
// for(i=0;i<cars.length;i++)
// {
//     console.log(`cars ${cars[i]}`);

//     for(j=0;j<models.length;j++)
// {
//     console.log(`models: ${models[j]}`)
// }
//     for(x=0;x<colors.length;x++)
// {
//     console.log(`colors: ${colors[x]}`)
// }
// console.log('---------------')
// }

// 34 استثناء عرض عناصر من المصفوفة او ايقاف المصفوفة عنظ حد معين
// let users = ['kawa','hani',1,2,3,'ali','saiid'];

// for(i=0 ; i<users.length ; i++)
// {
//     if(typeof users[i]=='number')
//     {
//         continue;
//     }
//     console.log(users[i]);

// }
//استثني هاني
// for(i=0 ; i<users.length ; i++)
// {
//     if(users[i]=='hani')
//     {
//         continue;
//     }
//     console.log(users[i]);

// }
//do not show hani
// for(i=0 ; i<users.length ; i++)
// {
//     if(users[i]=='hani')
//     {
//         breake;
//     }
//     console.log(users[i]);

// }
//show hani
// for(i=0;i<users.length;i++)
// {
//     console.log(users[i]);

//     if(users[i]=='hani')
//     {
//         break;
//     }
// }

// 35 while /do while
// let i = 0;
// while(i < 3)
// {
//     document.write('<h1>hallo world</h1>')
//     i++;
// }

// let i = 0;
// while(false)
// {
//     document.write('<h1>hallo world</h1>');
//     i++;
// }

// let i = 0;
// do{
//     document.write('<h1>hallo world</h1>')
//     i++;
// }while(i < 3);

// let i = 0;
// do{
//     document.write('<h1>hallo world</h1>')
//     i++;
// }while(false);

// 36 
// function hello()
// {
//     console.log('hello world');
// }
// hello();

// example
// let pro = prompt('enter your name')
// function hello(pro)
// {
//     console.log(`hello  ${pro}`);
// }
// hello(pro);

// example
// function hello(pro)
// {
//     console.log(`hello  ${pro}`);
// }
// hello('world');
// let x = prompt('enter age')
// function age(x)
// {
//     let j = x*200;
//     console.log(j);
// }
// age(x);

// example 
// function age(x)
// {
//     let j = x*200;
//     console.log(j);
// }
// age(2);

// example
// let x =prompt('price');
// let y =prompt('taxes');
// let z =prompt('ads');
// function pro(x,y,z)
// {
//    let product= x + y ;
//    let result= product + z;
//    console.log(product);
//    console.log(result);
// }
// pro(x,y,z);

// example
// let x =prompt('price');
// let y =prompt('taxes');
// let z =prompt('ads');
// function pro(x,y,z)
// {
//    let product= +x + +y + +z;
//    console.log(product);
// }
// pro(x,y,z);

// example
// function pro(x,y,z)
// {
//    let product= x + y;
//    let result= product + z;
//    console.log(product);
//    console.log(result);
// }
// pro(2,2,2);
// 37 return function 
// local variable we can call it just in same function
// function hh()
// {
//     let x =10;
//     console.log(x);
// }
// hh();
// console.log(x);
// global function we can call it in every where

// function days(age)
// {
//     let result = age * 365;
//     return result;
// }
// let x = days(1);
// console.log(x);
// let hour;
// let x=5;

// function ageofhours(age)
// {
//     let result = age * 24;
//     console.log(x);
//     return result;

// }
// let hour = ageofhours(2);
// console.log(hour + ' hours');

// 38 hoisting function

// var x ;
// console.log(x);
// x = 10 ;

// let x = 2;
// console.log(x)

// console.log(hh());
// function hh()
// {
//     return 1;
// }


// let kk = function()
// {
//     return 5;
// }
// console.log(kk());

// 39 scope global/local
// var x = 10 ;
// console.log(x);
// function kk()
// {
// console.log(x);
// }
// kk();
// console.log(x);

// selfe call/envoke 
// (function()
// {
// console.log('hello hiwa')
// })();

// console.log(x())
// function x()
// {
//     function y(){return 1;}
//     return y();
//     function y(){return 0;}
// }


// 40 arguments
// function calc(age=0)
// {
//     console.log(age + 360);
// }
// calc();
// example
// function calc(age=0)
// {
//     console.log(age * 360);
// }
// calc();
// example
// function calc(age='')
// {
//     console.log(`hello  ${age}`);
// }
// calc();
// example جمع عناصر مصفوفة 
// function calc(...numbers)
// {
//     console.log(numbers);
//     let result =0;
//     for(let i=0;i<numbers.length;i++)
//     {
//         result += numbers[i];

//     }
//     console.log(result)

// }
// calc(0,1,2,5,8,4);

// 41 arrow function
// let x = function(){
//     return 1;
// }
// console.log(x());
// arrow function 
// let x = () => {
//     return 1;
// }
// console.log(x());

// just one statement and one line we can remove {} and return
// let x = () => 1;
// console.log(x());

// remove() add _ no parameters
// let x = _ => 1;
// console.log(x());

// remove () one parameter
// let x = num => num*2;
// console.log(x(5));

// 42 object (methode and properties)inside object

// let car = {};
// console.log(typeof car);


// let car = {
//     title :'bmw',
//     price :500,
//     color :['red','blue','black'],
//     model :2021 ,

//     hello:function(){
//         return 'hello';
//     }
// }
// console.log(car);
// console.log(car.title);
// console.log(car.color[0]);
// console.log(car.hello);
// console.log(car.hello());
// console.log(car.price);



// 43 explain object 
// let x = prompt('enter your age');

// let users = {
//     // properties
//     firstname:'abbas',
//     lastname:'abdalsalam',
//     email:'abba@gmail.com',
//     age:x,
//     skills:['html','css','js','php'],
//     active:true,
//     phonenumber:{
//         first:'01234567',
//         second:'21346870'
//     },
//     address:{
//         egypt:'almohandeseen',
//         uae:'abu dabhi'
//     },
//     // method 
//     isactive:function()
//     {
//         if(users.active===true){
//             return 'hello user';
//         }
//         else{
//             return 'sorry you are not active';
//         }
//     },
//     getage:function(){
//         if(users.age>=18){
//             return 'available';
//         }
//         else{
//             return 'unavailable'
//         }
//     },
      
// };
// console.log(users);
// console.log(users.firstname);
// console.log(users['firstname']);
// // access to object 
// console.log(users.phonenumber);
// console.log(users.phonenumber.second);
// console.log(users['phonenumber']['second']);

// console.log(users.isactive());
// console.log(users.getage());
// console.log(users['getage']());

// 44 create object 
// let user = {
//     name:'imad'
// }
// console.log(user.name)
// user.name ='amed';
// console.log(user.name)
// user['age'] = 25; 
// console.log(user['age'])
// example 
// let user = new Object();//object or boolean or string or number 
// user.name = 'kawa';
// console.log(user.name);
// example 
// let user = new String();
// user.name = 'kawa';
// console.log(user.name);
// example 
// let user = new Object(
//     {
//         name:'google',
//         age:25,
//         type:'search engine'
//     }
// );
// user.name = 'kawa';
// console.log(user.name);
// console.log(user);

// 45 this keyword
// let user = {
//     name: 'ahmed',
//     hello:function(){
//         return user.name
//     },

// }
// console.log(user.hello())
// example 
// let user = {
//     name: 'ahmed',
//     hello:function(){
//         return this.name
//     },

// }
// console.log(user.hello())
// example 
// let x = this ;
// console.log(x);
// console.log(x == window);
// this.alert();
// example
// function x(){
//     return this;
// }
// console.log(x())
// console.log(x()==window)
// example
// x = function(){
//     return 'hello';
// }
// console.log(x())
// example
// "use strict";
// let x = function(){
//     return this;
// }
// console.log(x())

// 46 copy object
// let user = {
//     name:'abd',

//     getname:function(){
//         return `hello ${this.name}`;
//     }
// }
// let usere = Object.create(user,{
//     // name:{value:'hiwa'},
//     age:{value:24}
// });
// usere.name='ali';//modify
// usere.age=25;//add

// console.log(usere.getname())
// console.log(usere.age)
// console.log(usere.name)
// console.log(user.name)
// console.log(usere)


// 47 merge object 
// let a1 = {
//     num1:1,
//     hello:function(){
//         return 'hello world'
//     }
// }
// let a2 = {
//     num2:2
// }
// let a3 = {
//     num3:3
// }
// let a4 = Object.assign(a1,a2,a3,{
//     num4:4
// });
// a4.num1=11;//modify
// a4.r=6;//add
// console.log(a4) 

// 48 documet objet model dom 

// let head = document.getElementById('ops');
// console.log(head);
// head.innerHTML='hello acorn';
// head.style.color= 'red';
// let hh = document.getElementsByClassName('kk')[0];
// console.log(hh);
// hh.style.color= 'blue';
// let h = document.getElementsByTagName('h1')[3];
// console.log(h);
// h.style.color='pink';
// let w = document.querySelector('h1');
// w.style.color='pink';
// let o = document.querySelectorAll('h1')[3];
// o.style.color='pink';
// let k = document.body;
// k.style.background = 'gray';
// k.style.color = 'white';
// let t = document.title;
// console.log(t);
// t = 'hiwa';
// console.log(t);

// let im = document.images[0];
// im.src = 'images/photo2.jpg'//modify src from index 0 to index 1;
// im.alt = 'roze'
// console.log(im.src);
// console.log(im.alt);

// let li = document.links[0];
// li.href='https://www.typingclub.com/'
// console.log(li)

// let fo=document.forms[0];
// fo.style.background='black';
// let i = document.getElementsByTagName('input');
// i.value='hiwa';
// console.log(i.value)
// console.log(fo);
//  49 attribute dom
// let r = document.getElementById('img');
// r.className='hiwa';
// r.src='images/photo1.jpg'
// console.log(r);
// console.log(r.alt);
// console.log(r.src);
// console.log(r.className);//name of class 
// r.title='name';
// console.log(r.title)
// console.log(r.hasAttributes())
// console.log(r.hasAttribute('title'))
// console.log(r.attributes)
// console.log(r.attributes[0])
// r.setAttribute('class','mamo')
// console.log(r.attributes[0])
// console.log(r.className)
// r.removeAttribute('class')
// console.log(r.attributes)
// console.log(r.className)

// 50 inner and outer  dom
// let con = document.getElementById('container');
// console.log(con.outerHTML);
// console.log(con.innerHTML);
// con.innerHTML= '<p>pp</p>';
// console.log(con.innerHTML);
// con.outerHTML= '<p>hello</p>';
// console.log(con.outerHTML);


// con.innerHTML += '<h2>pp</h2>';//الاحتفاظ بالمحتوى مع الاضافة على المحتوى
// console.log(con.outerHTML);

// con.innerText= 'jjjjjjjjjjj';
// console.log(con.innerText);

// con.outerText= '<h2>pp</h2>';
// console.log(con.outerText);

// 51 sibling and parents 
let sib = document.getElementById('second');
sib.previousElementSibling.innerHTML='firsto';
sib.nextElementSibling.innerHTML='secondo';
// sib.nextElementSibling.remove();
console.log(sib.previousElementSibling);
console.log(sib.nextElementSibling);
console.log(sib.previousSibling);
sib.nextSibling.remove();
sib.previousSibling.remove();
sib.parentElement.remove();//remove parent
console.log(sib.nextSibling);
console.log(sib.parentElement);

// 52 dom css style
// let st = document.getElementById('container');
// st.style.backgroundColor='#444';
// st.style.color='white';
// st.style.borderLeft='5px solid red';
// st.style.padding='20px';
// st.style.fontSize='1.5rem';
// st.style.width='50%'
// console.log(st);


// st.style.cssText='background-color:red';
// st.style.cssText=`background-color:pink;
// color:blue;
// padding:20px;
// font-weight:bold`;
// st.style.removeProperty('color');//remove style
// st.style.setProperty('color','orange','important');//modify style and add style 

// 53 dom create full html page with style 
// document.body.innerHTML=`<h1>hi hiwa</h1>`;
// let container = document.createElement('div');
// let content = document.createElement('h1');
// let imgee = document.createElement('img');
// let text = document.createTextNode('hello acorn');
// content.appendChild(text);
// imgee.src='./images/photo0.jpg';
// imgee.style.width='200px';
// container.appendChild(content);
// container.appendChild(imgee);
// document.body.appendChild(container);
// container.style.backgroundColor='#666';
// container.style.color='white';
// container.style.padding='10px';
// container.style.textAlign='center'
// container.style.width='50%'

// 54 project
// let name = ['ahmad','ali','yousef','majed','ahmad','ali','yousef','majed','salwa','samira']
// let age = [20,30,20,25,24,28,19,27,30,31]
// let container = document.createElement('div')
// container.style.textAlign='center'; 
// document.body.appendChild(container);

// function c(name,age){
//     let card = document.createElement('div')
//     let head = document.createElement('h1')
//     let text = document.createElement('p')
//     let image = document.createElement('img')
    
//     let headcon = document.createTextNode(name)
//     let textcon = document.createTextNode(age)
//     image.src='images/photo1.jpg';

//     head.appendChild(headcon)
//     text.appendChild(textcon)

//     card.appendChild(head)
//     card.appendChild(text)
//     card.appendChild(image)

//     container.appendChild(card)

// card.style.width='15%'
// image.style.width='100%'
// card.style.display='inline-block'
// card.style.background='#999'
// card.style.margin='5px'
// card.style.border='5px solid #444'
// }
// for (let i=0;i<11;i++){
//     c(name[i],age[i])
// }
// c();
//  55 events
// function mm(){
//     console.log('hello hiwa');
// }

// let btn = document.getElementById('btn')
// btn.onclick = function(){
//     console.log('i am happy')
//     document.write('<h1>hi</h1>')
// }

// let bt = document.getElementById('btn')
// function f(){
//     document.body.style.backgroundImage='linear-gradient(to left ,#8294C4,#ACB1D6,#DBDFEA,#FFEAD2)'
// }
// bt.onclick = f;//envoke here it is just write the name of function

// let k = document.getElementById('btn')

// k.addEventListener('click',function(){
//     document.body.style.backgroundImage='linear-gradient(to left ,#8294C4,#ACB1D6,#DBDFEA,#FFEAD2)'
// })
// k.addEventListener('click',function(){
//     k.style.background='#8294C4'
// })
// k.addEventListener('click',function(){
//     k.style.color='white'
// })

// let i = 1;
// k.onmousemove= function(){
//     console.log('kkkkkkkkkkk' + i++)
// }
// k.onmouseup= function(){
//     console.log('kkkkkkkkkkk')
// }
// k.onmousedown= function(){
//     console.log('kkkkkkkkkkk')
// }
// k.onmouseover= function(){
//     console.log('kkkkkkkkkkk')
// }
// k.onmouseout= function(){
//     console.log('kkkkkkkkkkk')
// }

// keyword event 
// let inp = document.getElementById('inp')
// inp.onkeyup = function(){
//     console.log('acornassociated')
// }

// inp.onkeydown = function(){
//     console.log('acornassociated')
// }

// inp.onfocus = function(){
//     inp.style.border='2px solid red';
// }
// inp.onblur = function(){
//     inp.style.border='none';
// }
// 57 تحويل بالجهتين ) برنامج صراف ستاتيكي
// let dollar = document.getElementById('dollar');
// let syria = document.getElementById('syria');
// dollar.onkeyup = function(){
//     syria.value = dollar.value * 5;
// }
// syria.onkeyup = function(){
//     dollar.value = syria.value / 5;
// }

// ديناميكي برنامج صراف آلي 
// let syr = function(){
//     let sy = document.getElementById('syria')
// let doll = prompt('in put dollar')
// let exchange = prompt('in put the price of exchange')
//     sy = doll * exchange;1
//    $('#syria').val(sy)
// }
// syr();

// 58 after before append
// let after = document.getElementById('after')
// let before = document.getElementById('before')
// let append = document.getElementById('append')
// let content = document.getElementById('content')
// let container = document.getElementById('container')
// container.style.background='#ffa'
// container.style.height='50px'
// after.onclick=function(){
//     container.after(content)
// }
// before.onclick=function(){
//     container.before(content)
// }
// append.onclick=function(){
//     container.append(content)
// }

// 59 add class and remove class and toggle class
// let hello = document.getElementById('hello')
// console.log(hello.classList)
// hello.onclick=function(){
//     hello.classList.add('small','hide')
// }
// hello.oncontextmenu=function(){
//     hello.classList.remove('small','hide')
// }
// hello.onclick=function(){
//     hello.classList.toggle('small')
// }
// 60 navbar
// let btnopen = document.getElementById('open');
// let btn = document.getElementById('close');
// let container = document.querySelector('.container');
// btn.onclick = function(){
//     container.classList.add('hide');
//     btn.classList.add('hide');
//     btnopen.classList.remove('hide');
// }

// btnopen.onclick = function(){
//     this.classList.add('hide');

//     container.classList.remove('hide');
//     btn.classList.remove('hide');
// } 

// 61 auto event 
// let txt = document.getElementById('txt');
// let btn = document.getElementById('btn');

// window.onload = function(){
//     txt.focus();
//     btn.style.background='black';
//     btn.style.color='white';
//     // txt.value = 'test';
//     txt.placeholder = 'kkkk'
    
// }
// txt.oncontextmenu = function(){
//     txt.blur()
// }

// 62 html css  انشاء معرض للصور بالحدثين النقر والتمرير على الصورة   كل الشغل ضمن 

// 63 bom
// 64 scroll 
// window.scroll(200,200);
// window.scrollTo(400,400);
// window.scrollBy(200,200);
// in console apply scrollY and scrollX

// let btn = document.getElementById('btn')
// window.onscroll = function(){
//     if(scrollY >= 400){
//         btn.style.display='block';
//     }
//     else {
//         btn.style.display='none';
//     }
// }
//  btn.onclick = function(){
//     window.scroll({
//         left:0,
//         top:0,
//         behavior:"smooth"
//     })
//  }
// 65 window screen 
// console.log(window.screen.width)
// console.log(window.screen.height)
// console.log(window.screen.availWidth)
// console.log(window.screen.availHeight)
// console.log(window.screen.colorDepth)
// console.log(window.screen.pixelDepth)
// console.log(window.screen.orientation.type)

// 66 url  console  التطبيق في 
// location.href
// location.href='رابط'

// location.host
// location.hostname
// location.pathnam
// location.port
// location.reload()
// location.protocol
// history.back()
// history.forward()
// location.replace('رابط')
// location.assign('رابط')

// تحريك الجرس الاشعارات
// let c = 6;
// if(c>5){
//   $('.fa-bell').addClass('far');
// }
// else {
//   $('.fa-bell').removeClass('far');
// }

// 67 
// let hello = setTimeout(function(){
//     console.log('hello hiwa');
// },1000)
// clearTimeout(hello);//stop setTimeout function
// let i=0;
// let hello = setInterval(function(){
//     console.log(i++);
//     if(i == 4){//make counter from 0 to 3 
//         clearInterval(hello);
//     }
// },1000)

// 68 localstorage sessionstorage

// localStorage save data if you turn off the tab
// let text = document.getElementById('text');
// if(localStorage.length > 0) {
//     text.value = localStorage.getItem('text'); 
// }
// text.onkeyup = function(){
//     localStorage.setItem('text',text.value)
// }
// sessionStorage  dont save data if you turn off the tab
// let text = document.getElementById('text');
// if(sessionStorage.length > 0) {
//     text.value = sessionStorage.getItem('text'); 
// }
// text.onkeyup = function(){
//     sessionStorage.setItem('text',text.value)
// }
// if(localStorage.length>0)
// {
//     document.body.style.background = localStorage.style
// }
// function setcolor(color)
// {
//     localStorage.setItem('style',color)
//     document.body.style.background=color;
// }
// 69 شرح كيفية عمل المشروع
// 70  frontend for our project
// let title = document.getElementById('title');
// let price = document.getElementById('price');
// let taxes = document.getElementById('taxes');
// let ads = document.getElementById('ads');
// let discount = document.getElementById('discount');
// let total = document.getElementById('total');
// let count = document.getElementById('count');
// let category = document.getElementById('category');
// let submit = document.getElementById('submit');
// console.log(title,price,taxes,ads,discount,total,count,category,submit)
// // gettotal
// function gettotal() {
//     if(price.value != ''){
//         let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
//         total.innerHTML = result;
//         total.style.background= 'green'
//     }else {
//         total.innerHTML ='';
//         total.style.background= 'none'
//     }
// }
// // create product 
// let datapro;
// if(localStorage.product != null){
// datapro = JSON.parse(localStorage.product)
// }else {
// datapro = [];
// }
// submit.onclick = function(){
//     let newpro = {
//         title:title.value,
//         price:price.value,
//         taxes:taxes.value,
//         ads:ads.value,
//         discount:discount.value,
//         total:total.innerHTML,
//         count:count.value,
//         category:category.value
//     }
//     datapro.push(newpro);
//     localStorage.setItem('product', JSON.stringify(datapro))
//     console.log(newpro);

// }