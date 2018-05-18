// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }
let a = document.getElementById("foreground")
var counter = 0;

document.getElementById("save_lincoln").addEventListener("click", ()=>{
  if (!a.style.opacity) {
      a.style.opacity = 1;
  }
  interval = setInterval(function(){
console.log('yo')
    a.style.opacity = a.style.opacity - 0.01;
    counter++;
    if (counter == 100){
      clearInterval(interval)
      counter = 0
    }
  }, 15);

});
// function saveLincoln(interval){
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   document.getElementById('foreground').style.display = "none"//visability = "hidden"//f = "none"//fadeOut(interval)
// }

// function saveLincolnReverse(interval){
//   document.getElementById('foreground').style.display = "show"
// }
// document.getElementById("save_lincoln").addEventListener("click", saveLincoln(1000), false)

// setTimeout(saveLincoln, 1000)



//
//
// $( "#clickme" ).click(function() {
//   $( "#book" ).fadeOut( "slow", function() {
//     // Animation complete.
//   });
// });


// setTimeout(saveLincolnReverse, 1000)
