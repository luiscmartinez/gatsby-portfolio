import React from 'react';
import PropTypes from 'prop-types';
import ReactLogo from '../components/Logo/react-logo.png';
import ReduxLogo from '../components/Logo/redux-logo.png';
import JSLogo from '../components/Logo/js-logo.png';
import GitLogo from '../components/Logo/git-logo.png';
import NodeLogo from '../components/Logo/node-logo.png';
import SQLLogo from '../components/Logo/sql-log.jpg';
import MongoLogo from '../components/Logo/mongo-logo.png';
import SassLogo from '../components/Logo/sass-logo.png';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import { CardContainer } from '../components/Card';
import { Image, Text, Flex, Box, Card } from 'rebass';

import styled from 'styled-components';

const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['15vh', '10vh']}
      width={['100vw', '100vw']}
      invertX
    />

    <Triangle
      color="secondary"
      height={['50vh', '40vh']}
      width={['70vw', '40vw']}
      invertY
    />

    <Triangle
      color="primaryDark"
      height={['40vh', '15vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);

const CARD_HEIGHT = '200px';

const MEDIA_QUERY_SMALL = '@media (max-width: 400px)';

const TechStack = props => {
  return (
    <Section.Container id="skills" Background={Background}>
      <Section.Header name="Skills" icon="💯" Box="skills" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img
            style={{
              width: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={ReactLogo}
            alt="react-logo"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img
            style={{
              width: '140%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            src={ReduxLogo}
            alt="redux-logo"
          />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img style={{ width: '85%' }} src={NodeLogo} alt="node-logo" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img style={{ width: '125%' }} src={SQLLogo} alt="sql-logo" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img style={{ width: '115%' }} src={MongoLogo} alt="mongo-logo" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img style={{ width: '105%' }} src={JSLogo} alt="js-logo" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img style={{ width: '100%' }} src={SassLogo} alt="sass-logo" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 250,
            width: 250,
            minHeight: 250,
            minWidth: 250,
            margin: '30px',
            background: 'white',
            borderRadius: '10px',
            padding: '30px',
            boxShadow:
              ' rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 1px 6px',
          }}
        >
          <img style={{ width: '105%' }} src={GitLogo} alt="git-logo" />
        </div>
      </div>
      <Section.Header />
    </Section.Container>
  );
};

TechStack.propTypes = {};

export default TechStack;

const Tech = styled.section`
  border: 1px solid red;
  width: 95%;
  margin: 0 auto;
`;
