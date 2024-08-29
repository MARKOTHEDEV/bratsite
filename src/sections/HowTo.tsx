import Button from "../shared/Button";


const HowTo = ()=>{


    return (
        <div className="howtoback">
            <h1 className="font-mic text-[64px] max-w-[500.02px] text-white text-center mx-auto p-[2rem] py-[3rem] ">How to Mint Brat</h1>

            <div className="w-[1100px] mx-auto flex gap-[24px]">
                <Card />
                <Card />
                <Card />
            </div>
            <br />
            <Button className="bg-white !text-[black] block mx-auto">
                Buy Brat
            </Button>
        </div>
    )
}

export default HowTo;


const Card =()=>{


    return (
        <div
        style={{
            border: '0.5px solid white',
'borderImageSource': 'linear-gradient(180deg, #8DCE02 0%, #FFFFFF 100%)',
// border:'1px solid red',
        }}
        className="rounded-[16px] overflow-hidden"
        >
            <img src="/SuperToroid-2.png" 
            className="h-[200.1px]"
            alt="" />
            <div className="p-[24px]">
            <p className="text-[#8DCE02]">Connect Your Wallet:</p>
            <p className="text-[#FFFFFF]">
            Use any compatible crypto wallet like MetaMask or Trust Wallet to get started. Simply connect your wallet to our secure platform and unlock the power to mint your own Brat tokens.
            </p>
            </div>
        </div>
    )
}