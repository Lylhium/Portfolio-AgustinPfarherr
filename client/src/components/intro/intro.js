import React from 'react'
//css
import '../intro/intro.css'
//imgs
import Me from '../../../src/assets/me.png'

export default function intro() {
    return (
        <div className='i'>
            <div className='i-left'>
                <div className='i-left-wrapper'>
                    <h2 className='i-intro'>Hola, mi nombre es</h2>
                    <h2 className='i-name'>Agustín Pfarherr</h2>
                    <div className='i-title'>
                        <div className='i-title-wrapper'>
                            <div className='i-title-item'>Front-End Developer</div>
                            <div className='i-title-item'>React Js</div>
                            <div className='i-title-item'>HTML5 & CSS</div>
                            <div className='i-title-item'>JavaScript</div>
                            <div className='i-title-item'>WordPress</div>
                        </div>
                </div>
                    <div className='i-desc'>
                    Soy Programador Front-end Trainee y estoy capacitandome para ser Programador Fullstack.
                    </div>
                    <div className='i-desc'>
                     Dispuesto a ofrecer mis servicios y expandir mis conocimientos sobre Programación.
                    </div>
                    
            </div>
            </div>
            <div className='i-right'>
            <div className='i-bg'></div>
            <img src={Me} alt='me-img' className='i-img'/>
            </div>
        </div>
    )
}
