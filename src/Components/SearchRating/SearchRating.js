
export default function SearchRating({handleRatingChange}){
    return(
        <div className="ResultRating">
            <label htmlFor="Filter">Filter</label>
                <select name="Filter" id="result-rating" onChange={handleRatingChange}>
                    <option>G</option>
                    <option>PG</option>
                    <option>PG-13</option>
                    <option>R</option>
                </select>
        </div>
    )
}