import { useState } from 'react'

export default function CatalogSector(){
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };
    return <div className="column jcs">
    <button className="size-l catalogTitle" onClick={toggleClass}> Спасите но побольше </button> 
    <div className={isActive ? 'shown catalogLinks column size-m transition': 'hidden height-0 catalogLinks column size-m transition'}>
        <a href="" className="catalogLink">Спасите Спасите Спасите Спасите Спасите Спасите</a>
        <a href="" className="catalogLink">Спасите Спасите Спасите Спасите Спасите Спасите</a>
        <a href="" className="catalogLink">Спасите Спасите Спасите Спасите Спасите Спасите</a>
        <a href="" className="catalogLink">Спасите Спасите Спасите Спасите Спасите Спасите</a>
        <a href="" className="catalogLink">Спасите Спасите Спасите Спасите Спасите Спасите</a>
    </div>
</div>
}