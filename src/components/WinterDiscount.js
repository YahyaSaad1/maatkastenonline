export default function WinterDiscount({titleDiscount, count}){
    return(
        <div className='bg-accent-color hover:bg-hover-accent-color flex items-center justify-center text-center shadow-lg rounded-xl overflow-hidden flex-col gap-y-2 cursor-pointer hover:shadow-lg duration-150'>
            <h3 className="font-semibold text-xl">{titleDiscount}</h3>
            <p>up to</p>
            <strong className="font-semibold text-6xl">-{count}%</strong>
        </div>
    )
}