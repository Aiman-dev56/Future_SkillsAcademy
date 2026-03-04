document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName  = document.getElementById("lastName").value.trim();
  const email     = document.getElementById("email").value.trim();

  if (firstName === "" || lastName === "" || email === "") {
    alert("⚠️ Please fill in all required fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert("✅ Thank you! Your message has been sent.");
  this.reset();
});