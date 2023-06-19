import React from 'react'
import {  Link, useNavigate } from "react-router-dom";
import { Menubar } from 'primereact/menubar';
import { Avatar } from 'primereact/avatar';
import logoOne from '../assets/logoOne.svg'

export const Header = () => {

    const navigate = useNavigate();

    const items = [
        {
          label: 'Home',
          icon: 'pi pi-home',
          command: () => {
           navigate('/home');
          }  
        },
        {
          label: 'Products',
          icon: 'pi pi-list',
          command: () => {
           navigate('/products');
          }  
        },
        {
          label: 'Calories',
          icon: 'pi pi-calculator',
          command: () => {
            navigate('/user-calories');
          } 
        }
      ]

      const start = <Link to='/home'> <img alt="danone" src={logoOne} height="40" className="mr-3 ml-3"></img> </Link>;

      const end =  <Link to='/profile' className='no-underline'><span className='flex align-items-center gap-1'>Profile<Avatar icon="pi pi-user" style={{ backgroundColor: '#85B4FF', color: '#ffffff' }} shape="circle" /></span></Link>;


  return (
    <header>
         <Menubar className='surface-overlay p-3'  model={items}  start={start} end={end}/>
    </header>
  )
}
