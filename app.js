document.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav");
  if (nav) {
    if (window.scrollY >= 80) {
      nav.classList.add("nav--scrolled");
      // nav.style.boxShadow = "2px 0px 4px rgba(0,0,0,0.2)";
      // nav.style.padding = "1em 2em";
    } else {
      nav.classList.remove("nav--scrolled");
      // nav.style.boxShadow = "none";
      // nav.style.padding = "2em 2em";
    }
  }
});
const navLinks = Array.from(document.getElementsByClassName("navbar-link"));
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (e) => {
    const navItems = Array.from(document.getElementsByClassName("navbar-item"));
    navItems.forEach((navItem) => navItem.classList.remove("active"));
    e.target.parentElement.classList.add("active");
  });
});

const forms = document.getElementsByTagName('form');
const contactForm = forms && forms.length && forms[0];
if(contactForm) {
  contactForm.addEventListener("submit", handleContactFormSubmission);
}

function handleContactFormSubmission(event) {
  event.preventDefault();
  const contactForm = event.target;
  const inputFields = contactForm.querySelectorAll('input');
  const messageField = contactForm.querySelector('textarea');
  const formValues = {};
  formValues[messageField.name] = messageField.value;
  inputFields.forEach(element => {
    formValues[element.name] = element.value
  });
  fetch("https://fakestoreapi.com/products", {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(formValues)
  }).then(res => res.json())
    .then(resData => console.log(resData))
    .catch(error => console.error(error));
  console.log(formValues)
}