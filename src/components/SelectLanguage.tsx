import languagesData from '@/data/languages.json'

interface LanguageObjType {
  language: string;
  name: string;
}

const SelectLanguage = (
  {
  jokeId,
   setSelectedLanguage 
  } :
  {
    jokeId: number,
    setSelectedLanguage: React.Dispatch<React.SetStateAction<{[key: string]: string}>>
  }
) => {
  const {languages} = languagesData
  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    //setting the selected language for the joke with the jokeId as the key and lang code as the value
    setSelectedLanguage({
      [jokeId]: e.target.value 
    })
  }

  return (
    <div className='ml-auto'>
      <span>Translate to : </span>
      <select onChange={handleOnSelect} className="text-sm p-1 border rounded">
        {
          languages.map((item : LanguageObjType)=> {
            return <option key={item.language} value={item.language}>{item.name}</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectLanguage