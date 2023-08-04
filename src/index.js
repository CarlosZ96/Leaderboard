import './style.css';
import { NewGame, Scoresg, AddScore } from './scores.js';

const SubmitButton = document.querySelector('.AddScores');
const RefreshButton = document.querySelector('.Rbutton');

let GameId = null;

const Display = (scores) => {
  const ScoreList = document.querySelector('.ScoreList');
  ScoreList.innerHTML = '';
  scores.forEach((score) => {
    const ScoreLi = document.createElement('li');
    ScoreLi.classList.add('ScoreI');
    ScoreLi.textContent = `${score.user} : ${score.score}`;
    ScoreList.appendChild(ScoreLi);
  });
};

RefreshButton.addEventListener('click', async () => {
  if (GameId) {
    const scores = await Scoresg(GameId);
    Display(scores);
  }
});

SubmitButton.addEventListener('submit', async (event) => {
  event.preventDefault();
  const NameInput = document.getElementById('NameInput');
  const ScoreInput = document.getElementById('ScoreInput');
  if (GameId) {
    await AddScore(GameId, NameInput.value, ScoreInput.value);
    SubmitButton.reset();
  }
});

(async () => {
  const GameName = 'Morltal Kombat';
  GameId = await NewGame(GameName);
})();