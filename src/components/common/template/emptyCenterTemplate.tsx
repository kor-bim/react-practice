import React, { ReactNode } from 'react'
interface TemplateProps {
  children: ReactNode
}
export const EmptyCenterTemplate: React.FC<TemplateProps> = ({ children }) => {
  return <div className={'w-[100vw] h-[100vh] mx-auto flex flex-row items-center justify-center px-10'}>{children}</div>
}
