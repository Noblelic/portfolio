'use strict'




const readMoreBtn = document.querySelector('.btn.read-more');
const aboutInfo = document.querySelector('.about-info');
const viewBtn = document.querySelector("#viewBtn");
const aboutBtn = document.querySelector('.btn.read-more');


if (readMoreBtn && aboutInfo) {
    readMoreBtn.addEventListener("click", function (event) {
        event.preventDefault();

        aboutInfo.innerHTML = `
            <p>My journey into web development began with a curiosity about how websites work...</p>
            <p>I developed a strong understanding of HTML, CSS, and JavaScript...</p>
            <p>I am a passionate and dedicated professional...</p>
        `;
    });
}
// readMoreBtn.addEventListener('click', function(event) {
//   event.preventDefault();
//     aboutInfo.innerHTML = `
//     <p>
//       My journey into web development began with a curiosity about how websites work. 
//       Since then, i have developed a strong foundation in HTML, CSS, and Javascript, 
//       enabling me to create responsive and interactive user-friendly web applications.
//     </p> 
//     <p>
//       I developed a strong understanding of web structure, styling, accessibily, and 
//       interactive user experiences. I enjoy solving problems, learning new technologies,
//        and building projects that improve user experiences. Through consistent practice 
//        and project development, i have gained valuable experience in designing web 
//        interfaces and implementing dynamic functionality.
//     </p>
//     <p>
//       I am passionate and dedicated professional with experience in creating innovative
//        solutions and delivering high-quality work.This website showcases my skills, 
//        projects, achievements, and professional journey.
//     </p>
//       `;
// });

// aboutBtn.addEventListener("click", function () {
//     window.location.href = "/./asset/pages/about.html";
// });

viewBtn.addEventListener("click", function () {
    window.location.href = "/./asset/pages/project.html";
});