
// random box motion home section 

  const boxes = document.querySelectorAll(".box");

  function animateRandomBox() {


    const randomIndex = Math.floor(Math.random() * boxes.length);
    const box = boxes[randomIndex];

    box.classList.add("active");

    setTimeout(() => {
      box.classList.remove("active");
    }, 1000);

  }

  // run repeatedly
  setInterval(animateRandomBox, 300);





  // toggle btn
  
  const btn = document.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

     if (document.body.classList.contains("dark")) {
        btn.textContent = "Light"; 
    } else {
        btn.textContent = "Dark";  
    }
  });

