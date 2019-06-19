var trigger = document.querySelectorAll("a.cta-trigger");

for (let i = 0; i < trigger.length; i++) {
  var element = trigger[i];
  element.addEventListener("click", function(e){
    console.log(e.target.getAttribute("data-value"));
  });
}

// trigger.forEach(btn => {
//   btn.addEventListener("click", function(e){
//     console.log(e.target.getAttribute("data-value"));
//   })
// });

