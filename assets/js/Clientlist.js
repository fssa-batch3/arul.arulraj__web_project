const client_list = [
  {
    user_name: {
      title: "Name",
    },
    user_age: {
      title: "Age",
    },
    user_weight: {
      title: "Weight",
    },
    user_height: {
      title: "height",
    },
    user_phonenumber: {
      title: "Contact",
    },
    user_pakage: {
      title: "Pakage",
    },
    user_trainer: {
      title: "Trained by",
    },
    oldplan_btnlink: "",
    newplan_btnlink: "../TRAINER/dieat add page.html",
  },
];

const mainsec = document.getElementById('mainsec');
const container = document.getElementById('container2');
const page = document.getElementById('page');
const user_data = JSON.parse(localStorage.getItem("user_data"));

if (!user_data || user_data.length === 0 && container.style.display === 'none') {
  container.style.display = '';
  mainsec.style.display = 'none';
  page.style.backgroundImage = 'white';
} else {
  for (let i = 0; i < user_data.length; i++) {
    clientlist_card = document.createElement("div");
    clientlist_card.setAttribute("class", "innerlist");
    console.log(clientlist_card);

    clientlist_cntbtn = document.createElement("div");
    clientlist_cntbtn.setAttribute("class", "cntbtn");
    clientlist_card.append(clientlist_cntbtn);

    trainerlist_container = document.createElement("div");
    trainerlist_container.setAttribute("class", "container");
    clientlist_cntbtn.append(trainerlist_container);

    trainerImg = document.createElement("img");
    trainerImg.setAttribute("src", user_data[i].user_photo);
    trainerImg.setAttribute("width", "350px");
    trainerImg.setAttribute("class", "image");
    trainerImg.setAttribute("alt", "image");
    trainerlist_container.append(trainerImg);

    trainerlist_containeroverlay = document.createElement("div");
    trainerlist_containeroverlay.setAttribute("class", "overlay");
    trainerlist_container.append(trainerlist_containeroverlay);

    trainerlist_containerText = document.createElement("div");
    trainerlist_containerText.setAttribute("class", "text");
    trainerlist_containeroverlay.append(trainerlist_containerText);

    user_name = document.createElement("p");
    user_name.innerText = `Name : ${user_data[i].user_firstname}` + " " + `${user_data[i].user_lastname}`;
    trainerlist_containerText.append(user_name);

    user_age = document.createElement("p");
    user_age.innerText = `age : ${user_data[i].user_age}`;
    trainerlist_containerText.append(user_age);

    user_weightandheight = document.createElement("p");
    user_weightandheight.innerText =
      `weight` +
      ` and ` +
      `Height : ${user_data[i].user_weight}kg` +
      `,${user_data[i].user_height}cm`;
    trainerlist_containerText.append(user_weightandheight);

    user_phonenumber = document.createElement("p");
    user_phonenumber.setAttribute("class", "user_phonenumber");
    user_phonenumber.innerText = `Number` + `:${user_data[i].user_number}`;
    trainerlist_containerText.append(user_phonenumber);

    user_pakage = document.createElement("p");
    user_pakage.innerText = `Pakage` + `:${user_data[i].user_package}`;
    trainerlist_containerText.append(user_pakage);

    user_trainer = document.createElement("p");
    user_trainer.innerText = `Trined By ` + `:${user_data[i].asign_trainer}`;
    trainerlist_containerText.append(user_trainer);

    plan_btn = document.createElement("div");
    plan_btn.setAttribute("class", "btn");
    clientlist_cntbtn.append(plan_btn);

    active_btn = document.createElement("button");
    active_btn.setAttribute("class", "activebtn");
    active_btn.setAttribute("id", "activebtn");
    active_btn.setAttribute("data-index", i);
    if(user_data[i].user_status == false){
      active_btn.innerText = "Deactivated";
    }else{
      active_btn.innerText = "Active";
    }
   
    plan_btn.append(active_btn);

    console.log(active_btn);

    newplan_btnlink = document.createElement("a");
    newplan_btnlink.setAttribute("href", "../TRAINER/dieat add page.html");
    plan_btn.append(newplan_btnlink);

    newplan_btn = document.createElement("button");
    newplan_btn.setAttribute("class", "new");
    newplan_btn.innerText = "Add plan +";
    newplan_btnlink.append(newplan_btn);

    document.querySelector("div.list").append(clientlist_card);
  }
}

const btn = document.getElementById("activebtn");

if (btn.innerText === "Deactivated") {
  btn.style.color = 'red';
}

const Activate = document.querySelectorAll(".activebtn");
Activate.forEach((Activate) => {
  Activate.addEventListener("click", activate);
});

function activate(e) {
  const index= this.dataset.index
  const user_data = JSON.parse(localStorage.getItem("user_data"));

  if(user_data[index].user_status == false){
    alert("Do you want to activate this account?")
  }
  else{
    alert("Do you want to deactivate this account?")
  }

    const clientIndex = e.currentTarget.getAttribute("data-index"); // Get the index of the client from the data attribute of the clicked button

    if (clientIndex >= 0 && clientIndex < user_data.length) {
      const client = user_data[clientIndex];
      client.user_status = !client.user_status; // Toggle the user status
      localStorage.setItem("user_data", JSON.stringify(user_data)); // Update the localStorage
    }

    window.location.reload();

  }
