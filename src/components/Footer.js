import React from 'react';
import Button from 'material-ui/Button';

require('./Footer.scss');

const Footer = () => (
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

export default Footer;
