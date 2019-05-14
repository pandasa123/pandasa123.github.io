import React from 'react'

// TODO: Fix vertical lineup.
// TODO: Fix jump to left on resize
// TODO: Add functional dark mode using is-dark class

const NightLight = props => {
  let sun = <img alt="Sun Icon" src="/static/nightLight/sun.svg"/>
  let moon = <img alt="Moon Icon" src="/static/nightLight/moon.svg"/>
  if (props.theme) {
    sun = <img alt="Sun Icon" src="/static/nightLight/sun-white.svg"/>
    moon = <img alt="Moon Icon" src="/static/nightLight/moon-white.svg"/>
  }

  const setToggle = e => {
    props.toggle(e.target.checked)
  }

  return (
    <div className="level" style={{maxWidth: '100px'}}>
      <div className="level-item" style={{paddingRight: '8px'}}>
        <label htmlFor="nightLightSwitch">
          {sun}
        </label>
      </div>
      <div className="level-item">
        <input id="nightLightSwitch" type="checkbox" name="nightLightSwitch" className="switch is-rounded is-success"
               onClick={setToggle}/>
        <label htmlFor="nightLightSwitch">
          {moon}
        </label>
      </div>
    </div>
  )
}

export default NightLight
