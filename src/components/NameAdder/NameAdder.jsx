import { useRef, useState } from "react"
import GroupsSorter from "../GroupsSorter/GroupsSorter"
import styles from "./NameAdder.module.css"

const NameAdder = () => {
    const [names, setNames] = useState([])
    const [inputValue, setInputValue] = useState("")
    const inputRef = useRef()

    const handleClick = () => {
        if (inputValue.trim()) {
            setNames ([...names, inputValue.trim()])
            setInputValue("")
            inputRef.current.focus()
        } else {
            alert("No se ha ingresado ningún nombre")
        }
    }

    return (
        <div className={styles.nameAdder}>
            <label>
                Ingrese el nombre de la persona a sortear
            </label>
            <input 
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
                ref={inputRef}
                className={styles.namesInput}
            />
            <button 
                onClick={handleClick}
                className={styles.addButton}
            >
                Agregar
            </button>
            <GroupsSorter names={names}/>
        </div>
    )
}

export default NameAdder