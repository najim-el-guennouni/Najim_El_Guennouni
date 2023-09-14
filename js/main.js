     // Calculate the age automatically based on the birth year (1998)
     const birthYear = 1998;
     const currentYear = new Date().getFullYear();
     const age = currentYear - birthYear;

     // Update the age value in the HTML
     document.getElementById("ageValue").textContent = age;