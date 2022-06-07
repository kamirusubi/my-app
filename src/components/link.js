export default function Link({text, icon}){
    return <a className="link column" href="">
        <span className="material-symbols-outlined">{icon}</span>
        <div className="size-m iconText">{text}</div>
    </a>  
}