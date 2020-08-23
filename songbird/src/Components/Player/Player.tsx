import React, { useEffect, useRef } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface PlayerProps {
  src: string,
  isFalse: boolean,
}

const Player: React.FC<PlayerProps> = (props: PlayerProps) => {
  const { src, isFalse } = props;

  const player: any = useRef(null);

  useEffect(() => {
    if (!isFalse) {
      player.current.audio.current.pause();
    }
  }, [isFalse]);

  return (
    <AudioPlayer
      autoPlay={false}
      autoPlayAfterSrcChange={false}
      ref={player}
      src={src}
    />
  );
};

export default Player;
