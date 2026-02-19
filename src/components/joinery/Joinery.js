import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import DressingRoom from '../../images/dressing-room.png';
import BtnLink from '../BtnLink';
import { containerPadding } from '../Context';
import SubTitle from '../SubTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Joinery(){
    const bringsQuality = [
        {id: 1, title: 'Blum hinges with a soft-close mechanism'},
        {id: 2, title: 'Award-winning Ta’Or box drawers with a carrying capacity of 40 kg'},
        {id: 3, title: 'Strong, flex-free cupboard backs with a thickness of 8 mm'},
        {id: 4, title: 'Sustainable sheet panels by Unilin in 23 colours'},
        {id: 5, title: 'Separate pedestal with feet that creates a super-strong base'},
    ]
    return(
        <div className={`w-full min-h-[600px] bg-cover bg-center bg-no-repeat flex justify-end md:justify-center lg:justify-end ${containerPadding}`} style={{ backgroundImage: `url(${DressingRoom})` }}>
            <div className='flex flex-col bg-white p-6 xl:p-10 w-full md:w-3/4 lg:w-2/4 rounded-xl'>
                <SubTitle classNameT='text-start' title="Maatkasten Online brings quality joinery to your home" />
                
                <div className='flex flex-col gap-y-6'>
                    {bringsQuality.map((item)=>{
                        return(
                            <div key={item.id} className='flex gap-x-2 items-center'>
                                <FontAwesomeIcon color='green' size='lg' icon={faCircleCheck} />
                                <span>{item.title}</span>
                            </div>
                        )
                    })}
                </div>
                
                <BtnLink className='mt-8' title='More about our top quality' link='/#' />
            </div>
        </div>
    )
}