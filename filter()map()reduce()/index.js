// var arr= [1,2,3,4,5,6,7,8];
// var myarr = arr.filter(function(element){
// return element > 4;
// })
// console.log(myarr)

// خلف الكواليس لا يطبق فقط للشرح
// function filter(array){
//     var arr=[]
//     for(element of array){
//         addToArray = handler(element)
//         if(addToArray){
//             arr.push(element)
//         }
//     }
//     return arr;

// }
// var arr =[1,2,3,4,5,6,7,8,9]
// myarr2 = filter(arr, function(element){
//     return element > 4
// })
// console.log(myarr2);


// map() 
// var arr =[10,20,30,40,50]
// // var arr1=[]
// // for(element of arr){
// //     arr1.push(element*2)
// // }
// // console.log(arr1)

// var arr1=arr.map(function(element){
//     return element * 10;
// })
// console.log(arr1)

// filter() 
// var arr1=arr.filter(function(element){
//     // if(element>35)
//     // {
//     //     return true
//     // }else{
//     //     return false
//     // }

//     return element >35;
// })
// console.log(arr1)
// reduce() 
// var arr1 = arr.reduce(function(previousvalue,currentvalue){
//     return previousvalue + currentvalue;
// })
// // var arr2 = arr.reduce((e,c) => e+c)
// // console.log(arr2)
// console.log(arr1);

//  object مصفوفة تحوي عدة 
// let arr =[{name:'hiwa',age:'29'},
// {name:'abbas',age:'27'},
// {name:'fatima',age:'25'}]

// var arr1=arr.map((e)=>e.name)
// // console.log(arr1)
// let sum = 0;
// var arr2=arr.filter((e)=> e.age > 25).map((e)=>e.age).forEach((s)=>sum+=+s)//chain methode
// console.log(arr2)
// console.log(sum)

// forEach()
let arr =document.querySelectorAll('ul li')
let dd =document.querySelectorAll('.content div')
arr.forEach(function(ele){
    ele.onclick=function(){
        arr.forEach(function(ele){
        ele.classList.remove('active')    
        })
        this.classList.add('active')
        dd.forEach(function(ele){
ele.style.display='none';
        })
    }
})
console.log(arr)

