import React, {useState} from 'react';
import NoteIcon from '@material-ui/icons/Note';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import './Notes.css';

const Notes = () => {
    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems(inputData);
    }
    return (
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <NoteIcon style={{ color: "green" , fontSize: 100 }}/><br></br>
                    <figurecaption style={{color: "white"}}>Add your list here</figurecaption>
                    {/* <img src={} alt="notes-logo" /> */}
                </figure>
                <div className="addItems">
                    <input type="text"
                           placeholder="Add your Notes here" 
                           value={inputData}
                           onChange={(e) => setInputData(e.target.value)}
                     />
                    <NoteAddOutlinedIcon style={{ color: "white" , fontSize: 30, backgroundColor:"green" }}/>
                </div>
                <div className="showItems">
                    <div className="eachItem">
                        <h3>Apple</h3>
                        <span>{""}{""}{""}</span>
                        <DeleteIcon style={{ color: "white" , fontSize: 30 }} title="Delete Item"/>
                    </div>
                    {/* clear All Button */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" style={{color: "white", backgroundColor: "grey"}} ><span> Check List </span>
                        </button>
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Notes
