if (!localStorage.getItem('user')) {
   window.location.href = 'signIn.html';
    exit();
  }

let userGoal =document.getElementById('userGoal')
//userGoal.innerHTML=localStorage.getItem("goal")

let userName=document.getElementById("user")
//userName.innerHTML=localStorage.getItem("user")

