import { useState, useRef } from "react";
import DateTime from "./components/DateTime";
import items from "./data/data";
import image from "./data/image.svg"


export default function Social() {
    const [list, setList] = useState(items);
    const [dragging, setDragging] = useState(false);
    const [clickBtnIde, setClickBtnIde] = useState(false);
    const [clickBtnVal, setClickBtnVal] = useState(false);
    const dragItem = useRef();
    const dragNode = useRef();

    const ideationList = list.filter((item)=>item.categoria==="Ideation")
    const validationList = list.filter((item)=>item.categoria==="Validation")

    const handleChange = (e, nombre) =>{
        const updated = list.map(element =>
            element.nombre === nombre
              ? { ...element, checked: !element.checked }
              : element
          )
        setList(updated)
    } 
    
    const handleDragStart = (e, params) => {
        dragItem.current=params;
        dragNode.current=e.target;
        dragNode.current.addEventListener('dragend', handleDragEnd);
        setTimeout(()=>{
            setDragging(true)
        }, 0)
    }

    const handleDragEnter = (e, params) => {
        const currentItem = dragItem.current;
        if(e.target!==dragNode.current){
            setList(oldList=>{
                let newList = JSON.parse(JSON.stringify(oldList));
                newList.splice(params.itemI, 0, newList.splice(currentItem.itemI, 1)[0]); 
                dragItem.current=params;
                return newList;
            })
        }
    }
    const handleDragEnd = () => {
        setDragging(false);
        dragNode.current.removeEventListener('dragend', handleDragEnd);
        dragItem.current=null;
        dragNode.current=null;
    }

    const getStyles = (params) => {
        const currentItem = dragItem.current;
        if(currentItem.itemI===params.itemI){
            return "current dnd-item"
        }
        return "dnd-item"
    }

    const selectAllIde = (item) =>{
        if(clickBtnIde===false){
            setClickBtnIde(true);
            const updated = list.map(element =>
                element.categoria === "Ideation"
                  ? { ...element, checked: true }
                  : element
              )
            setList(updated)
        } else{
            setClickBtnIde(false);
            const updated = list.map(element =>
                element.categoria === "Ideation"
                  ? { ...element, checked: false }
                  : element
              )
            setList(updated)
        }
    }
    const selectAllVal = () =>{
        if(clickBtnVal===false){
            setClickBtnVal(true)
        } else{
            setClickBtnVal(false)
        }
        setClickBtnIde(true)
            const updated = list.map(element =>
                element.categoria === "Validation"
                  ? { ...element, checked: !element.checked }
                  : element
              )
            setList(updated)
    }
    
    return (
    <div>
        <header>
            <h2>Select Builder Schedule - 2021 Fall Cohort</h2>
        </header>
        <main>
            <section>
                <div className="title">
                <div className="flex-row-btn">
                    <h3>IDEATION</h3>
                    <button onClick={()=>selectAllIde()}>{clickBtnIde? "Unselect all in ideation": "Select all in ideation"}</button>
                </div>
                    <p>Due date (optional)</p>
                </div>
                {ideationList.map((item, itemI)=>{
                    return(
                    <div draggable onDragStart={(e)=>handleDragStart(e, {itemI})} 
                    onDragEnter={dragging?(e)=>handleDragEnter(e, {itemI}):null} key={item.id} 
                    className={dragging?getStyles({itemI}):"dnd-item"}>
                        <div className={item.checked ? "selectedItem": "item"} onClick={(e)=>handleChange(e, item.nombre)}>
                            <input type="radio" checked={item.checked} onChange={(e)=>handleChange(e, item.nombre)}/>
                            <div className="item-box">
                                <div className="item-text">
                                    <label>{item.nombre}</label>
                                    <span>view builder</span>
                                </div>
                                <img src={image} alt="imageLogo"/>
                            </div>            
                        </div>
                        <div className={item.checked ? "show": "hidden"}>
                            <DateTime/>
                        </div> 
                    </div>)
                })}
            </section>
            <section>
                <div className="title">
                    <div className="flex-row-btn">
                        <h3>VALIDATION</h3>
                        <button onClick={()=>selectAllVal()}>{clickBtnVal? "Unselect all in validation": "Select all in validation"}</button>
                    </div>
                    <p>Due date (optional)</p>
                </div>
                {validationList.map((item, itemI)=>{
                    return(
                    <div draggable onDragStart={(e)=>handleDragStart(e, {itemI})} 
                    onDragEnter={dragging?(e)=>handleDragEnter(e, {itemI}):null} key={item.id} 
                    className={dragging?getStyles({itemI}):"dnd-item"}>
                        <div className={item.checked ? "selectedItem": "item"} onClick={(e)=>handleChange(e, item.nombre)}>
                            <input type="radio" checked={item.checked} onChange={(e)=>handleChange(e, item.nombre)}/>
                            <div className="item-box">
                                <div className="item-text">
                                    <label>{item.nombre}</label>
                                    <span>view builder</span>
                                </div>
                                <img src={image} alt="imageLogo"/>
                            </div>            
                        </div>
                        <div className={item.checked ? "show": "hidden"}>
                            <DateTime/>
                        </div> 
                    </div>)
                })}
            </section>
        </main>
    </div>
    );
  }
  