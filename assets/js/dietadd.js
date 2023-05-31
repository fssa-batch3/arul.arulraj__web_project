
const plusButton = document.getElementById("plus");
const inputContainer = document.getElementById("inputContainer");
let inputCounter = 1;

plusButton.addEventListener("click", () => {
    const input = document.createElement("input");
    input.className = "workoutinput";
    input.id = `Workout_${inputCounter}`;
    input.placeholder = `Workout ${inputCounter}`;
    input.required = true;
    inputContainer.appendChild(input);

    inputCounter++;
});

const plusButton2 = document.getElementById("plus2");
const inputContainer2 = document.getElementById("inputContainer2");
let inputCounter2 = 1;

plusButton2.addEventListener("click", () => {
    const input = document.createElement("input");
    input.className = "dietinput";
    input.id = `Diet_${inputCounter2}`;
    input.placeholder = `Diet ${inputCounter2}`;
    input.required = true;
    inputContainer2.appendChild(input);

    inputCounter2++;
});

const dateInput = document.getElementById("date");
const systemDate = new Date();
const year = systemDate.getFullYear();
const month = (systemDate.getMonth() + 1).toString().padStart(2, "0");
const day = systemDate.getDate().toString().padStart(2, "0");
const dateString = `${year}-${month}-${day}`;
dateInput.value = dateString;

function new_plan_update(e) {
    e.preventDefault();

    let client_id = document.getElementById("client_id").value;
    const date = document.getElementById("date").value;
    console.log(typeof (date))
    let Workout = document.getElementById("Workout").value;
    let calorie = document.getElementById("calorie").value;
    let water = document.getElementById("water").value;
    let workoutInputs = document.getElementsByClassName("workoutinput"); // Retrieve all workout inputs
    let dietInputs = document.getElementsByClassName("dietinput"); // Retrieve all diet inputs
    let user_plan_uuid = uuidv4();

    let selectedDate = new Date(date);
    let currentDate = new Date();

    if (selectedDate < currentDate) {
        alert("Please select a upcoming date for the plan.");
        return;
    }
    // Store workout values in an array
    let workouts = [];
    for (let i = 0; i < workoutInputs.length; i++) {
        workouts.push(workoutInputs[i].value);
    }

    if (workouts.length === 0) {
        alert("Please enter at least one workout.");
        return;
    }


    // console.log(typeof(plans[0]["date"])) 
    const plans = JSON.parse(localStorage.getItem("user_workoutplans")) || [];
    // Check if a plan for the selected date already exists
    const existingPlan = plans.find(p => p.date === date);

    if (existingPlan) {
        alert("A plan for the selected date already exists.");
    }
    else {


        console.log(plans);

        for (let i = 0; i < workouts.length; i++) {
            const plan = {
                "workouts": workouts[i],
                user_plan_uuid,
            };

            plans.push(plan);
            console.log(plans);
            localStorage.setItem("user_workoutplans", JSON.stringify(plans))
        }

        // Retrieve the existing plans from localStorage
        const newexistingPlans = JSON.parse(localStorage.getItem("plans")) || [];

        // Create a new plan object
        const newPlan = {
            client_id: client_id,
            date: date,
            calorie: calorie,
            Workout: Workout,
            water: water,
            user_plan_uuid: user_plan_uuid
        };

        // Add the new plan to the existing plans array
        newexistingPlans.push(newPlan);

        // Store the updated plans in localStorage
        localStorage.setItem("plans", JSON.stringify(newexistingPlans));

        console.log(newexistingPlans);


        // Store workout values in an array
        let diets = [];
        for (let i = 0; i < dietInputs.length; i++) {
            diets.push(dietInputs[i].value);
        }

        if (diets.length === 0) {
            alert("Please enter at least one workout.");
            return;
        }
        let plan = JSON.parse(localStorage.getItem("user_dietplans")) || [];

        // Check if a plan for the selected date already exists
        let existingPlans = plan.find(p => p.date === date);

        if (existingPlan) {
            alert("A plan for the selected date already exists.");
        } else {
            let plan = JSON.parse(localStorage.getItem("user_dietplans")) || [];
            for (let i = 0; i < diets.length; i++) {
                const plans = {
                    "diets": diets[i],
                    user_plan_uuid
                };

                plan.push(plans);
                localStorage.setItem("user_dietplans", JSON.stringify(plan));
                alert("New plan uploaded successfully");
            }
        }


        window.location.href = "../TRAINER/dieat add page.html";
    }
};