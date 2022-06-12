import CheckBox from "./checkBox.js"
export default function Main(){
    let array = ["Пылесосы", "Вытяжки", "Тостеры", "Телевизоры", "Стиральные машины", "Утюги"]
    return <div className="main column">
        <CheckBox array={array}/>
    </div>
}