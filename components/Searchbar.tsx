// "use client";

// import { CiSearch } from "react-icons/ci";
// import { useState } from "react";

// const Searchbar = () => {
//   const [inputVisibility, setInputVisibility] = useState(false);

//   const handleMouseEnter = () => {
//     setInputVisibility(!inputVisibility);
//   };

//   return (
//     <div className="sm:w-[15rem] sm:mr-2 sm:flex justify-end ">
//       <div
//         style={{
//           border: inputVisibility
//             ? "1.5px solid white"
//             : "1.5px solid transparent",
//           transition: "width 0.3s ease-in-out, border 0.3s ease-in-out",
//         }}
//         className=" flex rounded-3xl justify-between items-center sm:px-4 sm:py-2 px-2 py-1"
//       >
//         <input
//           id="search"
//           type="text"
//           className="border-none text-white bg-transparent focus:outline-none transition-opacity sm:text-base text-sm"
//           placeholder="Search..."
//           style={{
//             width: inputVisibility ? "14rem" : 0,
//             transition: "width 0.3s ease-in-out",
//           }}
//         />
//         <label htmlFor="search">
//           <CiSearch
//             onClick={handleMouseEnter}
//             className=" sm:text-2xl text-2xl cursor-pointer text-white"
//           />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Searchbar;
