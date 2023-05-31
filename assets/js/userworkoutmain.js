const workout_list = [
    {
      workoutname: "Chest",
      unique_id: "chest_workout",
      image: {
        source: "../../assets/img/10-best-chest-exercises.jpg",
        alt: "image",
      },
    },
  
    {
      workoutname: "Back",
      unique_id: "back_workout",
      image: {
        source: "../../assets/img/10-best-back-exercises.jpg",
        alt: "image",
      },
    },
  
    {
      workoutname: "Shoulders",
      unique_id: "shoulder_workout",
      image: {
        source:
          "../../assets/img/10-best-shoulder-exercises-for-muscle-skinny-v2-830x467.jpg",
        alt: "image",
      },
    },
  
    {
      workoutname: "Biceps",
      unique_id: "bicep_workout",
      image: {
        source:
          "../../assets/img/10-best-biceps-exercises-for-muscle-skinny-830x467.jpg",
        alt: "image",
      },
    },
  
    {
      workoutname: "Triceps",
      unique_id: "tricep_workout",
      image: {
        source:
          "../../assets/img/10-best-triceps-exercises-for-muscle-skinny-830x467.jpg",
        alt: "image",
      },
    },
    {
      workoutname: "Legs",
      unique_id: "leg_workout",
      image: {
        source:
          "../../assets/img/10-best-leg-exercises-for-muscle-skinny-830x467.jpg",
        alt: "image",
      },
    },
    {
      workoutname: "Abs",
      unique_id: "abs_workout",
      image: {
        source:
          "../../assets/img/10-best-ab-exercises-for-muscle-skinny-830x467.jpg",
        alt: "image",
      },
    },
  ];
  
  for (let i = 0; i < 7; i++) {
    const workout = document.createElement("div");
    workout.setAttribute("class", "workout");
  
    const title = document.createElement("h2");
    title.innerText = workout_list[i].workoutname;
    workout.append(title);
  
    const link = document.createElement("a");
    // link.setAttribute("href",workout_list[i]["link"]);
    workout.append(link);
  
    const workoutImg = document.createElement("img");
    workoutImg.setAttribute("class", "catagory_image");
    workoutImg.setAttribute("src", workout_list[i].image.source);
    workoutImg.setAttribute("data-id", workout_list[i].unique_id);
    link.append(workoutImg);
  
    document.querySelector("div.workoutslist").append(workout);
  }
  
  const catagory_image = document.querySelectorAll(".catagory_image");
  catagory_image.forEach((each) => {
    each.addEventListener("click", (event) => {
      const add_workout = each.dataset.id;
  
      window.location.href = `../CLIENT/ChestWorkout page.html?catagory_id=${add_workout}`;
    });
  });