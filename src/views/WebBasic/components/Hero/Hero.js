import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import bandsgif from './bandsgif.gif';
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
          <SectionHeader
            title={
              <span>
                {/* Welcome to{' '} */}
                Networking for the
                <Typography component="span" variant="inherit" color="primary">
                  {/* TheFront. */} future
                </Typography>
                <br />
                {/* <span>Develop anything your business needs.</span> */}
              </span>
            }
            subtitle="QUT Business Analysis and Data Science Club (QUT BANDS) is a student run club for budding Business Analysis and Data Science enthusiasts. Our mission is to bridge the gap between QUT academia and the industry professions in the IT, Business and Data Science fields and provide mutual benefits for both sides"
            //"For Business Analysis and Data Science enthusiasts providing a platform to bridge the gap between industry and academia. QUT Business Analysis and Data Science club[community] engaging both students and professionals, striving to bridge the gap between these groups for mutual benefits."
            // subtitle="Build a beautiful, modern website with flexible, fully customizable, atomic Material UI components."
            ctaGroup={[
              <Button
                variant="contained"
                color="primary"
                size={isMd ? 'large' : 'medium'}
                onClick={e => {
                  e.preventDefault();
                  window.location.href = 'https://qutbandsmember.getqpay.com/';
                }}
              >
                Join Today
              </Button>,
              // <Button variant="contained" color="primary" size="large">
              //   View Pages
              // </Button>,
              // <Button variant="outlined" color="primary" size="large">
              //   Documentation
              // </Button>,
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <a href="https://qutbandsmember.getqpay.com/">
            <Image
              src=
              //"https://mybands.s3.ap-southeast-2.amazonaws.com/design/QUT+BANDS.png"
              //"https://mybands.s3.ap-southeast-2.amazonaws.com/design/member.png"
              //"https://mybands.s3.ap-southeast-2.amazonaws.com/design/Become+a+BANDS+member.png"
              //"https://mybands.s3.ap-southeast-2.amazonaws.com/design/2.png"
              //  "https://mybands.s3.ap-southeast-2.amazonaws.com/design/3.png"
               "https://mybands.s3.ap-southeast-2.amazonaws.com/design/1.png"
              //{bandsgif}
              style={{ height: '350px', width: '390px', borderRadius: '10px' }}
              //"https://assets.maccarianagency.com/the-front/illustrations/mind-map.svg"
              alt="TheFront Company"
              className={classes.image}
            />{' '}
          </a>
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
