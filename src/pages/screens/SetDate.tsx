import { Typography, Calendar, theme } from "antd"
import "./SetLocation.css"
import { Container } from "reactstrap"
import { useNavigate } from "react-router-dom"
import type { CalendarMode } from "antd/es/calendar/generateCalendar"
import type { Dayjs } from "dayjs"
import React from "react"
import { Row } from "reactstrap"

const { Title } = Typography

export const SetDate = () => {
  const { token } = theme.useToken()
  const navigate = useNavigate()

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    marginLeft: "4em",
  }

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format("YYYY-MMM-DD"), mode)
  }

  return (
    <Container fluid={true} className="app-setLocation">
      <Title style={{ textAlign: "center" }}>When will be your wedding?</Title>

      <div style={wrapperStyle}>
        <Calendar
          className="app-calendar"
          fullscreen={false}
          onPanelChange={onPanelChange}
        />
      </div>
      <button
        onClick={() => {
          navigate("/app/budget")
        }}
      >
        Next
      </button>
    </Container>
  )
}
