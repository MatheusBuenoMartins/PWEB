  document.addEventListener("DOMContentLoaded", function(event) {
    var i = 0;
    var nameText = 'Matheus Bueno';
    var speed = 100;

    function typeWriterName() {
    if (i < nameText.length) {
      document.getElementById("name").innerHTML += nameText.charAt(i);
      i++;
      setTimeout(typeWriterName, speed);
      if (i == nameText.length)  typeWriterJob();
    } 
      
    }

   var j = 0;
   var jobText = 'Web Developer';
   var speed = 100;

   function typeWriterJob() {
    if (j < jobText.length) {
      document.getElementById("job").innerHTML += jobText.charAt(j);
      j++;
      setTimeout(typeWriterJob, speed);
    }
   }

   typeWriterName();

   } 
 ) ;


