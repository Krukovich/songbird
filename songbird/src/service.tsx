export const playAudio = (src: string) => {
  const myAudio = new Audio();
  myAudio.src = `${src}`;
  myAudio.play();
};

export const getRandomNumber = (max: number) => Math.floor(Math.random() * Math.floor(max));

export const shuffle = (array: any[]) => array.sort(() => Math.random() - 0.5);
