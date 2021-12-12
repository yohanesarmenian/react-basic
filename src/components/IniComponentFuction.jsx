import { useState } from "react"

const IniComponentfunction = () => {
    const[
        count, 
        setCount] = useState(0)

    const handleOnClick = () => {
        setCount(count + 1)
    }

    return (
        <>
        <p>total klik <strong>{count}</strong></p>
        <button onClick={handleOnClick}>tambah</button>
        </>
    )
}

export default IniComponentfunction