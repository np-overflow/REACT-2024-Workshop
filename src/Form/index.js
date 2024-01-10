import { useRef, useState, useReducer, useEffect } from "react"
import "./Form.css"
import {Link} from "react-router-dom"

function Form() {
    const [name, setName] = useState("")
  
    function reducer(state,action,inputValue){
        if (action.type === "setCourse"){
            return { 
                course : action.payload,
                email: state.email
            
            }
        }
        else if (action.type === "setEmail"){
            return {
                email : action.payload,
                course: state.course
            
            }
        }
    }
    const [state, dispatch] = useReducer(reducer , {course:"",name:""})

    // const [year, setYear] = useState("")
    const [isEnjoying, setIsEnjoying] = useState(null)
    
    var yearRef = useRef(null)

    useEffect(() => {
        console.log("Name has been changed:", name);
    }, [name]);

    return (
        <div>
            <form>
                <div>
                    <label>Name: </label>
                    <input 
                        type="text"
                        id="name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input 
                        type="text"
                        id="email"
                        onChange={(e) => {
                            dispatch({ type: 'setEmail', payload: e.target.value });
                          }}
                        />
                </div>
                <div>
                    <label>Course: </label>
                    <input 
                        type="text"
                        id="course"
                        onChange={(e) => {
                            dispatch({ type: 'setCourse', payload: e.target.value });
                          }}
                    />
                </div>
                <div>
                    <label>Year: </label>
                    <input 
                        type="number"
                        id="name"
                        ref={yearRef}
                    />
                </div>  
                <div>
                    <label>Are you enjoying today's session?</label>
                    <div>
                        <label>
                            <input
                            type="radio"
                            value="YESSSSSS"
                            checked={isEnjoying === "Yes"}
                            onChange={() => setIsEnjoying("Yes")}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="No :("
                            checked={isEnjoying === "No"}
                            onChange={() => setIsEnjoying("No")}
                            />
                            No
                        </label>
                    </div>
                </div>

                <button onClick={(e)=>{
                    e.preventDefault()
                    alert(`${name}, ${state.email}, ${state.course} , ${yearRef.current.value} , ${isEnjoying} `)
                }}> Check Information</button>

                <Link to="/submitted">​
                    <button>Submit</button>​
                </Link>
            </form>
        </div>
    )
}

export default Form