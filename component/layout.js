import { Menubar } from 'primereact/menubar';
import React from 'react';
import layoutstyle from '../component/css/layout.module.css';
import Image from 'next/image';

export default function Layout({children}){
    const label= 'Razor Edge';
    const logo=<Image src="/logo.png" alt="Logo" width={75} height={55}></Image>;
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
        },
        {
            id:'sign-in',
            label:'Sign In',
            url:'/authentication/signup'
        }
    ];

    return(
        <>
            <div className='relative'>
                <Menubar model={nav_items} className={`${layoutstyle.navbar} ${'flex justify-content-around border-noround border-none shadow-5 opacity-70 z-5 top-0'}`} start={logo}/>  
            </div>
        </>
    )
}