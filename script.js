const btn = document.getElementById("connectbtn");

btn.addEventListener("click", () => {
  const userEmail = window.prompt("Enter your email:");

  if (userEmail) {
    window.location.href = `mailto:${userEmail}`;
  } else {
    alert("You canceled the email prompt.");
  }
});
