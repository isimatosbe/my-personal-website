export default function SearchBar({ lang, section, value, setValue }) {
    const sectionName = section.toLowerCase()
    return (
        <input
          type="text"
          placeholder={lang === 'en' ? `Filter ${sectionName}...` : `Filtrar ${sectionName}...`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
    )
}