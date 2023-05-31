       // Array of background image paths
       var backgroundImages = [
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.32 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.33 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.39 PM (1).jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.33 PM (1).jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.40 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.35 PM (1).jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.35 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.41 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.40 PM (1).jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.36 PM (2).jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.39 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.36 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.37 PM (1).jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.37 PM.jpeg",
        "../../assets/img/works/WhatsApp Image 2023-05-22 at 3.43.38 PM.jpeg",

    ];
    console.log(backgroundImages[0]);

    // Common link for all boxes
    var link = "https://instagram.com/maatfitness?igshid=MzRlODBiNWFlZA==";

    // Get the container element
    var container = document.querySelector(".row");

    // Loop through the background images and create the box elements
    for (let i = 0; i < backgroundImages.length; i++) {
        let backgroundImage = backgroundImages[i];

        // Create the box element
        var box = document.createElement("div");
        box.className = "box";
        box.style.backgroundImage= `url('${backgroundImage}')`;
        box.style.backgroundSize = "cover";

        // Create the overlay element
        var overlay = document.createElement("div");
        overlay.className = "overlay";

        // Create the link element
        var linkElement = document.createElement("a");
        linkElement.href = link;

        // Create the button element
        var button = document.createElement("button");
        button.className = "visitbtn";
        button.textContent = "view more";

        // Append the button to the link element
        linkElement.appendChild(button);

        // Append the link element to the overlay element
        overlay.appendChild(linkElement);

        // Append the overlay element to the box element
        box.appendChild(overlay);

        // Append the box element to the container
        container.appendChild(box);
    }