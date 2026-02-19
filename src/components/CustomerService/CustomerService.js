import { containerPadding } from "../Context";
import SubTitle from "../SubTitle";

export default function CustomerService(){
    return(
        <div className={`${containerPadding} bg-second-color`}>
            <SubTitle title='Hello, how may we help you?' classNameT='text-4xl' desc='Ask your question to our team. We are happy to help!' />
            <div>
                CustomerService
            </div>
        </div>
    )
}