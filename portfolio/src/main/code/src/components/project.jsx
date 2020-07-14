import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from  '@material-ui/core/Typography';
import Project1 from './images/project1.png';
import Project2 from './images/Project2.png';
import Project3 from './images/Project3.png';
import Project4 from './images/Project4.png';
import Project5 from './images/Project5.png';
import Project6 from './images/Project6.png';
import LinkIcon from '@material-ui/icons/Link';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(7),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    margin: "20px",
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,  
    border: "3px solid white",
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:Project1,
      title: 'RiotofFlavours',
      width: '30%',
      link: "https://github.com/jainpriyanshi/Riot-of-flavours"
    },
    {
      url:Project2,
      title: 'MediCore',
      width: '30%',
      link: "https://github.com/jainpriyanshi/prometeo-medicore"
    },
    {
      url:Project3,
      title: 'TechMate',
      width: '30%',
      link: "https://github.com/jainpriyanshi/Techmate",
    },
    {
      url:Project4,
      title: 'ImageIn',
      width: '30%',
      link: "https://github.com/jainpriyanshi/IMAGEIN"
    },
    {
      url:Project5,
      title: 'MyTrello',
      width: '30%',
      link: "https://github.com/jainpriyanshi/MyTrello"
    },
    {
      url:Project6,
      title: 'Authentication',
      width: '30%',
      link: "https://github.com/jainpriyanshi/authentication"
    },
    
  ];

  return (
    <Container className={classes.root} component="section" class="" >
      <br/>
      <div className={classes.images}>
        {images.map((image) => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{ width: image.width }}
          >
          <div
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <div className={classes.imageBackdrop} />
          <div className={classes.imageButton}>
            <Typography
              component="h3"
              variant="h6"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
                <a href={image.link} target="_blank" >  <LinkIcon style={{color: "grey" , size:"40px"}} /> </a>
              <div className={classes.imageMarked} />
            </Typography>
          </div>    
        </ButtonBase>
      ))}
    </div>
  </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);