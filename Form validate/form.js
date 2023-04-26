const form = document.forms.validate
const { email, fullName, number, password, confirmPassword } = form.elements
function validate() {
    let success = false
    if (!fullName.value.trim()) {
        error(fullName, "*UserName Requried")
        return success = false
    } else if (fullName.value.trim().length < 3 || fullName.value.trim().length > 15) {
        error(fullName, "*UserName atlest more than 3 character & less than 15 character")
        return success = false
    } else {
        successmsg(fullName)
        success = true
    }
    if (!email.value.trim()) {
        error(email, "*email Requried")
        return success = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        error(email, "*Invaild email address ")
        return success = false
    } else {
        successmsg(email)
        success = true
    }
    if (!number.value.trim()) {
        error(number, "*Mobile Number Requried")
        return success = false
    }
     else if (!/^\d{10}$/.test(number.value.trim())) {
        error(number, "*Invaild mobile number ")
        return success = false
    } 
    else {
        successmsg(number)
        success = true
    }
    if (!password.value.trim()) {
        error(password, "*password Requried")
        return success = false
    } else {
        successmsg(password)
        success = true
    }
    if (!confirmPassword.value.trim()) {
        error(confirmPassword, "*confirmpassword Requried")
        return success = false
    } else if (password.value.trim() !== confirmPassword.value.trim()) {
        error(confirmPassword, "*password miss match")
        return success = false
    }
    else {
        successmsg(confirmPassword)
        success = true
    }
    return success
}
function error(input, message) {
    const element = input.parentElement
    const span = element.querySelector('span')
    span.innerHTML = message
    element.classList.add("error")
    element.classList.remove('success')
}
function successmsg(input) {
    const element = input.parentElement
    const span = element.querySelector('span')
    span.innerHTML = ''
    element.classList.add('success')
    element.classList.remove('error')
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = validate()
    if(value){
        let data = [... new FormData(form)]
       
        let  datas =JSON.stringify(Object.fromEntries(data))

        console.log(datas);
        fetch('https://reqres.in/api/users/2',{method:'POST',body:datas}).then(res=>{
            
            alert(`Registration Successful ${fullName.value} thank you`)
            open("./login.html",'_blank')
            email.value='', fullName.value='', number.value='', password.value='', confirmPassword.value=''
        })

    }

})
















 