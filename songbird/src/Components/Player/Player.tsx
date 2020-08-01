import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player: React.FC = () => (
  <AudioPlayer
    autoPlay
    src="http://example.com/audio.mp3"
  />
);

export default Player;
