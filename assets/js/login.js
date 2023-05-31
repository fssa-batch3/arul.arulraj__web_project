// login for client
const signIn = (e) => {
  e.preventDefault();

  const user_number = document.getElementById("user_number").value;
  const user_password = document.getElementById("user_password").value;
  // const user_data = JSON.parse(localStorage.getItem("user_data")) || [];
  
  const exist = JSON.parse(localStorage.getItem("user_data")).some(
    (data) =>
      data.user_number.toLowerCase() == user_number &&
      data.user_password == user_password && data.user_status !== false
  );
  if (!exist) {
    alert("Incorrect login credentials OR your account has expired");
  } else {
    localStorage.setItem("number_id", JSON.stringify(user_number));
    alert("Login Successful..");
    location.href = "../CLIENT/client main profile.html";
  }
};

function register() {
  window.location.href = "../CLIENT/user Registraion page.html";
}

// Trainer login

const trainerlogin = (e) => {
  e.preventDefault();

  const trainer_number = document.getElementById("trainer_number").value;
  const trainer_password = document.getElementById("trainer_password").value;
  // const trainer_data = JSON.parse(localStorage.getItem("trainer_data")) || [];
  const exist = JSON.parse(localStorage.getItem("trainer_data")).some(
    (data) =>
      data.trainer_number.toLowerCase() == trainer_number &&
      data.trainer_password == trainer_password
  );
  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    localStorage.setItem("trainer_number", JSON.stringify(trainer_number));
    alert("Login Successful..");
    location.href = "../TRAINER/Trainer Mainpage.html";
  }
};
