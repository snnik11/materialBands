import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
//import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { HeroShaped, Map } from 'components/organisms';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

const useStyles = makeStyles(() => ({
  map: {
    zIndex: 9,
  },
  icon: {
    background: 'transparent',
    borderRadius: 0,
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              // title="Contact us"
              title="Dont be a stranger?"
              subtitle="Keep track of what's happening in BANDS and make the most of it!"
              //subtitle="Keep track of what's happening with your data, change permissions, and run reports against your data anywhere in the world. Keep track of what's happening with your data, change permissions."
              subtitleProps={{
                variant: 'body1',
                color: 'textPrimary',
              }}
              data-aos="fade-up"
              align="left"
            />
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                {/* <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-phone@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar> */}
                {/* <ListItemText
                  primary="Phone"
                  secondary="+39 659-657-0133"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                /> */}
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-mail@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Email"
                  secondary="qutbands@gmail.com"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
              <ListItem disableGutters data-aos="fade-up">
                <ListItemAvatar>
                  <Avatar
                    src="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin.png"
                    srcSet="https://assets.maccarianagency.com/the-front/illustrations/contact-icon-pin@2x.png 2x"
                    className={classes.icon}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Queensland University of Technology"
                  secondary="Gardens-Point Campus"
                  primaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textSecondary',
                  }}
                  secondaryTypographyProps={{
                    variant: 'subtitle1',
                    color: 'textPrimary',
                  }}
                />
              </ListItem>
            </List>
          </div>
        }
        rightSide={
          // <Map
          //   google={this.props.google}
          //   zoom={8}
          //   style={mapStyles}
          //   initialCenter={{ lat: -27.477623043750906, lng: 153.0302869394563 }}
          // >
          //   <Marker position={{ lat: 48.0, lng: -122.0 }} />
          // </Map>
          <Map
            center={[
              -27.477623043750906,
              153.0302869394563,
              // -27.477628980264633,
              //153.03026317641522,
              //-27.477621742151612, 153.02998454796955
            ]}
            //{[45.464211, 9.011383]}
            pins={data}
            zoom={15}
            className={classes.map}
          />
        }
      />
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
