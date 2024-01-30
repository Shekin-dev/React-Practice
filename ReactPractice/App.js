// import * as React from "react";
// import * as ReactDOM from "react-dom";
// export default class ReactApp extends React.Component {
//     render() {
//         return (<div className="e-card">
//         <div className="e-card-image">
//           <div className="e-card-title">JavaScript </div>
//         </div>
//         <div className="e-card-content">
//           JavaScript Succinctly was written to give readers an accurate, concise examination of JavaScript objects and their supporting nuances, such as complex values, primitive values, scope, inheritance, the head object, and more. </div>
//       </div>);
//     }
// }
// ReactDOM.render(<ReactApp />, document.getElementById("element"));
// import React from "react";
// import Navbar from "./Navbar"; // Assuming Navbar.js is in the same directory

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;



import React from "react";
import {
  Navbar as MaterialNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function App() {
  <div> 
  </div>
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div>
    <p>Hello, world!</p>
  </div>  );

  return (
    <MaterialNavbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Material Tailwind
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Sign in</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {  <div>
    <p>Hello, world!</p>
  </div>}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div>
        </div>
      </MobileNav>
    </MaterialNavbar>
  );
}

export default App;
