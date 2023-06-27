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

export { getRandomNumber, getUniqueWords };
