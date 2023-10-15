import { useState } from "react";

let speech = null

if ("webkitSpeechRecognition" in window) {
    speech = new webkitSpeechRecognition()
    speech.continuous = true;
    speech.lang = 'en-US';

}
export const useSpeech = () => {
    const [Text, setText] = useState('')
    const [Listening, setListening] = useState(false);
    speech.onresult = (event) => {
        console.log(event, 'evet');
        speech.stop();
        setListening(false)
    }
}