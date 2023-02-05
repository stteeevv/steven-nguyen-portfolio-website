import { useState } from 'react';
import particlesDark from "../../public/particlesDark.js"

export default function particlesHook() {
    const [options, setOptions] = useState(particlesDark);
    return [options, setOptions];
}