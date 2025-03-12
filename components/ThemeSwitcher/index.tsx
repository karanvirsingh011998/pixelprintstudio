import React from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher = () => {

  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed top-4 right-4 z-50"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}

export default ThemeSwitcher