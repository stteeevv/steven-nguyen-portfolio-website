import { Card } from '@nextui-org/react';
import test from "public/integral.png"

export default function ProjectContainer(props) {
    return (<>
        <Card css={{margin: '1rem', width: '30%'}}>
            <Card.Header>{props.data.name}</Card.Header>
            <Card.Image width="100%" height="340px" src={props.data.image}/>
        </Card>
    </>);
}