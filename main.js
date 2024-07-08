
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 2500,
});
