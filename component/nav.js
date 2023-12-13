import { Menubar } from 'primereact/menubar';
import React from 'react';
import { Image } from 'primereact/image';

export default function Nav({onMenuClick}){
    const logo=<Image src="/logoicon.png" alt="Logo" width={85} height={65}></Image>;
    const nav_items=[
        {
            id:'home',
            label:'Home Page',
            command: () => onMenuClick('home'),
        },
        {
            id:'services',
            label:'Services',
            command: () => onMenuClick('services')
        },
        {
            id:'contactus',
            label:'Contact Us',
            command: () => onMenuClick('contact-us')
        }
    ];

    return(
        <>
            <Menubar model={nav_items} className={`${'flex justify-content-around border-noround border-none shadow-5 opacity-70 z-5 fixed w-full top-0'}`} start={logo}/>  
        </>
    )
}