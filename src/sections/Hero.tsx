import Button from "../shared/Button";
import Nav from "../shared/Nav";


const Hero = ()=>{


    return (
        <div className="heroback">
            <Nav />
            <br />
            <div>
                <h1 className="font-mic text-[64px] text-white text-center">WHAT IS <span className="text-[#8DCE02]">BRAT</span></h1>
                <p className="text-white font-sat font-[500] text-[24px] max-w-[700px] text-center mx-auto my-[1rem]">
                    Brat is the retail coin of the, Brat Brat Brat, Brat Brat Brat,  Brat Brat Brat,  Brat Brat Brat
                </p>
                <Button  className="mx-auto block bg-white text-[black]">
                    Buy Brat
                </Button>
                <img src="/bigbunny.png" className="mx-auto block" alt="" />
            </div>
        </div>
    )
}
export default Hero;