import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function Experience(props) {
    return (
    <Card css={{ p: "$6", mw: "400px", marginRight: '3rem' }}>
      <Card.Header>
        <img
          src={props.icon}
          width="34px"
          height="34px"
        />
        <Grid.Container css={{ pl: "$6" }}>
          <Grid xs={12}>
            <Text h4 css={{ lineHeight: "$xs" }}>
              {props.location}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: "$accents8" }}>{props.role}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: "$2" }}>
        <Text>
            {props.description}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Text
            css={{color: 'gray'}}
        >
            {props.dateRange}
        </Text>
      </Card.Footer>
    </Card>
    )
}