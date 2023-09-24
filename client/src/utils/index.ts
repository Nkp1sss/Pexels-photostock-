const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getUniqueWords = (words: string[], number: number) => {
  const uniqueWords: string[] = [];

  while (uniqueWords.length < number) {
    const randomIndex = getRandomNumber(0, words.length - 1);
    const word = words[randomIndex];

    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }

  return uniqueWords;
};

const downloadImage = async (imageSrc: string, imageName: string) => {
  const imageBlob = await fetch(imageSrc).then((response) =>
    response.arrayBuffer().then((buffer) => new Blob([buffer], { type: 'image/jpeg' }))
  );

  const link = document.createElement('a');
  link.href = URL.createObjectURL(imageBlob);
  link.download = imageName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export * from './ls';
export { getRandomNumber, getUniqueWords, downloadImage };
