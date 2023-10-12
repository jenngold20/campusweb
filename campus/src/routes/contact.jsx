import React from 'react'
import Form from '../components/form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='form'>
      <h2>¿Desea recibir más información?</h2>
      <p>Dejenos sus datos para recibirla</p>
      <Form/>
    </div>
  )
}

export default Contact