import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function ThemeChanger( { onClick, theme }) {
    return (
        <>
            {
            theme === 'light' ? 
                <MdDarkMode className="fixed-button theme-changer" onClick={onClick} /> : 
                <MdLightMode className="fixed-button theme-changer" onClick={onClick} />
            }        
        </>
    )
}