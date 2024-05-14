import { /*useState, useRef,*/ useEffect } from 'react'
import { useLocalStorage } from '../../utils/useLocalSorage'
import { detectSystemDarkMode } from '../../utils/detectSystemDarkMode'
import '../../styles/BtnDarkMode.css'
import sun from '../../img/icons/sun.svg'
import moon from '../../img/icons/moon.svg'

export const BtnDarkMode = () => {
    /*const [darkMode, setDarkMode] = useState('light')
    const btnRef = useRef(null)*/
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectSystemDarkMode())
    
    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark')
            /*btnRef.current.classList.add('dark-mode-btn--active')*/
        } else {
            document.body.classList.remove('dark')
            /*btnRef.current.classList.remove('dark-mode-btn--active')*/
        }
    }, [darkMode])

    useEffect(() => {
        window
            .matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change', (event) => {
                const newColorScheme = event.matches ? 'dark' : 'light'
                setDarkMode(newColorScheme)
            })
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnDark = 'dark-mode-btn'
    const btnDarkActive = 'dark-mode-btn dark-mode-btn--active'

    return <>
        <button
            /*ref={btnRef}*/
            className={darkMode === 'dark' ? btnDarkActive : btnDark}
            onClick={toggleDarkMode}>
            <img
                src={sun}
                alt='Light mode'
                className='dark-mode-btn__icon' />
            <img
                src={moon}
                alt='Dark mode'
                className='dark-mode-btn__icon' />
        </button>
    </>
}