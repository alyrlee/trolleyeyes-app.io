import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

/**
 * App Component Smoke Test
 */


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card 
        key='0'
        Title='title'
        Content='content' 
        />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  /**
 * App Component Snapshot Test
 */
 
  it('renders the UI as expected', () => {
    const app = renderer
      .create(<Card key='0'
      Title='title'
      Content='content'/>)
      .toJSON();
    expect(app).toMatchSnapshot();  
  });
