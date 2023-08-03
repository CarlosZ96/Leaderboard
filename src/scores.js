const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const NewGame = async (Name) => {
  const response = await fetch(`${BaseUrl}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 
    },
    body: JSON.stringify({
      Name,
    }),
  });
  const data = await response.json();
  return data.result;
};

const Scores = async (GameId) => {
  const response = await fetch(`${BaseUrl}/games/${GameId}/scores/`);
  const data = await response.json();
  return data.result;
};

const AddScore = async (GameId, User, Score) => {
  await fetch(`${BaseUrl}/games/${GameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      User,
      Score,
    }),
  });
};

export {
  NewGame,
  Scores,
  AddScore,
};