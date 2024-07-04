function hideHome(){
    let home = document.getElementById('home');
    if(home.style.display === 'block'){
        home.style.display = 'none';
    }else{
        home.style.display = 'block';
    }
}

function hideExp(){
    let exp = document.getElementById('exp');
    if(exp.style.display === 'block'){
        exp.style.display = 'none';
    }else{
        exp.style.display = 'block';
    }
}

function hideProject(){
    let project = document.getElementById('proj');
    if(project.style.display === 'block'){
        project.style.display = 'none';
    }else{
        project.style.display = 'block';
    }
}

function hideContact(){
    let contact = document.getElementById('contact');
    if(contact.style.display === 'block'){
        contact.style.display = 'none';
    }else{
        contact.style.display = 'block';
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

    // check if input is correct
    if(usr_input === captcha.innerHTML){
        let s = document.getElementById('key').innerHTML = "Matched";
        generate();
    }
    else{
        let s = document.getElementById('key').innerHTML = "Not Matched";
        generate();
    }
}