import styles from '@/component/css/service_testamonial.module.css'
import { Image } from 'primereact/image';
import React from 'react';
import { Dialog } from 'primereact/dialog';

export default function Main(){
    const [visible,setVisible]= React.useState();
    const [services,setServices] = React.useState('');
    const [hoverStates, setHoverStates] = React.useState({});
    const headers =['Service','READ WHAT OTHERS HAVE TO SAY'];

    const ServiceList=[
        {id:"image_1",path:"/service_image_1.png",alt:"service_card_1", service_name:"HairWash"},
        {id:"image_2",path:"/service_image_2.png",alt:"service_card_2", service_name:"Facial"},
        {id:"image_3",path:"/service_image_3.png",alt:"service_card_3", service_name:"Skin Treatment"},
        {id:"image_4",path:"/service_image_4.png",alt:"service_card_4", service_name:"Hair Treatment"},
    ];

    const TestamonialList=[
        {
            id:"profile_1",
            path:"/profile_1.png",
            alt:"profile_1",
            message:`“Since I started using RE, I truly adore the how my hair feels! It smells amazing, and it's softer and healthier.”`
        },
        {
            id:"profile_2",
            path:"/profile_2.png",
            alt:"profile_2",
            message:`“I've never had better hair care than this in my entire life. Game changer. I promise never to look back at other shit!”`
        },
        {
            id:"profile_3",
            path:"/profile_3.png",
            alt:"profile_1",
            message:`“Every product I have tried, I adore. They've all helped to create amazing curl, sheen, and volume.”`
        }
    ];

    return (
        <div id='service' className={`${'flex flex-column justify-content-center align-content-center surface-ground relative bottom-0 left-0 top-0'} ${styles.container}`}>
            <h1 className={`${'sm:text-6xl text-center text-black-alpha-90 uppercase mt-7 mb-5'}`}>{headers[0]}</h1>
            <div className={`${'grid w-full mt-2 mb-2 sm:mb-7 sm:mt-5'}`}>
                {
                    ServiceList.map(({id,path,alt,service_name}) => (
                            <>
                                <div key={id} className='col-12 md:col-6 lg:col-3 flex flex-column justify-content-center align-items-center relative'>
                                    <Image src={path} alt={alt} className={`${'block m-auto pl-4 sm:pl-0'} ${'w-max'} ${styles.imagecontainer}`} onMouseEnter={() => setHoverStates(prev => ({ ...prev, [id]: true }))} onMouseLeave={() => setHoverStates(prev => ({ ...prev, [id]: false }))} onClick={()=>{setVisible(true); setServices(service_name)}}/>
                                    {hoverStates[id] && (<div className={`${styles.tagtest} ${'flex flex-column align-items-center justify-content-center m-auto absolute'}`}>
                                        <h2 className={styles.text}>{service_name}</h2>
                                    </div>)}
                                </div>
                            </>
                        )
                    )
                }
            </div>
            <Dialog header={services} visible={visible} className='w-11 sm:w-6' onHide={() => {setVisible(false)}}>
                <p className="text-black-alpha-90">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Dialog>
            <h1 className={`${'sm:text-6xl text-center text-black-alpha-90 uppercase mt-7 mb-7'}`}>{headers[1]}</h1>
            <div className='grid w-full mb-2 mt-2 sm:mb-7 sm:mt-7'>
               {
                TestamonialList.map(({id,path,alt,message}) => (
                            <>
                                <div key={id} className={`${'col-12 md:col-4 lg:col-4 flex flex-column justify-content-center align-items-center ml-2 sm:m-0 relative'}`}>
                                    <Image src={path} alt={alt} className={`${styles.testamonialimage} ${'absolute'}`}></Image>
                                    <div className={`${'flex flex-column text-xl sm:text-2xl border-round-xl justify-content-center align-items-center bg-white text-center h-15rem text-black-alpha-90 w-9 mb-5'} ${styles.testamonialarea}`}>{message}</div>
                                </div>
                            </>
                        )
                    )
               }
            </div>
        </div>
    )
}