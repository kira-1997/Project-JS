document.getElementById("btn").addEventListener("click", () => {

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let wieght = document.getElementById("wieght");
    let goal = document.getElementById("goal")

    let nameValid = /^[A-Za-z]{5,}$/;
    let mailValid = /^[A-Za-z0-9_\-]+@[A-Za-z0-9_\-]+\.[A-Za-z]{2,4}$/;
    let passValid = /^\d{8,}$/;
    let wieghtValid =  /^\d{2,}$/;
    let error = document.getElementById("error");
    error.style.display = "block"


    console.log(nameValid)
    if (name.value === "" || email.value === "" || password.value === "" || wieght.value ==="" || goal.value ==="1") {
      error.textContent = "You Have Empty inputs";
    }
      else if (name.value != name.value.match(nameValid)) {
      error.textContent = "Entar a Name that is more than 4 Character and only Character!!";
    } else if (!email.value.match(mailValid)) {
      error.textContent = "Invalid email address!!";
    } else if (password.value != password.value.match(passValid)) {
      error.textContent = "Entar a password only numbers and its more than 8";
    } else if (wieght.value != wieght.value.match(wieghtValid)) {
        error.textContent = "Entar a weight only numbers and its two digit ";
    } else {
      fetch("https://655270245c69a779032a08a1.mockapi.io/api/signup/users", {
        method: "POST",
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => (window.location.href = "SignIn.html"));
         localStorage.clear();
         localStorage.setItem("goal", goal.value);
    }
  });
