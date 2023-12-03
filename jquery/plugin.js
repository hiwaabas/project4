// lesson 2 syntax 
// $(document).ready(function()
// {
//    $("p").hide();
   
// });

/////////////////////////////////////////////////////

// lesson 3 events 
// hide and give color to p by give event to button  
// $(document).ready(function()
// {
//     $("button").click(function()
//     {
//         // $("p").hide();
//         $("p").css("color","#f00")
//     });
// });

// apply double click event 
// $(document).ready(function()
// {
//     $("button").dblclick(function()
//     {
//         // $("p").hide();
//         $("p").css("color","#f00");
//     });
// });

// applay event on button 
// $(document).ready(function()
// {
//     $("button").dblclick(function()
//     {
//         // $(this).hide();
//         $(this).css("color","#f00");
//     });
// });

// apply mouseenter and mouseleave as event on button for p 
// $(document).ready(function()
// {
//     $("button").mouseenter(function()
//     {
//         $("p").css("color","#f00");
//     });
//     $("button").mouseleave(function()
//     {
//         $(this).css("color","#00f");
//     });
// });
// apply event hover that about two function one for hover and another for leave hover 
// $(document).ready(function(){
// $("button").hover(
//     function(){
//         $("p").css("color","#f00");
//         $(this).css("color","#f00");
//     },
//     function(){
//         $("p").css("color","#0f0");
//         $(this).css("color","#0f0");
//     });
// });
/////////////////////////////////////////////////////
// lesson 4 
// hide button and p 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide();
//         $(this).hide();
//     });
// });

// show p after display: none in css
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").show();
//     });
// });

// apply toggle show and hide p when you click 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle();
//     });
// });

// function include effect 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle(3000, function(){$("button").hide(3000);});
//     });
// });

// add alert as option in effect 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide(3000, alert("paragraph is hidden"));
//     });
// });

// use toggle 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle(3000, function(){$("span").toggle();});
//     });
// });

// use toggle in first line they applay in same time 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggle(3000);
//         $("span").toggle(3000);
//         $(this).toggle(3000);
//     });
// });

////////////////////////////////////////////////////
// lesson 5 fade in fade out fade toggle
// fade in 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").fadeIn(3000,(function(){$("span").show(3000)}));
//     });
// });
// fade out 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").fadeOut(3000,(function(){$("span").hide(3000)}));
//     });
// });
// fade toggle *****
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").fadeToggle(3000,(function(){$("span").fadeToggle(3000)}));
//     });
// });
// fade to 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").fadeTo(3000,0.5,(function(){$("span").fadeOut(3000)}));
//     });
// });
////////////////////////////////////////
// lesson 6 slid up / slid down
// slideDown 
// $(document).ready(function(){
//     $(".open").click(function(){
//         $(".box").slideDown(3000,function(){
//             $(".open").hide();
//         })
//     });
// });
// slidUp
// $(document).ready(function(){
//     $(".open").click(function(){
//         $(".box").slideUp(3000,function(){
//             $(".open").hide();
//         });
//     });
// });
// slideToggle
// $(document).ready(function(){
//     $(".open").click(function(){
//         $(".box").slideToggle(3000)
//     })
// })

// lesson 7 animate({parameters css},speed,callback function)
// $(document).ready(function(){
//     $("div").animate({
//         // width:'hide',
//         width:'toggle',
//         // width:'200px',
//         // left:'200px',
//         // height:'300px',
//         height: 'toggle',
//         opacity:'0.5',
//         borderRadius:'20px',
//     },3000);
//         $("div").animate({
//             width:'hide',
//             height:'hide',
//             // width:'toggle',
//             // height:'toggle',
//             opacity:'0.5',
//         },3000);

//         $("div").animate({
//             width:'show',
//             height:'show',
//             // width:'toggle',
//             // height:'toggle',
//             opacity:'0.5',
//         },3000);
   
//         $("div").animate({
//             width:'toggle',
//             height:'toggle',
//             opacity:'0.5',
//         },3000);

//         $("div").animate({
//             width:'toggle',
//             height:'toggle',
//             opacity:'0.5',
//         },3000);
// //    one section 
//         $("div").animate({
//           top:'10px',
//         },3000);
//         $("div").animate({
//             width:'600px',
//           },3000);
//           $("div").animate({
//             height:'400px',
//           },3000);
//           $("div").animate({
//             borderRadius: '40px',
//           },3000);
//           $("div").animate({
//             fontSize: '40px',
//           },3000);
//           $("div").fadeOut(3000)
       
   
//     });

// lesson 8 effects stop 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").stop(true);
//     });
//     $("div").animate({
//         width:'400px',
//         height:'200px',
//     },2000);
//     $("div").animate({
//         width:'500px',
//         height:'100px',
//     },2000);
//     $("div").animate({
//         width:'300px',
//         height:'200px',
//     },2000);
//     $("div").animate({
//        borderRadius: '50px'
//     },2000);
// })


