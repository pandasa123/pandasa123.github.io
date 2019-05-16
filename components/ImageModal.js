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
      <div className="modal is-clipped" id={props.id}>
        <div onClick={closeModal} className="modal-background"/>
        <div className="modal-content">
        <span className="image">
          <img src={props.src} alt={props.alt}/>
        </span>
        </div>
        <button className="modal-close is-large" aria-label="close" onClick={closeModal}/>
      </div>
    </div>
  )
}

export default ImageModal
