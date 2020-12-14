import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react'
import {shallow} from 'enzyme'

// test('Login navBar method exists', () => {
//   const wrapper = shallow(<App />)
//   wrapper.instance().navBarLoginBtn()

//   // wrapper.update()
//   // expect(wrapper.state().loginNavBar).toBeFalsy()
//   // expect(wrapper.exists('#registrationForm')).toEqual(false)
// })   