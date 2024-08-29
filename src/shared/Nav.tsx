import Button from "./Button";




const Nav =()=>{

    return(
        <div className="w-[1200px] bg-[#0e1600] flex items-center justify-between rounded-[100px] px-[.6rem] mx-auto my-[1.4rem]" >
            <img src="/toplogo.png" alt="" />
            <ul className="flex font-mic gap-[24px] items-center text-[#FFFFFF] font-[400] py-[32px] ">
                <li><a href="" className="">Home</a></li>
                <li><a href="">Brat Tools</a></li>
                <li><a href="">Shop</a></li>
                <li><a href="">How To Guide</a></li>
                <li><a href="">Faq</a></li>
            </ul>
            <Button>
                Buy Brat
            </Button>
        </div>  
    );
};

export default Nav;