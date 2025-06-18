import React, { useState } from 'react'
import LanguageDropdown from './LanguageDropdown'
import axios from 'axios'
import './LanguageTranslator.css'

function LanguageTranslator() {
    const [source, setSource] = useState('af');
    const [target, setTarget] = useState('af');
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleTranslate = async () => {
        const url = "https://text-translator2.p.rapidapi.com/translate";
        const apiKey = "61fe42194dmsha3e696751cf48edp14633fjsn5dd03c4a1e74";

        const data = new URLSearchParams({
            source_language : source,
            target_language : target,
            text : input
        })

        const headers = {
            "content-type" : "application/x-www-form-urlencoded",
            "X-RapidAPI-Key" : apiKey,
            "X-RapidAPI-Host" : "text-translator2.p.rapidapi.com"
        }

        try{
            const response = await axios.post(url,data,{ headers });
            const resData = response.data;

            if(resData.status === "success"){
                const translatedText = resData.data.translatedText;
                setResult(translatedText);
            }else{
                setResult(resData.message)
            }
        }catch(error){
            console.error("Error : ",error);
            setResult(error.response.data.message);
        }

    }

  return (
    <div className='main'>
        <h3>Langauage Translator</h3>
        <LanguageDropdown label="Source Language" setLanguage={setSource} />
        <LanguageDropdown label="Target Language" setLanguage={setTarget} />
        <div className='input'>
            <label htmlFor="InputText">Input Text </label>
        <textarea name="" id="InputText" rows="2" cols="20" onChange={(e)=>setInput(e.target.value)} value={input}>Hello</textarea>
        </div>
        <button className='btn' onClick={handleTranslate}>Translate</button>
        <p><b>{result}</b></p>
    </div>
  )
}

export default LanguageTranslator