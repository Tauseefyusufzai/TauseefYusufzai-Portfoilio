window.addEventListener('load', function() {
    setTimeout(function() {
        document.getElementById('loader-wrapper').style.display = 'none';
        document.getElementById('content').style.display = 'block';
    }, 5000); // Delay in milliseconds (3000ms = 3 seconds)
});

// animation on scroll.......................


document.addEventListener("DOMContentLoaded", function () {
    const fadeUpElements = document.querySelectorAll(".fade-up");

    const handleScroll = () => {
        fadeUpElements.forEach((el) => {
            const rect = el.getBoundingClientRect();

            // Check if the element is in view
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add("show");
            } else {
                el.classList.remove("show");
            }
        });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once to check if elements are already in view
});

var headernav = document.getElementById("headernav");
function openmenu() {
    headernav.style.right = "0";
}
function closemenu() {
    headernav.style.right = "-200px";
}


// ..........................................................
const navDiv = document.querySelector("#nav-div")
window.addEventListener("scroll", hideNavDiv);
const hideNavDiv = () =>{
    navDiv.style.display = "none";
}







function openNav() {
    document.getElementById("myedu").style.width = "100%";
}

function closeNav() {
    document.getElementById("myedu").style.width = "0%";
}


window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);





  //app script demployment url https://script.google.com/macros/s/AKfycbwAjdgirrSLC-W2OC8ScYPqRNR-LXjcrHE-3q3ncj_Up0achf6Iv829DbBL7XiOWvas/exec//
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwAjdgirrSLC-W2OC8ScYPqRNR-LXjcrHE-3q3ncj_Up0achf6Iv829DbBL7XiOWvas/exec';
  const form = document.forms['myForm'];

  form.addEventListener('submit', e => {
      e.preventDefault();
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => response.json())
          .then(data => {
              if (data.result === "success") {
                  alert("Message Send successfully!");
              } else {
                  alert("There was an error Sending the Message.");
              }
          })
          .catch(error => alert("There was an error Sending the Message: " + error.message));
  });

