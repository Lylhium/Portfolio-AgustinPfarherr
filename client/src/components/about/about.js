import React from 'react'
//css
import '../about/about.css'
//img
import me2 from '../../../src/assets/me-2.jpg'
import Logo from '../../assets/Logo.png'

const about = () => {
    return (
        <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'> </div>
            <div className='a-card'> 
            <img src={me2} className='a-img' alt='img'/> 
            </div>
        </div>
        <div className='a-right'>
         <h1>Sobre Mi</h1>   
         <p className='a-sub'>
         Naci el 13 de Agosto de 2002 en Argentina , Buenos Aires.   
         </p>
         <p className='a-desc'>
         Me dedico a programar en el ambito front-end con HTML, JavaScript, React Js, Jquery,SASS y WordPress.
         </p>
         <p className='a-desc'>
         Ahora mismo estoy estudiando programación Back-end para convertirme en FullStack Developer. Tengo muchas ganas de aprender otros lenguajes en el ambito de programación.
         </p>
         <p className='a-desc'>
         Mi hobbie es dibujar y sacar fotografias.
         </p>
         <h1>Mis Proyectos:</h1>
         <img src= {Logo} className='coco-icon' alt='img'/>
         
         <a href={'https://angry-mestorf-fbb8cc.netlify.app/'} style={{color:'white',fontWeight:500, fontSize:25}} target="_blank" >Coco Light</a>
         <br/>
         
         <br/>
        </div>
        </div>
    )
}

export default about
