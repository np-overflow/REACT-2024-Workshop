import { useState } from "react"
import "./Form.css"

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [course, setCourse] = useState("")
    const [year, setYear] = useState("")
    const [isEnjoying, setIsEnjoying] = useState(null)

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
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Course: </label>
                    <input 
                        type="text"
                        id="course"
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </div>
                <div>
                    <label>Year: </label>
                    <input 
                        type="number"
                        id="name"
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>  
                <div>
                    <label>Are you enjoying today's session?</label>
                    <div>
                        <label>
                            <input
                            type="radio"
                            value="YESSSSSS"
                            checked={isEnjoying === true}
                            onChange={() => setIsEnjoying(true)}
                            />
                            Yes
                        </label>
                        <label>
                            <input
                            type="radio"
                            value="No :("
                            checked={isEnjoying === false}
                            onChange={() => setIsEnjoying(false)}
                            />
                            No
                        </label>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form