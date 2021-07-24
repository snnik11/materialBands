import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const WhoWeAre = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Who are we?"
            subtitle="Our executive committee is a team of dedicated students from a variety of different faculties and backgrounds.
            Over 300+ student members and 40 + industry partners across Australia."
            //subtitle="Our sign up is dead simple. We only require your basic company information and what type of data storage you want. Our sign up is dead simple. We only require your basic company information and what type of data storage you want."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            //  title="What’s up with the name?"
            title="What do we do?"
            subtitle="We aim to provide a platform where students get to meet industry professionals to get insight into
          what’s currently relevant and how they can better prepare themselves to be ready when they graduate.
          Including networking, we also conduct workshops on diverse topics related to both business analysis and data science.
          Few of our members got placed into companies like SUNCORP, KEYDATA, OBZERVR,
          and many more through our networking events."
            //subtitle="We support bulk uploading via SQL, integrations with most data storage products, or you can use our API. Simply select where you'd like to transfer your data and we'll being the process of migrating it instantly."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
