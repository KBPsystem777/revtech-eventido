import { Typography, Dropdown, message, Space } from "antd"
import type { MenuProps } from "antd"
import { DownOutlined } from "@ant-design/icons"
import { metroManilaCities } from "../constants/metroManilaCities"
import { useState } from "react"

const { Title } = Typography

const items: MenuProps["items"] = metroManilaCities.map((item) => ({
  label: item,
  key: item,
}))

export const CitySelector = () => {
  const [city, setCity] = useState("Choose a city")

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setCity(key)
    message.info(`Click on item ${key}`)
  }
  return (
    <>
      <Dropdown menu={{ items, onClick }}>
        <Space>
          <Title level={3}> {city}</Title>
          <DownOutlined />
        </Space>
      </Dropdown>
    </>
  )
}
