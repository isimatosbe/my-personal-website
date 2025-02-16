export default function LanguageChanger({ onClick, lang }) {
    return (
        <>
            <img
                className="lang-switcher"
                alt={lang === 'en' ? "Spanish" : "English"}
                src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + (lang === 'en' ? "ES" : "GB") + ".svg"}
                height="40px"
                onClick={onClick}
            />
        </>    
    )
}