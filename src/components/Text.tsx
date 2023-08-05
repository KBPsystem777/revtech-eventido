import { Typography } from "antd"

const { Title } = Typography

export const Text = (level: any, text: string | number) => {
  return <Title level={level}> {text} </Title>
}
