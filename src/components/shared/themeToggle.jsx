import Button from "@/components/ui/button";

import useTheme from "@/hooks/useTheme";

/**
 * TODO: Create a Theme Dropdown component that allows users to switch between themes
 */
const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ThemeToggle;
