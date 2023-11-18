if (!localStorage.getItem('user')) {
   window.location.href = 'signIn.html';
    exit();
  }

let userGoal =document.getElementById('userGoal')
if(localStorage.getItem("goal")==2){
userGoal.innerHTML='Gain Muscule'}
else if(localStorage.getItem("goal")==3){
  userGoal.innerHTML='Lose Weight'
  
}

let userName=document.getElementById("user")
userName.innerHTML=localStorage.getItem("user")

