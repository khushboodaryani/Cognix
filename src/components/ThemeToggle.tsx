"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("cognixs-theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    localStorage.setItem("cognixs-theme", nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) {
    return (
      <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "transparent" }} />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      title={`Switch to ${theme === "light" ? "Obsidian Dark" : "Studio Light"} theme`}
      aria-label="Toggle theme"
      style={{
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        color: "var(--text-heading)",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      {theme === "light" ? (
        <Moon size={16} strokeWidth={2.2} />
      ) : (
        <Sun size={16} strokeWidth={2.2} style={{ color: "#C7F36B" }} />
      )}
    </button>
  );
}
