'use strict' //just pretend like it's a safe mpde for the code 
// general fun allows u to add same evenet to multip elements 

const addEventOnElements=function (elements,eventType,callback){
    for(const elem of elements) elem.addEventListener(eventType,callback)
}
//we used attributs to call elements wit querySelector
const searchbox= document.querySelector('[search-box]')
const searchTogglers=document.querySelectorAll('[search-toggler]')
 addEventOnElements(searchTogglers,'click',function(){
    searchbox.classList.toggle('active')

 })
