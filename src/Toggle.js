import { useState } from 'react';

function Toggle() {
    const [language, setLanguage] = useState("JavaScript")

    const updateData = () => {
       
        setLanguage("React")
    }

    return(
        <div>
            <h1>I love {language}</h1>
            <button onClick = { updateData }>CLICK</button>
        </div>
    )
}

export default Toggle;