// console.log("haseeb jamil");
document.querySelector(".cross").style.display = 'inline';
document.querySelector(".humburgr").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains('sidebarGo')) {
    document.querySelector('.humburgr').style.display = 'inline';
    document.querySelector('.cross').style.display = 'none';
  } else {
    document.querySelector('.cross').style.display = 'none';
    setTimeout(() => {
      document.querySelector('.humburgr').style.display = 'inline';
    }, 400);
  }
});

document.querySelector(".cross").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.remove("sidebarGo");
  document.querySelector('.cross').style.display = 'none';
  document.querySelector('.humburgr').style.display = 'inline';
});





const typingJobTitles = ["Web Developer", "Graphic Designer", "Freelancer"];
let typingIndex = 0;
let currentText = "";
let isDeleting = false;
let typingSpeed = 100; // Adjust typing speed in milliseconds

function typeText() {
  const typingJobTitleElement = document.getElementById("jobTitle");

  if (isDeleting) {
    currentText = currentText.slice(0, -1); // Remove a character
  } else {
    currentText = typingJobTitles[typingIndex].substring(0, currentText.length + 1); // Add a character
  }

  typingJobTitleElement.textContent = currentText;

  if (!isDeleting && currentText === typingJobTitles[typingIndex]) {
    isDeleting = true;
    typingSpeed = 500; // Pause before deleting
  } else if (isDeleting && currentText === "") {
    isDeleting = false;
    typingIndex = (typingIndex + 1) % typingJobTitles.length;
    typingSpeed = 100; // Typing speed after deletion
  }

  setTimeout(typeText, typingSpeed);
}

// Start the typing animation after 1 second
setTimeout(typeText, 1000);