import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const Todoform=()=>{
    const [text,setText]=useState("");
    
    const dispatch=useDispatch();
    
    const onFormsubmit=(e)=>{
      //Redux ke through ham database m save karwayenge--database of frontend
      e.preventdefault();
      dispatch(addNewTodo());
    }
    
    
    const onInputchange=(e)=>{ 
      setText(e.target.value);  
    }


    return(
        <form onSubmit={onFormsubmit}>
            <input
            placeholder="Type your task!!"
            onChange={onInputchange}/>
        </form>
    )
}
export default Todoform;