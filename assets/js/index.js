// Dire

const number_id = JSON.parse(localStorage.getItem("number_id"));
const usrjoin = document.getElementById("usrjoin");
document.getElementById("usrjoin").onclick = function () {
  if (number_id === null) {
    window.location.href = "./pages/CLIENT/clientloginpage.html";
  } else {
    window.location.href = "./pages/CLIENT/client main page.html";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  // Define the reviews data
  const reviews = [
      {
          image: "./assets/img/review/emmy.jpeg",
          stars: 5,
          name: "Emmy",
          message: "I am amazed at how quick are the first results, all of which I sincerely attribute to my newly found love for these fitness workouts! I lost some weight & I feel amazing! My favorite place in town."
      },
      {
          image: "./assets/img/review/jose.jpeg",
          stars: 5,
          name: "Jose",
          message: "Before I was referred here by my own brother, I never considered the fitness workouts routine to be so efficient. Now, my body proves me wrong!"
      },
      {
          image: "./assets/img/review/dhanalakshmi.jpeg",
          stars: 5,
          name: "Dhanalakshmi",
          message: "The instructors are extremely knowledgeable & highly motivated. No matter if your goal is to stay fit during vacation or to train hardcore. MAAT FITNESS has what you're looking for."
      },
      {
          image: "./assets/img/review/henil.jpeg",
          stars: 5,
          name: "Henil",
          message: "Best in the district💯 it’s value for money because I have seen fitness centers in Chennai. People around Colachel are fortunate that you have this fitness center here."
      },
      {
          image: "./assets/img/review/sophie kannu.jpeg",
          stars: 5,
          name: "Sophie Kannuu",
          message: "100% motivation 👏 Results guaranteed. Personal training is promised with special programs/diet charts. Qualified trainers will stand with you to enhance your exercise time & help you achieve your goals safely."
      },
      {
          image: "./assets/img/review/nisham.jpeg",
          stars: 5,
          name: "Nisham",
          message: "Thank you so much bro. I am happy with where I am motivated to get my dream shape. Sincerely appreciate your help."
      }
  ];

  
  // Get the reviews container element
  const reviewsContainer = document.querySelector(".column");

  // Loop through the reviews data and generate HTML dynamically
   reviews.forEach(review => {
      // Create the box element
      const box = document.createElement("div");
      box.classList.add("box");

      // Create the container element
      const container = document.createElement("div");
      container.classList.add("container");

      // Create the image element
      const imageDiv = document.createElement("div");
      const image = document.createElement("img");
      image.classList.add("reimg");
      image.src = review.image;
      image.alt = "img";
      // image.width = "150px";
      imageDiv.appendChild(image);
      container.appendChild(imageDiv);

      // Create the stars element
      const starsDiv = document.createElement("div");
      for (let i = 0; i < review.stars; i++) {
          const starIcon = document.createElement("i");
          starIcon.classList.add("fa", "fa-star");
          starIcon.style.fontSize = "20px";
          starIcon.style.color = "rgb(217, 204, 27)";
          starsDiv.appendChild(starIcon);
      }
      container.appendChild(starsDiv);

      // Create the name element
      const nameDiv = document.createElement("div");
      const boldName = document.createElement("b");
      boldName.textContent = review.name;
      nameDiv.appendChild(boldName);
      container.appendChild(nameDiv);

      // Create the author element
      const authorDiv = document.createElement("div");
      const authorName = document.createElement("div");
      authorName.textContent = "-" + review.name;
      authorDiv.appendChild(authorName);
      container.appendChild(authorDiv);

      // Create the overlay element
      const overlayDiv = document.createElement("div");
      overlayDiv.classList.add("overlay");

      // Create the text element
      const textDiv = document.createElement("div");
      textDiv.classList.add("text");
      const messageParagraph = document.createElement("p");
      messageParagraph.textContent = review.message;
      textDiv.appendChild(messageParagraph);
      overlayDiv.appendChild(textDiv);

      // Append the overlay element to the container
      container.appendChild(overlayDiv);

      // Append the container to the box element
      box.appendChild(container);

      // Append the box element to the reviews container
      reviewsContainer.appendChild(box);
  });
});




const user_id = localStorage.getItem("number_id");
const btn = document.getElementById("usrjoin");
document.getElementById("usrjoin").onclick = function () {
  if (user_id !== null && user_id !== undefined && user_id !== "") {
      window.location.href = "./pages/CLIENT/client main page.html";
  } else {
      window.location.href = "./pages/CLIENT/clientloginpage.html";
  }
};

const trainer_id = localStorage.getItem("trainer_number");
const btn2 = document.getElementById("trinerjoin");
document.getElementById("trinerjoin").onclick = function () {
  if (trainer_id !== null && trainer_id !== undefined && trainer_id !== "") {
      window.location.href = "./pages/TRAINER/Trainer Mainpage.html";
  } else {
      window.location.href = "./pages/TRAINER/trainerlogin.html";
  }
};