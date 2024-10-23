import React, { useState, useEffect } from 'react'
import TranslatedJoke from './TranslatedJoke';
import SelectLanguage from './SelectLanguage';
import { JokeObj, Translation } from '@/types/customTypes';


const Joke = ({ jokeObj }: { jokeObj: JokeObj }) => {
  const [translation, setTranslation] = React.useState<Translation>({});
  const [loadingTranslation, setLoadingTranslation] = useState<boolean>(false)
  const [selectedLanguage, setSelectedLanguage] = useState<{ [key: string]: string }>({});
  const [translationError, setTranslationError] = useState<string>('');

  const { id: jokeId, joke } = jokeObj


  useEffect(()=>{ // when the selected language changes, and if the selected languae state has jokeID as key; fetch the translation
    
    if(selectedLanguage[jokeId]){
      const fetchTraslation = async () => {
        setLoadingTranslation(true)
    
        try {
          const response = await fetch('/api/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text: [joke],
              target_lang: selectedLanguage[jokeId],
            }),
          });
    
          const data = await response.json();
          // setting the translation in the state with the jokeId as the key to match it with the joke
          setTranslation((prev) => ({
            ...prev,
            [jokeId]: data.translations[0].text,
          }));
          setTranslationError('');
    
        } catch (error) {
          console.log(error);
          setTranslationError('Error fetching translation. Please try again later');
        } finally {
          setLoadingTranslation(false);
        }
      };
      fetchTraslation()
    }
  },[selectedLanguage, jokeId])

  return (
    <div className='bg-stone-100 border-2 h-[70%] my-6 shadow-lg rounded-md p-5 w-[90%] mx-auto relative'>

      <div>
        {joke}
      </div>

      <div className='mt-5'>
        {loadingTranslation ? (
          <p className='text-xs'>Loading...</p>
        ) : translationError ? (
          <p className='text-xs text-red-400'>{translationError}</p>
        ) : (
          <TranslatedJoke translation={translation} jokeId={jokeId} />
        )}
      </div>

      <div className='absolute bottom-0 right-0 p-4'>
        <SelectLanguage jokeId={jokeId} setSelectedLanguage={setSelectedLanguage} />
      </div>

    </div>
  )
}

export default Joke