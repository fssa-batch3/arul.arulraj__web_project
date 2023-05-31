        // Retrieve workout name from URL parameter
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const workoutname = urlParams.get("workoutname");

        // Retrieve video link and workout name from localStorage based on the workout name
        const add_workout = JSON.parse(localStorage.getItem("catagory_id"));
        const workout = add_workout.find((w) => w.workoutname === workoutname);

        console.log(workout);
        // Update the workout title and video link
        document.getElementById("workoutTitle").textContent = workout.workoutname;
        const workoutlink = document.getElementById("videoPlayer")
        workoutlink.setAttribute("src", workout.videolink);
        console.log(workoutlink);
        document.getElementById("benifits").textContent = workout.benifits;
        document.getElementById("setsAndReps").textContent = `Sets: ${workout.sets}, Reps: ${workout.rep}`;