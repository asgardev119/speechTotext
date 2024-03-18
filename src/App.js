import "./App.css";
import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

function App() {
  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000,
  });

  const onListen = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="App">
      <h2>voice to text converter Web</h2> <br />
      <div className="content" onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>
      <div className="btns">
        <button onClick={setCopied}>
          {isCopied ? "Copied!" : "Copy to clipboard"}
        </button>
        <button onClick={onListen}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
      </div>
    </div>
  );
}

export default App;
