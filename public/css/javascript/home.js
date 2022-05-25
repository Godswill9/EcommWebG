
var cartButton=document.querySelectorAll('.add_to_cart')
// var cartNum= document.querySelector('.circle')
var circleMobileNum=document.querySelector('.circle')
const added=0
const flashItem=document.querySelectorAll('.flash')
var allImages=document.querySelector('.ALL_IMAGES')
var plusButton=document.querySelector('.plus')
var minusButton=document.querySelector('.minus')
var images=['/img/all phones/bama-mayonnaise_572x250.png',
"/img/all phones/built-for-speed_260x144.png",
"/img/all phones/cellphones_260x144.png",
"/img/all phones/ipad_260x144.png"
]
var sliderCircles=document.querySelectorAll('.circle_slide')
var totalprc=[]
   var totalitem=[]
var circleArrCount=0
var mobileLogo=document.querySelector('.logo')
var arr=[]
var allCartsDetails=document.querySelector('.cart_value_mobile')
var CartMarkdown=document.querySelector('.cart_markdown')


allCartsDetails.addEventListener('click',()=>{
  var AllCarts=document.querySelector('.all_carts')
  if(AllCarts.style.transform==="translateY(3%)"){
    AllCarts.style.transform="translateY(-100%)";

  }
  else{
    AllCarts.style.transform="translateY(3%)";
    
  }
})

 
mobileLogo.addEventListener('click', ()=>{
  console.log('i was clicked')
  var markdown=document.querySelector('.markdown')
  if( markdown.style.transform==="translateX(-1%)"){
    markdown.style.transform="translateX(104%)";

  }
  else{
    markdown.style.transform="translateX(-1%)";
    
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
    counter=3
  }
// sliderCircles[counter].style.backgroundColor='white'
// sliderCircles[counter].style.backgroundColor='inherit'
 allImages.style.backgroundImage=`url('${images[counter]}')`
 console.log(counter)
})
//minus button
minusButton.addEventListener('click', ()=>{
  counter=counter+1
  if(counter==4){
    counter=0
  }
  // sliderCircles[counter].style.backgroundColor='white'
  // sliderCircles[counter].style.backgroundColor='inherit'
  console.log( sliderCircles[counter])
  allImages.style.backgroundImage=`url('${images[counter]}')`
  console.log(counter)
})



var toNumm=parseInt(circleMobileNum.textContent)

//functionality for the cartButtons
cartButton.forEach((item, index)=>{
  item.addEventListener('click', (e)=>{
    
    //this is to update the number of selected items 
    toNumm = toNumm + 1
    circleMobileNum.textContent=toNumm

   //new code stuff
   var buttonn=e.target
   var parent=buttonn.parentElement
   var flash=parent.querySelector('.flash')
   console.log(flash)
   var name=flash.querySelectorAll('.item_name')[0].textContent
   var price=flash.querySelectorAll('.price_tag')[0].textContent
   var image=flash.querySelectorAll('.item_image')[0].src

   
   console.log(name, price, image)



    //new functionality for add to cart buttons
    var indiv=document.createElement('div')
    indiv.classList.add('each_indiv')
   CartMarkdown.append(indiv)
   var allHtmlStuff=`<img class="image_indiv" src="${image}"></img>
   <div class="cart_name" name="name">${name}</div>
   <div class="cart_price" price="price">${price}</div>
   <input type="number" name="cartNum" value="1" class="cartVal">
   <div class="all_buttons">
       <button class="delete">REMOVE ITEM</button>
   </div>`
   indiv.innerHTML=allHtmlStuff
   
   

   //this functionality is to make the calculations
  //  var AllCarts

 
if(!CartMarkdown) console.log('empty')
var cprice=indiv.querySelector('.cart_price')
var cNum=indiv.querySelector('.cartVal')

// totalprc.push(cprice.textContent)
// totalitem.push(cNum.value)
console.log(CartMarkdown.children.length)
// var par=CartMarkdown.children
// var flas=par.querySelector('.each_indiv')
// console.log(flas)
// var itemsN=flas.querySelectorAll('.itemss')[0].textContent
// var priceNu=flas.querySelectorAll('.prc')[0].value

// var selectIndi=CartMarkdown.querySelectorAll('each_indiv')
//    var itemsN=selectIndi.querySelectorAll('.itemss').textContent
//    var priceNu=selectIndi.querySelectorAll('.prc').value


// console.log(itemsN,priceNu)

// console.log(dele)
  var dele=indiv.querySelector('.delete')
  console.log(dele)
  dele.addEventListener('click', (e)=>{
    toNumm=toNumm-1
    circleMobileNum.textContent=toNumm
    console.log('me')
    var firstt=e.target
    // var indivPosition=firstt.parentElement.parentElement
    var indivBut=firstt.parentElement.parentElement.remove()
    // var heade=firstt.parentElement.parentElement.parentElement
  //   var real=CartMarkdown.children.length
  //   console.log(CartMarkdown.childNodes)
  //  var selectChild=CartMarkdown.children

  //  var selectIndiv=CartMarkdown.querySelectorAll('each_indiv')
  //  var itemsNo=selectIndiv.querySelectorAll('.itemss').textContent
  //  var priceNum=selectIndiv.querySelectorAll('.prc').value
  //  console.log(itemsNo,priceNum)
   
    // CartMarkdown.childNodes.forEach((item, index)=> item)
    // var deletedPosition=heade.children.length
    
    
    // console.log(deletedPosition)
    // console.log(real)

   
    // var flash=parent.querySelector('.flash')
    // console.log(flash)
    // var name=flash.querySelectorAll('.item_name')[0].textContent
   
  })
 
  

  

// console.log(allMark)
  })
})



