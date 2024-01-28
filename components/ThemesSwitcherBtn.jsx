"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'

const ThemesSwitcherBtn = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, setTheme} = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            className={`w-fit duration-200 rounded-md hover:scale-110 active:scale-100 text-slate-800 dark:text-white`}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
            {theme === "light" ? <Moon /> : <Sun />}
        </button>
    )
}

export default ThemesSwitcherBtn
