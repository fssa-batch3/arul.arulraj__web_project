const trainer_number = JSON.parse(localStorage.getItem("trainer_number"));
        
        const trainer_data = JSON.parse(localStorage.getItem("trainer_data"));

        function find_id(e) {
          return e.trainer_number === trainer_number;
        }

        const person_data = trainer_data.find(find_id);

        document.getElementById("trainer_name").value = person_data.trainer_name;
        document.getElementById("trainer_age").value = person_data.trainer_age;
        document.getElementById("trainer_number").value = person_data.trainer_number;
        document.getElementById("Trainer_address").value = person_data.Trainer_address;
        document.getElementById("Trainer_gender").value = person_data.Trainer_gender;
        document.getElementById("Trainer_Experience").value =
  person_data.Trainer_Experience;
        document.getElementById("Trainer_Achivements").value =
  person_data.Trainer_Achivements;

        function update(e) {
  event.preventDefault();

  const trainer_name = document.getElementById("trainer_name").value;
  const trainer_age = document.getElementById("trainer_age").value;
  const trainer_number = document.getElementById("trainer_number").value;
          Trainer_address = document.getElementById("Trainer_address").value;
          Trainer_gender = document.getElementById("Trainer_gender").value;
          Trainer_Experience = document.getElementById("Trainer_Experience").value;
          Trainer_Achivements = document.getElementById("Trainer_Achivements").value;

  person_data.trainer_name = trainer_name;
          person_data.trainer_age = trainer_age;
          person_data.trainer_number = trainer_number;
          person_data.Trainer_address = Trainer_address;
          person_data.Trainer_gender = Trainer_gender;
          person_data.Trainer_Experience = Trainer_Experience;
          person_data.Trainer_Achivements = Trainer_Achivements;

          localStorage.setItem("trainer_data", JSON.stringify(trainer_data));

          window.location.href = "./trainerptofile.html";
        }