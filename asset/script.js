'use strict'




const readMoreBtn = document.querySelector('.btn.read-more');
const aboutInfo = document.querySelector('.about-info');



readMoreBtn.addEventListener('click', function() {
    aboutInfo.textContent = `My journey into web development began with a curiosity 
      about how websites work. Since then, i have developed a strong foundation in 
      HTML, CSS, and Javascript, enabling me to create responsive and interactive web 
      applications. I enjoy solving problems, learning new technologies, and building 
      projects that improve user experiences. Through consistent practice and project 
      development, i have gained valuable experience in designing web interfaces and 
      implementing dynamic functionality.`;
})