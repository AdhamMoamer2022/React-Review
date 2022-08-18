import React from 'react'

const Modal = () => {
  return (
    <div className='modal'>
        <h3>Are you sure ?</h3>
        <button className='btn btn--alt'>Confirm</button>
        <button className='btn'>Delete</button>
    </div>
  )
}

export default Modal