import { useState } from "react"
import Todowork from "./Todowork"

export default function Todolist(){
    const[item, setItem]=useState('')
    const[items, setItems]=useState([])
    const [imageURL, setImageURL] = useState('');
    const submitButton=(e)=>{
        e.preventDefault()
        if (item.trim() && imageURL.trim()) {
            setItems([...items, { text: item, image: imageURL }]);
            setItem('');
            setImageURL('');
        }
        // setitems([...items, item])
        // setItem('')
    }
    const handleButton=(index, newItem)=>{
        const updateItems=[...items]
        updateItems[index]=newItem
        setItems(updateItems)
    }
    return(
        <>
        <h1>Todolist</h1>
        <form onSubmit={submitButton}>
            <input type="text" placeholder="Enter task." value={item} onChange={(e) =>setItem(e.target.value)}/>
            <input type="text" placeholder="Enter image URL." value={imageURL} onChange={(e) => setImageURL(e.target.value)}/>
            <button disabled={!item.trim('') || !imageURL.trim()}>Add</button>
        </form>
        <ul>
            {items.map((item, index) =>(
                <Todowork key={index} item={item} setItems={setItems} items={items} handleButton={handleButton} index={index}/>
            ))}
        </ul>
        </>
    )
}
