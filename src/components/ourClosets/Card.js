import { Link } from 'react-router-dom';
import BtnLink from '../BtnLink';

export default function Card({data}){
    
    return(
        data.map((item)=>{
            return(
                <Link key={item.id} to={`closet/${item.id}`} className="shadow-lg rounded-xl overflow-hidden flex flex-col cursor-pointer hover:shadow-lg duration-150">
                    <img className='h-[270px]' src={item.image} alt={item.title} />
                    <div className='flex flex-col justify-between gap-10 p-6 h-full'>
                        <div className='flex flex-col gap-2'>
                            <h3 className='text-lg font-semibold'>{item.title}</h3>
                            <p className='text-md'>{item.desc}</p>
                        </div>
                        <BtnLink title='Read more' link={`closet/${item.id}`} />
                    </div>
                </Link>
            )
        })
        
    )
}