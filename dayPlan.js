if (!localStorage.getItem('user')) {
   window.location.href = 'signIn.html';
   exit();
  }

let workouts= [
  {
    "image":"https://graduatefitness.com/wp-content/uploads/2021/01/IMG_2775.gif",
    "name":"Leg Press",
    "rounds":"2 Sets X 3 Reps"
  },
  {
    "image":"https://www.hoistfitness.com/cdn/shop/products/RS_1402_GIF.gif",
    "name":"Leg Extentions",
    "rounds":"10 Sets X 3 Reps"
  },
  {
    "image":"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTYwOTMyNWE0MzBjcTFvM216cWh2anppamRvdmxuNHdwbGw5Y29mbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/5hvJA0sgkwaxlQeFQW/giphy.gif",
    "name":"barbell Squats",
    "rounds":"5 Sets X 5 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/a8/a7/99/a8a79983c896d531e469154cca91a0a2.gif",
    "name":"Barbell Press",
    "rounds":"3 Sets X 10 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/07/d3/ec/07d3ec22a8b6b9ba2bcb4b4f326523b9.gif",
    "name":"Biceps Curls",
    "rounds":"3 Sets X 10 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/81/d1/de/81d1de65ad9d916b2d2613a95d73f3eb.gif",
    "name":"Triceps Curls",
    "rounds":"4 Sets X 8 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/94/a1/c5/94a1c5ee7a7bf415cfdbea7342360667.gif",
    "name":"Gluts Bridge",
    "rounds":"3 Sets X 10 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/de/a5/be/dea5bef40c0b728e6caaaba7514d28d8.gif",
    "name":"Thighs Press",
    "rounds":"3 Sets X 15 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/c6/a1/34/c6a134b7e0ce7cbf7c4489a0f75459ad.gif",
    "name":"Climb Ladder",
    "rounds":"3 Sets X 10 Reps"
  },
  {
    "image":"https://i.pinimg.com/originals/8a/a1/01/8aa101d765b3438c59d33d70811cda81.gif",
    "name":"Abs Crunches",
    "rounds":"5 Sets X 10 Reps"
  }
]


  function api(){
     
        workouts.map((ex)=>{
        let image=ex.image
        let name=ex.name
        let rounds=ex.rounds
        fetch("https://65524db75c69a7790329dc3e.mockapi.io/Workouts", {
        method: 'POST',
        body: JSON.stringify({
        image,
        name,
        rounds,
       }),
       headers: {
       'Content-type': 'application/json; charset=UTF-8',
       },
       })
       .then((response) => response.json())
       .then((json) => console.log(json));       

        }
      )}
////////////////////////////////////////////////////////////////////////////////////

  
  function myAPI(){
    
    for(let i=1;i<=3;i++){

    fetch(`https://65524db75c69a7790329dc3e.mockapi.io/Workouts/${i}`)
              .then((response) => response.json())
              .then((data) =>{
              let days=document.getElementById('days')
              let col=document.getElementById('col')
              let card=document.createElement('div')
              card.className="card"
              let pic=document.createElement('img')
              pic.className='card-img-top'
              pic.src=data.image
              let cardBody=document.createElement('div')
              cardBody.className='card-body'
              let name=document.createElement('h5')
              name.className='card-title'
              name.innerHTML=data.name
              let round=document.createElement('p')
              round.className='card-text'
              round.innerHTML=data.rounds 
              cardBody.appendChild(name)
              cardBody.appendChild(round)
              card.appendChild(pic)
              card.appendChild(cardBody)
              col.appendChild(card)
              days.appendChild(col)
        })
          
    }
  }
 
  if(localStorage.getItem("user")=="admin" ){
         let con=document.getElementById('con')
         let btn=document.createElement('button')
         btn.innerHTML='Delete';
         btn.className='delete';
         con.appendChild(btn)
         btn.addEventListener('click',()=>{
           deleteItem()
        })
  }
  function deleteItem(){
        let workouts=document.querySelectorAll('.ex .card')
        workouts[workouts.length-1].parentNode.removeChild(workouts[workouts.length-1])
     }


 myAPI()