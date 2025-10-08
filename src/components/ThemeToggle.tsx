import { Moon, Sun } from 'lucide-react';
import { useStore } from '@/store/useStore';
import { Button } from './ui/button';
import { useEffect } from 'react';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative group"
      title={theme === 'light' ? 'Deep Space View' : 'Earth View'}
    >
      {theme === 'light' ? (
        <>
          <Sun className="w-5 h-5 transition-transform group-hover:rotate-90" />
          <span className="sr-only">Switch to Deep Space View</span>
        </>
      ) : (
        <>
          <Moon className="w-5 h-5 transition-transform group-hover:-rotate-12" />
          <span className="sr-only">Switch to Earth View</span>
        </>
      )}
    </Button>
  );
};
