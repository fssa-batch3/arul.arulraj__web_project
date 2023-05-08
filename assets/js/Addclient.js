function registration(e) {
  e.preventDefault();

  const user_firstname = document.getElementById("user_firstname").value;
  const user_lastname = document.getElementById("user_lastname").value;
  const user_number = document.getElementById("user_number").value;
  const user_password = document.getElementById("user_password").value;
  const user_confirmpassword = document.getElementById(
    "user_confirmpassword"
  ).value;
  const asign_trainer = document.getElementById("asign_trainer").value;
  const user_age = document.getElementById("user_age").value;
  const user_weight = document.getElementById("user_weight").value;
  const user_height = document.getElementById("user_height").value;
  const user_package = document.getElementById("user_package").value;
  const user_service = document.getElementById("user_service").value;
  const user_gender = document.getElementById("user_gender").value;
  const user_photo = document.getElementById("user_photo").value;
  const addressline1 = "";
  const addressline2 = "";
  const pincode = "";
  const city = "";
  const state = "";
  const user_uuid = uuidv4();

  const user_data = JSON.parse(localStorage.getItem("user_data")) || [];

  const exist =
    user_data.length &&
    JSON.parse(localStorage.getItem("user_data")).some(
      (data) => data.user_number.toLowerCase() === user_number.toLowerCase()
    );
  if (!exist) {
    if (user_password === user_confirmpassword) {
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
        user_photo,
        user_gender,
        addressline1,
        addressline2,
        pincode,
        city,
        state,
        user_uuid,
      });

      localStorage.setItem("user_data", JSON.stringify(user_data));
      document.querySelector("form").reset();
      document.getElementById("user_number").focus();
      alert("Account created Successfully");
      window.location.href = "../ADMIN/client listpage.html";
    } else {
      alert("Confirmpassword is not correct!!!");
    }
  } else {
    alert(
      "Sorry the User already Exist!! \n Try with different Phone number or email"
    );
    document.querySelector("form").reset();
  }
}

document.getElementById("addClient").addEventListener("submit", registration);
