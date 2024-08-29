import React from "react";


type Prop = React.PropsWithChildren<{
    className?:string
}>;
const Button =({children,className=''}:Prop)=>{

    return (
        <button className={`py-[1rem] px-[3rem] bg-[transparent] border-[white] border-[1px] rounded-[100px] font-mic text-[12px]
        text-white ${className}`}>
            {children}
        </button>
    )
}

export default Button;