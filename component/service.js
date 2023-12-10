import styles from '@/component/css/service_testamonial.module.css'
import { Image } from 'primereact/image';
import React from 'react';
import { Dialog } from 'primereact/dialog';

export default function Main(){
    const [visible,setVisible]= React.useState(false);
    const ServiceList=[
        {id:"image_1",path:"/service_image_1.png",alt:"service_card_1"},
        {id:"image_2",path:"/service_image_2.png",alt:"service_card_2"},
        {id:"image_3",path:"/service_image_3.png",alt:"service_card_3"},
        {id:"image_4",path:"/service_image_4.png",alt:"service_card_4"},
    ];

    return (
        <div id='service' className='flex flex-column justify-content-center align-content-center bg-black-alpha-90'>
            <h1 className={`${'sm:text-6xl text-center text-black-alpha-90 uppercase'}`}>Service</h1>
            <div className={`${'grid w-full'} ${styles.prelative}`}>
                {
                    ServiceList.map(({id,path,alt}) => (
                            <>
                                <div key={id} className='col-12 md:col-6 lg:col-3'>
                                    <Image src={path} alt={alt} className={`${styles.imagecontainer} ${'w-max'}`} onClick={()=>{setVisible(true)}}/>
                                </div>
                            </>
                        )
                    )
                }
            </div>
            <Dialog header="Services" visible={visible} className='w-11 sm:w-6' onHide={() => setVisible(false)}>
                <p className="text-black-alpha-90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
        </div>
    )
}