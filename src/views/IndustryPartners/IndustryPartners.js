import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';

import {
  Advantages,
  Articles,
  AskExpert,
  FeaturedProperties,
  FeaturedProperties1,
  FooterHero,
  Hero,
  //  Partners,
  Places,
  Reviews,
  Search,
  SellProperty,
  Teaser,
  HouseTypes,
} from './components';

import {
  aricles,
  featuredProperties,
  featuredProperties1,
  places,
  reviews,

  // partners,
  advantages,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
}));

const IndustryPartners = () => {
  const classes = useStyles();

  return (
    <div>
      <br />
      <br />
      <br />
      {/* <Hero /> */}
      {/* <SectionAlternate>
        <Search />
      </SectionAlternate> */}
      {/* <Section>
        <Teaser />
      </Section> */}
      {/* <Section className={classes.sectionNoPaddingTop}>
        <Articles data={aricles} />
      </Section> */}
      <SectionAlternate>
        <FeaturedProperties data={featuredProperties} />
      </SectionAlternate>
      {/* <Section>
        <FeaturedProperties1 data={featuredProperties1} />
      </Section> */}
      <Section>
        <Reviews data={reviews} />
      </Section>

      {/* <Section>
        <Places data={places} />
      </Section>
      <SectionAlternate innerNarrowed>
        <HouseTypes />
      </SectionAlternate> */}

      {/* <SellProperty /> */}
      {/* <Section>
        <Partners data={partners} />
      </Section> */}
      {/* <SectionAlternate>
        <Advantages data={advantages} />
      </SectionAlternate>
      <Section>
        <AskExpert />
      </Section> */}
      {/* <FooterHero /> */}
    </div>
  );
};

export default IndustryPartners;
