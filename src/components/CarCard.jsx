import React from 'react'
import { Card, Image, Text, Button, Group } from '@mantine/core';

export default function CarCard(props){
  return (
    <Card shadow="sm" padding="sm" radius="md" withBorder>
      <Card.Section component="a">
        <Image fit="cover" height={180}alt="No way!" src={props.imglink}/>
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text >{props.manufacture}</Text>
      </Group>
      <h2>{props.carname}</h2>
      <Button variant="light" color="blue" fullWidth mt="md" radius="md">Rent Now</Button>
    </Card>
  )
}