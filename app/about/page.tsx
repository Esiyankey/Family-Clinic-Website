import React from 'react'
import HeroHeader from '../components/features/HeroHeader'

export const page = () => {
  return (
    <div>
       <HeroHeader
               title="About Family Clinic"
               breadcrumbs={[{ label: "Home", href: "/" }, { label: "about-us" }]}
             />
    </div>
  )
}
