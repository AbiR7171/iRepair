import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import macBook from "@/assets/images/macbook-exposed.png"
import  {motion} from "framer-motion"

const HeroSection = () => {


    const introParagrah = {
                
            hidden : {opacity:0, y: -100},
            visibale: {opacity: 1, y:0, transition: {duration: 0.5, staggerChildren: 0.5, delay:1}}
            
    }
 
     const introChildren = {
        hidden : {opacity:0, y: -100},
        visibale: {opacity: 1, y:0, type:"spring", bounce:0.5}
     }



     const introMacBook = {
          
           initial: {scale:5, rotate:0, y:50},
           animate: { scale:0.8, rotate:-45, y:0, transition: {
             duration:1,
            y:{
                duration:2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: 'easeInOut',
                
            }
        
        }}


     }
    


    return (
      <div className="overflow-hidden mb-96 ">
          <Container className="grid grid-cols-2 place-content-center h-screen items-center"> 

<motion.div className="space-y-4"
   variants={introParagrah}
   initial="hidden"
   animate="visibale"
>
       <motion.h1  className="text-5xl lg:text-8xl font-bold text-nowrap" variants={introChildren}>
         <span className="text-gray">Don't worry.</span>
         <br />
         <span >We'll fix it.</span>
         </motion.h1>

       <motion.p className="max-w-[50ch]" variants={introChildren}>Welcome to <span className="text-primary-foreground font-bold">iRepair</span>, your one-stop place for all kinds of  
       
       <span className="font-bold"> Macbook repairs</span> and diagnostics.</motion.p>  

       <motion.div variants={introChildren}>
           <Button>Book a service</Button>
       </motion.div>

</motion.div>

<motion.div variants={introMacBook} 
  initial="initial"
  animate="animate"
  
>
         <img  src={macBook} className="w-[95%] object-contain" alt="" />
</motion.div>

</Container>
      </div>
    );
};

export default HeroSection;