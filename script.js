let exp = document.getElementById('exp');
let home = document.getElementById('home');
let project = document.getElementById('proj');
let contact = document.getElementById('contact');

function hideHome(){
    if(home.style.display === 'block'){
        home.style.display = 'none';
        
    }else{
        home.style.display = 'block';
        exp.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';
    }
}

function hideExp(){
    if(exp.style.display === 'block'){
        exp.style.display = 'none';
        
    }else{
        exp.style.display = 'block';
        home.style.display = 'none';
        project.style.display = 'none';
        contact.style.display = 'none';
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
    let captcha = document.getElementById('captcha');

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

