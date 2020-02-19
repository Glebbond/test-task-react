import React from 'react';
import SVG from 'react-inlinesvg';
import Icon from './github.svg';
export default (prop) => <div className={prop.className}><SVG src={Icon} /></div>;