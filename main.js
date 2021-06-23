canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;

background_image="racing.jpg";

car_image="car1.png";
function add(){
    bg_img=new Image();
    bg_img.onload=uploadBackground;
    bg_img.src=background_image;
  
    car_img=new Image();
    car_img.onload=uploadCar;
    car_img.src=car_image;
}

function uploadBackground(){

    ctx.drawImage(bg_img,0,0,canvas.width,canvas.height);

}

function uploadCar(){

    ctx.drawImage(car_img,car_x,car_y,car_width,car_height);
    
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keypressed=e.keyCode;

    console.log(keypressed);
    if(keypressed=='37'){
        Left();
        console.log("left");          
    }

    if(keypressed=='38'){
        Up();
        console.log("up");          
    } 
     if(keypressed=='39'){
        Right();
        console.log("right");          
    }
    
    if(keypressed=='40'){
        Down();
        console.log("down");          
    }

}