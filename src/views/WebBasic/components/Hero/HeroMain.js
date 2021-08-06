import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import bandsgif from './bandsgif.gif';
import { icon } from 'leaflet';
import './HeroMain.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      {/* <FontAwesomeIcon icon="fa-solid fa-heart" /> */}
      <SectionHeader
        title={
          <span
            className="hyperlink"
            style={{
              background: '#f5e1fd',
              textAlign: 'center',
              padding: '9px',
              borderRadius: '10px',
              color: 'black',
            }}
          >
            <a href="https://twitter.com/qutbands">
              {/* Welcome to{' '} */}
              QUTBANDS is now on
              <Typography component="span" variant="inherit" color="info">
                {/* TheFront. */} TWITTER!
              </Typography>
              <br />
              {/* <span>Develop anything your business needs.</span> */}
            </a>
          </span>
        }
        align={isMd ? 'center' : 'center'}
        disableGutter
        titleVariant="h3"
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
