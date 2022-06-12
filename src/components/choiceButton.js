
export default function Choice({isActive, text}){
    return <div className="choiceContainer">
        <div className="choice">
            <span className="material-symbols-outlined">{isActive ? "done" : ""}</span>            
        </div>
        <span className='choiceText'>{text}</span>
    </div>
}