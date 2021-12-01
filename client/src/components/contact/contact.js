import React, { useRef, useState } from 'react'
//css
import '../contact/contact.css'
//img
import Phone from '../../assets/phone.png'
import Email from '../../assets/email.png'
import Address from '../../assets/address.png'
import Linkedin from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
//emailJS
import emailjs from 'emailjs-com';
//sweetalert
import Swal from 'sweetalert2'

const Contact = () => {

    const formRef = useRef()

    const [done,setDone] = useState(false)

    const mostrarAlerta=() =>{
        Swal.fire(
            'Correo Enviado',
            'Muchas gracias.',
            'success'
          )
       }


    const handleSubmit = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_lilius', 'template_m6lspvj', 
        formRef.current, 
        'user_v8lv7h9xUJr6n9XlGDeii')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div className='c'>
            <div className='c-bg'></div>
             <div className='c-wrapper'>
             <div className='c-left'>
                 <h1 className='c-title'>Contactame!</h1>
                 <div className='c-info'>
                   <div className='c-info-item'>
                      <img src= {Phone} className='c-icon'/>
                      +(54) 9 11 7360-7075
                   </div>   
                   <div className='c-info-item'>
                      <img src= {Email} className='c-icon'/>
                      Agustinpfarherr@gmail.com
                   </div>
                   <div className='c-info-item'>
                      <img src= {Linkedin} className='c-icon'/>
                       <a href={'https://www.linkedin.com/in/agust%C3%ADn-pfarherr-623188211/'} style={{color:'white'}}>Linkedin</a>
                   </div>
                   <div className='c-info-item'>
                      <img src= {Github} className='c-icon'/>
                       <a href={'https://github.com/Lylhium?tab=repositories'} style={{color:'white'}}>GitHub</a>
                   </div>
                   <div className='c-info-item'>
                      <img src= {Address} className='c-icon'/>
                      <a href={'https://goo.gl/maps/2Hs3EV9E2NQaFARk6'} style={{color:'white'}}>La Paternal, Capital Federal , Argentina</a>
                   </div>      
                 </div>
             </div>
             <div className='c-right'>
                 <p className='c-desc'>
                     <h2>Necesitas ponerte en contacto conmigo?</h2>
                     <p className='c-texto'>Podes enviar un email aqui! </p>
                 </p>
                 <form ref={formRef} onSubmit={handleSubmit}>
                     <input type='text' placeholder='Nombre' name='user_name'/>
                     <input type='text' placeholder='Tema' name='user_tema'/>
                     <input type='text' placeholder='Email' name='user_email'/>
                     <textarea rows='5' placeholder='Mensaje' name='message'/>
                     <button onClick={() => mostrarAlerta()} >Enviar</button>
                     {done && <h1>Correo Enviado.</h1> }
                 
                 </form>
             </div>
             </div>
        </div>
    );
};

export default Contact

