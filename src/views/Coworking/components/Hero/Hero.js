import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useMediaQuery, Button, Typography } from '@material-ui/core';
import { SectionHeader, SwiperImage } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  swiperNavButton: {
    width: `${theme.spacing(3)}px !important`,
    height: `${theme.spacing(3)}px !important`,
    padding: `${theme.spacing(2)}px !important`,
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
      <HeroShaped
        leftSide={
          <SectionHeader
            title={
              <span>
                Networking for{' '}
                <Typography component="span" variant="inherit" color="primary">
                  future
                </Typography>
              </span>
            }
            subtitle="QUT Business Analysis and Data Science Club (QUT BANDS) is a student run club for budding Business Analysis and Data Science enthusiasts. Our mission is to bridge the gap between QUT academia and the industry professions in the IT, Business and Data Science fields and provide mutual benefits for both sides"
            // "For Business Analysis and Data Science enthusiasts providing a platform to bridge the gap between industry and academia.
            // QUT Business Analysis and Data Science club[community] engaging both students and professionals,
            //  striving to bridge the gap between these groups for mutual benefits. "
            // subtitle="For entrepreneurs, startups and freelancers. Discover coworking spaces designed to inspire and to connect you to a community of motivated people."
            ctaGroup={[
              // <button
              //   type="button"
              //   onClick={e => {
              //     e.preventDefault();
              //     window.location.href = 'https://qutbandsmember.getqpay.com/';
              //   }}
              //   style={buttonInTextStyle}
              // >
              //   {' '}
              //   JOIN TODAY
              // </button>,

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
              // <Button
              //   variant="outlined"
              //   color="primary"
              //   size={isMd ? 'large' : 'medium'}
              // >
              //   Browse
              // </Button>,
            ]}
            align="left"
            titleVariant="h3"
          />
        }
        rightSide={
          <SwiperImage
            navigationButtonStyle={classes.swiperNavButton}
            items={[
              {
                src:
                  'https://assets.maccarianagency.com/the-front/photos/coworking/place2.jpg',
                srcSet:
                  'https://assets.maccarianagency.com/the-front/photos/coworking/place2@2x.jpg 2x',
                alt: '...',
              },
              {
                src:
                  'https://assets.maccarianagency.com/the-front/photos/coworking/place1.jpg',
                srcSet:
                  'https://assets.maccarianagency.com/the-front/photos/coworking/place1@2x.jpg 2x',
                alt: '...',
              },
              {
                src:
                  'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
                srcSet:
                  'https://assets.maccarianagency.com/the-front/photos/coworking/place3@2x.jpg 2x',
                alt: '...',
              },
            ]}
          />
        }
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
