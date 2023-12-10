import styles from '@/component/css/service_testamonial.module.css'
import { Image } from 'primereact/image';

export default function Main(){
    const ServiceList=[
        {id:"image_1",path:"/service_image_1.png",alt:"service_card_1"},
        {id:"image_2",path:"/service_image_2.png",alt:"service_card_2"},
        {id:"image_3",path:"/service_image_3.png",alt:"service_card_3"},
        {id:"image_4",path:"/service_image_4.png",alt:"service_card_4"},
    ];
    return (
        <div id='service' className='flex flex-column justify-content-center align-content-center bg-black-alpha-90'>
            <h1 className={`${'sm:text-6xl text-center text-black-alpha-90 uppercase'}`}>Service</h1>
            <div className='grid w-full'>
                {
                    ServiceList.map(({id,path,alt}) => (
                            <div key={id} className='col-12 md:col-6 lg:col-3'><Image src={path} alt={alt} className={`${styles.imagecontainer} ${'w-max'}`}/></div>
                        )
                    )
                }
            </div>
        </div>
    )
}