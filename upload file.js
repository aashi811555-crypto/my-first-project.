let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click",function(){
    fileinp.click();

});

fileinp.addEventListener("change",function(dets){
    //btn.textContent = dets.target.files[0].name; 
    // ye bhi kar sakte hai ager 
    // hum bs file ko print karna chahte hai to ... 
    // aur ager hum chahte hai ki hum file ko cancle kare 
    // aur file pe kuch na likha rhe to phir code ko dusri
    //  tarah se likhna hoga...
    const file =dets.target.files[0];
    if(file){
        btn.textContent= file.name;
        //ye wala code likhne se ... 
        // file ka naam 
        // cancle karne pe uska naam nahi show karega....
    }
});