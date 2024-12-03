import ChildA from "./ChildA";

const Parent = () =>{ 

    let data="Value is parent Component";
    let dbData=[10,20,30,40];

    return(
        <div>
                <ChildA data={data} dbData={dbData}/>
        </div>

    )
}

export default Parent;