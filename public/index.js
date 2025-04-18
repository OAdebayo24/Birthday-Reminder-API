document
  .getElementById("birthdayForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const DateOfBirth = document.getElementById("dob").value;

    const messageBox = document.getElementById("message");

    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, DateOfBirth }),
      });

      const result = await res.json();
      messageBox.textContent = result.message;
      messageBox.style.color = result.success ? "green" : "red";
    } catch (error) {
      messageBox.textContent = "Something went wrong!";
      messageBox.style.color = "red";
    }
  });
