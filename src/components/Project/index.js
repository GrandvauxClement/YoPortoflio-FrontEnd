import * as React from "react";
import ProjectService from "../../services/project.service";
import {useEffect, useState} from "react";
import ImageMasonry from "./ImageMasonryDisplay";
import {Container, Typography} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Button from "@mui/material/Button";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import {Link} from "react-router-dom";

const IndexProject = () => {
    const [appState, setAppState] = useState({
        loading: true,
        projects: null
    });
    useEffect( () => {
        setAppState({loading: true});
        ProjectService.getAllProject().then((data) => {
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
               <Typography variant="h2" color="primary"
                    sx={{my: 2, textAlign:{xs: 'center', md: 'left'}}}
               >
                   <i>Mes Réalisations</i>
               </Typography>
               <Box sx={{my:3, display:"flex", flexDirection:"column", alignItems:"center"}}>
                   <Masonry columns={3} spacing={1}>
                       {appState.projects.map((item, index) => (
                           index<6 &&
                            <ImageMasonry project={item} key={index}/>
                           ))}
                   </Masonry>
                   <Link to="/mes-realisations">
                       <Button variant="contained" endIcon={<ArrowForwardIosOutlinedIcon />}>
                           Voir toutes mes réalisations
                       </Button>
                   </Link>
               </Box>

            </Container>
        );
    }

}

export default IndexProject;