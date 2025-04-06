import React, {userState} from "react";

function DynamicListManager() {
  const [newItem,setNewItem]=useState("");
  const [items,setItems]=useState(["firstItem"]);

  const handleInputChange=(event)=>{
    setNewItem(event.target.value);
  };

  const handleAddItem=()=>{
    if ("newItem.trim()!=="){
    setItems([...items,newItem]);
    setNewItem("");
  }
};

  return (
      <div style={Styles.container}>
        <h2 style={style.heading}>Dynamic list Manager</h2>
        <div stylesInputContainer>
        <input
        type="text"
        placeholder="Enter an item"
        value={newItem}
        onChange={handleInputChange}
        style={styles.input}
        />
        <button onClick={handleAddItem}
      style={styles.addButton}>
        Add Item
        </button>
        </div>
        <div style={styles.listContainer}>
        <ul>
          {items.map((item,index)=>(
            <li key={index}style={styles.list}>
            {item}
            </li>
          ))}
        </ul>
      </div>
      </div>
      );
      }
      const styles={
        container:{
          fontFamily:"sans-serif",
          padding:"20px",
          boarder:"1px solid",
          boarderRadius:"5px",
          maxWidth:"400px",
          margin:"20px auto",
          backgroundColor:"#f9f9f9",
        },
        heading:{
          textAlign:"center",
          marginBottom:"20px",
          color:"#007bff",
        },
        inputContainer:{
          display:"flex",
          marginBottom:"15px",
        },
        input:{
          flexGrow:"1",
          padding:"10px",
          boarder:"1px solid #ccc",
          boarderRadius:"3px",
          fontSize:"16px",
        },
        addButton:{
          backgroundColor:"#28a745",
          color:"white",
          boarder:"none",
          padding:"10px 15px",
          boarderRadius:"3px",
          cursor:"pointer",
          fontSize:"16px",
          marginLeft:"10px",
        },
        listContainer:{
          boarder:"1px solid #ddd",
          boarderRadius:"3px",
          backgroundColor:"#e9ecef",
          padding:"15px",
          minHeight:"100px"
        },
        listItem:{
          padding:"8px 0",
          boarderBottom:"1px solid #eee",
          listStyleType:"disc",
          marginLeft:"20px",
        },
      };
export default DynamicListManager;
