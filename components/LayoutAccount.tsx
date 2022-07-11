import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const LayoutAccount: React.FC<Props> = ({ children }) => {
  return (
    <div className="p-4">
      <div>
        <ul>
          <li>Account</li>
          <li>Address</li>
          <li>Order</li>
        </ul>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default LayoutAccount
