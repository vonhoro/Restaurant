const Info = document.createElement('div');

const Paragraph1= document.createElement('p');

const Header = document.createElement('h1');
const Header1 = document.createElement('h2');
const Header2 = document.createElement('h2');
const Header3 = document.createElement('h2');

function Contact(){
    Header.textContent = 'Contact information:';
    Header1.textContent = 'WhatsApp : +99 444 77777777';
    Header2.textContent = 'Email: aRealFakeEmail@superfake.dude'
    Header3.textContent = 'Location:';
   
   Paragraph1.textContent = 'Around the corner sourding the darkes that is in your eyes'

      Info.setAttribute('id','Info');
   Info.appendChild(Header);
   Info.appendChild(Header1);
   Info.appendChild(Header2);
   Info.appendChild(Header3);
   Info.appendChild(Paragraph1);
   
   document.getElementById('content3').appendChild(Info);
   
}

export default Contact;