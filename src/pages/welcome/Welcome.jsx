// import { Link } from "react-router-dom";
// import "./style.css";

// const Welcome = () => {
//   return (
//     <div>
//       <div className="mx-auto text-center flex flex-col justify-center h-screen items-center">
//         <div className="z-30 relative">
//           <svg
//             viewBox="0 0 200 200"
//             xmlns="http://www.w3.org/2000/svg"
//             className="lg:w-[600px] lg:h-full bloom-animation"
//           >
//             <path
//               fill="#8A3FFC"
//               d="M41,-49.7C55.1,-37,69.8,-26,75,-11.1C80.2,3.8,75.8,22.6,67.4,40.5C58.9,58.4,46.3,75.6,30.6,79.2C14.9,82.7,-4,72.7,-23.3,65.2C-42.7,57.7,-62.6,52.6,-71.6,39.9C-80.7,27.2,-79,6.8,-74.6,-12.4C-70.3,-31.5,-63.4,-49.4,-50.5,-62.3C-37.7,-75.3,-18.8,-83.2,-2.7,-80C13.5,-76.8,26.9,-62.5,41,-49.7Z"
//               transform="translate(100 100)"
//             />
//           </svg>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
//             <h2 className="text-2xl bloom-animation"> Welcome to</h2>
//             <h1 className="text-5xl font-black">
//               <span className="letter">S</span>
//               <span className="letter">h</span>
//               <span className="letter">o</span>
//               <span className="letter">p</span>
//               <span className="letter">T</span>
//               <span className="letter">e</span>
//               <span className="letter">c</span>
//               <span className="letter">h</span>
//             </h1>
//           </div>
//           <div className="flex gap-8 items-center justify-center">
//             <Link to="/login" className="">
//               Login
//             </Link>
//             <Link to="/register" className="">
//               Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Welcome;

import { Link } from "react-router-dom";
import "./style.css";

const Welcome = () => {
  return (
    <div className="mx-auto text-center flex flex-col justify-center h-screen items-center">
      <div className="z-30 relative">
        <div className="svg-container bloom-animation">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[600px] lg:h-full"
          >
            <path
              fill="#8A3FFC"
              d="M41,-49.7C55.1,-37,69.8,-26,75,-11.1C80.2,3.8,75.8,22.6,67.4,40.5C58.9,58.4,46.3,75.6,30.6,79.2C14.9,82.7,-4,72.7,-23.3,65.2C-42.7,57.7,-62.6,52.6,-71.6,39.9C-80.7,27.2,-79,6.8,-74.6,-12.4C-70.3,-31.5,-63.4,-49.4,-50.5,-62.3C-37.7,-75.3,-18.8,-83.2,-2.7,-80C13.5,-76.8,26.9,-62.5,41,-49.7Z"
              transform="translate(100 100)"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h2 className="text-2xl bloom-animation"> Welcome to</h2>
            <h1 className="text-5xl font-black">
              <span className="letter">S</span>
              <span className="letter">h</span>
              <span className="letter">o</span>
              <span className="letter">p</span>
              <span className="letter">T</span>
              <span className="letter">e</span>
              <span className="letter">c</span>
              <span className="letter">h</span>
            </h1>
          </div>
        </div>
        <div className="text-container text-purple-600 opacity-0 mt-4">
          <p className="text-lg">Here you will find all your necessary items</p>
          <div className="flex gap-8 items-center justify-center mt-4">
            <Link to="/login" className="">
              Login
            </Link>
            <Link to="/register" className="">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
