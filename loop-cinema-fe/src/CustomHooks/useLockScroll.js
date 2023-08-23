import { useLayoutEffect } from "react";

const useLockScroll = () => {

    // use this effect when need to measure DOM
    useLayoutEffect(() => {
        // Get original body overflow
        const originalStyle = window.getComputedStyle(document.body).overflow;
        
        // Prevent scrolling on mount
        document.body.style.overflow = "hidden";

        // Re-enable scrolling when component unmounts
        // practice clean up browser APIs
        return () => (
            document.body.style.overflow = originalStyle
            )
    }, []); // Empty array ensures effect is only run on mount and unmount
}

export default useLockScroll