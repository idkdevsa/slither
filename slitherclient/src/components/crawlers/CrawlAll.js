// import React, { useEffect, useState } from "react";

// const CrawlAll = () => {
//   const [allNodes, setAllNodes] = useState();

//   useEffect(() => {
//     setAllNodes(getAllNodes());
//   }, []);

//   const getAllNodes = () => {
//     return !document.getElementById("the-frame")
//       ? ""
//       : Array.from(
//           document
//             .getElementById("the-frame")
//             .document.body.getElementsByTagName("*")
//         );
//     <select style={{ width: "50%" }}>
//       {/* {allNodes &&
//           allNodes.map((node, index) => {
//             return <option value={node.id}>{node.id}</option>;
//           })} */}
//     </select>;
//   };

//   return (
//     <>
//       {console.log(allNodes)}
//       <select style={{ width: "50%" }}>
//         {/* {allNodes &&
//           allNodes.map((node, index) => {
//             return <option value={node.id}>{node.id}</option>;
//           })} */}
//       </select>
//     </>
//   );
// };

// export default CrawlAll;
