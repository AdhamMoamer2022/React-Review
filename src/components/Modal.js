import React from 'react'

const Modal = (props) => {
  return (
    <div className='modal'>
        <h3>Are you sure ?</h3>
        <button className='btn btn--alt' onClick={props.onConfirm}>Confirm</button>
        <button className='btn' onClick={props.onCancel}>Delete</button>
    </div>
  )
}

export default Modal