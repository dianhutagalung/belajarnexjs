
import { useTheme } from 'next-themes'
import { useEffect } from 'react';

export const Test = () => {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setTheme("light");
}, []);
  return (
    <div className="w-screen h-screen">
      <p>The current theme is: {theme}</p>
      <button 
        className='px-6 py-2 bg-black dark:bg-white text-white dark:text-black'
        onClick={()=>setTheme(theme == 'light'? 'dark' : 'light')}
        >Toggle to {theme == 'light'? 'dark' : 'light'}</button>
    </div>
 
  )
}

export default Test

