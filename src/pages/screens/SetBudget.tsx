import { Input, Typography } from "antd"
import "./SetBudget.css"
import { Container } from "reactstrap"
import { useNavigate } from "react-router-dom"
import type { CalendarMode } from "antd/es/calendar/generateCalendar"
import type { Dayjs } from "dayjs"
import React from "react"
import { Row } from "reactstrap"

const { Title } = Typography

export const SetBudget = () => {
  const navigate = useNavigate()

  return (
    <Container fluid={true} className="app-setBudget">
      <Title style={{ textAlign: "center" }}>
        How much are you looking to spend on your wedding?
      </Title>

      <Input
        type="number"
        placeholder="Estimate budget PHP"
        style={{ width: "50%" }}
      />

      <Row>
        <button
          onClick={() => {
            navigate("/app/results")
          }}
        >
          Proceed
        </button>
      </Row>
    </Container>
  )
}
