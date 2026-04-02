import getRandomInt from '../utils.js'; // твоя функция рандома
import runGame from '../index.js';     // твой основной движок

const description = 'Find the greatest common divisor of given numbers.';

// Алгоритм Евклида для поиска НОД
const getGcd = (a, b) => (b === 0 ? a : getGcd(b, a % b));

const generateRound = () => {
  const num1 = getRandomInt(1, 100);
  const num2 = getRandomInt(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);