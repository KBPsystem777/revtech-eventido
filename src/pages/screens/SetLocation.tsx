import { Typography, Image } from "antd"
import metroManilaMap from "../../images/metromanila-map.png"
import { CitySelector } from "../../components/CitySelector"
import "./SetLocation.css"
import { Container, Row } from "reactstrap"
import { useNavigate } from "react-router-dom"

const { Title } = Typography

export const SetLocation = () => {
  const navigate = useNavigate()

  return (
    <Container fluid={true} className="app-setLocation">
      <Title style={{ textAlign: "center" }}>
        Where will your wedding be happening?
      </Title>
      <Container>
        <Row className="xs-2">
          <Image style={{ paddingTop: 20 }} src={metroManilaMap} width={350} />
        </Row>
      </Container>

      <div style={{ paddingTop: 20 }}>
        <CitySelector />
      </div>

      <Container>
        <button
          onClick={() => {
            navigate("/app/event-date")
          }}
        >
          Next
        </button>
      </Container>
    </Container>
  )
}
