const Info = document.createElement('div');
const Restaurants = document.createElement('div');
const Paragraph1= document.createElement('p');
const Paragraph2= document.createElement('p');
const Header = document.createElement('h1');

function Landing(){
    Header.textContent = 'A really nice looking restaurant';
   
   Paragraph1.textContent = 'Here you can see how our restaurant looks,  it looks really nice';
   Paragraph2.textContent = 'This is a rustic restaurant, we serve all types of meals that you can check on the menu tab. Our mision is to provide great food in a wholesome place';
      Info.setAttribute('id','Info');
   Info.appendChild(Header);
   Info.appendChild(Paragraph1);

   for(let  i = 1; i < 4 ;i++){
      const Item = document.createElement('img');
      Item.src = 'restaurant/I' + i + '.jpg'
      Item.classList.add('restaurant');
      Restaurants.appendChild(Item);
   }
   Restaurants.setAttribute('id','restaurants');
   Info.appendChild(Restaurants);
   Info.appendChild(Paragraph2);

   
   document.getElementById('content1').appendChild(Info);
   
}




export default Landing