// lesson 9 effects chain
// cash way 
// $(document).ready(function(){
//     var div = $("div")
//     div.slideUp(2000);
//     div.slideDown(2000);
//     div.fadeOut(2000);
//     div.fadeIn(2000);

// })
// chain way 
// $(document).ready(function(){
//     $("div")
//     .css({background:'#f00'})
//     .slideUp(2000)  //slideup in 2 second
//     .slideDown(2000)  //slidedown in 2 second
//     .fadeOut(2000)
//     .fadeIn(2000)
//     .hide(2000)
//     .show(2000)
//     .animate({width:'400px',
// height:'400px'})
    
// })

// lesson 10 get set elements and attributes
// appear the content of div by alert and .text( )
// $(document).ready(function(){
//     $("div").text();
//        alert( $("div").text()) ;
// });

// put the content of div in p after make cash 
// $(document).ready(function(){
//     var div = $("div").text();
//      $("p").text(div);
// });

// different between text() html()
// $(document).ready(function(){
//     var div = $("div").text();
//      $("p").html(div);
// });
// $(document).ready(function(){
//     var div = $("div").html();
//      $("p").text(div);
// });
// $(document).ready(function(){
//     var div = $("div").text();
//      $("p").text(div);
// });
// $(document).ready(function(){
//     var div = $("div").html();
//      $("p").html(div);
// });

// Val() set default value
// $(document).ready(function(){
//     $("button").click(function(){
//         $("input").val("osama");
//     })
// });
// put the content of div in input by val()
// $(document).ready(function(){
//     $("button").click(function(){
//         $("input").val($("div").text());
//     })
// });

// different between html text with val ()
// $(document).ready(function(){
//     $("button").click(function(){
//         $("input").val($("div").html());
//     })
// });
// show result in empty div locate under input 
// $(document).ready(function(){
//     $("button").click(function(){
//         // $("div.result").text($("input").val());//it is run with text() and html ()
//         $("div.result").text("you have wrote : " + $("input").val());
//         alert("you have wrote : " + $("input").val()) //text with concatenate + and alert with +
//     })
// });
// Attr() bring the value of attr from html(get)
// $(document).ready(function(){
//     $("button").click(function(){
//   $("input").val($("a").attr("target"))
//     })
// });

// change Attr()
// $(document).ready(function(){
//     $("button").click(function(){
//   $("a").attr("class","oso");
//     })
// });
// another example
// $(document).ready(function(){
//     $("button").click(function(){
//   $("a").attr("href","https://www.youtube.com");
//     })
// });
// change many Attr() then make alert after change attribute
// $(document).ready(function(){
//     $("button").click(function(){
//   $("a").attr({"href":"https://www.youtube.com",
//                 "target":"xx",
//                 "class":"lime"});
//                 alert($("a").attr("href"));
//     });
// });


// lesson 11 add element (Append/AppendTo/Prepend/PrependTo/Before/After)
// append /prepend/after/befor 
// $(document).ready(function(){
//     $("div").append("<h1>hello hiwa</h1>").prepend("<p>hhhhh</p>").before("<h4>before</h4>").after("<h4>after</h4>")  ;
//     $("span").click(function(){
//         $("input").after("<br> <input type='file'>"); //بعد النقرة الاولى يظهر واحد ثم مع كل نقرة يتضاعف  العدد
//     }) 
// })

// example prependTo /appendTo 
// $(document).ready(function(){
//     $("<h1>abbas</h1>").appendTo("div");
//     $("<h1>hiwa</h1>").prependTo("div")
// });
// example get attribute in another way 
// $(document).ready(function(){
//     $("<p></p>",
//     {text:"welcom to acorn",
//     class: "osama"}).appendTo("div")
// })

// lesson 12 remove /empty element 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").hide();
//     })
// })

// example2 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.jquery").fadeOut(2000,(function(){
//             $(this).remove();
//         }));
//     })
// })

// empty (make div that have class jquery empty)
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.jquery").empty()
//     });
// });

// example (make all div empty)
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div").empty(".jquery")
//     });
// });
// example
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").remove(":contains('this')")
//     });
// });

// lesson 13 add and remove class and toggle class 
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).addClass("custom br");
//     });
// });
// example 
// $(document).ready(function(){
//     $("p").click(function(){
//         $("div.osama").addClass("custom br");
//     });
// });

// example 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.osama,p,span").addClass("custom br");
//     });
// });

// example 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div.osama,p,span").addClass("custom br").removeClass("osama");
//     });
// });

// example new 
// filter first 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p:first").addClass("osama br custom");
//     });
// });
// filter last 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p:last").addClass("osama br custom");
//     });
// });
// filter :contains('') 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p:contains('love')").addClass("osama br custom");
//     });
// });

