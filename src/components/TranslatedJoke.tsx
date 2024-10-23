
interface Translation {
  [key: string]: string
}

const TranslatedJoke = ({ translation, jokeId }: { translation: Translation, jokeId: number }) => {
  const translatedText = translation[jokeId] ?? ''; // if the translation is not available, show an empty string
  return (
    <p className='italic'>{translatedText} </p>
  )
}

export default TranslatedJoke