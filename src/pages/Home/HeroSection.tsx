import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/images/macbook-exposed.png"

const HeroSection = () => {
    return (
        <Container className="grid grid-cols-2 place-content-center h-screen items-center"> 

            <div className="space-y-4">
                   <h1  className="text-5xl lg:text-8xl font-bold text-nowrap">
                     <span className="text-gray">Don't worry.</span>
                     <br />
                     <span >We'll fix it.</span>
                     </h1>

                   <p className="max-w-[50ch]">Welcome to <span className="text-primary-foreground font-bold">iRepair</span>, your one-stop place for all kinds of  
                   
                   <span className="font-bold"> Macbook repairs</span> and diagnostics.</p>  

                   <Button>Book a service</Button>
            </div>

            <div>
                     <img src={macBook} className="-rotate-45 w-[95%] object-contain" alt="" />
            </div>
            
        </Container>
    );
};

export default HeroSection;