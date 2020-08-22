import React, { useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface PlayerProps {
  src: string,
}

const Player: React.FC<PlayerProps> = (props: PlayerProps) => {
  const { src } = props;

  const player: any = useRef(null);

  useEffect(() => {
    player.current.audio.current.pause();
  });

  return (
    <AudioPlayer
      autoPlay
      autoPlayAfterSrcChange={false}
      ref={player}
      src={src}
    />
  );
};

export default Player;
