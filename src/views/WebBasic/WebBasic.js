import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import Slider from './components/ImageSlider/Slider';
import EventSlider from './components/ImageSlider/EventSlider';
import HeroMain from './components/Hero/HeroMain';
import {
  About,
  Contact,
  Faq,
  Features,
  Hero,
  Partners,
  Pricings,
  Reviews,
  Services,
  Users,
} from './components';

import {
  services,
  partners,
  props,
  users,
  pricings,
  reviews,
  faq,
  aboutServices,
} from './data';

const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  shape: {
    background: theme.palette.alternate.main,
    borderBottomRightRadius: '100%',
    borderBottom: `1px solid ${colors.grey[200]}`,
  },
}));

const WebBasic = () => {
  const classes = useStyles();

  return (
    <div>
      {/* <SectionAlternate>
        <EventSlider data={reviews} />
      </SectionAlternate> */}

      <Section className={classes.pagePaddingTop}>
        <br />
        <br />
        <br />
        <br />
        {/* <HeroMain /> */}
        <br />
        <br />
        <br />
        <Hero />
      </Section>

      <Section className={classes.sectionNoPaddingTop}>
        <Services data={services} />
      </Section>

      <Divider />
      <div className={classes.shape}>
        <Section className={classes.sectionNoPaddingTop}>
          {/* <About data={services} /> */}
          <About data={aboutServices} />
        </Section>
      </div>
      <Section>
        <Features />
      </Section>

      <Divider />
      <SectionAlternate>
        <Slider data={reviews} />
        {/* <Reviews data={reviews} /> */}
      </SectionAlternate>

      {/* <Section>
        <Partners data={partners} />
      </Section>
      <SectionAlternate>
        <Contact data={props} />
      </SectionAlternate>

      <Section>
        <Users data={users} />
      </Section>

      <div className={classes.shape}>
        <Section>
          <Pricings data={pricings} />
        </Section>
        <Section className={classes.sectionNoPaddingTop}>
          <Faq data={faq} />
        </Section>
      </div> */}
    </div>
  );
};

export default WebBasic;
