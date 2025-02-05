import React from 'react'
import NikeAirMaxPulse from './components/nikeairmax'
import Subheader from './components/subheader'
import BestOfAirMax from './components/bestofnike'
import Featured from './components/featured'
import GearUp from './components/gearup'
import Dontmiss from './components/dontmiss'
import Essentials from './components/essential'
import FooterMenu from './components/footermenu'

const  Home = () => {
  return (
    <div>
      <Subheader/>
      <NikeAirMaxPulse/>
      <BestOfAirMax/>
      <Featured/>
      <GearUp/>
      <Dontmiss/>
      <Essentials/>
      <FooterMenu/>
    </div>
  )
}

export default  Home
