import { useEffect } from "react";
import { useState } from "react";

let recogintion: any = null;
if ("webkitSpeechRecognition" in window) {
  recogintion =
    new window.webkitSpeechRecognition() || new window.SpeechRecognition();
  recogintion.continuous = true;
  recogintion.interimResults = true;
  recogintion.lang = "en-US";
}
const useSpeechRecognition = () => {
  const [text, setText] = useState("");
  const [isListenit, setListenit] = useState(false);
  useEffect(() => {
    if (!recogintion) return;

    recogintion.onresult = (event: SpeechRecognitionEvent) => {
      console.log("hello", event);
      setText(event.results[0][0].transcript);
      recogintion.stop();
      setListenit(false);
    };
  }, []);
  const startListening = () => {
    setText("");
    recogintion.start();
    setListenit(true);
  };
  const stopListening = (event: SpeechRecognitionEvent) => {
    setListenit(false);
    recogintion.stop();
  };
  return {
    text,
    isListenit,
    startListening,
    stopListening,
    hasRecognitionSupport: !!recogintion,
  };
};
export default useSpeechRecognition;
