document.getElementById("btn").addEventListener("click", () => {
    let name = document.getElementById("name");
    let password = document.getElementById("password");
    let error = document.getElementById("error");
    error.style.display = "block"




    fetch("https://655270245c69a779032a08a1.mockapi.io/api/signup/users")
      .then((response) => response.json())
      .then((data) => {
        if (name.value === "" || password.value === "") {
          error.textContent = "You Have Empty input";
        } else {
          let findUser = data.find((d) => d.name === name.value);
          if (!findUser) {
            error.textContent = "wrong user name!";
          } else if (password.value != findUser.password) {
            error.textContent = "wrong password!";
          } else {
            error.style.display = "none"
            localStorage.setItem("user", findUser.name)
            window.location.href = "weekPlan.html";
         }
        }
      });
  }
  );

