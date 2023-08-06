import { Card } from "antd"

import { eventLocations } from "../../constants/eventLocations"
const { Meta } = Card

export const Results = () => (
  <div className="location-results">
    {eventLocations.map((item) => (
      <Card
        key={item.id}
        hoverable
        style={{ width: 240 }}
        cover={<img alt={item.name} src={item.image} />}
      >
        <Meta title={item.title} description={item.description} />
      </Card>
    ))}
  </div>
)
