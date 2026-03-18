import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Portfolio from "./components/Portfolio";
import ResumePage from "./components/ResumePage";

import "./styles/global.scss";

export default function App() {
  const [page, setPage] = useState("portfolio");

  return (
    <>
      {page === "portfolio" && <Portfolio />}
      {page === "resume" && <ResumePage />}
    </>
  );
}