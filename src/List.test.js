import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

/**
 * App Component Smoke Test
 */

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List
      key='0'
      header="Test Header"
      cards={[]}
      />, div);
  
    ReactDOM.unmountComponentAtNode(div);    
  });

   /**
 * App Component Snapshot Test
 */

it ('renders this UI as expected', () => {
    const app = renderer.create(<List key='0' header='test header' cards={[]}/>).toJSON();
    expect(app).toMatchSnapshot();
  })
