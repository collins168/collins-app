export default function Todowork({item, setItems, items, handleButton, index,}) {
    const deleteButton=() =>{
        console.log(item.text, "Was deleted.");
        setItems(items.filter((name) => name!==item))
    }
    const editButton=()=>{
        console.log(item, "was Edited");
        const newItem=window.prompt('Edit the Item:', item.text)
        const newImageURL = window.prompt('Edit the Image URL:', item.image);
        if (newItem !== null && newItem.trim() !== "" && newImageURL !== null && newImageURL.trim() !== "") {
        handleButton(index, {text:newItem, image: newImageURL} )  
        }
    }
    return(
        <>
        <li>
            <span>{item.text}</span>
            <img src={item.image} alt={item.text} style={{ width: '50px', height: '50px' }} />
            <button onClick={() => deleteButton()}>X</button>
            <button onClick={() => editButton()}>Edit</button>
        </li>
        </>
    )
}