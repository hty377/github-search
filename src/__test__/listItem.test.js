import React from "react";
import { shallow } from "enzyme";
import ListItem from "../components/ListItem";

it('should render ListItem', () => {
    const wrapper = shallow(<ListItem 
       repo = {{
           nodes:[{
               url: null,
               name: "testing",
               description: null,
               updatedAt: null
           }]
       }}
    />);
    expect(wrapper.exists() ).toBeTruthy();
});