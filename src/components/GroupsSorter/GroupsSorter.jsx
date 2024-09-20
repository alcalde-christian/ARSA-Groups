import { useState } from "react"
import styles from "./GroupsSorter.module.css"

const GroupsSorter = ({names}) => {
    const [groupOne, setGroupOne] = useState([])
    const [groupTwo, setGroupTwo] = useState([])
    const [groupThree, setGroupThree] = useState([])

    const handleClick = () =>  {
        const groupOne = []
        const groupTwo = []
        const groupThree = []

        const shuffledNames = names.sort(() => Math.random() - 0.5)

        shuffledNames.forEach((name, index) => {
            if (index % 3 == 0) {
                groupOne.push(name)
            } else if (index % 3 == 1) {
                groupTwo.push(name)
            } else {
                groupThree.push(name)
            }
        });

        setGroupOne(groupOne)
        setGroupTwo(groupTwo)
        setGroupThree(groupThree)
    }

    console.log(groupOne)
    console.log(groupTwo)
    console.log(groupThree)

    return(
        <div className={styles.groupsSorter}>
            <button onClick={handleClick} className={styles.sortButton}>
                Sortear
            </button>
            <h3 className={styles.groupList}>
                Grupo 1:
                <>
                    {groupOne.map((name, index) => (
                        <p className={styles.sortedNames} key={index}>
                            {name}
                        </p>
                    ))}
                </>
            </h3>
            <h3 className={styles.groupList}>
                Grupo 2:
                <>
                    {groupTwo.map((name, index) => (
                        <p className={styles.sortedNames} key={index}>
                            {name}
                        </p>
                    ))}
                </>
            </h3>
            <h3 className={styles.groupList}>
                Grupo 3:
                <>
                    {groupThree.map((name, index) => (
                        <p className={styles.sortedNames} key={index}>
                            {name}
                        </p>
                    ))}
                </>
            </h3>
        </div>
    )
}

export default GroupsSorter