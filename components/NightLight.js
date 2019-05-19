import React, {useEffect} from 'react'
import WeatherSunnyIcon from 'mdi-react/WeatherSunnyIcon'
import WeatherNightIcon from 'mdi-react/WeatherNightIcon'

const NightLight = props => {
  useEffect(() => {
    document.getElementById('switchRoundedSuccess').checked = props.theme
  }, [props.theme])

  const setToggle = e => {
    props.toggle(e.target.checked)
  }

  return (
    <div className={props.theme ? 'columns is-mobile is-dark has-text-white' : 'columns is-mobile'}>
      <div className="has-text-right column">
        <span className="icon" style={{position: 'relative', top: '6px', right: '7px'}}>
          <WeatherSunnyIcon/>
        </span>
        <input id="switchRoundedSuccess" type="checkbox" name="switchRoundedSuccess"
               className="switch is-rounded is-success" defaultChecked={props.theme} onClick={setToggle}/>
        <label htmlFor="switchRoundedSuccess"/>
        <span className="icon" style={{position: 'relative', top: '6px'}}>
          <WeatherNightIcon/>
        </span>
      </div>
    </div>
  )
}

export default NightLight
