import {
    Grid,
    Typography,
} from "@mui/material";
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Api from "../../api";
import { styled } from '@mui/material/styles';

import { Link } from "react-router-dom";



const ServiceList = ({service, index}) => {
    const urlImage = Api.baseUrl + 'public/images/services/'+service.image;

    if (index%2 === 0){
        return (
            <Grid container item xs={12} direction="row">
                <Grid item md={6} xs={12} sx={{display: 'flex'}} justifyContent="center">
                    <img src={urlImage} alt={service.title} style={{height: '400px', width:'400px'}}/>
                </Grid>
                <Grid item md={6} xs={12} sx={{display: 'flex', flexDirection:'column', alignItems:{xs:'center', md:'flex-start'}}}>

                    <Link to={service.url}>
                        <Typography  underline="hover" variant="h3" sx={{mt: 3, textAlign:{xs:'center', md:'left'}}}> {service.title} </Typography>
                    </Link>

                    <Typography variant="h5" sx={{fontStyle: 'italic', color: '#ea8d2a'}}> {service.subTitle}</Typography>
                    <Typography paragraph sx={{textAlign: 'justify'}}> {service.description}</Typography>
                    <Link to={service.url}>
                        <Button variant="contained" endIcon={<AddCircleIcon />}>
                            En Savoir
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        )
    }else{
        return (
            <Grid container item xs={12} direction="row">

                <Grid item md={6} xs={12} order={{ xs:2, md:1}} sx={{display: 'flex', flexDirection:'column', alignItems:{xs:'center', md:'flex-end'}}}>
                    <Link to={service.url}>
                        <Typography  underline="hover" variant="h3" sx={{mt: 3, textAlign:{xs:'center', md:'left'}}}> {service.title} </Typography>
                    </Link>
                    <Typography variant="h5" sx={{fontStyle: 'italic', color: '#ea8d2a'}}> {service.subTitle}</Typography>
                    <Typography paragraph sx={{textAlign: 'justify'}}> {service.description}</Typography>
                    <Link to={service.url}>
                        <Button variant="contained" endIcon={<AddCircleIcon />}>
                            En Savoir
                        </Button>
                    </Link>
                </Grid>
                <Grid item md={6} xs={12} sx={{display: 'flex'}} justifyContent="center" order={{ xs:1, md:2}}>
                    <img src={urlImage} alt={service.title} style={{height: '400px', width:'400px'}}/>
                </Grid>
            </Grid>
        )
    }

}

export default ServiceList;