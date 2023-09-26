import { getRandomNumber } from './getRandomNumber';

export const getUniqueWords = (words: string[], number: number) => {
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
