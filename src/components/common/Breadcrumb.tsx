import React from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

interface crumb {
  name: string
  path: string
}

interface BreadcrumbProps {
  crumbs: crumb[]
}

const Breadcrumbs = ({ crumbs }: BreadcrumbProps) => {
  return (
    <Breadcrumb className='breadcrumb'>
      {crumbs.map((crumb, index) => {
        return (
          <Breadcrumb.Item key={index} active={index === crumbs.length - 1}>
            {index === crumbs.length - 1 ? (
              crumb.name
            ) : (
              <Link to={crumb.path}>{crumb.name}</Link>
            )}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}
export default Breadcrumbs
