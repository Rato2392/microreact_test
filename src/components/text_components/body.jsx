import React, { useState, useEffect } from "react";
import Iframe from 'react-iframe'
import { makeStyles } from "@material-ui/core/styles";
import {
  Route,
  Switch,
  Redirect,
  //BrowserRouter as Router,
} from "react-router-dom";
import {Grid, Card, CardMedia,CardContent,Typography,Button, Link, Accordion,AccordionDetails,AccordionSummary,List,ListItem,ListItemIcon,ListItemText} from "@material-ui/core";
import logo from "./img/logo2.svg"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Dot from '@material-ui/icons/FiberManualRecord';
const useStyles = makeStyles(() => ({
  container: {
    height: "100%",
    minHeight: "100vh",   
  },
  card_container: {
      padding: "20px",
  },
  image_size: {
      width: "90px",
      height:"90px",
  },
  link_color: {
    color: "#7296ba",

  },
  //remove gray line above accordion
  MuiAccordionroot: {
    "&.MuiAccordion-root:before": {
      backgroundColor: "white"
    },
  },
  MuiButtonroot:{
  "&.MuiButton-root:hover": {
    backgroundcolor: "#7296ba",
  },
  "&.MuiButton-text":{
      color:"white",
      //remove all caps on text
      textTransform: "none",
  },
},
    MuiAccordionSummaryroot: {
    display: "flex",
    padding: "0px 0px",
    },
    MuiListItemIconroot: {
        color: "black",
    },
}));
const Body = ({text}) => {
    //get styles
    const classes = useStyles();
  
  
  
    return (
      <Grid
        xs={12}
        item
        position="static"
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Card elevation={3} variant="outlined" className={classes.card_container}>
            <div style={{display: "flex"}}>
                <CardMedia
                className={classes.image_size}
                component="img"
                src= {logo}
            />
                <div >
                <CardContent className={classes.content}>
                    <Typography variant="h5">
                    <b style={{color: "#7296ba"}}>
                    Diversidade genética do novo coronavírus SARS-CoV-2 (COVID-19) em Portugal
                    </b>
                    </Typography>
                </CardContent>
                </div>
            </div>
            <CardContent className={classes.content}>
            <Typography 
                  variant="body1"  
                >
                O
                <Link 
                    className={classes.link_color}
                    href="http://www.insa.pt/">
                    {" Instituto Nacional de Saúde Doutor Ricardo Jorge, I.P. (INSA) "}
                </Link>  
                está a coordenar um projeto de âmbito nacional com vista à monitorização da disseminação do novo coronavirus SARS-CoV-2 em Portugal através da análise do genoma deste vírus pandémico. Este estudo envolve a colaboração com o Instituto Gulbenkian de Ciência (IGC) para efeitos de processamento de amostras e com uma rede de mais de 60 hospitais/laboratórios espalhados pelo país para envio de amostras positivas para o INSA.
                <br />
                <p>A sequência completa do genoma é identificada com recurso a tecnologias de sequenciação de nova geração e análise bioinformática através da plataforma online INSaFLU. O painel interativo abaixo reflecte uma análise integrativa da diversidade genética (filogenia) e dispersão geotemporal do vírus SARS-CoV-2 em Portugal realizada com o recurso às ferramentas do projecto Nextstrain (Hadfield et al. 2018, Bioinformatics). A integração dos dados genómicos de Portugal na diversidade à escala global pode ser consultada em https://nextstrain.org/ncov.
                </p>            
            </Typography>
            <Accordion
            
                classes={{root: classes.MuiAccordionroot}}
                class="background_overlay"
                elevation={0}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                classes={{root:classes.MuiAccordionSummaryroot}}
              >
                <Button classes={{root: classes.MuiButtonroot}} style={{backgroundColor: "#7296ba"}} disableRipple="true" >
                  <Typography  variant="body1" style={{colour:"white",paddingLeft:"10px",paddingRight:"10px"}}>
                    Quais são os objetivos deste estudo? (clique aqui)
                  </Typography>
                </Button>
              </AccordionSummary>
              <AccordionDetails>
                <Card elevation={3} variant="outlined" className={classes.card_container} style={{width:"100%"}}>
                    <List
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        >
                        <ListItem >
                            <ListItemIcon classes={{root: classes.MuiListItemIconroot}}>
                            <Dot style={{fontSize:"small"}}/>
                            </ListItemIcon>
                            <ListItemText primary="Determinação dos perfis mutacionais do SARS-CoV-2 para identificação e monitorização de cadeias de transmissão, bem como identificação de novas  introduções do vírus em Portugal." />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon classes={{root: classes.MuiListItemIconroot}}>
                            <Dot style={{fontSize:"small"}}/>
                            </ListItemIcon>
                            <ListItemText primary="Prever o inicio da transmissão na comunidade e aferir o impacto das medidas de contenção." />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon classes={{root: classes.MuiListItemIconroot}}>
                            <Dot style={{fontSize:"small"}}/>
                            </ListItemIcon>
                            <ListItemText primary="Determinação do grau de variabilidade genética de antigénios ou alvos de fármacos antivirais com possível impacto no desenvolvimento / eficiência de medidas profiláticas (vacinas) e terapêuticas." />
                        </ListItem>
                        <ListItem >
                            <ListItemIcon classes={{root: classes.MuiListItemIconroot}}>
                            <Dot style={{fontSize:"small"}}/>
                            </ListItemIcon>
                            <ListItemText primary="Determinação de possíveis associações entre perfis genéticos (mutacionais) do SARS-CoV-2 e determinadas manifestações clínicas (ex. diferentes graus severidade da COVID-19)." />
                        </ListItem>
                        </List>
                    
                    </Card>
                    </AccordionDetails>
                </Accordion >
                <Typography variant="body1">
                    <b >
                    Até à data, foram analisadas pelo INSA 2287 sequências do genoma de SARS-CoV-2. Os resultados serão revistos e continuamente atualizados à medida que forem obtidos mais dados.
                    </b>
                </Typography>
                <Iframe src="https://microreact.org/project/goiZnTHdR6Rhhacd3seqQp/4c786498" width="100%" height="750px" id="iframeid" display="block" />
            </CardContent>
        </Card>
      </Grid>
    );
  };
  
  export default Body;
  
