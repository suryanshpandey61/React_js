import Child1 from "./Child1"

const PropsDrillingParent = () => {
    let users = [
        {
            id:1,
            name:"Mohan"
        },
        {
            id:2,
            name:"Sohan"
        }
        
    ]

    return(
        <div>
                {/* <h1>Props Drilling Parent Component</h1> */}
                <Child1 users={users}/>

        </div>
    )
}
export default PropsDrillingParent