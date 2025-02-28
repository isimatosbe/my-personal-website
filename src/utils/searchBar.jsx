import { FaSearch } from "react-icons/fa";

export default function SearchBar({ lang, section, value, setValue }) {
    const sectionName = section.toLowerCase()
    return (
      <div className="search-bar-container">
        
        <input
          className="search-bar"
          type="search"
          placeholder={lang === 'en' ? `Filter ${sectionName}...` : `Filtrar ${sectionName}...`}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <FaSearch className="search-icon" />
      </div>
        
    )
}