import { useState } from "react";

export const ThemeSwitcher = function () {
  const [isDark, setDark] = useState<boolean>(false);
  const modeText = isDark ? 'Light' : 'Dark';

  const handleToggle = () => {
    setDark((prevState) => !prevState);
    if (isDark) {
      document.body.setAttribute('theme', 'light');
      return;
    }
    document.body.setAttribute('theme', 'dark')
  };

  return (
    <button className="header__theme-switcher" onClick={handleToggle}>
      {modeText}
    </button>
  );
};

