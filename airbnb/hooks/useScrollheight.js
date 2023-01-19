import { useEffect, useState } from "react";

export default function useScrollheight() {
    const [height, setHeight] = useState(0)


    

    useEffect(() => {
        const handleScroll = () => {
            const scrollPos = window.scrollY;
            setHeight(scrollPos)
        }
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return { height }
}