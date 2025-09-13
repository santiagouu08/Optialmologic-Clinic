import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tema, setTema] = useState(localStorage.getItem("tema") || "claro");
  const [idioma, setIdioma] = useState(localStorage.getItem("idioma") || "es");

  // Aplicar tema globalmente
  useEffect(() => {
    if (tema === "oscuro") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("tema", tema);
  }, [tema]);

  // Guardar idioma
  useEffect(() => {
    localStorage.setItem("idioma", idioma);
  }, [idioma]);

  return (
    <AppContext.Provider value={{ tema, setTema, idioma, setIdioma }}>
      {children}
    </AppContext.Provider>
  );
}