// example toggleClass 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").toggleClass("br custom");
//     });
// });
// example 
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).toggleClass("br custom");
//     });
// });
// example 
// $(document).ready(function(){
//         $("p").click(function(){
//             $(this).toggleClass("border");
//         });
//     });
// example 
// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).removeClass();
//     });
// });

// lesson 14 get/set css 
// $(document).ready(function(){
//     $("button").click(function(){
//         var color = $("p").css("color");
//         // console.log(color);//console اظهار القيمة في  
//         $("input").val(color);//input اظهار القيمة في 
//         $("<span></span>",//span  اظهار القيمة في و span ادراج 
//         {text:color}).appendTo("body")
//     })
// })
// example  /p ماذا نكتب ضمن الادخال يظهر كلون خط في 
// $(document).ready(function(){
//     $("button").click(function(){
//    var color = $("input").val();
//    $("p").css("color",color)
// })
// })
// example give one property
// $(document).ready(function(){
//     $("button").click(function(){
//    $("p").css("background","blue")
// });
// });
// example give many properties
// $(document).ready(function(){
//     $("button").click(function(){
//    $("p").css({
//     "background":"black",
//     "color":"white",
//     "padding":"20px"
//    })
// });
// });

// lesson 15 dimensions /width/height/inner width/inner height /outer width /outer height 
// $(document).ready(function(){
//     var dw = $(document).width();
//     console.log(dw);//print width in console

//     if(dw==1388){
//         // console.log("congrats :) you have a big screen");
//         $("body").append("<span>congrats:)</span>")
//     }else {
//         // console.log("sorry :( you have a small screen")
//         $("body").append("<span>sorry:(</span>")
//     }
// })
// example 
// $(document).ready(function(){
// var dv = $("div.dim").width();
// console.log("your div width is :" + dv + "px")
// })
// example click on div that have class .dim to show his width in console
// $(document).ready(function(){
//     $(".dim").click(function(){
//         $(this).width();
//         console.log("your div width is :" + $(this).width() + "px")
//     })
// })
// example 
// $(document).ready(function(){
//     $(".dim").click(function(){
//         $(this).width(500);//change width
//         console.log("your div width is :" + $(this).width() + "px")
//     })
// })
// example 
// $(document).ready(function(){
//     $(".dim").click(function(){
//         $(this).width(200);
//         $(this).text($(this).width() + "px");//change text to show the value of width
//         console.log("your div width is :" + $(this).width() + "px")
//     })
// })
// example add 50 to width in every one click
// $(document).ready(function(){
//     $(".dim").click(function(){
//         $(this).width("+=" + 50);
//         $(this).text($(this).width() + "px");//change text to show the value of width
//         console.log("your div width is :" + $(this).width() + "px")
//     })
// })
// example *
// $(document).ready(function(){
//     $(".left").click(function(){
//         $(this).width("+=" + 50);
//         $(".right").width("-=" + 50);
        
//     })
// })
// example **
// $(document).ready(function(){
//     $(".contt").click(function(){
//         // console.log($(this).width());//to view the initial value
//         $(this).width("+=" + 50);
//         $(this).text($(this).width());
//         if($(this).width()==700){
//             $(this).css({
//                 // maxWidth : '700px', //dont add more than 700px
//                 width:"70px",
//                 background:"blue",
//                 color:"white"
//             });
//             $(this).text($(this).width());//when you remove this line it is not appear the real final value of width 
//             console.log("you can not add width more than " + $(this).width() + "px")
//         }
//     })
// })
// innerWidth bring with padding 
// $(document).ready(function(){
//     $(".contt").click(function(){
//         $(this).innerWidth();
//         console.log( $(this).innerWidth() );
//     })
// })
// outerWidth 
// $(document).ready(function(){
//     $(".contt").click(function(){
//         // $(this).outerWidth();//bring width without margin
//         $(this).outerWidth(true);
//         console.log( $(this).outerWidth(true) );
//     })
// })
//height like width 
// lesson 16 
// $(document).ready(function(){
// //   $("span").parent().css("border","1px solid red");
//   $("span").parent().fadeOut(4000);

// })
// example show parent in console
// $(document).ready(function(){
//     var par = $("span").parent();
//     console.log(par);
//     });
// example many css properties
// $(document).ready(function(){
//     $("span").parent().css({
//         "border":"5px solid green",
//         "padding":"25px",
//         "margin":"5px"
//     })
//     });
// example parents (all parents)
// $(document).ready(function(){
//     $("span").parents().css({
//         "border":"5px solid green",
//         "padding":"25px",
//         "margin":"5px"
//     }).fadeOut(2000)
//     });
// example parentsUntil(".top") do not contain .top
// $(document).ready(function(){
//     $("span").parentsUntil(".top").css({
//         "border":"5px solid green",
//         "padding":"25px",
//         "margin":"5px"
//     }).fadeOut(5000)
//     });
// example
// $(document).ready(function(){
//     $("span").parentsUntil("section").css({
//         "border":"5px solid green",
//         "padding":"25px",
//         "margin":"5px"
//     }).fadeOut(5000)
//     });
// example
// $(document).ready(function(){
//     $("span").parentsUntil("html").css({
//         "border":"5px solid green",
//         "padding":"25px",
//         "margin":"5px"
//     }).fadeOut(5000)
//     });

