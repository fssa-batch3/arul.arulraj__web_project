const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const catagory_id = urlParams.get("catagory_id");

let add_workout = JSON.parse(localStorage.getItem("catagory_id"));
const workout_Id = add_workout.workout_uuid;

// array.filter()
const Workout = add_workout.filter(function find(e) {
  return e.category === catagory_id;
});
// console.log(Chest_Workout)

for (let i = 0; i < Workout.length; i++) {
  workout_card = document.createElement("div");
  workout_card.setAttribute("class", "workout");
  console.log(workout_card);

  workout_title = document.createElement("div");
  workout_card.append(workout_title);

  title = document.createElement("h2");
  title.innerText = Workout[i].workoutname;
  workout_title.append(title);

  imageContainer = document.createElement("div");
  workout_card.append(imageContainer);

  workoutImg = document.createElement("img");
  workoutImg.setAttribute("id", "workoutphoto");
  workoutImg.setAttribute("src", Workout[i].workoutphoto);
  workoutImg.setAttribute("width", "250px");
  workoutImg.setAttribute("alt", "image");
  imageContainer.append(workoutImg);

  detailContainer = document.createElement("div");
  workout_card.append(detailContainer);

  counts = document.createElement("p");
  counts.innerText =
    `SETS AND REPS` +
    `:` +
    `sets` +
    `:${Workout[i].sets},` +
    `reps` +
    `:${Workout[i].rep}`;
  detailContainer.append(counts);

  const benifitsTitle = document.createElement("p");
  benifitsTitle.innerText = "BENIFITS";
  detailContainer.append(benifitsTitle);

  benifitContainer = document.createElement("p");
  detailContainer.append(benifitContainer);

  benifit = document.createElement("b");
  benifit.innerText = Workout[i].benifits;
  benifitContainer.append(benifit);

  delContainer = document.createElement("div");
  workout_card.append(delContainer);

  delbtn = document.createElement("button");
  delbtn.setAttribute("class", "delbtn");
  // delbtn.setAttribute("onclick", "del(event)");
  delbtn.setAttribute("data-id", Workout[i].workout_uuid);
  delContainer.append(delbtn);

  delbtnicon = document.createElement("i");
  delbtnicon.setAttribute("class", "fa fa-trash");
  delbtn.append(delbtnicon);

  document.querySelector("div.workoutlist").append(workout_card);
}

const deleteBtn = document.querySelectorAll(".delbtn");
deleteBtn.forEach((findId) => {
  findId.addEventListener("click", function () {
    if (confirm("Are you sure you want to delete the workout")) {
      const DataId = this.dataset.id;
      const category = JSON.parse(localStorage.getItem("catagory_id"));
      console.log(DataId);

      function delwrk(e) {
        return e.workout_uuid === DataId;
      }
      add_workout = category.find(delwrk);
      const removedata = category.indexOf(add_workout);
      category.splice(removedata, 1);
      localStorage.setItem("catagory_id", JSON.stringify(category));
      window.location.reload();
    }
  });
});