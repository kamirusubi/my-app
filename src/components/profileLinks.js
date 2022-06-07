import Link from "./link.js"

export default function ProfileLinks(){
    return <div className="profile">
        <Link text="Главная" icon="home" />
        <Link text="Каталог" icon="menu" />
        <Link text="Корзина" icon="shopping_cart" />
        <Link text="Профиль" icon="account_circle" />
    </div>
}