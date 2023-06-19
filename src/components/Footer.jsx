import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='flex justify-content-center surface-overlay text-center py-4 gap-2'>
      <section className='w-full sm:w-6 flex flex-wrap justify-content-center gap-8'>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'>NEWS</Link>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'>PRODUCTS</Link>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'>CONTACT</Link>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'>HELP</Link>
      </section>
      <section className='flex gap-5 justify-content-center w-3'>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'><i className="pi pi-instagram "></i></Link>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'><i className="pi pi-facebook"></i></Link>
      <Link to={'#'} className='no-underline text-primary text-sm cursor-pointer'><i className="pi pi-twitter"></i></Link>
      </section>
    </footer>
  )
}
