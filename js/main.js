let fName = document.querySelector('.fname'),
    lName = document.querySelector('.lname'),
    email = document.querySelector('.email'),
    birthDay = document.querySelector('.date'),
    message = document.querySelector('.message'),
    hiSchool = document.getElementById('one'),
    bachelor = document.getElementById('two'),
    master = document.getElementById('three'),
    doctor = document.getElementById('four'),
    submit = document.querySelector('.submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    
    let personData = {
      firstname: fName.value,
      lastname: lName.value,
      email: email.value,
      birthday: birthDay.value,
      message: message.value,
      hischool: hiSchool.checked,
      bachelor: bachelor.checked,
      master: master.checked,
      doctor: doctor.checked,
    };
    
    console.log(personData);
});    

