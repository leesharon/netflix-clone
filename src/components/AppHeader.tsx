import React, { useEffect, useState } from "react"

interface Props {
}

export const AppHeader: React.FC<Props> = () => {

    const [isBgBlack, setIsBgBlack] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", handleScrollChange)
        return () => {
            window.removeEventListener("scroll", handleScrollChange)
        }
    }, [])

    const handleScrollChange = () => {
        if (window.scrollY > 100) {
            setIsBgBlack(true)
        } else setIsBgBlack(false)
    }

    return (
        <section className={`app-header ${isBgBlack && 'black'}`}>
            <div className="logo-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo" />
            </div>
            <div className="avatar-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
            </div>
        </section>
    )
}