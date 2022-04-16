var cartButton=document.querySelectorAll('.add_to_cart')
var cartNum= document.querySelector('.circle')
const added=0
const flashItem=document.querySelectorAll('.flash')
var allImages=document.querySelector('.ALL_IMAGES')
var plusButton=document.querySelector('.plus')
var minusButton=document.querySelector('.minus')
var colours=['red', 'yellow', 'green', 'blue']

var counter=0
//time to style the slider colour bacground
// for(i=0; i<colours.length; i++){
//   plusButton.addEventListener('click', ()=>{
//     allImages.backgroundColor=colours[i]
//   })
// }
plusButton.addEventListener('click', ()=>{
  counter=counter+1
  if(counter==4){
    counter=0
  }
  allImages.style.backgroundColor=colours[counter]
  console.log(counter)
})
minusButton.addEventListener('click', ()=>{
  counter=counter-1
  if(counter==-1){
    counter=3
  }
  allImages.style.backgroundColor=colours[counter]
  console.log(counter)
})



const closeModal=document.querySelector('.close')
closeModal.addEventListener('click', ()=>{
  var containerModal=document.querySelector('.container_modal')
  containerModal.style.display="none"
})
for(var i=0; i< cartButton.length; i++){
  var toNum=parseInt(cartNum.textContent)
    cartButton[i].addEventListener('click', function(){
       toNum = toNum + 1
cartNum.textContent=toNum
    })
    
}
for(var i=0; i< flashItem.length; i++){
    var item=flashItem[i]
    item.addEventListener('click', ()=>{
      console.log('clicked')
        var containerModal=document.querySelector('.container_modal')
        containerModal.style.display="flex"
    })
    
      
  }