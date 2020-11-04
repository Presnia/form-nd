let fName = document.querySelector('.fname'),
    lName = document.querySelector('.lname'),
    email = document.querySelector('.email'),
    birthDay = document.querySelector('.date'),
    message = document.querySelector('.message'),
    submit = document.querySelector('.submit');

submit.addEventListener('click', function(event) {
    event.preventDefault();
    
    let personData = {
      fname: fName.value,
      lname: lName.value,
      email: email.value,
      bday: birthDay.value,
      message: message.value,
    };
    
    console.log(personData);
});    

