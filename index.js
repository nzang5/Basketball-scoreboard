const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")

let homeScore = 0
let guestScore = 0
homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

 
 function homeAdd1(){
//    homeScore = homeScore + 1
    homeScore += 1
    homeScoreEl.textContent = homeScore
 }
 
  function homeAdd2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    
 }
 
  function homeAdd3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
 }
 
  function guestAdd1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
 }
 
  function guestAdd2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
 }
 
  function guestAdd3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
 }