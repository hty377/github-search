import React from 'react';
import { shallow, mount, render } from 'enzyme';
import List from "../components/List";

const props = {
    onClick: ()=> {},
    data:[{
        length: 1,
    }]
}

describe('List', () => {
    it('should render List Component', () => {
        const wrapper = shallow(<List 
            {...props}

        />);
        expect(wrapper.exists() ).toBeTruthy();
    });



})