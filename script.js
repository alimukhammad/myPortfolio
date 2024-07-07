let exp = document.getElementById('exp');
let home = document.getElementById('home');
let project = document.getElementById('proj');
let contact = document.getElementById('contact');
let boxId = document.getElementById('boxId');

let homeBtn = document.getElementById('homeBtn');
let expBtn = document.getElementById('expBtn');
let projBtn = document.getElementById('projBtn');
let contactBtn = document.getElementById('contactBtn');

function hideHome(){
    if(home.style.display === 'block'){
        home.style.display = 'none';
        
    }else{
        home.style.display = 'block';
        exp.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';
        boxId.style.height = '100vh';
    }
}

function hideExp(){
    if(exp.style.display === 'block'){
        exp.style.display = 'none';
        boxId.style.height = '100vh';
        
    }else{
        exp.style.display = 'block';
        home.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';

        boxId.style.height = '100%';
    }
}

function hideProject(){
    if(project.style.display === 'block'){
        project.style.display = 'none';
    }else{
        project.style.display = 'block';
        exp.style.display = 'none';
        home.style.display = 'none';
        contact.style.display = 'none';
        boxId.style.height = '100vh';
    }
}

function hideContact(){
    if(contact.style.display === 'block'){
        contact.style.display = 'none';
    }else{
        contact.style.display = 'block';
        project.style.display = 'none';
        exp.style.display = 'none';
        home.style.display = 'none';
        boxId.style.height = '100vh';
    }
}

let captcha;
function generate(){
    //clear old input
    document.getElementById('submit').value = '';

    //generate new captcha
    captcha = document.getElementById("image");
    let uniqueChar = "";

    const randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // Generate 5 random characters
    for (let i = 0; i < 5; i++) {
        uniqueChar += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
    }

    //store generated input
    captcha.innerHTML = uniqueChar;
}

function printmsg(){
    const usr_input = document.getElementById('submit').value;
    let email = document.getElementById('emailC');
    let captcha = document.getElementById('image');

    console.log(usr_input); //user input
    console.log(captcha.innerHTML); //captcha code

    // check if input is correct
    if(usr_input === captcha.innerHTML){
        email.style.display = 'block';
        captcha.style.display = 'none';  ///fix this 
    }
    else{
        let s = document.getElementById('key').innerHTML = "Not Matched";
        generate();
        email.style.display = 'none';
    }
}

