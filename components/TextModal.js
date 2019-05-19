import React from 'react'
import OpenInNewIcon from 'mdi-react/OpenInNewIcon'

const TextModal = props => {
  const openModal = () => {
    document.getElementById(props.id).classList.add('is-active')
  }

  const closeModal = () => {
    document.getElementById(props.id).classList.remove('is-active')
  }

  // style={{position: 'fixed', top: 0, bottom: 0}}

  return (
    <span>
      <a className="icon has-text-info" onClick={openModal} style={{position: 'relative', top: '2px'}}>
        <OpenInNewIcon size={'1rem'}/>
      </a>
      <br/>
      <div className="modal is-clipped" id={props.id}>
        {/*<div onClick={closeModal} className="modal-background"*/}
        {/*     style={{top: '0', bottom: '0', left: '0', right: '0', position: 'absolute'}}/>*/}
        <div className="modal-content">
          <article className="message is-info is-medium">
          <div className="message-header">
            <p>{props.title}</p>
            <button className="delete" aria-label="delete" onClick={closeModal}/>
          </div>
          <div className="message-body">
            <ul className="is-centered">
              {props.content.map(d => {
                return (<li key={d[0]} style={{paddingBottom: '10px'}}>{d}</li>)
              })}
            </ul>
          </div>
        </article>
        </div>
      </div>
    </span>
  )
}



