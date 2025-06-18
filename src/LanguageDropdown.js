import React from 'react'
import { supportedLanguages } from './apiUtils'
import './LanguageTranslator.css'

function LanguageDropdown({label, setLanguage}) {
  return (
    <div className='select'>
        <label htmlFor="selectLanguage">{label} </label>
        <select name="" id="selectLanguage" onChange={(e)=>setLanguage(e.target.value)}>
            {Object.entries(supportedLanguages).map(([key, val])=>(
                <option key={key} value={val} style={{font:"inherit", outline:"none"}}>{key}</option>
            ))}
        </select>
    </div>
  )
}

export default LanguageDropdown