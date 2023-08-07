import {useEffect, useState} from "react";
import {THEME_DARK, THEME_LIGHT} from "../constants/Theme.js";

export default function ThemeButton() {
    const [mode, setMode] = useState(true);
    useEffect(() => {
        initMode()
    }, []);
    const onSetMode = () => {
        changeMode(!mode);
    }
    const changeMode = (flag) => {
        if (flag) {
            document.documentElement.classList.add(THEME_DARK);
            setMode(flag);
            localStorage.theme = THEME_DARK
        } else {
            document.documentElement.classList.remove(THEME_DARK)
            setMode(flag);
            localStorage.theme = THEME_LIGHT
        }
    }
    const initMode = () => {
        const storedTheme = localStorage.theme === THEME_DARK;
        if (storedTheme) {
            changeMode(storedTheme)
        } else {
            changeMode(storedTheme)
        }
    }
    const icon = mode === true ? '🌑' : '☀';
    return (
        <button onClick={onSetMode}
                className="bg-green-300 dark:bg-gray-100 inline-flex items-center justify-center hover:bg-green-400 w-10 h-10 dark:hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
            {icon}
        </button>
    );
}