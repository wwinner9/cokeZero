import React from 'react'
import './App.css';
import Navbar from './components/navbar/navbar'
import ImgCoke from './assets/imgbin_coca-cola.png'
import ScrollReveal from 'scrollreveal'  
import {FaBars} from 'react-icons/fa'

function App() {


  const scrollR = ScrollReveal({ 
      origin: 'top',
      distance: '50px',
      duration: 2000,
      reset:true
  })
 
  const btn = document.querySelector('.btnMais')
  const tittle = document.querySelector('.leftSide')

  function menuClick(e){
    e.preventDefault()
    document.querySelector('.menuTool').style.display='none';
  }
  
  scrollR.reveal(tittle, {delay:600}) 
  scrollR.reveal(btn, {delay:1000});

  return (
    <div className="App"> 
      <header>
        <div className="menuTool">
          <a href=".leftSide" id='btnClose' onClick={menuClick}>X</a>
          <ul>
            <li></li>
            <li><a href=".leftSide">Home</a></li>
            <li><a href=".leftSide">About</a></li>
            <li><a href=".leftSide">Contacts</a></li>
            <li><a href=".leftSide">Team</a></li>
            <li><a href=".leftSide">Branding</a></li>
          </ul>
        </div>
        <Navbar/>        
      </header>

      <section>
        <div className="leftSide">
          <article>
          
            <p>Coke Zero</p>
            <h2>ABRA A <br/>FELICIDADE!</h2>
            <p>Coca-Cola e' um refrigerante carbonado vendido em lojas, <br/>
              restaurantes,mercados e maquinas de venda automatica <br/>
              em todo o mundo.
            </p>
          </article>
          <button className='btnMais'>Saber Mais</button>
        </div>
        
        <div className="rightSide">
          <div className="tittleZero">
            <h1 className='zero'>Z <br/>e <br/>r <br/>0 </h1>
          </div>
            <img src={ImgCoke} id='imgCoke' alt="Imagen da cola cola "/>
        </div>
      </section> 
    </div> 
  );
}

export default App;
