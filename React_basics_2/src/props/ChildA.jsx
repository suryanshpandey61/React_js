// const ChildA = (prop) => {
    
//     return(
//         <div>
//             <h1>{prop.data}</h1>
//         </div>
//     )
// }

// export default ChildA;
// import React from 'react'

// // we can also destructure at parameter
// function ChildA({dbData}) {
//     console.log(dbData);
//   return (
//     <div></div>
//   );
// };

// export default ChildA;

import React from 'react'

const ChildA = (propValue) => {
    // let {propValue:{dbData,user}} = propValue;
    let {propValue:{dbData,user:{id,ename}}} = propValue;
    console.log(dbData);
    // console.log(user);
    console.log(ename);
  return (
    <div></div>
  );
}

export default ChildA

