const Menu = document.createElement('div');

function menuLooks(){
   
   Menu.setAttribute('id', 'Menu');
   for (let i = 1; i < 9; i++){
      let detalles = 'details' + i;
      let Item = document.createElement('img');
      const details = document.createElement('div');
      Item.classList.add('item-1');
      Item.setAttribute('id',i);
      Item.src='food/I'+ i +'.jpg';
      
      details.textContent = i +'Esto es un ejemplo del texto y descripcion del articulo en cuestion donde se puede agregar tanto el nombre como el precio e ingredientes';
      details.classList.add('details');
      details.setAttribute('id',detalles);
      Item.addEventListener('click',(e)=>{
         let Item = e.target.getAttribute('Id');
         
         document.getElementById('details'+Item).style.display = 'block';
         document.getElementById(Item).style.display = 'none';
      });
      details.addEventListener('click',(e)=>{
         let Item = e.target.getAttribute('Id');
         let Other = Item.substring(7);
         document.getElementById(Other).style.display = 'block';
         document.getElementById(Item).style.display = 'none';
      });
      Menu.appendChild(Item);
      Menu.appendChild(details);
   } 
      for (let i = 9; i < 17; i++){
      let detalles = 'details' + i;
      let Item = document.createElement('img');
      const details = document.createElement('div');
      Item.classList.add('item-2');
      Item.setAttribute('id',i);
      Item.src='food/I'+ i +'.jpg';
      details.textContent = i +'Esto es un ejemplo del texto y descripcion del articulo en cuestion donde se puede agregar tanto el nombre como el precio e ingredientes';
      details.classList.add('details');
      details.setAttribute('id',detalles);
      Item.addEventListener('click',(e)=>{
         let Item = e.target.getAttribute('Id');
         
         document.getElementById('details'+Item).style.display = 'block';
         document.getElementById(Item).style.display = 'none';
      });
      details.addEventListener('click',(e)=>{
         let Item = e.target.getAttribute('Id');
         let Other = Item.substring(7);
         document.getElementById(Other).style.display = 'block';
         document.getElementById(Item).style.display = 'none';
 
         
      });
      Menu.appendChild(Item);
      Menu.appendChild(details);
      
   }
   const Atras = document.createElement('div');
   Atras.classList.add('Atras');
   Atras.textContent = 'Atras';
   
   Atras.addEventListener('click',Toggle);
     
      
 
   const Sigue = document.createElement('div');
   Sigue.textContent = 'Siguiente';             
   Sigue.classList.add('Sigue');
  Sigue.addEventListener('click',Toggle);
   Menu.appendChild(Sigue);
   Menu.appendChild(Atras);
   
   
   document.getElementById('content2').appendChild(Menu);
}
function Toggle(e){
 
     
      let Display1A = e.target.parentElement.children[0].style.display;
      let Display1B = e.target.parentElement.children[1].style.display;
      let Display2A = e.target.parentElement.children[16].style.display;
      let Display2B = e.target.parentElement.children[17].style.display;

      if (Display1A ==''){
         let Item1 = document.getElementsByClassName('item-1');
         let Item2 = document.getElementsByClassName('item-2');
         for (let i = 0; i < 8; i++){
            Item1[i].style.display = 'none';
            Item2[i].style.display = 'block';
         
         } 
      }else if (Display2A =='block'){
         let Item1 = document.getElementsByClassName('item-1');
         let Item2 = document.getElementsByClassName('item-2');
         for (let i = 0; i < 8; i++){
            Item1[i].style.display = 'block';
            Item2[i].style.display = 'none';
         
         }   
      }else if (Display2B =='block'){
         let Item1 = document.getElementsByClassName('item-1');
         let Item2 = document.getElementsByClassName('item-2');
         for (let i = 0; i < 8; i++){
            Item1[i].style.display = 'block';
            Item2[i].style.display = 'none';
         
         }   
      }else if (Display1A =='block'){
         let Item1 = document.getElementsByClassName('item-1');
         let Item2 = document.getElementsByClassName('item-2');
         for (let i = 0; i < 8; i++){
            Item1[i].style.display = 'none';
            Item2[i].style.display = 'block';
         
         }   
      }else if (Display1B =='block'){
         let Item1 = document.getElementsByClassName('item-1');
         let Item2 = document.getElementsByClassName('item-2');
         for (let i = 0; i < 8; i++){
            Item1[i].style.display = 'none';
            Item2[i].style.display = 'block';
         
         }   
      }
      let Details = document.getElementsByClassName('details');
         for (let i = 0; i < 16; i++){
            Details[i].style.display ='none';
         }

      console.log('aaaaaaaaaaaaaaaaaaaa');

}

export default menuLooks



