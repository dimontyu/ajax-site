 
var avv=document.querySelectorAll('li');
 
 
 
 
function fx(z){
var pp=avv[1].textContent;
avv[1].innerText=pp+" "+'менеджер';}
	 
function fy(z){
var pp=avv[2].textContent;
avv[2].innerText=pp+" "+'бухгалтер';}
function fz(z){
var pp=avv[3].textContent;
avv[3].innerText=pp+" "+'инженер';}	 
	 
	 
	 avv[1].onclick=fx;
	 avv[2].onclick=fy;
	 avv[3].onclick=fz;
	 
	 