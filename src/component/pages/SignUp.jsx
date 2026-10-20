import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup(props) 

{   const navigate = useNavigate()
    
    const Users = props.Users
    const setusers = props.setusers

    const [eusername, seteusername] = useState("")
    const [epassword, setepasword] = useState("")

    function handleUInput(event) {

        seteusername(event.target.value)
    }

    function handlePInput(event) {
        setepasword(event.target.value)

    }

    function addUser()
    {
        setusers([...Users,{ username:eusername ,password:epassword }])
        navigate("/")
    }


    return (
        
        <div className="bg-black p-10">
            <div className="bg-white p-10 rounded-md">
                <h1 className="text-3xl font-bold">Hey Hi</h1>
                <p>I help you manage your activitys after you login :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handleUInput} className="w-52 border border-black rounded-md p-2  bg-transparent " placeholder="Username"></input>

                    <div className="flex flex-col gap-2 my-2">
                        <input type="text" onChange={handlePInput} className="w-52 border border-black rounded-md p-2  bg-transparent " placeholder="Password"></input>
                    </div>
                    <div className="flex flex-col gap-2 my-2">
                        <input type="text" className="w-52 border border-black rounded-md p-2  bg-transparent " placeholder="Confirm Password"></input>
                    </div>
                    <button onClick={addUser} className="bg-[#e76d09] w-24 p-1 rounded-md ">Signup</button>
                    <p>Alredy have an account? <Link to={"/"} className="underline">Login</Link> </p>

                </div>


            </div>
        </div>

    )

}

export default Signup;