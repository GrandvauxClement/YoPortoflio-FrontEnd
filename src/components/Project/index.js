import * as React from "react";
import ProjectService from "../../services/project.service";
import {useEffect, useState} from "react";
import ImageMasonry from "./ImageMasonryDisplay";
import {Container, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import theme from "../../theme";

const IndexProject = () => {
    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });
    useEffect( () => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
            console.log(data);
            setAppState({loading:false, projects: data.data});
        });
    }, [setAppState])

    if (appState.loading){
        return (
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
                <CircularProgress />
            </Box>
        )
    }else {
        return (
            <Container sx={{mt: 3}}>
               <Typography variant="h2" color={theme.palette.primary.main}>Mes Réalisations</Typography>
               <ImageMasonry projects={appState.projects}/>
            </Container>
        );
    }

}

export default IndexProject;