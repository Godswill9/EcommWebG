
var cartButton=document.querySelectorAll('.add_to_cart')
// var cartNum= document.querySelector('.circle')
var circleMobileNum=document.querySelector('.circle')
const added=0
const flashItem=document.querySelectorAll('.flash')
var allImages=document.querySelector('.ALL_IMAGES')
var plusButton=document.querySelector('.plus')
var minusButton=document.querySelector('.minus')
var images=['/img/all phones/bama-mayonnaise_572x250.png',
"/img/all phones/free-delivery_260x14 4v2.png",
"/img/all phones/built-for-speed_260x144.png",
"/img/all phones/cellphones_260x144.png",
"/img/all phones/ipad_260x144.png"
]
var sliderCircles=document.querySelectorAll('.circle_slide')
var circleArrCount=0
var mobileLogo=document.querySelector('.logo')
var arr=[]
// var obj= require('../public/css/javascript/user')






 ///this is functionality for the dropdown for mobile
 //devices
mobileLogo.addEventListener('click', ()=>{
  console.log('i was clicked')
  var markdown=document.querySelector('.markdown')
  if(markdown.style.transform==="translateX(104%)"){
    markdown.style.transform="translateX(-1%)";

  }
  else{
    markdown.style.transform="translateX(104%)";
    
  }
})

//this is the functionality for the slider circles buttons
sliderCircles.forEach((item, index)=>{
   item.addEventListener('click',function(){
    allImages.style.backgroundImage=`url('${images[index]}')`
   }
)
})

//this is to style the slider
var counter=0
//plus button
plusButton.addEventListener('click', ()=>{
  counter=counter-1
  if(counter==-1){
    counter=4
  }

 allImages.style.backgroundImage=`url('${images[counter]}')`
 console.log(counter)
})
//minus button
minusButton.addEventListener('click', ()=>{
  counter=counter+1
  if(counter==5){
    counter=0
  }
  allImages.style.backgroundImage=`url('${images[counter]}')`
  console.log(counter)
})



var toNumm=parseInt(circleMobileNum.textContent)

//functionality for the cartButtons
cartButton.forEach((item, index)=>{
  item.addEventListener('click', ()=>{
    
    //this is to update the number of selected items 
    toNumm = toNumm + 1
    circleMobileNum.textContent=toNumm

    //this was used later in the code
   var counter=index
    console.log(counter)
    

    //I want to get the item imageSrc, name and price, from 
 var itemImage=document.querySelectorAll('.item_image')
var itemName=document.querySelectorAll('.item_name')
var priceTag=document.querySelectorAll('.price_tag')

    //cart item image
   itemImage.forEach((image, index)=>{
     if(counter==index){
       src=image.src
     }
   })

   //cart item name
   itemName.forEach((name, index)=>{
  if(counter==index){
    namee=name.textContent
  }
})

   //cart item price
   priceTag.forEach((price, index)=>{
     if(counter===index){
       pricee=price.textContent
     }
   })
   var src
  var namee
  var price
  var obj={
      src:src,
      namee:namee,
      price:pricee
    }
    arr.push(obj)
   console.log(arr)
  })
})



//functionality for flash items modal
for(var i=0; i<flashItem.length; i++){
    var item=flashItem[i]
    item.addEventListener('click', ()=>{
      console.log('clicked')
        var containerModal=document.querySelector('.container_modal')
        containerModal.style.display="flex"
    })
  }

//functionality for close modal
const closeModal=document.querySelector('.close')
closeModal.addEventListener('click', ()=>{
  var containerModal=document.querySelector('.container_modal')
  containerModal.style.display="none"
})

module.exports=arr