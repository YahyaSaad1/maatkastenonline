export default function SubTitle({title, desc, classNameT, classNameP}){
    return(
        <div className="flex flex-col items-center">
            <h2 className={`font-semibold text-3xl text-center mb-9 ${classNameT}`}>{title}</h2>
            <p className={`text-center mb-9 text-[#333333] w-full lg:w-2/3 ${classNameP}`}>{desc}</p>
        </div>
    )
}