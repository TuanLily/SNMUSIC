
import { useRef, useState } from "react";

const AudioPlayer = ({ title, file }) => {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState("0:00");
    const [currentTime, setCurrentTime] = useState("0:00");
    const [volume, setVolume] = useState(1);
  
    const formatTime = (sec) => {
      if (isNaN(sec)) return "0:00";
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60).toString().padStart(2, "0");
      return `${m}:${s}`;
    };
  
    const togglePlay = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (playing) audio.pause();
      else audio.play();
      setPlaying(!playing);
    };
  
    const handleTimeUpdate = () => {
      const audio = audioRef.current;
      if (!audio) return;
      const percent = (audio.currentTime / audio.duration) * 100 || 0;
      setProgress(percent);
      setCurrentTime(formatTime(audio.currentTime));
      setDuration(isNaN(audio.duration) ? "0:00" : formatTime(audio.duration));
    };
  
    const handleSeek = (e) => {
      // người dùng click vào phần progress để seek
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const audio = audioRef.current;
      if (audio && !isNaN(audio.duration)) {
        audio.currentTime = percent * audio.duration;
      }
    };
  
    const changeVolume = (e) => {
      const v = Number(e.target.value);
      const audio = audioRef.current;
      if (audio) audio.volume = v;
      setVolume(v);
    };
  
    return (
      <div className="single_player_container">
        <h4>{title}</h4>
  
        <audio
          ref={audioRef}
          src={file}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          onEnded={() => setPlaying(false)}
        />
  
        <div className="jp-audio jp_container">
          <div className="jp-gui jp-interface">
            <div className="player_controls_box">
              <button className="player_button" onClick={togglePlay}>
                {playing ? "❚❚" : "▶"}
              </button>
            </div>
  
            <div className="player_bars">
              <div className="jp-progress" onClick={handleSeek} style={{ cursor: "pointer" }}>
                <div className="jp-seek-bar">
                  <div className="jp-play-bar" style={{ width: `${progress}%` }}>
                    <div className="jp-current-time">{currentTime}</div>
                  </div>
                </div>
              </div>
              <div className="jp-duration ml-auto">{duration}</div>
            </div>
  
            <div className="jp-volume-controls">
              <i className="fa fa-volume-down" />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={changeVolume}
                className="volume-slider"
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AudioPlayer;
