import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeChanger( { onClick, theme }) {
    return (
        <>
            {
            theme === 'light' ? 
                <MdDarkMode className="theme-changer" onClick={onClick} /> : 
                <MdLightMode className="theme-changer" onClick={onClick} />
            }        
        </>
    )
}