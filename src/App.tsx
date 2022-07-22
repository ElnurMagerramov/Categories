import React, { useState } from 'react'
import Categories from './Categories'
import './App.css';
const App:React.FC=()=> {
    const [service, setService] = useState<any>([])
    const addService = (): void => {
        setService([
            ...service,
            { id: service.length + 1, name: "" },
        ]);
    };
    const [xoffset, setXoffset] = useState<number>(0)
    const [yoffset, setYoffset] = useState<number>(0)
    const [delta, setDelta] = useState<number>(10)
    const moveTitleToDown = (): void => {
        setYoffset(yoffset + delta);
    };
    const moveTitleToRight = (): void => {
        setXoffset(xoffset + delta);
    };
    const moveTitleToLeft = (): void => {
        setXoffset(xoffset - delta);
    };
    const moveTitleToUp = (): void => {
        setYoffset(yoffset - delta);
    };
    const centered = ():void=>{
        setXoffset(630);
        setYoffset(300)
    }
    return (
        <div>
            <div className='nav'>
                <div>Services <span className='serviceNumber'>{service.length}</span></div>
                <div>
                    <button>List</button>
                    <button onClick={centered}>Center</button>
                    <button>-</button>
                    <select>
                        <option value="40%">40%</option>
                        <option value="60%">60%</option>
                        <option value="80%">80%</option>
                        <option value="100%">100%</option>
                    </select>
                    <button>+</button>
                </div>
            </div>
            <div style={{ marginTop: "80px" }}>
                <button onClick={moveTitleToRight}>
                    Right
                </button>
                <button onClick={moveTitleToDown}>
                    Down
                </button>
                <button onClick={moveTitleToLeft}>
                    Left
                </button>
                <button onClick={moveTitleToUp}>
                    Up
                </button>
            </div>
            <span
            style={{
                position: "absolute",
                left: `${xoffset}px`,
                top: `${yoffset}px`,
              }}
            ><Categories service={service} addService={addService} /></span>
        </div>
    )
}
export default App;