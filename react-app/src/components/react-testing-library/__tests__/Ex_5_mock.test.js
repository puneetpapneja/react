import {render, screen } from '@testing-library/react'
import Ex_5 from '../Ex_5'

describe('Ex_5 component Testing with mock data ',()=>{

    const mockData = [{id:1,title:'mocktitle',body:'mockbody'}]

    test('Verify posts are render or not', async()=>{

        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async ()=>  mockData
        })
        
        render(<Ex_5 />)
        const postElements = await screen.findAllByRole("posts")
        
        expect(postElements).not.toHaveLength(0)
    })
})