function add_workout(e) {
  e.preventDefault();

  const category = document.getElementById("category").value;
  const workoutname = document.getElementById("workoutname").value;
  const rep = document.getElementById("rep").value;
  const sets = document.getElementById("sets").value;
  const benifits = document.getElementById("benifits").value;
  const workoutphoto = document.getElementById("workoutphoto").value;
  const workout_uuid = uuidv4();

  const add_workout = JSON.parse(localStorage.getItem("catagory_id")) || [];

  add_workout.push({
    category,
    workoutname,
    rep,
    sets,
    benifits,
    workoutphoto,
    workout_uuid,
  });

  localStorage.setItem("catagory_id", JSON.stringify(add_workout));
  alert("New workout uploaded successfully");
  window.location.href = "../WORKOUTS/Workout main page.html";
}
