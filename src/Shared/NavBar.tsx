import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
    <nav>
      <Container className="h-16 flex justify-between  items-center">
             
             <span className="text-3xl">iRepair</span>

             <ul className="space-x-3">
                  <NavLink className="font-normal" to="/" >Home</NavLink>
                  <NavLink to="/" >About</NavLink>
                  <NavLink to="/" >Service</NavLink>

                  <Button >Login</Button>
             </ul>
          
      </Container>
  </nav>
       
    );
};

export default NavBar;