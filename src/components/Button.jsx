export default function Button({children,...props}){
    return(
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-gradient-custom-purple text-stone-200 hover:bg-stone-600 hover:text-stone-100 transition-all duration-500 ease-in-out transform hover:scale-110" {...props}>
            {children}
        </button>
    )
}