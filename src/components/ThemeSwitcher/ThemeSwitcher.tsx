"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")}>
          <Icon icon="mdi:white-balance-sunny" fontSize={18}></Icon>
        </button>
      ) : (
        <button onClick={() => setTheme("dark")}>
          <Icon icon="mdi:moon-waning-crescent" fontSize={18}></Icon>
        </button>
      )}
    </div>
  );
}
