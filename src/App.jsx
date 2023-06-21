import { useState } from "react";
import "./App.css";
import { AuthContextProvider } from "./context/AuthContext";
import { MyRoutes } from "./routers/routes";
import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { Dark, Light,CrudContextProvider } from "./index";
export const ThemeContext = createContext(null);

function App() {
  const tema = "dark";
  const [theme, setTheme] = useState(tema);
  const themeStyle = tema === "light" ? Light : Dark;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <ThemeProvider theme={themeStyle}>
        <AuthContextProvider>
<CrudContextProvider>
   <MyRoutes />
</CrudContextProvider>
         
        </AuthContextProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
