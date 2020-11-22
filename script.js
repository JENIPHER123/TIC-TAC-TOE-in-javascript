function quitpopup(){
 let say= document.querySelectorAll('.cube'),
    one= document.querySelector('#player1points'),
    two= document.querySelector('#player2points');
     
   for (let i=0;i<say.length;i++){
    if( say[i].innerHTML !=='X' && say[i].innerHTML !=='O' && one.innerHTML === '0' && two.innerHTML ==='0'){
        alert('You have not initiate any game!!');
        return;
      } 
      
      else{

      document.querySelector('.quitmessage').style.display= 'block';
      return;
      }
    }
    reset();
}


function noquit(){
    document.querySelector('.quitmessage').style.display = 'none';
}


function playing(){

    let button = document.querySelectorAll('#game div', value=0)

    for(let i=0;i<button.length;i++){
    
        button[i].onclick= function(){

            if(button[i].innerHTML ===''){
                if(value%2===0){
                    button[i].innerHTML= 'X';
                   
                    if(checkwin()){
                       
                        player1points();
                        value=0;
                        return;
                    }else{
                    value+=1
                    }
                }else{
                    button[i].innerHTML= 'O';
                  
                    if(checkwin()){
                        value=0;
                        player2points();
                        return;
                    }else{
                    value+=1
                    }
                }
            }
            };
        }


    
}
function  checkwin(){

    //defining cubes
   let cube1= document.querySelector('#cube1'),
       cube2= document.querySelector('#cube2'),
       cube3= document.querySelector('#cube3'),
       cube4= document.querySelector('#cube4'),
       cube5= document.querySelector('#cube5'),
       cube6= document.querySelector('#cube6'),
       cube7= document.querySelector('#cube7'),
       cube8= document.querySelector('#cube8'),
       cube9= document.querySelector('#cube9');

    if(cube1.innerHTML !== ''&& cube1.innerHTML===cube2.innerHTML && cube1.innerHTML=== cube3.innerHTML)
    {
        
        reset();
        return true;
    }else if(cube1.innerHTML !== ''&& cube1.innerHTML===cube4.innerHTML && cube1.innerHTML=== cube7.innerHTML)
    {
        
        reset();
        return true;
    }
   else if(cube1.innerHTML !== ''&& cube1.innerHTML===cube5.innerHTML && cube1.innerHTML=== cube9.innerHTML)
    {
        
        reset();
        return true;
    }
    else if(cube2.innerHTML !== ''&& cube2.innerHTML===cube5.innerHTML && cube2.innerHTML=== cube8.innerHTML)
    {
        
        reset();
        return true;
    }
    else if(cube3.innerHTML !== ''&& cube3.innerHTML===cube5.innerHTML && cube3.innerHTML=== cube7.innerHTML)
    {
        
        reset();
        return true;
    }
    else if(cube3.innerHTML !== ''&& cube3.innerHTML===cube6.innerHTML && cube3.innerHTML=== cube9.innerHTML)
    {
        
        reset();
        return true;
    }
    else if(cube4.innerHTML !== ''&& cube4.innerHTML===cube5.innerHTML && cube4.innerHTML=== cube6.innerHTML)
    {
        
        reset();
        return true;
    }
    else if(cube7.innerHTML !== ''&& cube7.innerHTML===cube8.innerHTML && cube7.innerHTML=== cube9.innerHTML)
    {
        
        reset();
        return true;
    }
    else{
        return false;
    }



}

playing();
let i=0;
function player1points(){
 let player1=document.querySelector('#player1points').innerHTML;
     
    one= parseInt(player1);

    one+=1;
    
    another =one.toString();

    player1=document.querySelector('#player1points').innerHTML = another;
    
    console.log(one);
  
}
    
function player2points(){
    let player2=document.querySelector('#player2points').innerHTML;
     
    one= parseInt(player2);

    one+=1;
    
    another =one.toString();

    player2=document.querySelector('#player2points').innerHTML = another;
    
    console.log(one);
  

}
function reset(){

    let box=document.querySelectorAll('#game div');
        for(let i=0;i<box.length;i++){
            box[i].innerHTML= '';
        }
}
function yesquit(){

         
       
        document.querySelector('#player1points').innerHTML= '0';
        document.querySelector('#player2points').innerHTML= '0';

        reset();

          document.querySelector('.quitmessage').style.display = 'none';
          
     


    
  

}