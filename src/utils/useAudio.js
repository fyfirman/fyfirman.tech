import { useState, useEffect } from "react";

const useAudio = () => {
  const [audio, setAudio] = useState({
    audioPlayer: {},
    currentTrackIndex: null,
    isPlaying: false,
  })
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle, setAudio];
};

export default useAudio