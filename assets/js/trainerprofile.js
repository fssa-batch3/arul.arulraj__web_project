const trainer_number = JSON.parse(localStorage.getItem("trainer_number"));
        const trainer_data = JSON.parse(localStorage.getItem("trainer_data"));

        function trainerregistration(e) {
          return e.trainer_number === trainer_number;
        }

const person_data = trainer_data.find(trainerregistration);

        document.getElementById("trainer_name").innerText = person_data.trainer_name;
        document.getElementById("trainer_age").innerText = person_data.trainer_age;
        document.getElementById("trainer_number").innerText =
  person_data.trainer_number;
        document.getElementById("Trainer_address").innerText =
  person_data.Trainer_address;
        document.getElementById("Trainer_gender").innerText =
  person_data.Trainer_gender;
        document.getElementById("Trainer_Experience").innerText =
  person_data.Trainer_Experience;
        document.getElementById("Trainer_Achivements").innerText =
  person_data.Trainer_Achivements;

const userLogoutElement = document.getElementById("logOut");
        userLogoutElement?.addEventListener("click", () => {
          localStorage.removeItem("trainer_number");
          window.location.href = "../../index.html";
        });