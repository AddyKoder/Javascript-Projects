function clear() {
    get('#first').value = '' 
    get('#last').value = ''
    get('#email').value = ''
    get('#phone').value = ''
    get('#username').value = ''   
    get('#pwd').value = ''
    get('#confirm').value = ''
}

function get(selector) {
    return document.querySelector(selector);
}

function notify(text, success) {
    if(success){
        get('#msg').style.backgroundColor = 'rgba(0, 255, 0, 0.13)'
        get('#msg').style.color = 'rgb(0, 230, 0)'
    }
    else{
        get('#msg').style.backgroundColor = 'rgba(255, 0, 0, 0.20)'
        get('#msg').style.color = 'rgb(240, 0, 0)'
    }
    get('#msg').innerText = text;
    get('#msg').style.display = 'block';

    setTimeout(() => {
    get('#msg').style.display = 'none';

    }, 5000)
    
}

function check() {
    
    let fname = get('#first').value;
    let lname = get('#last').value;
    let mail = get('#email').value;
    let phone = get('#phone').value;
    let user = get('#username').value;    
    let pwd = get('#pwd').value;
    let conf = get('#confirm').value;

    let reg_name = /([a-zA-Z]{1,20})/
    let reg_mail = /@gmail.com$/
    let reg_phone  = /^[0-9]{10}$/
    let reg_user = /^[a-zA-Z0-9_]{1,99999}$/

    if(reg_name.exec(fname) !== null) {
        if(reg_name.exec(lname) !== null) {
            if(reg_mail.exec(mail) !== null) {
                if(reg_phone.exec(phone) !== null) {
                    if(reg_user.exec(user) !== null) {
                        if(pwd === conf && pwd !== ''){
                            notify('Success', true)
                            clear()
                        }
                        else{
                            notify('Password is either empty or not same as confirm password', false)
                        }
                        
                    }else{
                        notify('Invalid User Name', false)}
                }else{
                notify('Invalid Phone Number', false)}
            }else{
            notify('Invalid Gmail ID', false)}
        }
        
        else{
        notify('Invalid Last Name', false)}
    }else{
    notify('Invalid First Name', false)}

}
