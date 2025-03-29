import React from "react";
import useRecorder from "./useRecorder";

const Recorder = () => {
  const { isRecording, audioUrl, startRecording, stopRecording } = useRecorder();

  return (
    <div className="flex flex-col items-center p-4">
      <button 
        onClick={isRecording ? stopRecording : startRecording} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {isRecording ? "録音停止" : "録音開始"}
      </button>
      {audioUrl && <audio src={audioUrl} controls className="mt-4" />}
    </div>
  );
};

export default Recorder;