const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const catagory_id = urlParams.get("catagory_id");

const add_workout = JSON.parse(localStorage.getItem("catagory_id"));
// const workout_Id = add_workout.workout_uuid;

// array.filter()
const Workout = add_workout.filter(function find(e) {
    return e.category === catagory_id;
});


for (let i = 0; i < Workout.length; i++) {
    const workout_card = document.createElement("div");
    workout_card.setAttribute("class", "workout");
    console.log(workout_card);

    const workout_title = document.createElement("div");
    workout_title.setAttribute("class", "workoutname");
    workout_card.append(workout_title);

    const title = document.createElement("h2");
    title.innerText = Workout[i].workoutname;
    workout_title.append(title);

    const imageContainer = document.createElement("div");
    workout_card.append(imageContainer);

    const workoutImg = document.createElement("img");
    workoutImg.setAttribute("id", "workoutphoto");
    workoutImg.setAttribute("src", Workout[i].workoutphoto);
    workoutImg.setAttribute("width", "250px");
    workoutImg.setAttribute("height", "200px");
    workoutImg.setAttribute("alt", "image");
    imageContainer.append(workoutImg);

    const playContainer = document.createElement("div");
    workout_card.append(playContainer);

    const playbtn = document.createElement("button");
    playbtn.setAttribute("class", "playbtn");
    playbtn.setAttribute("data-workoutname", Workout[i].workoutname);
    playbtn.innerText = "Play";
    playContainer.append(playbtn);

    document.querySelector("div.workoutlist").append(workout_card);
}

const playbtns = document.querySelectorAll(".playbtn");
playbtns.forEach((playbtn) => {
    playbtn.addEventListener("click", (event) => {
        const workoutname = playbtn.dataset.workoutname;
        const url = `../WORKOUTS/workoutvideo.html?workoutname=${encodeURIComponent(workoutname)}`;
        window.location.href = url;
    });
});