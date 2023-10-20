import { useState, useRef, useEffect } from 'react'
import "./TicTacToe.css"
import circle_icon from "/assets/circle.png"
import cross_icon from "/assets/cross.png";
let data = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const titleRef = useRef(null);
    useEffect(() => {
        checkWin();
    }, [count]);
    const toggle = (e, num)=>{
        if(lock) return 0;
        //cross
        if(count % 2 === 0){
            if(data[num] !== "") return 0;
            e.target.innerHTML = `<img src=${cross_icon}/>`;
            data[num] =  "x";
            setCount((prevCount) => prevCount + 1);
        }else{
            if (data[num] !== "") return 0;
            e.target.innerHTML = `<img src=${circle_icon}/>`;
            data[num] = "0";
            setCount((prevCount) => prevCount + 1);
        }
        checkWin();
    }

    const checkWin = ()=>{
        if(data[0]===data[1] && data[1] === data[2] && data[0] !=""){
            won(data[0]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[3] != "") {
            won(data[3]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[6] != "") {
            won(data[6]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[0] != "") {
            won(data[0]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[1] != "") {
            won(data[1]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[2] != "") {
            won(data[2]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[0] != "") {
            won(data[0]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[2] != "") {
            won(data[2]);
        } else if(count === 9) {
            titleRef.current.innerHTML = "Draw"
        }
    };

    const won = (winner) => {
        setLock(true);
        if(winner === "x") {
            titleRef.current.innerHTML = `Congraturation: <img src=${cross_icon}/> win `;
        }else{
            titleRef.current.innerHTML = `Congraturation: <img src=${circle_icon}/> win `;
        }
    };
    const reset = () =>{
        data = ["", "", "", "", "", "", "", "", ""];
        setCount(0);
        setLock(false);
        titleRef.current.innerHTML = "Tic Tac Toe Game <span>SE NPRU</span>";
        let boxes = document.querySelectorAll(".boxes");
        boxes.forEach((box)=>{
            box.innerHTML = "";
        })
    }

  return (
    <div className="container">
        <h1 className="title" ref={titleRef}>
            Tic Tac Toe Game <span>SE NPRU</span>
        </h1>
        <div className="board">
            <div className="row1">
                <div className="boxes" onClick={(e)=>{ toggle(e,0);}}></div>
                <div className="boxes" onClick={(e) => { toggle(e, 1); }}></div>
                  <div className="boxes" onClick={(e) => { toggle(e, 2); }}></div>
            </div>
              <div className="row2">
                  <div className="boxes" onClick={(e) => { toggle(e, 3); }}></div>
                  <div className="boxes" onClick={(e) => { toggle(e, 4); }}></div>
                  <div className="boxes" onClick={(e) => { toggle(e, 5); }}></div>
              </div>
              <div className="row3">
                  <div className="boxes" onClick={(e) => { toggle(e, 6); }}></div>
                  <div className="boxes" onClick={(e) => { toggle(e, 7); }}></div>
                  <div className="boxes" onClick={(e) => { toggle(e, 8); }}></div>
              </div>
        </div>
        <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
};

export default TicTacToe
