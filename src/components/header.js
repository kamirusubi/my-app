import Link from "./link.js"
import Search from "./search.js"
import Catalog from "./catalog.js"

import { useState } from 'react'


export default function Header(){
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };
    return <div>
        <div className="header">
            <Search/>        
            <div className="headerButtons">
                <Link icon='help'/>
                <button className="link" onClick={toggleClass}>
                    <span className="material-symbols-outlined Icon">menu</span>            
                </button>                        
            </div>
        </div>
        <div className={isActive ? 'shown transition': 'hidden transition'}>
            <Catalog/>  
        </div>
    </div>
}