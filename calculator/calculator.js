console.log("hello world");
let string = "";
//let buttons = document.querySelectorAll('.button');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button =>{
    button.addEventListener('click', (e) =>{


//Array.from(buttons).forEach((button) => {
  //  button.addEventListner('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
       console.log(e.target)
       string = string + e.target.innerHTML;
       document.querySelector('input').value = string;
        }
    })
})
/*
function con(){
     let val = document.getElementById().innertext;
     console.log(val);

}
/*getElementsByClassName(input)
but.addEventListner('click',string())

function string(){
let stringitem = document.getElementsByClassName("but");
console.log(string)
}


let display =  document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('but'));

buttons.map( button =>{
    button.addEventListener('click', (e) =>{
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerHTML);
    })
})*/