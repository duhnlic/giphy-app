
export default function SearchLanguage({handleLanguageChange}){
    return(
        <div className="ResultLanguage">
            <label htmlFor="Language">Language</label>
                <select name="Language" id="result-language" onChange={handleLanguageChange}>
                    <option>en</option>
                    <option>es</option>
                    <option>fr</option>
                    <option>ru</option>
                    <option>nl</option>
                </select>
        </div>
    )
}