import React from 'react'
import Development from '../Components/Development'
import Offering from '../Components/Offering'
import CommercialDevelopment from '../Components/CommercialDevelopment'
import Breadcrumbs from '../Components/Breadcrumbs'

const Developments = () => {
  return (
    <>
    <Breadcrumbs title={" our DEVELOPMENTS"} />

        <Development />
        <Offering />
        <CommercialDevelopment />
    </>
  )
}

export default Developments
