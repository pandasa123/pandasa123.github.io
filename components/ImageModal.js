import React from 'react'

const ImageModal = props => {
  const openModal = () => {
    document.getElementById(props.id).classList.add('is-active')
  }

  const closeModal = () => {
    document.getElementById(props.id).classList.remove('is-active')
  }

  return (
    <div className="image">
      <img src={props.src} alt={props.alt} onClick={openModal}/>
      <br/>
      <div className="modal is-clipped" id={props.id} style={{minWidth: '100%', minHeight: '100%'}}>
        <div onClick={closeModal} className="modal-background"/>
        <div className="modal-content">
          <img src={props.src} alt={props.alt}/>
        </div>
      </div>
    </div>
  )
}


