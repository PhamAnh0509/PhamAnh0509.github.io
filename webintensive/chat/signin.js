let formsignup = document.getElementById("formsignup")

formsignup.onsubmit = (e) => {
    e.preventDefault();


    let email = formsignup.email.value
    let pass = formsignup.password.value

    let data = {
        email: email,
        pass: pass
    }

    signIn_process(data)



}
let signIn_process = async (data) => {
    let email = data.email
    let password = data.pass
    try {
        let result = await firebase.auth().signInWithEmailAndPassword(email, password)
        let user = result.user
        if (user.emailVerified) {
            window.open("./chat.html", "_blank")
        } else {
            throw new Error('Must verify email!')
        }
    } catch (error) {

        let message = error.message
        sweetAlert('error', message)
    }
}

let setTextError = (tagname, content) => {
    document.querySelector(tagname).innerHTML = content
}

let sweetAlert = (icon, content) => {
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