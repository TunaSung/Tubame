// component
import HamburgerMenu from './features/HamburgerMenu'

// Icons
import { VscSearch } from "react-icons/vsc";

// css
import './styles/Navbar.css'

function Navbar(){
    
    // label of sections
    const sectionList = [
        {label: "brand", name:"品牌理念"}, 
        {label: "service", name:"服務項目"}, 
        {label: "operation", name:"操作流程"}, 
        {label: "evaluate", name:"客戶好評"}, 
        {label: "contact", name:"聯繫我們"}
    ]
    
    return (
        <nav className="navbar">

            {/* start navbar hamburger */}
            <HamburgerMenu sectionList={sectionList} />
            {/* end navbar hamburger */}
            
            {/* start navbar logo */}
            <div className="navbar__logo">Tubame</div>
            {/* end navbar logo */}
            
            {/* start search btn (w375 w640) */}
            <div className='navbar__search navbar__search--tablet'>
                <VscSearch className='navbar__icon'/>
            </div>
            {/* end search btn (w375 w640) */}

            {/* start category (w1440 w1920) */}
            <ul className="navbar__list navbar__list--desktop">
                {sectionList.map((item, index) => 
                    <li key={index} className="navbar__list-item">
                        <a href={`#${item.label}`} className="navbar__label">{item.name}</a>
                    </li>
                )}
                <li className='navbar__search navbar__search--desktop'>
                    <input type="text" className='navbar__input'/>
                    <VscSearch   className='navbar__icon'/>
                </li>
            </ul>
            {/* end category (w1440 w1920) */}
            
        </nav>
    )
}

export default Navbar