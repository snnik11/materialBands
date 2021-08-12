import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import logo from './bandsgif.gif';
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
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          {' '}
          <Grid
            item
            container
            justify="center"
            alignItems="center"
            xs={12}
            md={6}
            data-aos={'fade-up'}
          >
            <img
              src={logo}
              //"https://mybands.s3.ap-southeast-2.amazonaws.com/design/1.png"
              alt="hero"
              style={{ width: 'auto', height: '390px', paddingLeft: '400px' }}
            />
          </Grid>
          {/* <SectionHeader
            title={
              <span>
                {/* Welcome to{' '} */}
          {/* Networking for the
                <Typography component="span" variant="inherit" color="primary">
                  TheFront. future
                </Typography> */}
          <br />
          {/* <span>Develop anything your business needs.</span> */}
          {/* </span>
            } */}
          {/* align={isMd ? 'left' : 'center'}
          disableGutter titleVariant="h3" /> */}{' '}
        </Grid>
      </Grid>
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
