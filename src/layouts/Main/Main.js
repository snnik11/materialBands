import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Footer, Sidebar, Topbar } from './components';
import { Navbar } from 'layouts/DocsLayout/components';
import Navb from 'layouts/DocsLayout/components/Navb';
import FooterEnd from 'layouts/DocsLayout/components/FooterEnd';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    landings: {
      title: 'Home',
      //title: 'Landings',
      id: 'landing-pages',
      children: {
        services: {
          //  groupTitle: 'Services',
          pages: [
            {
              title: 'Homepage',
              //   title: 'Coworking',
              href: '/web-basic',
              // href: '/coworking',
            },
            {
              title: 'IndustryPartners',
              href: '/rental',
            },
            // {
            //   title: 'Job Listing',
            //   href: '/job-listing',
            // },
            // {
            //   title: 'E-Learning',
            //   href: '/e-learning',
            // },
            // {
            //   title: 'E-commerce',
            //   href: '/e-commerce',
            // },
            // {
            //   title: 'Expo',
            //   href: '/expo',
            // },
          ],
        },
        apps: {
          // groupTitle: 'Apps',
          pages: [
            //   {
            //     title: 'Desktop App',
            //     href: '/desktop-app',
            //   },
            //   {
            //     title: 'Mobile App',
            //     href: '/mobile-app',
            //   },
          ],
        },
        web: {
          groupTitle: 'Web',
          pages: [
            {
              title: 'Marketing',
              href: '/',
            },
            {
              title: 'Overview',
              href: '/home',
            },
            {
              title: 'Basic',
              href: '/web-basic',
            },
            {
              title: 'Service',
              href: '/service',
            },
            {
              title: 'Startup',
              href: '/startup',
            },
            {
              title: 'Enterprise',
              href: '/enterprise',
            },
            {
              title: 'Cloud Hosting',
              href: '/cloud-hosting',
            },
            // {
            //   title: 'Agency',
            //   href: '/agency',
            // },
            {
              title: 'Design Company',
              href: '/design-company',
            },
            {
              title: 'Logistics',
              href: '/logistics',
            },
          ],
        },
      },
    },
    pages: {
      // title: 'Pages',
      title: 'About',
      id: 'supported-pages',
      children: {
        career: {
          //groupTitle: 'Career',
          pages: [
            // {
            //   title: 'Lising',
            //   href: '/career-listing',
            // },
            // {
            //   title: 'Lising Minimal',
            //   href: '/career-listing-minimal',
            // },
            // {
            //   title: 'Opening',
            //   href: '/career-opening',
            // },
          ],
        },
        helpCenter: {
          //  groupTitle: 'Help center',
          pages: [
            // {
            //   title: 'Overview',
            //   href: '/help-center',
            // },
            // {
            //   title: 'Article',
            //   href: '/help-center-article',
            // },
          ],
        },
        company: {
          //  groupTitle: 'Company',
          pages: [
            {
              title: 'About',
              href: '/about',
            },
            // {
            //   title: 'About (Cover)',
            //   href: '/about-side-cover',
            // },
            // {
            //   title: 'Pricing',
            //   href: '/pricing',
            // },
            // {
            //   title: 'Terms',
            //   href: '/company-terms',
            // },
          ],
        },
        contact: {
          //  groupTitle: 'Contact',
          pages: [
            // {
            //   title: 'Reach View',
            //   href: '/contact-page',
            // },
            // {
            //   title: 'Sidebar Map',
            //   href: '/contact-sidebar-map',
            // },
            // {
            //   title: 'Cover',
            //   href: '/contact-page-cover',
            // },
          ],
        },
        blog: {
          //   groupTitle: 'Blog',
          pages: [
            // {
            //   title: 'Newsroom',
            //   href: '/blog-newsroom',
            // },
            {
              title: 'Events',
              //title: 'Reach View',
              href: '/ourevents',
            },
            // {
            //   title: 'Search',
            //   href: '/blog-search',
            // },
            // {
            //   title: 'Article',
            //   href: '/blog-article',
            // },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/portfolio-grid',
            },
            // {
            //   title: 'Parallax Effect',
            //   href: '/agency',
            // },
          ],
        },
      },
    },
    account: {
      title: 'Account',
      id: 'account',
      children: {
        settings: {
          // groupTitle: 'Settings',
          pages: [
            // {
            //   title: 'General',
            //   href: '/account/?pid=general',
            // },
            // {
            //   title: 'Security',
            //   href: '/account/?pid=security',
            // },
            // {
            //   title: 'Notifications',
            //   href: '/account/?pid=notifications',
            // },
            // {
            //   title: 'Billing',
            //   href: '/account/?pid=billing',
            // },
          ],
        },
        signup: {
          groupTitle: 'Sign up',
          pages: [
            // {
            //   title: 'Simple',
            //   href: '/signup-simple',
            // },
            // {
            //   title: 'Cover',
            //   href: '/signup-cover',
            // },
          ],
        },
        signin: {
          groupTitle: 'Sign in',
          pages: [
            // {
            //   title: 'Simple',
            //   href: '/signin-simple',
            // },
            // {
            //   title: 'Cover',
            //   href: '/signin-cover',
            // },
          ],
        },
        password: {
          //groupTitle: 'Password reset',
          pages: [
            // {
            //   title: 'Simple',
            //   href: '/password-reset-simple',
            // },
            // {
            //   title: 'Cover',
            //   href: '/password-reset-cover',
            // },
          ],
        },
        error: {
          //  groupTitle: 'Error',
          pages: [
            // {
            //   title: 'Simple',
            //   href: '/not-found',
            // },
            // {
            //   title: 'Cover',
            //   href: '/not-found-cover',
            // },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      {/* <Topbar
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
        style={{ paddingBottom: '50px', paddingTop: '20px' }}
      /> */}
      <Navb
        onSidebarOpen={handleSidebarOpen}
        pages={pages}
        themeMode={themeMode}
        themeToggler={themeToggler}
        style={{ paddingBottom: '50px', paddingTop: '20px' }}
      />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <FooterEnd />
      {/* <Footer pages={pages} /> */}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
