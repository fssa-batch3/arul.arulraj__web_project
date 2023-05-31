function trainerregistration(e) {
    e.preventDefault();

    const trainer_name = document.getElementById("trainer_name").value;
    trainer_location = document.getElementById("Trainer_location").value;
    trainer_age = document.getElementById("trainer_age").value;
    Export_in = document.getElementById("profession").value;
    works = document.getElementById("works").value;
    image = document.getElementById("image").value;
    about_trainer = document.getElementById("about").value;
    trainer_number = document.getElementById("trainer_number").value;
    trainer_password = document.getElementById("trainer_password").value;
    trainer_confirmpassword = document.getElementById(
        "trainer_confirmpassword"
    ).value;
    Trainer_address = document.getElementById("Trainer_address").value;
    Trainer_gender = document.getElementById("Trainer_gender").value;
    Trainer_Experience = document.getElementById("Trainer_Experience").value;
    Trainer_Achivements = document.getElementById("Trainer_Achivements").value;
    trainer_uuid = uuidv4();

    const trainer_data = JSON.parse(localStorage.getItem("trainer_data")) || [];

    const exist =
        trainer_data.length &&
        JSON.parse(localStorage.getItem("trainer_data")).some(
            (data) =>
                data.trainer_number.toLowerCase() == trainer_number.toLowerCase()
        );

    if (!exist) {
        if (trainer_password == trainer_confirmpassword) {
            trainer_data.push({
                trainer_name,
                trainer_age,
                trainer_number,
                trainer_password,
                trainer_confirmpassword,
                Trainer_address,
                Trainer_gender,
                Trainer_Achivements,
                Trainer_Experience,
                trainer_uuid,
                Export_in,
                works,
                image,
                about_trainer,

            });

            localStorage.setItem("trainer_data", JSON.stringify(trainer_data));
            document.querySelector("form").reset();
            document.getElementById("trainer_number").focus();
            alert("New Trainer Added successfully");
            window.location.href = "../ADMIN/trainerlist.html";
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