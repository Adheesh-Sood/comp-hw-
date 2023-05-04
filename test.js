let score = 0
let clickO = false
document.getElementById('fS').addEventListener('click' , ()=>{
  if(clickO == false){
  window.alert('Correct')
  score+1
  clickO = true
  document.getElementById('fS').style.background = 'limeGreen'
  document.getElementById('trueS').style.background = 'grey'
}
})
document.getElementById('trueS').addEventListener('click' , ()=>{
  if(clickO == false){
  window.alert('incorrect')
  score+0
  clickO = true
  document.getElementById('trueS').style.background = 'red'
  document.getElementById('fS').style.background = 'grey'

}
})
