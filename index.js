
document.getElementById('first-increment').addEventListener('click',function(){
   

    var input= document.getElementById('first_counter');
    var initial_value=parseInt(input.value);
     var incremented_value=initial_value+1;
     input.value=incremented_value;
 
     var ticketPrice=input.value*150;
     console.log(ticketPrice);
   var input2= document.getElementById('numCounter').value;
   var x= parseInt(input2);
   var ticketPrice2=x*100;
   console.log(ticketPrice2);
   var subT=ticketPrice+ticketPrice2;
   document.getElementById('subTotal').innerText=subT;
   var vat=(subT*10)/100;
   document.getElementById('vatCounter').innerText=vat;
   var total=subT+vat;
   document.getElementById('total').innerText=total;
 
 })

 
document.getElementById('eco-increment').addEventListener('click',function(){
    

    var input= document.getElementById('numCounter');
    
 
    var initial_value=parseInt(input.value);
     var incremented_value=initial_value+1;
     input.value=incremented_value;
 
     var ticketPrice=input.value*100;
     console.log(ticketPrice);
   var input2= document.getElementById('first_counter').value;
   var x= parseInt(input2);
   var ticketPrice2=x*150;
   console.log(ticketPrice2);
   var subT=ticketPrice+ticketPrice2;
   document.getElementById('subTotal').innerText=subT;
   var vat=(subT*10)/100;
   document.getElementById('vatCounter').innerText=vat;
   var total=subT+vat;
   document.getElementById('total').innerText=total;
 
 })

 
 document.getElementById('first-decrement').addEventListener('click',function(){
   

    var input= document.getElementById('first_counter');
    var initial_value=parseInt(input.value);
    if  (initial_value>0){
        var incremented_value=initial_value-1;
     input.value=incremented_value;
 
     var ticketPrice=input.value*150;
     console.log(ticketPrice);
   var input2= document.getElementById('numCounter').value;
   var x= parseInt(input2);
   var ticketPrice2=x*100;
   console.log(ticketPrice2);
   var subT=ticketPrice+ticketPrice2;
   document.getElementById('subTotal').innerText=subT;
   var vat=(subT*10)/100;
   document.getElementById('vatCounter').innerText=vat;
   var total=subT+vat;
   document.getElementById('total').innerText=total;
    }
     
 
 })

 document.getElementById('eco-decrement').addEventListener('click',function(){
   

    var input= document.getElementById('numCounter');
    var initial_value=parseInt(input.value);
    if  (initial_value>0){
        var incremented_value=initial_value-1;
     input.value=incremented_value;
 
     var ticketPrice=input.value*100;
     console.log(ticketPrice);
   var input2= document.getElementById('first_counter').value;
   var x= parseInt(input2);
   var ticketPrice2=x*150;
   console.log(ticketPrice2);
   var subT=ticketPrice+ticketPrice2;
   document.getElementById('subTotal').innerText=subT;
   var vat=(subT*10)/100;
   document.getElementById('vatCounter').innerText=vat;
   var total=subT+vat;
   document.getElementById('total').innerText=total;
    }
     
 
 })


 document.getElementById("Book_now").addEventListener('click',function(){


    var formContainer=document.getElementById('booking-form-area');
    
    formContainer.style.display="none";
    var congo_area=document.getElementById("congratulation");
    var failed_msg=document.getElementById("failed-msg");
   
    var input= document.getElementById('first_counter');
    var initial_value=parseInt(input.value);
    var input2= document.getElementById('numCounter');
    var initial_value2=parseInt(input.value);
    if (initial_value+initial_value2>0){
        
        congo_area.style.display="block";
       
    }
    else{

        failed_msg.style.display="block"
    }



  

    
    

 })
 

 
 