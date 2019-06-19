var trigger = document.querySelectorAll("a.cta-trigger");
//console.log(typeof trigger);
trigger.forEach(btn => {
  btn.addEventListener("click", function(e){
    console.log(e.target.getAttribute("data-value"));
  })
});

