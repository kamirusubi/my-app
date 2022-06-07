export default function Search(){
    return <div>
        <div className="search">
            <button className="link">
                <span className="material-symbols-outlined Icon">search</span>   
            </button>
            <input type="text" placeholder="Искать" autoComplete="off" spellCheck="false" className="inputSearch size-l"/>       
        </div>
    </div>
}