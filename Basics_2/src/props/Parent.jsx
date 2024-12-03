import ChildA from "./ChildA";
import ChildB from "./ChildB";

const Parent = () =>{ 

    let data="Value is parent Component";
    let dbData=[10,20,30,40];
    let user={
        id:1,
        ename:"Mohan",
    }

    function Display(){
        console.log("I am display function of Parent Component");
    }

    return(
        <div>
                {/* <ChildA data={data} dbData={dbData}/> */}
                <ChildA propValue={{dbData,user}}/>
                <ChildB Display={Display}/>
        </div>

    )
}

export default Parent;