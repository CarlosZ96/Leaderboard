const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';

const NewGame = async (name) => {
  const response = await fetch(`${BaseUrl}/games/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
    }),
  });
  const data = await response.json();
  return data.result;
};

const Scoresg = async (GameId) => {
  const response = await fetch(`${BaseUrl}/games/${GameId}/scores/`);
  const data = await response.json();
  return data.result;
};

const AddScore = async (GameId, user, score) => {
  await fetch(`${BaseUrl}/games/${GameId}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });
};

export {
  NewGame,
  Scoresg,
  AddScore,
};