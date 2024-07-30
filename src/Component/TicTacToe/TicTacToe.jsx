import React, { useState,useRef } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';


let data = ["","","","","","","","",""];

const TicTacToe = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  const[header, setHeader] = useState(`Tic Tac Toe Game in <span>React</span>`);
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);

  let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
  
  const toggle = (e,num) => {
    if(data[num] == ""){
      if(lock){
        return 0;
      }
      if(count%2 === 0){
        e.target.innerHTML = `<img src = '${cross_icon}'>`;
        e.clicked = true;
        data[num] = "X";
        setCount(++count);
      }
      else{
        e.target.innerHTML = `<img src = '${circle_icon}'>`;
        data[num] = "O";
        setCount(++count);
      }
      if(count>4){
        checkWinner();
      }
    }
  }
  const checkWinner = () =>{
    const winnerCombo = [[0,1,2],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[6,4,2]];
    for(let i=0; i< winnerCombo.length; i++){
      const[a,b,c] = winnerCombo[i];
      if(data[a] && data[a] == data[b] && data[b] == data[c]){
        setHeader(`Congrats: <span>${data[a]}</span> Wins`);
        setLock(true);
        return 0;
      }
    }
  }

  const reset = () => {
    data = ["","","","","","","","",""];
    setCount(0);
    setLock(false);
    setHeader(`Tic Tac Toe Games in <span>React</span>`);
    boxArray.map((e)=>{e.current.innerHTML="";})
  }

  return (
    <div className='container'>
      <h1 className='title' dangerouslySetInnerHTML={{__html:header}}></h1>
      <div className='board'>
        <div className="row1">
          <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
          <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
          <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
          <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
          <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
          <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
          <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe
