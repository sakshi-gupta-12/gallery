let a=document.getElementById('1');
let d=document.getElementById('display');
let txt = document.getElementById("txt");


a.addEventListener("click",function(e){
	d.src=a.src;
	txt.textContent = a.alt ;

});

let a2=document.getElementById('2');
let a3=document.getElementById('3');


a2.addEventListener("click",function(e){
	d.src=a2.src;
	txt.textContent = a2.alt ;


});

a3.addEventListener("click",function(e){
	d.src=a3.src;
	txt.textContent = a3.alt ;

});

let a4=document.getElementById('4');


a4.addEventListener("click",function(e){
	d.src=a4.src;
	txt.textContent = a4.alt ;

});
let a5=document.getElementById('5');


a5.addEventListener("click",function(e){
	d.src=a5.src;
	txt.textContent = a5.alt ;

});

let a6=document.getElementById('6');


a6.addEventListener("click",function(e){
	d.src=a6.src;
	txt.textContent = a6.alt ;

});

