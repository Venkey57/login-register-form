let form = document.forms.login

let { userName, emailId } = form.elements

function validate() {
     let success = true
     if (!userName.value.trim()) {
          errormsg(userName, '*userName Requried')
           success = false
     } else if (userName.value.trim().length < 3 || userName.value.trim().length > 15) {
          errormsg(userName, '*userName contain atlest 3 character & less than 15 character')
           success = false
     } else {
          successmsg(userName)
          success = true
     }
     if (!emailId.value) {
          errormsg(emailId, '*Email Requried')
          return success = false
     }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailId.value.trim())){
          errormsg(emailId, '*Invaild Email ID')
          return success = false
     }else {
          successmsg(userName)
          success = true
     }
     
     return success
}
function errormsg(input, message) {
     const inputEle = input.parentElement
     const span = inputEle.querySelector('span')
     span.innerHTML = message
     inputEle.classList.add('error')
     inputEle.classList.remove('success')
}
function successmsg(input) {
     const inputEle = input.parentElement
     const span = inputEle.querySelector('span')
     span.innerHTML = ''
     inputEle.classList.add('success')
     inputEle.classList.remove('error')
}

let handler = (event) => {
     event.preventDefault()
     let value = validate()
     if (value) {
          let data= [... new FormData(form)]
          let data2 = JSON.stringify(Object.fromEntries(data))
          console.log(data2);
          fetch('https://reqres.in/api/users/2',{method:'POST',body:data2}).then(()=>{
              userName.value ='',emailId.value='' 
              open('https://www.google.com/')
          })
     }

}
form.addEventListener('submit', handler)