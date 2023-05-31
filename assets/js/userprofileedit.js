            
        const number_id = JSON.parse(localStorage.getItem("number_id"));
        const user_data = JSON.parse(localStorage.getItem("user_data"));

        function login_data(e) {
          return e.user_number === number_id;
        }

        const person_data = user_data.find(login_data);

        document.getElementById(
  "user_firstname"
).innerText = `${person_data.user_firstname} ${person_data.user_lastname}`;
        document.getElementById("user_number").innerText = person_data.user_number;
        document.getElementById("user_age").value = person_data.user_age;
        document.getElementById("user_weight").value = person_data.user_weight;
        document.getElementById("user_height").value = person_data.user_height;
        document.getElementById("user_package").value = person_data.user_package;
        document.getElementById("user_service").value = person_data.user_service;
        document.getElementById("user_gender").value = person_data.user_gender;
        document.getElementById("addressline1").value = person_data.addressline1;
        document.getElementById("addressline2").value = person_data.addressline2;
        document.getElementById("user_photo").value = person_data.user_photo;
        document.getElementById("pincode").value = person_data.pincode;
        document.getElementById("city").value = person_data.city;
        document.getElementById("state").value = person_data.state;

        function update(e) {
  e.preventDefault();

          const up_age = document.getElementById("user_age").value;
          const up_weight = document.getElementById("user_weight").value;
          const up_height = document.getElementById("user_height").value;
          const up_package = document.getElementById("user_package").value;
          const up_service = document.getElementById("user_service").value;
          const up_gender = document.getElementById("user_gender").value;
          const up_addressline1 = document.getElementById("addressline1").value;
          const up_addressline2 = document.getElementById("addressline2").value;
          const up_photo = document.getElementById("user_photo").value;
          const Up_pincode = document.getElementById("pincode").value;
          const up_city = document.getElementById("city").value;
          const up_state = document.getElementById("state").value;

          person_data.user_age = up_age;
          person_data.user_weight = up_weight;
          person_data.user_height = up_height;
          person_data.user_package = up_package;
          person_data.user_service = up_service;
          person_data.user_gender = up_gender;
          person_data.addressline1 = up_addressline1;
          person_data.addressline2 = up_addressline2;
          person_data.user_photo = up_photo;
          person_data.pincode = Up_pincode;
          person_data.city = up_city;
          person_data.state = up_state;

          localStorage.setItem("user_data", JSON.stringify(user_data));

          location.href = "../CLIENT/client main profile.html";
        }
        
       