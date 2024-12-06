import Child2 from "./Child2";

const Child1 = (x) =>{
    // console.log(x); // {users:{},{}} 
    // console.log(x.users);
    return(
        <div>
                {/* child 1 */}
                <Child2 data={x.users}/>
        </div>
    )
}
export default Child1;