const NUMBER_OF_JOKES = 2;

export const getJokes = async () => {
  const response = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single&amount=${NUMBER_OF_JOKES}`);

  if(!response.ok) {
    throw new Error('Error encountered while fetching jokes');
  }
  return response.json();
}