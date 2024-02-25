document.addEventListener("DOMContentLoaded", function () {
  const introSection = document.querySelector(".introduction");
  const aboutSection = document.querySelector(".id");
  const certificateSection = document.querySelector("#sertifikat");
  const contactSection = document.querySelector("#contact");

  function addAnimation(element, animationClass) {
    element.classList.add("animate__animated", animationClass);
  }

  function removeAnimation(element, animationClass) {
    element.addEventListener("animationend", function () {
      element.classList.remove("animate__animated", animationClass);
    });
  }

  addAnimation(introSection, "animate__fadeInDown");
  addAnimation(aboutSection, "animate__fadeInUp");
  addAnimation(certificateSection, "animate__fadeInDown");
  addAnimation(contactSection, "animate__fadeInUp");

  removeAnimation(introSection, "animate__fadeInDown");
  removeAnimation(aboutSection, "animate__fadeInUp");
  removeAnimation(certificateSection, "animate__fadeInDown");
  removeAnimation(contactSection, "animate__fadeInUp");
});
