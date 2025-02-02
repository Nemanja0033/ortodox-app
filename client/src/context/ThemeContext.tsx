import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<string>(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeContextProvider!");
    }
    return context;
};
