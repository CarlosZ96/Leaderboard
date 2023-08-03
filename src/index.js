import './style.css';
import { NewGame, Scores, AddScore } from './scores.js';

const SubmitButton = document.querySelector('.AddScores');
const RefreshButton = document.querySelector('.Rbutton');

let GameId = null;



(async () => {
    const GameName = 'MK';
    GameId = await NewGame(GameName);
  });