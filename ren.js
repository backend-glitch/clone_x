
// random box motion home section 

  const boxes = document.querySelectorAll(".box");

  function animateRandomBox() {


    const randomIndex = Math.floor(Math.random() * boxes.length);
    const box = boxes[randomIndex];

    box.classList.add("active");

     setTimeout(() => {
      box.classList.remove("active");
     
    //    setTimeout(() => {
    //   animateRandomBox();
    // }, 800);
  

    }, 2000);

  }

  // run repeatedly
  setInterval(animateRandomBox, 800);





  // toggle btn
  
  const btn = document.querySelector(".toggle-btn");

  btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

      (document.body.classList.contains("dark")) ?  btn.textContent = "☀️" :  btn.textContent = "🌙";


    //     btn.textContent = "☀️"; 
    // } else {
    //     btn.textContent = "🌙";  
    // }
  });