// lesson 17 children/find
// $(document).ready(function(){
//     // console.log($("section").children());
//     // $("section").children().css("border","2px solid blue");
//     $("section").children(".topy").css("border","2px solid blue");
// });

// example 
// $(document).ready(function(){
//     $("section").find("span").css("border","2px solid yellow");
// });

// example all element in section
// $(document).ready(function(){
//     $("section").find("*").css("border","2px solid red");
// });

// example find p that contain love word
// $(document).ready(function(){
// //    console.log($("section").children()); 
//     $("div").children().css({
//         "border":"2px solid blue",
//         "background":"red",
//         "color":"white",
//         "fontWeight":"bold"});
// });

// note how we remove empty paragraph 
// $("p:empty").remove();

// lesson 18 siblings / next / previous
// siblings 
// $(document).ready(function(){
//     $("div:contains('jquery')").siblings().css("border","2px solid blue")
// });
// example when you click on p or div it will stay but another sibling the slideup will applay
// $(document).ready(function(){
//     $("div,p").click(function(){
//         $(this).siblings().slideUp(2000)
//     })
// });
// example
// $(document).ready(function(){
//     $("div,p").click(function(){
//         // $(this).siblings(".select").slideUp(2000);
//         $(this).siblings(".select").fadeOut(2000);

//     })
// });
// next 
// $(document).ready(function(){
//     $("div,p").click(function(){
//         $(this).next().fadeOut(2000);

//     })
// });
// example
// $(document).ready(function(){
//     $("div,p").click(function(){
//         $(this).next().slideToggle(1000);

//     })
// });
// example
// $(document).ready(function(){
//     $("div,p").click(function(){
//         $(this).nextAll().slideToggle(1000);
//     })
// });
// example
// $(document).ready(function(){
//     $("div,p").click(function(){
//         $(this).nextAll().css({"background":"red",
//     "color":"white"});
//     })
// });
// example
// $(document).ready(function(){
//     $("div,p").click(function(){
//         $(this).nextAll("p").css({"background":"red",
//     "color":"white"});
//     })
// });

// lesson 19 / first/ last / eq / filter / not
// first 
// $(document).ready(function(){
//     $("div").first().css("background","green");
// })
// $(document).ready(function(){
//     $("div").first().next().css("background","green");
// })
// last 
// $(document).ready(function(){
//     $("div").last().css("background","green");
// })
// $(document).ready(function(){
//     $("div").last().prev().css("background","green");
// })
// eq 
// $(document).ready(function(){
//     $("div").eq(9).css("background","green");
// })
// $(document).ready(function(){
//     $("div").eq(0).css("background","green");
// })
// $(document).ready(function(){
//     $("div").eq(-1).css("background","green");
// })
// $(document).ready(function(){
//     $("div").eq(-1).prev().css("background","green");
// })
// $(document).ready(function(){
//     $("div").eq(-2).prev().css("background","green");
// })
// filter 
// $(document).ready(function(){
//     $("div").filter(".test").css("background","green");
// });
// $(document).ready(function(){
//     $("div").filter($(".test")).css("background","green");
// });
// $(document).ready(function(){
//     $("div").filter(function(osama){
//         return osama === 3
//     }).css("background","green");
// });
// not 
// $(document).ready(function(){
//     $("div").not(".test").css("background","green");
// });
// $(document).ready(function(){
//     $("div").not($(".test")).css("background","green");
// });
// $(document).ready(function(){
//     $("div").filter(function(osama){
//         return osama === 
//     }).css("background","green");
// });
// $(document).ready(function(){
//     $("div").not(":contains('test')").css("background","green");
// });

// lesson 20 selectors 
// $(document).ready(function(){
//     $("#osama").css("border","4px solid red")
// })
// $(document).ready(function(){
//     $("#hia,div,.test").css("border","4px solid red")
// })
// $(document).ready(function(){
//     $("div:even").css("border","4px solid red");//عدد فردي
//     $("div:odd").css("border","4px solid yellow")//عدد زوجي
// })

// lesson 21 we will move  script outof the body 
// $(document).ready(function(){
// // $("p:first-child").css("border","5px solid red");//first child of each father
// // $(":last-child").css("border","5px solid blue");//last child of each father
// // $("p:last").css("border","5px solid green");//just last child
// // $("p:first").css("border","5px solid yellow");//just first p
// // $("p:first-of-type").css("border","5px solid red");
// // $("div:first-of-type").css("border","5px solid green");
// // $("div:last-of-type").css("border","5px solid green");
// // $("p:last-of-type").css("border","5px solid green");
// // $(":nth-child(2)").css("border","5px solid green");
// // $(":nth-last-child(2)").css("border","5px solid green");
// // $("div:nth-child(3)").css("border","5px solid green");
// // $("p:nth-last-child(2)").css("border","5px solid blue");
// // $("p:nth-of-type(2)").css("border","5px solid green");
// // $("p:nth-last-of-type(2)").css("border","5px solid blue");
// });

