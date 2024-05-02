const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  // header container
  ScrollReveal().reveal(".header__container h1", scrollRevealOption);
  
  ScrollReveal().reveal(".header__container h4", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".header__container .btn", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  // about container
  ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
  ScrollReveal().reveal(".about__container .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
  });
  
  ScrollReveal().reveal(".about__container .about__flex", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  ScrollReveal().reveal(".about__container .btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  // discover container
  ScrollReveal().reveal(".discover__card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".discover__card__content", {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
  });
  
  // blogs container
  ScrollReveal().reveal(".blogs__card", {
    duration: 1000,
    interval: 400,
  });
  
  // journals container
  ScrollReveal().reveal(".journals__card", {
    ...scrollRevealOption,
    interval: 400,
  });

  // Add functionality to the "Explore" buttons
document.querySelectorAll('.explore-btn').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        // Replace this with the action you want to perform when the button is clicked
        alert('Exploring this prompt...');
    });
});

// Functionality for feedback submission form
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add code here to handle feedback submission
    alert("Feedback submitted successfully!");
});

// Functionality for suggestion submission form
document.getElementById("suggestionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add code here to handle suggestion submission
    alert("Suggestion submitted successfully!");
});





document.getElementById("customizationWizard").addEventListener("click", function(event) {
    event.preventDefault();
    // Add functionality for Customization Wizard
    console.log("Customization Wizard clicked");
});

document.getElementById("templateLibrary").addEventListener("click", function(event) {
    event.preventDefault();
    // Add functionality for Template Library
    console.log("Template Library clicked");
});

document.getElementById("variableEditor").addEventListener("click", function(event) {
    event.preventDefault();
    // Add functionality for Variable Editor
    console.log("Variable Editor clicked");
});

document.getElementById("styleCustomizer").addEventListener("click", function(event) {
    event.preventDefault();
    // Add functionality for Style Customizer
    console.log("Style Customizer clicked");
});

document.getElementById("previewMode").addEventListener("click", function(event) {
    event.preventDefault();
    // Add functionality for Preview Mode
    console.log("Preview Mode clicked");
});
