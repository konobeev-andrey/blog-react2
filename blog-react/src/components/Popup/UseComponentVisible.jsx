import {useEffect, useRef, useState} from "react";

export function useComponentVisible(initialIsVisible) {
    const [isComponentVisible, setIsComponentVisible] = useState(
        initialIsVisible
    );
    const ref = useRef(null);

    const handleHideDropdown = (event) => {
        if (event.key === "Escape") {
            setIsComponentVisible(true);

        }
    };

    const handleClickOutside = event => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsComponentVisible(true);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleHideDropdown, true);
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("keydown", handleHideDropdown, true);
            document.removeEventListener("click", handleClickOutside, true);
        };
    });

    return {ref, isComponentVisible, setIsComponentVisible};
}