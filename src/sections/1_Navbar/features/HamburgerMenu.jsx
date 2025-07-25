// hook
import { useEffect, useRef, useState } from "react";

// Icon
import { SlMenu } from "react-icons/sl";


function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

function HamburgerMenu({sectionList}) {

    // State to controll menu open
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null);

    useOutsideClick(containerRef, () => {
        if (isOpen) {
            setIsOpen(!isOpen)
        }
    });
    
    return (
        <div ref={containerRef} className='navbar__hamburger'>

            {/* Start menu icon btn */}
            <button onClick={() => setIsOpen(!isOpen)} className='navbar__hamburger-icon'>
                <SlMenu />
            </button>
            {/* End menu icon btn */}

            {/* Start menu list */}
            {isOpen &&
                <div className='navbar__menu'>
                    {sectionList.map((item, index) => (
                        <a key={index} className="navbar__menu-item" href={`#${item.label}`}
                        onClick={() => setIsOpen(!isOpen)}>
                          {item.name}
                        </a>
                    ))}
                </div>
            }
            {/* End menu list */}

        </div>
    )
}

export default HamburgerMenu