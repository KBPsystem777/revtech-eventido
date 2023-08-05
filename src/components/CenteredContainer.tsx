import { ReactNode } from "react"
import "./CenteredContainer.css"

interface CenteredContainerProps {
  children: ReactNode
}

export const CenteredContainer = ({ children }: CenteredContainerProps) => {
  return <div className="centered-container">{children}</div>
}

export default CenteredContainer
