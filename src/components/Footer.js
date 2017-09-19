import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import ButtonBase from 'material-ui/ButtonBase';

import withWidth from './withWidth';
import AccountIcon from './icons/AccountIcon';
import FavoritesIcon from './icons/FavoritesIcon';
import LanguageIcon from './icons/LanguageIcon';
import PrivacyIcon from './icons/PrivacyIcon';
import SearchIcon from './icons/SearchIcon';

require('./Footer.scss');

const DesktopView = () => (
  <footer>
    <div className="bg-grey flex-even padded-vertical">

      <div>
        <strong className="block padded-below">
          Connect with AsylumConnect
        </strong>
        <div className="flex-even">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>

      <div>
        <strong className="block padded-below">
          Stay Updated on AsylumConnect's Lifesaving Initiatives
        </strong>
        <div className="bg-white border-blue rounded">
          <Button className=" bg-white blue-border rounded">
            <a href="http://www.asylumconnect.org/follow-us-subscribe/">
              <strong className="text-blue">
                Subscribe to our newsletter
              </strong>
            </a>
          </Button>
        </div>
      </div>

    </div>
    <div className="bg-light-grey padded-vertical text-grey">
      AsylumConnect, Inc. 2016. All rights reserved. Powered by One Degree.
    </div>
  </footer>
);

const MobileFooterButton = ({ icon, text }) => (
  <ButtonBase
    focusRipple
    className="flex-button bg-white uppercase"
  >
    {icon}
    <span className="bold">{text}</span>
  </ButtonBase>
);

MobileFooterButton.propTypes = {
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
}

const MobileView = () => (
  <footer className="flex-even">
    <MobileFooterButton
      icon={<SearchIcon />}
      text="Search"
    />
    <MobileFooterButton
      icon={<FavoritesIcon />}
      text="Favorites"
    />
    <MobileFooterButton
      icon={<LanguageIcon />}
      text="Language"
    />
    <MobileFooterButton
      icon={<AccountIcon />}
      text="Account"
    />
    <MobileFooterButton
      icon={<PrivacyIcon />}
      text="Privacy"
    />
  </footer>
);

const Footer = ({width}) => {
  if (width > 480)
    return <DesktopView />
  else
    return <MobileView />
};

Footer.propTypes = { width: PropTypes.number.isRequired };

export default withWidth(Footer);