// lesson 22 
// $(document).ready(function(){
// //     $("p:only-child").css({"background":"blue",
// // "color":"white"});
// //     $("span:only-of-type").css({"background":"green",
// // "color":"white"});
// //     $("div > p").css({"background":"green",
// // "color":"white"});
// // $("div+h3").css({"background":"green",
// // "color":"white"});
// // $("div~h3").css({"background":"green",
// // "color":"white"});
// // $("ul li:eq(2)").css({"background":"green",
// // "color":"white"});
// // $("ul li:gt(2)").css({"background":"green",
// // "color":"white"});
// // $("ul li:lt(2)").css({"background":"green",
// // "color":"white"});
// $("ul li:not(:contains('5'))").css({"background":"green",
// "color":"white"});
// });

// lesson 23 
// header 
// $(document).ready(function(){
//     $(":header").css("color","blue");
// });

// animated 
// $(document).ready(function(){
//     $("div").click(function(){
//         $("div").animate({"width":"600px"},3000);
//         $("p").animate({"width":"600px"},3000);
//         $("div").animate({"height":"100px"},3000);
//         $("p").animate({"height":"100px"},3000);
//         $(":animated").css({"background":"black",
//         "color":"white"});
//     })
// })

// focus 
// $(document).ready(function(){
//     $("input[type='text']").focus();
//     $(":focus").css("padding","20px")
// });

// contains
// $(document).ready(function(){
// $("div:contains('1')").animate({"width":"800px"},2000,function(){$("div:contains('2')").animate({"width":"800px"},2000,function(){$("div:contains('3')").animate({"width":"800px"},2000)})});
// });

// has 
// $(document).ready(function(){
//     $("div:has('p')").css("color","red");
//     $("div:has('span')").css("color","blue");
//     $("div:has('.osama')").css("color","purple");
// })
// empty and parent 
// $(document).ready(function(){
//     $(":empty").css("background","red"); 
//     $("div:parent").css("background","blue"); 
// })

// hidden visible
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div:visible").css("background","pink");
//         $("div:hidden").fadeIn(3000);        
//     })   
// })
// hidden visible 
// $(document).ready(function(){
//     $("button").click(function(){
//         $("div:visible").slideToggle(1000);
//         $("div:hidden").slideToggle(1000);
//     })   
// })
// lang root 
// $(document).ready(function(){
//     $(":root").css("background","lightblue");
//     $("p:lang('en')").css("color","blue");
//     $("p:lang('ar')").css("color","red");      
// })

// lesson 24   alt/src/lang/title /!=/p[]
// $(document).ready(function(){
//     // $("[title='test3']").css("border-radius","50%");
//     // $("[title!='test1']").css("border-radius","50%");
//     // $("[title='test1'],[alt='image 2']").fadeOut(4000);
//     // $("[alt*='my']").fadeOut(4000);//sentence has this word
//     // $("[alt~='image']").fadeOut(4000);//one single world
//     // $("[alt^='my']").fadeOut(4000);//start with this word
// })

// lesson 25 
// $(document).ready(function(){
//     $(":input").css("display","block");
//     $(":text").click(function(){
//         $(this).fadeOut();
//     })
// })
// disabled enabled checked selected
// $(document).ready(function(){
//     $(":input").css("display","block");
//         // $(":disabled").fadeOut(2000);
//         // $(":enabled").fadeOut(2000);
//         // $(":checked").fadeOut(2000);
//         //    console.log($(":selected").val());
//         // $(":selected").fadeOut(2000);
//         $(":selected").val()
//     })

// lesson 26 
// $(document).ready(function(){
//     $(".normal").click(function(){
//         $(this).hide()
//     })
// })
// example 
// $(document).ready(function(){
//     $(".normal").mouseenter(function(){
//         $(this).toggleClass("color")
//     })
//     $(".normal").mouseleave(function(){
//         $(this).toggleClass("color")
//     })
// })
// example two event with bind
// $(document).ready(function(){
//     $(".normal").bind("mouseenter mouseleave",function(){
//         $(this).toggleClass("color")
//     })
  
// })
// example event map /each event has function
// $(document).ready(function(){
//     $(".map").bind({
//         click: function(){$(this).text("you have clicked me");},
//         dblclick: function(){$(this).text("you have dblclicked me");},
//         mouseenter: function(){$(this).text("you have mouseenter me");},
//         mouseleave: function(){$(this).text("the mouse has gone");},
//     });  
// });

