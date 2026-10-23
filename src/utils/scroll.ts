export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;

  // If currently on another page (like /privacy or /terms), redirect to home with query param
  if (window.location.pathname !== "/") {
    window.location.href = `/?section=${sectionId}`;
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const navOffset = 90;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    // Strip hash so URL bar stays clean at http://localhost:3000
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }
}
