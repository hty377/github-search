import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import  { shallow, mount, render } from 'enzyme';
import SearchPage from "../components/SearchPage";


const mockData = {
    data:{
        user:{
            repositories:{
                totalCount:10,
                edges:{
                    node:[{
                        name: "test",
                        url:null,
                        description: null,
                        updatedAt: null
                    }]
                }
            }
        }
    }
}

describe('SearchPage', () => {
    it('should render SearchPage', ()=>{
        const wrapper = shallow(
            <MockedProvider  {...mockData}>
                <SearchPage />
            </MockedProvider>
        );
    expect(wrapper).toBeDefined();
    });
})