import React from 'react'
//css
import '../about/about.css'
//img
import me2 from '../../../src/assets/me-2.jpg'

const about = () => {
    return (
        <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'> </div>
            <div className='a-card'> 
            <img src={me2} className='a-img'/> 
            </div>
        </div>
        <div className='a-right'>
         <h1>Sobre Mi</h1>   
         <p className='a-sub'>
          Tengo 19 años  y hago lo que mas me gusta.
         </p>
         <p className='a-desc'>
         Naci el 13 de Agosto de 2002 en Argentina , Buenos Aires.    
         </p>
         <p className='a-desc'>
         Me dedico a programar en el ambito front-end con HTML ,JavaScript , React Js , Jquery y SASS.
         </p>
         <p className='a-desc'>
         Ahora mismo estoy estudiando Back-end y convertirme en FullStack Developer.
         Y con muchas ganas de aprender otros lenguajes en el ambito de programación.
         </p>
         <p className='a-desc'>
         Mi hobbie es dibujar y sacar fotografias.
         </p>


        </div>
        </div>
    )
}

export default about
