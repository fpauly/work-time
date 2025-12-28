import { useEffect, useState } from "react"

const Clock = ()=>{
    const [now,setNow] = useState(new Date())
    useEffect(()=>{
        const timer = setInterval(()=>{
            setNow(new Date())
        },1000)
        return ()=>clearInterval(timer)
    },[])
    
    return (
        <div>
            <p>{now.toLocaleDateString()} {now.toLocaleTimeString()}</p>
        </div>
    )
}

export default Clock