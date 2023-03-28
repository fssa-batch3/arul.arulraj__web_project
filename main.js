const trainer_details = [{
    Trainer_Achivements
    : 
    "Mr.Tamilnadu ",
    Trainer_Experience
    : 
    "3-years",
    Trainer_address
    : 
    "no-5,colachel,kanniyakumari",
    Trainer_gender
    : 
    "Male",
    trainer_age
    : 
    "29",
    trainer_confirmpassword
    : 
    "1234",
    trainer_name
    : 
    "aravin A",
    trainer_number
    : 
    "12345",
    trainer_password
    : 
    "1234",
    trainer_uuid
    : 
    "0960bb6a-1b07-45fe-b3fb-e1d9b1b6f176"}]

const trainer_detail =JSON.parse(localStorage.getItem("trainer_data"));

if(!trainer_detail){
    localStorage.setItem("trainer_data",JSON.stringify(trainer_details))
}

// benifits
// : 
// "zfdghh"
// category
// : 
// "chest_workout"
// rep
// : 
// "16-10"
// sets
// : 
// "04"
// workout_uuid
// : 
// "63b386ed-3a48-48eb-ad18-678954957629"
// workoutname
// : 
// "qefdgs"
// workoutphoto
// : 
// "https://iili.io/HNM5BWB.th.jpg"