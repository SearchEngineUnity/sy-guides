import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'gatsby';

function CtaButton({ buttons }) {
  const buttonList = buttons.map((btn) => {
    if (btn.internalLink) {
      return (
        <Link key={btn.id} to={btn.to}>
          <Button className={`${btn.size} ${btn.borderRadius}btn`}>{btn.title}</Button>
        </Link>
      );
    }

    if (btn.externalLink) {
      return (
        <a key={btn.id} href={btn.href} target="_blank" rel="noopener noreferrer">
          <Button className={`${btn.size} ${btn.borderRadius}btn`}>{btn.title}</Button>
        </a>
      );
    }

    return null;
  });

  return buttonList;
}

export default CtaButton;
