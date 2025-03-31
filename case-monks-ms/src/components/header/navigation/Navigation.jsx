
import Logo from "../../../assets/images/monks_logo.png";
import s from "./Navigation.module.css"

export function Navigation() {
  return <div>
    <input type="checkbox" id="menu-toggle" className={s["menu-toggle"]} />
    <label for="menu-toggle" className={s.menuContainer}>
      <img className={s.logo} src={Logo} alt=".Monks" />
      <div className={s["menu-btn"]}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </label>
    <nav className={s.menu}>
      
      <ul className={s.list}>
      <a href="#">Categoria 1</a>
      <a href="#">Categoria 2</a>
      <a href="#">Categoria 3</a>
      <a href="#">Categoria 4</a>
      </ul>
    </nav>
  </div>
}