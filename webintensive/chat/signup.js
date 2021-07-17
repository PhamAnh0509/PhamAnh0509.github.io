let formsignup = document.getElementById("formsignup")

formsignup.onsubmit = (e)=>{
    e.preventDefault();

    let name = formsignup.name.value
    let email = formsignup.email.value
    let pass = formsignup.password.value
    let cfpass = formsignup.cfpassword.value

    let data = {
        name: name,
        email: email,
        password: pass,
    }
    if(!name){
        setTextError("#name-err","Not empty")
    }

    if(!email){
        setTextError("#email-err","Email invalid")
    }
    
    if(pass){

        if(pass.length > 6){
            if(pass == cfpass){
                signUp_process(data)
            }else{
                setTextError("#cfpass-err","Confirm password must be the same")
            }

        }else{
            setTextError("#pass-err","Password must be longer than 6")
        }

    }else{
        setTextError("#pass-err","Field Required")
    }
    
    if(!cfpass){
        setTextError("#cfpass-err","Not empty")
    }



}
let signUp_process = async (data)=>{
    let email = data.email
    let password = data.password
    let name = data.name
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        await firebase.auth().currentUser.updateProfile({
            displayName: name
        })
        await firebase.auth().currentUser.sendEmailVerification()
        alert("success")
    } catch (error) {
        let message = error.message
        alert(message)
    }
}




let setTextError = (tagname, content) => {
    document.querySelector(tagname).innerHTML = content
}
    