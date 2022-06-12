import {  useRef, useState } from 'react'


export default function Rating({rating}){
    let container = useRef(null)
    let [rate, setRate] = useState(rating)
    let fillingOn = (e) => {
        container.current.style.width = e  * 24 + 'px'
    }
    let fillingOff = () => {
        container.current.style.width = rate  * 24 + 'px'
    }
    let changeRate = (e) => {
        setRate(e)
    }
    return <div className="ratingContainer">
        <div className="rating stars" style={{width: `${rate }` * 24 + 'px'}} ref={container}>    
            <span className="material-symbols-outlined">star</span> 
            <span className="material-symbols-outlined">star</span>   
            <span className="material-symbols-outlined">star</span>   
            <span className="material-symbols-outlined">star</span>   
            <span className="material-symbols-outlined">star</span>           
        </div>
        <div className="grayStars">    
            <span className="material-symbols-outlined">star</span> 
            <span className="material-symbols-outlined">star</span>   
            <span className="material-symbols-outlined">star</span>   
            <span className="material-symbols-outlined">star</span>   
            <span className="material-symbols-outlined">star</span>           
        </div>      
        <div className="rateStars">    
            <span className="material-symbols-outlined star" onMouseOver={() => fillingOn(1)} onMouseLeave={fillingOff} onClick={() => changeRate(1)}>star</span> 
            <span className="material-symbols-outlined star" onMouseOver={() => fillingOn(2)} onMouseLeave={fillingOff} onClick={() => changeRate(2)}>star</span>   
            <span className="material-symbols-outlined star" onMouseOver={() => fillingOn(3)} onMouseLeave={fillingOff} onClick={() => changeRate(3)}>star</span>   
            <span className="material-symbols-outlined star" onMouseOver={() => fillingOn(4)} onMouseLeave={fillingOff} onClick={() => changeRate(4)}>star</span>   
            <span className="material-symbols-outlined star" onMouseOver={() => fillingOn(5)} onMouseLeave={fillingOff} onClick={() => changeRate(5)}>star</span>           
        </div>                     
    </div>
    


}