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
    sweetAlert('success','successfully, please check your email')
    } catch (error) {
        let message = error.message
        sweetAlert('error', message)
    }
}




let setTextError = (tagname, content) => {
    document.querySelector(tagname).innerHTML = content
}
    
let sweetAlert = (icon,content)=>{
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: icon,
        title: content
      })
}