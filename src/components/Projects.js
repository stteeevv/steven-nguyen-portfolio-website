import projectsData from "../../public/projectsData.json";
import styles from "@/components/styles/Projects.module.css"
import ProjectContainer from "@/components/ProjectContainer.js";
import { Grid } from '@nextui-org/react';

export default function Projects() {
    const indiciesToDisplay = [0, 1, 2, 3, 4];
    const projects = indiciesToDisplay.map((index) => {
        const data = projectsData.data[index];
        return <ProjectContainer key={index} data={data}/>
    })
    return (<>
        <div style={{backgroundColor: '#07090f'}} className={styles.container}>
            <h1 id="scroll-to-projects">Projects</h1>
            <div className={styles.Projects_container}>

            {/* <Grid.Container alignContent="space-between" gap={10} justify="center">
                <Grid direction="row"> */}
                    {projects}
                {/* </Grid>
            </Grid.Container> */}
            </div>
        </div>
    </>);
}