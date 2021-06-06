import {render, screen } from '@testing-library/react'
import Ex_5 from '../Ex_5'

describe('Ex_5 component Testing',()=>{

    test('Verify posts are render or not', async()=>{
        render(<Ex_5 />)
        const postElements = await screen.findAllByRole("posts",{},{timeout:5000})

        expect(postElements).not.toHaveLength(0)
    })
})