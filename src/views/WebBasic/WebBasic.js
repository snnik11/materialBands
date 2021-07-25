import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { colors, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
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
      <Section className={classes.pagePaddingTop}>
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
        <Reviews data={reviews} />
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
