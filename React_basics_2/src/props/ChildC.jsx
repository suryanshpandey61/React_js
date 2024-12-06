const ChildC = ({setterFun}) => {

    let data="this is data of Child C component";
    return(
        <div>

            This is Child C Component
            <button onClick={()=>setterFun(data)}>Click To send Data from Child to Parent</button>

        </div>
    )
    
}
export default ChildC;