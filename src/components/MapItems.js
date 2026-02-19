export default function MapItems({items, place}){
    return(
        <div className="gap-8 md:gap-12 lg:gap-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item)=>{
                return(
                    <div key={item.id} className={`text-${place}`}>
                        <img className="w-full h-72 overflow-hidden mb-4 rounded-xl object-cover" src={item.srcImage} alt={item.srcImage} />
                        <h3 className="font-semibold text-xl mb-4">{item.title}</h3>
                        <p className="leading-8">{item.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}