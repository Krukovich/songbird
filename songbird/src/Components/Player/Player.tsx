import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface PlayerProps {
  src: string
}

const Player: React.FC<PlayerProps> = (props: PlayerProps) => {
  const { src } = props;

  return (
    <AudioPlayer
      src={src}
    />
  );
};

export default Player;
