let formsignup = document.getElementById("formsignup")

formsignup.onsubmit = (e)=>{
    e.preventDefault();

   
    let email = formsignup.email.value
    let pass = formsignup.password.value
   

   
    if(!email){
        setTextError("#email-err","Email invalid")
    }
    
    if(pass){

        if(pass.length > 6){
            if(pass == cfpass){
                alert("sucess")
            }else{
                setTextError("#cfpass-err","Confirm password must be the same")
            }

        }else{
            setTextError("#pass-err","Password must be longer than 6")
        }

    }else{
        setTextError("#pass-err","Field Required")
    }
    
 



}

let setTextError = (tagname, content) => {
    document.querySelector(tagname).innerHTML = content
}