// Client Registration

// password pattern recognization
let user_password = document.getElementById('user_password');
const number_pass = document.querySelector('.number_pass');
const upper_pass = document.querySelector('.upper_pass');
const lower_pass = document.querySelector('.lower_pass');
const symbol_pass = document.querySelector('.symbol_pass');
const char_pass = document.querySelector('.char_pass');

user_password.addEventListener('input', () => {
  const password_value = user_password.value;
  // check upper case
  const has_upper = /[A-Z]/.test(password_value);
  if (has_upper == true) {
    upper_pass.style.color = 'green';
  } else {
    upper_pass.style.color = 'var(--second-color)';
  }
  // check lower case
  const has_lower = /[a-z]/.test(password_value);
  if (has_lower == true) {
    lower_pass.style.color = 'green';
  } else {
    lower_pass.style.color = 'var(--second-color)';
  }
  // check number
  const has_symbol = /[!@#$$%^&*()_+:>?|\"' ]/.test(password_value);
  if (has_symbol == true) {
    symbol_pass.style.color = 'green';
  } else {
    symbol_pass.style.color = 'var(--second-color)';
  }
  // check char
  const has_number = /\d/.test(password_value);
  if (has_number == true) {
    number_pass.style.color = 'green';
  } else {
    number_pass.style.color = 'var(--second-color)';
  }
  // check length
  const char_length = password_value.length >= 8;
  if (char_length == true) {
    char_pass.style.color = 'green';
  } else {
    char_pass.style.color = 'var(--second-color)';
  }
});

function registration(e) {
  e.preventDefault();

  const user_firstname = document.getElementById('user_firstname').value;
  user_lastname = document.getElementById('user_lastname').value;
  user_number = document.getElementById('user_number').value;
  user_password = document.getElementById('user_password').value;
  user_confirmpassword = document.getElementById('user_confirmpassword').value;
  user_uuid = uuidv4();
  asign_trainer = '',
  user_age = '',
  user_weight = '',
  user_height = '',
  user_package = '',
  user_service = '',
  user_gender = '',
  addressline1 = '',
  addressline2 = '',
  user_photo = '',
  pincode = '',
  city = '',
  state = '';

  function check_phonenumber() {
    let result = 0;
    for (let i = 0; i < user_number.length; i++) {
      if (user_number[0] == user_number[i]) {
        result += 1;
      } else {
        break;
      }
    }
    if (result == 10) {
      alert('Enter your number properly');
      up_no.value = reset();
    } else {

    }
  }check_phonenumber();

  const user_data = JSON.parse(localStorage.getItem('user_data')) || [];

  const exist = user_data.length
                && JSON.parse(localStorage.getItem('user_data')).some((data) => data.user_number.toLowerCase() == user_number.toLowerCase());
  if (!exist) {
    if (user_password == user_confirmpassword) {
      user_data.push({
        user_firstname,
        user_lastname,
        user_number,
        user_confirmpassword,
        user_password,
        user_age,
        asign_trainer,
        user_weight,
        user_height,
        user_package,
        user_service,
        user_gender,
        addressline1,
        addressline2,
        user_photo,
        pincode,
        city,
        state,
        user_uuid,
      });

      localStorage.setItem('user_data', JSON.stringify(user_data));
      document.querySelector('form').reset();
      document.getElementById('user_number').focus();
      alert('Account created Successfully');
      location.href = '../CLIENT/clientloginpage.html';
    } else {
      alert('Confirmpassword is not correct!!!');
    }
  } else {
    alert('Sorry the User already Exist!! \n Try with different Phone number or email');
    document.querySelector('form').reset();
  }
}