// special event 
// $(document).ready(function(){
//     $(".custom").bind("myCustomEvent",function(){
// $(this).hide();
//     });
//     $("button").click(function(){
//         $(".custom").trigger("myCustomEvent")
//     })
// });
// example change text with 2 parameters
// $(document).ready(function(){
//     $(".custom").bind("myCustomEvent",function(event,myName,myAge){
// $(this).text(" hello " + myName + " your Age is : " + myAge);
//     });
//     $("button").click(function(){
//         $(".custom").trigger("myCustomEvent",["osama","28"])
//     })
// });

// example .custom-event change height three parameters
// $(document).ready(function(){
//     $(".custom-event").bind("myCustomdesign",function(event,myheight,mywidth,myback,mycol){
// $(this).height(myheight).width(mywidth);
// $(this).css({"background-color":myback,
// "color":mycol})
//     });
//     $("a").click(function(){
//         $(".custom-event").trigger("myCustomdesign",["200px","600px","blue","white"])
//     })
// });
// lesson 27 live()
// $(document).ready(function(){
//     $(".normal").live("click",function(){
//         $(this).hide();
//     });
//     $("p").live("click",function(){
//         $(this).hide();
//     })
//     $("button").live("click",function(){
//         $("<p>this add paragraph</p>").insertAfter($(this));
//     });
//     $("span").live("click",function(){
//         $("<input type='file'> <span>+</span>").insertAfter($(this));
//     });
  
// })

// lesson 28 delegate(child,event,data,function)
// $(document).ready(function(){
//     $("body").delegate(".normal","click",function(){
//         $(this).hide();
//     });
//     $("html").delegate("p","click",function(){
//         $(this).hide();
//     })
//     $(document).delegate("button","click",function(){
//         $("<p>this add paragraph</p>").insertAfter($(this));
//     });
//     $("div").delegate("span","click",function(){
//         $("<input type='file'> <span>+</span>").insertAfter($(this));
//     });
  
// })
// lesson 29 on()
// $(document).ready(function(){
//     $(".normal").on("click",function(){
//         $(this).hide();
//     });
//     $(".normal").on("mouseenter mouseleave",function(){
//         $(this).toggleClass("color");
//     });
// });
// example custom event with on 
// $(document).ready(function(){
//     $(".custom").on("mycustom",function(event){
//         $(this).hide();
//     });
//     $("button").click(function(){
//         $(".custom").trigger("mycustom")
//     })
// });
// example custom event and child with on 
// $(document).ready(function(){
//     $("body").on("mycustom",".custom",function(event){
//         $(this).hide();
//     });
//     $("button").click(function(){
//         $(".custom").trigger("mycustom")
//     })
// });
// example custom event and child and many parameters with on 
// $(document).ready(function(){
//     $("body").on("mycustom",".custom",function(event,myheight,mywidth,myback,mycol){
//         $(this).height(myheight).width(mywidth);
//         $(this).css({
//             backgroundColor:myback,
//             color:mycol
//         })
//     });
//     $("button").click(function(){
//         $(".custom").trigger("mycustom",["200px","400px","red","white"])
//     })
// });
// example with on() 
// $(document).ready(function(){
//     $("body").on("mycustom",".custom",function(event,myheight,mywidth,myback,mycol){
//         $(this).height(myheight).width(mywidth);
//         $(this).css({
//             backgroundColor:myback,
//             color:mycol
//         })
//     });
//     $("button").on("click",function(){
//         $(".custom").trigger("mycustom",["200px","400px","red","white"])
//     })
// });
// example map 
// $(document).ready(function(){
//     $(".map").on({
//         click: function(){$(this).text("you have clicked me")},
//         dblclick: function(){$(this).text("you have dblclicked me")},
//         mouseenter: function(){$(this).text("you have mouseenter me")},
//         mouseleave: function(){$(this).text("the mouse has gone")},
//     })
// })
// example to fade out new element we need container body to hold code to reach element p
// $(document).ready(function(){
//     $("button").on("click",function(){
//         $("<p>this is new paragraph</p>").insertAfter($("button"))
//     });
//     $("body").on("click","p",function(){
//         $(this).fadeOut(1000)
//     })
// })

// lesson 30 preventDefault()
// $(document).ready(function(){
//     $("a").on("click",function(event){
//         // event.preventDefault();
//         $("img").fadeIn(1000);
//         if(event.isDefaultPrevented()){
//             $("div").text("the link will not work");
//         }else {
//             $("div").text("the link will work");

//         }
//     })
// });
// $(document).ready(function(){
//     $("a").on("click",function(e){
//         // e.preventDefault();
//         $("img").fadeIn(1000);
//         if(e.isDefaultPrevented()){
//             $("div").text("the link will not work");
//         }else {
//             $("div").text("the link will work");

//         }
//     })
// })

