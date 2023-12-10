import { Menubar } from 'primereact/menubar';
import React from 'react';
import Image from 'next/image';

export default function Nav(){
    const logo=<Image src="/logo.png" alt="Logo" width={85} height={65}></Image>;
    const nav_items=[
        {
            id:'home',
            label:'Home Page',
            url:'#home',
        },
        {
            id:'services',
            label:'Services',
            url:'#services'
        },
        {
            id:'appointment',
            label:'Appointment',
            url:'/appointment'
        },
        {
            id:'contactus',
            label:'Contact Us',
            url:'#contact-us'
        }
    ];

    return(
        <>

            <Menubar model={nav_items} className={`${'flex justify-content-around border-noround border-none shadow-5 opacity-70 z-5 sticky top-0'}`} start={logo}/>  
        </>
    )
}