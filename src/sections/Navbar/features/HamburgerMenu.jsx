// hook
import { useState } from 'react';

// Icon
import { SlMenu } from "react-icons/sl";


function HamburgerMenu({sectionList}) {

    // State to controll menu open
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className='navbar__hamburger'>

            {/* Start menu icon btn */}
            <button onClick={() => setIsOpen(!isOpen)} className='navbar__hamburger-icon'>
                <SlMenu />
            </button>
            {/* End menu icon btn */}

            {/* Start menu list */}
            {isOpen &&
                <div className='navbar__menu'>
                    {sectionList.map((item, index) => (
                        <a key={index} href={`#${item.label}`} className="navbar__menu-item">{item.name}</a>
                    ))}
                </div>
            }
            {/* End menu list */}

        </div>
    )
}

export default HamburgerMenu