'use strict'
document.querySelector('.stud').addEventListener('click',function(){
    document.querySelector('.falogin').classList.add('hidden');
    document.querySelector('.login').classList.remove('hidden');
})
document.querySelector('.faculty').addEventListener('click',function(){
    document.querySelector('.login').classList.add('hidden');
    document.querySelector('.falogin').classList.remove('hidden');
})
const body=document.querySelector('.body');
body.addEventListener('click',function(e)
{
    // console.log("1")
    // console.log(e.target);
    if(e.target.classList.contains('hi')) return;
 
        document.querySelector('.login').classList.add('hidden');
        document.querySelector('.falogin').classList.add('hidden');
//    console.log(e.target)
//     console.log(e.target.classList.contains("login"))
});