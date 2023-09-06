import React, { ReactNode } from 'react'

interface TemplateProps {
  children: ReactNode
}

export const CommonTemplate: React.FC<TemplateProps> = ({ children }) => {
  return (
    <div className="relative flex flex-col" id="app-container">
      {children}
    </div>
  )
}
