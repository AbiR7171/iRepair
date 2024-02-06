import laptopImage from "@/assets/images/macbook.jpg"
const WhoWeAre = () => {
    return (
        <div className="grid grid-cols-2 items-center">
              <div>
                        <img src={laptopImage} alt="" />
              </div>

              <div className="space-y-5">
                    
                    <h1 className="text-6xl">Who we are </h1>

                    <p className="text-dark-gray">At <span className="text-black font-bold">iRepair</span>, we love MacBooks as much as you do. That’s why we offer fast, reliable, and affordable repair services for all kinds of MacBooks. Whether you need a screen replacement, a battery upgrade, or a software fix, we have the skills and experience to get your MacBook back to its best. We serve both individuals and businesses in <span className="text-black font-bold">Bangladesh</span>, and we guarantee your satisfaction. Don’t let a broken MacBook ruin your day. Contact iRepair today and let us take care of it.</p>

                    <div className="grid grid-cols-2">
                          
                          <div className="flex flex-col justify-center items-center">
                               <h1 className="text-9xl text-primary">98%</h1>
                               <p>Successful repairs </p>
                          </div>

                          <div className="flex flex-col justify-center items-center">
                               
                               <h1 className="text-9xl text-primary">2k+ </h1>
                               <p>Successful repairs </p>

                          </div>

                    </div>

              </div>
        </div>
    );
};

export default WhoWeAre;