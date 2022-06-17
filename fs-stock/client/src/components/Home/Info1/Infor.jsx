import React from "react"
import {Container, Typography} from "@mui/material"
import {makeStyles} from "@mui/styles"
import {createTheme} from "@mui/material/styles"
import {BiAnalyse} from "react-icons/bi"
import {BsFillPeopleFill} from "react-icons/bs"
import {SiMicrostrategy} from "react-icons/si"


const theme = createTheme()

const useStyles = makeStyles({
    icons:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:"3rem",
        fontSize:"3rem",
        [theme.breakpoints.down("sm")]:{
            flexDirection:"column"
        }
    },

    textt:{
        // fontSize:"1rem",
        fontWeight:"bolder"
    },

})


const Infor = () => {   
    const classes = useStyles()
    return(
        <>
        <Container maxWidth="lg">
            <Typography variant="h4" style={{marginTop:"5rem", textAlign:"center", fontWeight:"bold"}}>
                Our Process</Typography>

            <Typography variant="body1" className={classes.textt}>Our goal is to partner with you to maximize 
            your business reputation and IT infrastructure through, our managed services.</Typography>
            

            <div className={classes.icons}>     

            <div>
            <BiAnalyse className={classes.icon} />
            <Typography variant="h5">Analyse</Typography>
            <Typography variant="body1"> We utilize creative and customized methods </Typography>
            </div> 

            <div>
            <BsFillPeopleFill className={classes.icon} />
            <Typography variant="h5">Advise</Typography>
            <Typography variant="body1"> Find out and where your business 
            needs to go </Typography>   
            </div>
            
            <div>
            <SiMicrostrategy className={classes.icon}/>
            <Typography variant="h5">Strategy</Typography>
            <Typography variant="body1"> We deliver business results via hands-on execution </Typography>
            </div>

            </div>

        </Container>
        </>

    )
}

export default Infor