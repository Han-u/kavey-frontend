import React from "react";
import ReactDOM from "react-dom";
import ReactModal from "react-modal";
import { store } from './components/redux/SurveyStore'
import { Provider } from 'react-redux'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {QueryClientProvider,QueryClient} from "react-query"
import ModalsProvider from "./components/Modal/ModalsProvider";

ReactModal.setAppElement("#root");
const queryClient= new QueryClient();

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <ModalsProvider>
//       <App />
//       </ModalsProvider>
//   </Provider>
// );
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <ModalsProvider>
      <App />
    </ModalsProvider>
  </Provider>,
  </QueryClientProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
