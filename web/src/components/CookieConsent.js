import React from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';

function Cookie() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      expires={150}
      enableDeclineButton
      flipButtons
      cookieName="gatsby-gdpr-google-analytics"
      style={{ backgroundColor: '#5a5a5a', color: 'white', borderTop: '4px solid #FCCE09' }}
      declineButtonStyle={{ backgroundColor: '#f26b32', color: 'white', borderRadius: '4px' }}
      buttonStyle={{ backgroundColor: '#FCCE09', color: '#5A5A5A', borderRadius: '4px' }}
    >
      This site uses cookies ...
    </CookieConsent>
  );
}

export default Cookie;
