import './style.css';
import { NewGame, Scores, AddScore } from './scores.js';

const SubmitButton = document.querySelector('.AddScores');
const RefreshButton = document.querySelector('.Rbutton');


let GameId = null;

const Display = (Scores) => {
  const ScoreList = document.querySelector('.ScoreList');
  ScoreList.innerHTML = '';
  Scores.forEach((score) => {
    const ScoreLi = document.createElement('li');
    ScoreLi.classList.add('ScoreI');
    ScoreList.innerHTML = `${score.user} : ${score.score}`;
    ScoreList.appendChild(ScoreLi);
  });
};

RefreshButton.addEventListener('click', async () => {
  if (GameId) {
    const scores = await Scores(GameId);
    Display(scores);
  }
});

SubmitButton.addEventListener('submit', async (event) => {
  event.preventDefault();
  const NameInput = document.getElementById('NameInput');
  const ScoreInput = document.getElementById('ScoreInput');
  if (GameId) {
    await AddScore(GameId, NameInput, ScoreInput);
    SubmitButton.reset();
  }
});


(async () => {
    const GameName = 'MK';
    GameId = await NewGame(GameName);
  })();