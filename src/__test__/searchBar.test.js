import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from "../components/SearchBar";

it('should display default placeholder', () => {
    const wrapper = shallow(<SearchBar 
        userName = "null"
        placeholder = "typing username..."
    />);
    expect(wrapper.exists() ).toBeTruthy();
});