// lesson 31 keydown keyup
// $(document).ready(function(){
//     $("input").on("keydown",function(e){
//         $("div").text("you are going to click the keyboard key");
//     })
// })
// $(document).ready(function(){
//     $("input").on("keyup",function(e){
//         $("div").text("you are far away from keyboard key");
//     })

//     // $("input").on("keypress",function(e){
//     //     $("div").text("you are press key");
//     // });
// })

// example 
// $(document).ready(function(){
//     $("input").on("keyup",function(){
//         $("div h3").text($(this).val())
//     })
//     $("textarea").on("keydown",function(){
//         $("div p").text($(this).val())
//     })
//     // $("textarea").on("keypress",function(){
//     //     $("div p").text($(this).val())
//     // })
// })
// lesson 32 change 
// $(document).ready(function(){
//     $("select").on("change",function(){
//         $("div ").css("background-color","red")
//     })
//     $("select").on("change",function(){
//         $("div").text('you have chosed to buy ' + $(this).val())
//     })
// })
// lesson 33 focus blure 
// $(document).ready(function(){
//     // $("input").on("focus",function(){
//     //     $(this).hide()
//     // })
//     // $("input").on("focus",function(){
//     //     $("div span").fadeIn(2000, function(){
//     //         $(this).fadeOut(2000)
//     //     }).text("you are focusing in the input")
//     // })
//     // $("input").on("blur",function(){
//     //     if($(this).val()==="osama"){
//     //         $("div span").fadeIn(2000, function(){
//     //             $(this).fadeOut(2000)
//     //         }).text("hello osama welcome")}else{  $("div span").fadeIn(2000, function(){
//     //             $(this).fadeOut(2000).text("you are not osama")})}
//     //     })
//         // $("input").on("blur",function(){
//         //     if($(this).val().length > 10){
//         //         $("div span").fadeIn(2000, function(){
//         //             $(this).fadeOut(2000)
//         //         }).text("10")}else{  $("div span").fadeIn(2000, function(){
//         //             $(this).fadeOut(2000).text("not 10")})}
//         //     })
//     })

// lessn 34 one() it is like on() but the event just one time
// $(document).ready(function(){
//     $("p").one("click dblclick",function(){
//         $(this).animate({
//             fontSize:"+=3px",
//         })
//     })
// })


// lesson 35 select() 
// $(document).ready(function(){
//     $("textarea").select("click",function(){
//         console.log("hello you have selected the text area")
//     })
// })

// $(document).ready(function(){
//     // $("textarea").one("click",function(){
//     //     $(this).select()
//     // })
//     // $("textarea").select(function(){
//     //     console.log("hello you have selected the text area")
//     // })
//     // $("textarea").select(function(){
//     //     $(this).after("text copied")
//     // })
// })

// lesson 36 resize()// make the height of section like the height of window//
// $(document).ready(function(){
//     $("section").height($(window).height() - "300")//to apply directly
//     $(window).on("resize",function(){
//         $("section").height($(window).height() - "300")//apply after resize the window
//         $("div").height($(window).height() -"300")
//         var wid = $(window).width(),
//             hei = $(window).height();
//         console.log(wid,hei);

//         // if (wid > 1000) {
//         //     console.log("width grater than 1000")
//         // }
//         if (wid < 768){
//             $("div").removeClass("hidden");//omit class hidden from css 
//         }else {
//             $("div").addClass("hidden");//add class hidden to css           
//         }
//     });  
// });

// lesson 37 scroll() 
// $(document).ready(function(){
//     $(window).on("scroll",function(){
//         // alert('scrolling run ');
//         var sc = $(window).scrollTop();
//         // var scd = $(window).scrollDown();

//         console.log(sc);
//         // console.log(scd)
//         if (sc > 1000){
//             $("div").fadeIn();
//         }else {
//             $("div").fadeOut();

//         }
//     })      
// })

// lesson 38 pageX() pageY()
// $(document).ready(function(){
//     // $("html").mousemove(function(e){
//     //     $("span").text("x axis" + e.pageX + "y axis" + e.pageY)
//     // })
//     $("html").click(function(e){
//         $(".circle")
//         .show().offset({
//             left:e.pageX,
//             top:e.pageY
//         })
//     })
// })

// lesson 39 Submit()
// $(document).ready(function(){
//     $("form").submit(function(e){
//         e.preventDefault()
//     })
// })
// $(document).ready(function(){
//     $("form").submit(function(e){
//         if($("input:first").val()==="osama"){
//             $("span").text("this is correct word").show().fadeOut(2000);
//             return;
//         }
//             $("span").text("this is wrong word").show().fadeOut(2000);
//             e.preventDefault()
//     })
// })
// lesson 40 delay()
// $(function(){
//     "use strict";

//     $("button").click(function(){
//         $("span").text("hello this is message for you").fadeIn(1000).delay(5000).fadeOut(1000)
//     })
// })

