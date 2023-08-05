import { useEffect } from "react"
import { Typography } from "antd"
import { useNavigate } from "react-router-dom"

import logo from "../logo.svg"

const { Title } = Typography

export const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const navigationTimer = setTimeout(() => {
      navigate("/app/location")
    }, 3000)

    return () => clearTimeout(navigationTimer)
  }, [navigate])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title level={1}>Event I Do</Title>
      </header>
    </div>
  )
}

export default Home