//functionality for flash items modal
// for(var i=0; i<flashItem.length; i++){
//     var item=flashItem[i]
//     item.addEventListener('click', ()=>{
//       let nam=item.children[1].textContent
//       let image=item.children[0].src
//       let tag=item.children[2].textContent
//       console.log(nam, image, tag)
//         var containerModal=document.querySelector('.container_modal')
//         containerModal.style.display="flex"
//     })
//   }
flashItem.forEach((item, index)=>{
    item.addEventListener('click', (e)=>{
      var containerModal=document.querySelector('.container_modal')
        containerModal.style.display="flex"
    //new code stuff
     var bodd=e.target.parentElement
      var name=bodd.querySelectorAll('.item_name')[0].textContent
     var price=bodd.querySelectorAll('.price_tag')[0].textContent
     var image=bodd.querySelectorAll('.item_image')[0].src
     
     var itemHed=document.querySelector('.hed')
     var itemImage=document.querySelector('.img_box')
     var itemPrice=document.querySelector('.item_price')

     itemHed.textContent=name
     itemImage.src=image
     itemPrice.textContent=price
     console.log(name, price, image)
    })
}
    )
    

//functionality for close modal
const closeModal=document.querySelector('.close')
closeModal.addEventListener('click', ()=>{
  var containerModal=document.querySelector('.container_modal')
  containerModal.style.display="none"
})


//functionality for button post request

var buyNowButton=document.querySelector('.buy_now_button')
   var cartArr=[]
  
   buyNowButton.addEventListener('click', (e)=>{
    var AllCarts=document.querySelector('.all_carts')
    //  var butEvent=e.target
    //  var targ=butEvent.parentElement.parentElement
    var fir= AllCarts.querySelector('.cart_markdown')
   var eachIndiv=fir.querySelectorAll('.each_indiv')
     eachIndiv.forEach((item, index)=>{
       var image=item.querySelector('.image_indiv').src
       var nameee=item.querySelector('.cart_name').textContent
       var pricee=item.querySelector('.cart_price').textContent
       var cartVal=item.querySelector('.cartVal').value
        
         var cartObj={
          "img":`${image}`,
          "price":`${pricee}`,
          "name":`${nameee}`,
          "quantity":`${cartVal}`
        }
        cartArr.push(cartObj)
     })
// var cartA={
//   "name":"hello boy",
//   "age":"17"
// }
  var options={
    method:"POST",
    headers:{
      'Content-Type':'application/json',
    },
     body:JSON.stringify(cartArr)
    // body:JSON.stringify(cartA)
  }

     fetch('http://localhost:3000/user',options)
    //  .then(res=>{
    //    if(res.ok)  res.redirect('/user')
    //  })   
    //  .then(data=>{
    //    console.log(data)
    //  })
   })


   