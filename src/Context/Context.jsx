// context api is used to pass props easily to any compenent in the app
// it avoids prop drilling

import React , {useContext, createContext, useState, useEffect}from 'react'
import run from '../config/geminiConfig';

export const Context = createContext();

const ContextProvider = (props) => {

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPrompts, setPreviousPrompts] = useState([])
    const [showResults,setShowResults] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData, setResultData] = useState('')



    const AddtypingEffect = (index,nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        },10*index)
    }

    const beutifyResponse = (responsearray) => {
        let newResponse = "";
        for (let i=0; i<responsearray.length; i++) {
            if (i === 0 || 
                i%2===0) {
                newResponse += responsearray[i];
            } else {
                newResponse +="<b>"+responsearray[i]+"</b>";
            }
        }
        // setResultData(newResponse)
        console.log(newResponse)
        
        return newResponse
    }


    const newChat = () => {
        setLoading(false)
        setShowResults(false)
    }

    const onSent = async (prompt) => {
        setResultData('');
        setLoading(true);
        setShowResults(true)
        let response;
        if (prompt !== undefined) {
            setRecentPrompt(prompt)
            response = await run(prompt)
        } else {
            setRecentPrompt(input)
            setPreviousPrompts(prev => [input,...prev])
            response = await run(input)
        }
        let responsearray = response.split("**")
        console.log(responsearray)
        let newResponse = beutifyResponse(responsearray) // add bold texts
        
        let newResponse2 = newResponse.split("*").join("</br>")
        for (let i=0; i<newResponse2.length;i++) {
            AddtypingEffect(i,newResponse2[i]);
        }
        // setResultData(newResponse);
        setLoading(false)
        setInput("")

    }

    // onSent("What is react JS?")

    const ContextValue = {
        prevPrompts,
        setPreviousPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
        newChat,
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider