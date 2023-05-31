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
        const a = document.getElementById("user_photo");
        a.setAttribute("src", person_data.user_photo);
        console.log(a);
        document.getElementById("pincode").value = person_data.pincode;
        document.getElementById("city").value = person_data.city;
        document.getElementById("state").value = person_data.state;

        // function del(e) {
        //     if (confirm("Are you sure you want to delete the account")) {
        //         const number_id = JSON.parse(localStorage.getItem("number_id"));
        //         const user_data = JSON.parse(localStorage.getItem("user_data"));
        //         function login_data(e) {
        //             return e.user_number == number_id;
        //         }
        //         person_data = user_data.find(login_data);
        //         const removedata = user_data.indexOf(person_data);
        //         user_data.splice(removedata, 1);
        //         localStorage.setItem("user_data", JSON.stringify(user_data));
        //         window.location.href = "../../index.html";
        //     }
        // }

        const userLogoutElement = document.getElementById("logOut");
        userLogoutElement?.addEventListener("click", () => {
          localStorage.removeItem("number_id");
          window.location.href = "../../index.html";
        });