// lesson 41 clone()/true or false
// $(function(){
//     "use strict";
//     $("button").click(function(){
//         // $(".main").clone(false).appendTo("body");
//         $(".main").clone(true).appendTo("body");
//     })
//     $(".main").click(function(){
//         $(this).css("color","red")
//     })
// })

// lesson 42 detach 
// // example remove 
// $(function(){
//     "use strict";
//     var ele = $("div")
// $("#remove").on("click",function(){
//     ele.remove()
// })
// $("#add").on("click",function(){
//     $("body").prepend(ele)
// })
// ele.on("click",function(){
//     $(this).css("color","red")
// })
// })
// // example detach do not remove event
// $(function(){
//     "use strict";
//     var ele = $("div")
// $("#remove").on("click",function(){
//     ele.detach()
// })
// $("#add").on("click",function(){
//     $("body").prepend(ele)
// })
// ele.on("click",function(){
//     $(this).css("color","red")
// })
// })

// lesson 43 has class 
// $(function(){
//     "use strict";
//     $("li").each(function(){//check every li
//         if($(this).hasClass('active')){
//             $(this).css("color","blue")

//         }
//     })
// })
// example
// $(function(){
//     "use strict";
//     $("li").each(function(){//check every li
//         if($(this).hasClass('active')){
//             $(this).parent().css("color","blue")

//         }
//     })
// })
// // example
// $(function(){
//     "use strict";
//     $("li").each(function(){//check every li
//         if($(this).hasClass('active')){
//             $(this).parent().parent().css("color","blue")

//         }
//     })
// })
// example
// $(function(){
//     "use strict";
//     $("li").each(function(){//check every li
//         if($(this).hasClass('active')){
//             $(this).next().css("color","blue")

//         }
//     })
// })
// example
// $(function(){
//     "use strict";
//     $("li").each(function(){//check every li
//         if($(this).hasClass('active')){
//             $(this).prev().css("color","blue")

//         }
//     })
// })

// lesson 44 offset 
// $(function(){
//     "use strict";
//    console.log($("div").offset()) ;
//    $("div").offset({
//     left: 200,
//     top: 500
//    })
//    console.log($("div").offset()) ;
// console.log($("div").offset().left) ;
// console.log($("div").offset().top) ;
// $(window).scroll(function(){
//     console.log("scrolltop is : " + $(this).scrollTop())
//     console.log("setoff top is : " + $(this).offset().top)

// })

// var scrolling = $(this).scrollTop(),
//     divoffset = $("div").offset().top ;

// if(scrolling < divoffset){
//     $("div").css("background-color","blue");
// }
// console.log($(this).scrollTop())
// console.log($("div").offset().top)
// })

// lesson 45 position 
// offset 
// $(function(){
//     "use strict";
//     console.log($("p").offset())
// })
// position 
// $(function(){
//     "use strict";
//     console.log($("p").position())
// })
// $(function(){
//     "use strict";
//     console.log($("p").position().left)
// })
// $(function(){
//     "use strict";
//     console.log($("p").position().top)
// })

// lesson 46 properties 
// $(function(){
//     "use strict";

//     $("button").click(function(e){
//         e.preventDefault()
//         // $("input").prop("disabled","disabled")
//         // $("input").prop("disabled",false)
//         $("input").prop({"disabled":true,
//     "id":"text",
// "name":"hello"})


//         // console.log($("input").prop("alt"));
//         console.log($("input").attr("disabled"));

//     })
// })

// lesson 47 replace with 
// $(function(){
// "use strict";
//     $("div").replaceWith("hello jquery")
// })
// $(function(){
//     "use strict";
//     $("div").click(function(){
//         $("div").replaceWith("<input type='text'>")
//     }) 
// })

// example
// $(function(){
//     "use strict";
//     $("div").click(function(){
//         $(this).replaceWith("<input type='text' value='" + $(this).text() + "'>");
//         $("button").fadeIn().css("display","inline-block")
//     }) 
// })
// $(function(){
//     "use strict";
//     $("button").click(function(){
//         $("input").replaceWith("<div>" + $("input").val() + " </div>");
//         $("button").fadeOut()
//     }) 
// })

// lesson 48 scroll[top/left] 
// $(function(){
//     "use strict";
//     $(window).scroll(function(){
//         console.log('scrolltop is : '+$(this).scrollTop())
//         console.log('offset is : '+$(".test-lesson").offset().top)
//         if($(this).scrollTop() > $(".test-lesson").offset().top){
//             $(".test-lesson").animate({
//                 opacity: "1"

//             },2000)
//         }
//         // $(window).scrollTop(400)//to move directly to specific position in your page 

//     })
//     $("button").click(function(){
//         // $(window).scrollTop(0)
//         $(window).scrollTop($(".test-lesson").offset().top)
//     })
// })
// lesson 49 wrap / unwrap 
$(function(){
    "use strict";
    $("button").click(function(){
        $("span").wrap("<div></div>")
    })
    $("div").css({
        "color":"white",
        "background-color":"green"
    })
})