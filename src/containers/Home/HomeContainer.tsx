import React from 'react'
import Home from '../../components/home/Home'
import Breadcrumbs from '../../components/common/Breadcrumb'

const crumbs = [
  {
    name: 'Home',
    path: '/',
  },
]

const HomeContainer: React.FC = () => {
  return (
    <>
      <Breadcrumbs crumbs={crumbs} />
      <Home />
    </>
  )
}

export default HomeContainer
