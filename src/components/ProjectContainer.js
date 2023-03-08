import { Card, Modal, Text, Image } from '@nextui-org/react';
import styles from '@/components/ProjectContainer.js';
import { usePress } from '@nextui-org/react';
import React from 'react';

export default function ProjectContainer(props) {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
    const getAvailabilityColor = (availability) => {
        if (availability === "Offline")
            return "red";
        else if (availability === "Under Construction") 
            return "blue";
        else 
            return "green";
          
    };
    return (<>
        <Card isHoverable isPressable onClick={handler} css={{margin: '.5rem', width: '30%'}}>
            <Card.Header css={{fontWeight: '600', fontSize: '1.5rem', fontFamily: 'Raleway'}}>{props.data.name}</Card.Header>
            <Card.Image alt="projectimage" width="100%" height="300px" src={props.data.image}/>
            <Card.Body>{props.data.description.split(/\s+/).slice(0, 9).join(" ") + "..."}</Card.Body>
        </Card>
        <Modal width="1000px" height="1000px" closeButton blur open={visible} onClose={closeHandler}>
            <Image alt="projectimage" width="60%" height="60%" src={props.data.image}/>
            <Modal.Header justify='flex-start'>
                <Text h2 size={30}>{props.data.name}</Text>
            </Modal.Header>
            <Modal.Body>
                <span style={{marginBottom: '0px'}}>Website: <a rel="noreferrer" href={props.data.website} target="_blank" style={{color: props.data.website == "Unavailable" ? 'red' : 'blue'}}>{props.data.website}</a></span>
                <span style={{marginBottom: '0px'}}>In use: <span style={{marginBottom: '0px', color: getAvailabilityColor(props.data.Availability)}}>{props.data.Availability}</span></span> 
                <span style={{marginBottom: '0px'}}>Github: {props.data.githubLink == "Private" ? <span>Private</span>: <a style={{color: 'blue', textDecoration: 'underline'}} target="_blank" rel="noreferrer" href={props.data.githubLink} src={props.data.githubLink}>{props.data.githubLink}</a>}</span>
                <span>More information: <a style={{color: 'blue', textDecoration: 'underline'}} rel="noreferrer" target="_blank" href={props.data.moreInformation} src={props.data.moreInformation}>{props.data.moreInformation}</a></span>
                <span>{props.data.description}</span>
            </Modal.Body>
        </Modal>
    </>);
}