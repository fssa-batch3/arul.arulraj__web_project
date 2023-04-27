function add_workout(e){

    e.preventDefault();

    let category = document.getElementById("category").value;
    let workoutname = document.getElementById("workoutname").value;
    let rep = document.getElementById("rep").value;
    let sets = document.getElementById("sets").value;
    let benifits = document.getElementById("benifits").value;
    let workoutphoto = document.getElementById("workoutphoto").value;
    let workout_uuid=uuidv4();

    let add_workout = JSON.parse(localStorage.getItem('catagory_id'))||[];

    add_workout.push({
        category: category,
        workoutname:  workoutname,
        rep: rep,
        sets: sets,
        benifits: benifits,
        workoutphoto: workoutphoto,
        workout_uuid : workout_uuid,
    });

    localStorage.setItem('catagory_id', JSON.stringify(add_workout));
    alert("New plan uploaded successfully");
    window.location.href = "../WORKOUTS/Workout main page.html";
    }

