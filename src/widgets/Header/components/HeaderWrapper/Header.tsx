import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";

export const Header = function () {
    return (
        <header className="header" style={{ padding: '15px', display: "flex", justifyContent: "space-between", alignItems: 'center', marginBottom: '15px' }}>
            <h1 className="header__logo">
                Where is the world?
            </h1>

            <ThemeSwitcher />
        </header>
    )
}