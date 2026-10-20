import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) 

{
    const navigate = useNavigate()

    const [eusername, seteusername] = useState("")
    const [epassword, setepasword] = useState("")
    const [rsuer,setrsuer] = useState(true)

    const Users = props.Users
    
    
    function handleUInput(event) {

        seteusername(event.target.value)
    }

    function handlePInput(event) {
        setepasword(event.target.value)

    }

    function Checkuser()
    {
        var userFound = false

        Users.forEach(function(item){
            if(item.username === eusername && item.password === epassword)
            {
                console.log("login succfully")
                userFound = true
                navigate("/LandingPage", {state:{users:eusername}})
            }

            
                
            })

            if(userFound===false)
            {
                console.log("Login failed")
                setrsuer(false)
            }
    }

    

    return (<div className="bg-black p-10">
        <div className="bg-white p-10 rounded-md">
            <h1 className="text-3xl font-bold">Hey Hi</h1>
            {
                rsuer?<p>I help you manage your activitys after you login :)</p> : <p className="text-red-500">Pls SignUp before you Login</p>
            }
            
            <div className="flex flex-col gap-2 my-2">
                <input type="text" onChange={handleUInput} className="w-52 border border-black rounded-md p-2  bg-transparent " placeholder="Username"></input>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" onChange={handlePInput} className="w-52 border border-black rounded-md p-2  bg-transparent " placeholder="Password"></input>
                </div>

                <button className="bg-[#8272da] w-24 p-1 rounded-md " onClick={Checkuser}>Login</button>
                <p>Don't have an account?  <Link to={"/Signup"} className="underline">SignUp</Link> </p>

            </div>


        </div>
    </div>)

}

export default Login