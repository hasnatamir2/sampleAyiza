import React from 'react'

interface stepProps {
  index: number
  label?: string
  status: 'ACTIVE' | 'INACTIVE'
  onClick?: () => void
}

const Step = (props: stepProps) => {
  const { index, status, label, onClick } = props
  return (
    <div
      className={`stepper-step-container ${
        status === 'ACTIVE' && 'steppers-step-active'
      }`}
      onClick={onClick}
    >
      <div className="stepper-step">{index + 1}</div>
      <span className="stepper-step-label">{label}</span>
    </div>
  )
}

const Timeline = (props: any) => {
  const { steps, activeStep } = props
  return (
    <div className="vertical-stepper">
      {steps.map((item: any, index: any) => {
        return (
          <>
            <Step
              index={index}
              label={item.label}
              status={index <= activeStep ? 'ACTIVE' : 'INACTIVE'}
              onClick={item.onClick}
            />
            <div
              className={index < steps.length-1 ? 'time-line-pointer' : ''}
            ></div>
          </>
        )
      })}
    </div>
  )
}

export default Timeline
