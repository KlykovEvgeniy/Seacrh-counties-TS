import { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from './App/global/provider/store';
import './App/global/styles/index.scss';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLDivElement
)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)