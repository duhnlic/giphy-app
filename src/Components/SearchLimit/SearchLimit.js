
export default function SearchLimit({handleQuantityChange}){
    return(
        <div className="ResultLimit">
            <label htmlFor="Amount">Amount</label>
                <select name="Amount" id="result-amount" onChange={handleQuantityChange}>
                    <option>15</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                </select>
        </div>
    )
}
