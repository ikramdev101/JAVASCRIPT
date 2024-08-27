'use strict' //just pretend like it's a safe mode for the code 



jgjn,ko, sibzn iuibuvfcr 
// general fun allows u to add same evenet to multip elements 
const addEventOnElements=function (elements,eventType,callback){
    for(const elem of elements) elem.addEventListener(eventType,callback)
}
//we used attributs to call elements wit querySelector
// wa added some interactives to the search barr
const searchbox= document.querySelector('[search-box]')
const searchTogglers=document.querySelectorAll('[search-toggler]')
 addEventOnElements(searchTogglers,'click',function(){
    searchbox.classList.toggle('active')

 })
