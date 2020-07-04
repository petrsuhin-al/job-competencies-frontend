import logo from '../../logo.png';
import React from 'react';
import './Textarea.scss';

export function Textarea() {
  return (
    <header className="app-header">
      <img
        src={logo}
        className="app-header-logo"
        alt="logo"
      />
      <a
        className="app-header-link"
        href="https://xn--80aaap2atgrpcmp.xn--p1ai/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Разработано в рамках хакатона "Хакатон Труда"
      </a>
    </header>
  );
}
