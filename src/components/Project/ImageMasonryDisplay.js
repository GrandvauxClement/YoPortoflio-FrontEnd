import * as React from 'react';
import Stack from '@mui/material/Stack';
import Api from "../../api";
import styled from "@mui/material/styles/styled";
import {useState} from "react";
import ModalProject from "./modalProject";

const PREFIX = 'Project';

const classes = {
    root: `${PREFIX}-root`,
    image: `${PREFIX}-image`
};

const Root = styled('div')(({theme}) => ({
    [`&.${classes.root}`]: {
    },
    [`& .${classes.image}`]: {
        transition: "all 0.7s ease",
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        '&:hover':{
            cursor: "pointer",
            transform:"scale(1.15)",
        }
    }
}))

export default function ImageMasonry({project}) {
    const urlImage = Api.baseUrl + 'public/images/projets/';
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Root className={classes.root}>
             <Stack onClick={handleOpen}>
                  <img
                      src={`${urlImage}${project.images[0]}`}
                      srcSet={`${urlImage}${project.images[0]}`}
                      alt={project.title}
                      loading="lazy"
                      className={classes.image}
                  />

             </Stack>
            <ModalProject open={open} onClose={handleClose} project={project}/>
        </Root>
    );
}
