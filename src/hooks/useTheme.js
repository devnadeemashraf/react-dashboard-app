import { useCallback, useEffect, useState } from "react";

const useTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((prev) => !prev);
  }, []);

  useEffect(
    (theme) => {
      // Check if the 'theme', if supplied, is valid
      if (theme && theme !== "dark" && theme !== "light") {
        throw new Error(
          "Invalid 'theme' value. Expected 'dark' or 'light', received " + theme
        );
      }

      // If theme is not provided, toggle between dark and light theme
      let themeToSet = theme ? theme : isDarkTheme ? "dark" : "light";

      // Set the theme to the root element
      document.documentElement.setAttribute("data-theme", themeToSet);
    },
    [isDarkTheme]
  );

  return { toggleTheme };
};

export default useTheme;
