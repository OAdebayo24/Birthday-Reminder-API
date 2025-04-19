document.addEventListener("DOMContentLoaded", async () => {
  document
    .getElementById("birthdayForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const DateOfBirth = document.getElementById("dob").value;

      const formData = {
        name: name,
        email: email,
        DateOfBirth: DateOfBirth,
      };

      // console.log(formData)
      fetch("http://localhost:3000/api/users/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Success:", data.success)
          if(data.success === true) {
            alert("User created Successfully");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
});
