import React from 'react'
import Breadcrumbs from '../Components/Breadcrumbs'
import FillTheForm from '../Components/FillTheForm'
import OurProjects from '../Components/OurProjects'


const ContactUs = () => {
  return (
    <>
         
      <Breadcrumbs title={'Contact us'} />

       <section className='mt-5 mb-5'>
       <FillTheForm />
       </section>
       <OurProjects />


    </>
  )
}

export default ContactUs
