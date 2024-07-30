import './App.css';
import TicTacToe from './Component/TicTacToe/TicTacToe';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div>
      <TicTacToe/>
      <Analytics/>
    </div>
  );
}

export default App;
