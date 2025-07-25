// hooks
import { useEffect, useRef, useState, useCallback } from "react";

// Icon
import { SlMenu } from "react-icons/sl";

function useOutsideClick(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        // Only trigger handler if the click is outside the ref element
        handler(event);
      }
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

function HamburgerMenu({ sectionList }) {
  // State: controls whether the menu is open
  const [isOpen, setIsOpen] = useState(false);

  // Close the menu when the Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Ref: tracks the component container for outside click detection
  const containerRef = useRef(null);

  // Toggle the menu open/closed
  const handleMenuOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // Memoized callback to handle outside clicks (only closes when open)
  const handleOutsideClick = useCallback(() => {
    if (isOpen) handleMenuOpen();
  }, [isOpen]);

  // Attach the outside click listener
  useOutsideClick(containerRef, handleOutsideClick);

  return (
    <div ref={containerRef} className="navbar__hamburger">
      {/* Start menu icon btn */}
      <button
        onClick={handleMenuOpen}
        className="navbar__hamburger-icon"
        aria-label="Open menu"
      >
        <SlMenu />
      </button>
      {/* End menu icon btn */}

      {/* Start menu list */}
      {isOpen && (
        <div className="navbar__menu" role="menu">
          {sectionList.map((item) => (
            <a
              key={item.label}
              className="navbar__menu-item"
              href={`#${item.label}`}
              role="menuitem"
              onClick={handleMenuOpen}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
      {/* End menu list */}
    </div>
  );
}

export default HamburgerMenu;
