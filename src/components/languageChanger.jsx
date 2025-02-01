export default function LanguageChanger({ onClick, lang }) {
    return (
        <div className="lang-switcher">
            <img
                alt={lang === "en" ? "Spanish" : "English"}
                src={"http://purecatamphetamine.github.io/country-flag-icons/3x2/" + (lang === "en" ? "ES" : "GB") + ".svg"}
                height="100%"
                onClick={onClick}
            />
        </div>    
    )
}