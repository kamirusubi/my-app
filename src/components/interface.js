import Header from "./header.js"
import ProfileLinks from "./profileLinks.js"
import Main from "./main.js"

export default function Interface(){
    return <div className="interface column">
        <Header/>
        <Main/>
        <ProfileLinks/> 
    </div>
}