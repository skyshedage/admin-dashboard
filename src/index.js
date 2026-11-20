
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider} from "@mui/material";
import CustomTheme from "./theme";
import { StoreProvider } from "./store/usercontext";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

let theme = CustomTheme();
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </ThemeProvider>
);
