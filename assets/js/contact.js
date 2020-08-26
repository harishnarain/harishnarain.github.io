// This function is used to show confirmation of contact form
const submitContactForm = () => {
  document.getElementById("contact-heading").style.display = "none";
  document.getElementById("contact-form").style.display = "none";
  document.getElementById("confirmation").style.display = "inherit";

  // returning false so page doesn't re-render
  return false;
};
