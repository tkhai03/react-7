import React, {useState} from 'react'

const Counter = (props) => {

    const [count, setCount] = useState(0)




    return(
        <div>
            <h2>{count}</h2>
            <button onClick= {() => setCount(count + 1)}>Give me one more!<button/>
        </div>
    )
}

export default Counter