import { useState } from 'react';

export default function darkModeHook() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return [isDarkMode, setIsDarkMode];
}