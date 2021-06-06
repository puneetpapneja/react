import Ex_2 from '../Ex_2'
import {render, screen} from '@testing-library/react'

describe('Ex_2 component testing',()=>{
    test('render hello from Ex_2',()=>{
        //arrange
        render(<Ex_2 />);
    
        //act 
        //nothing
    
        //assert
        const outputElement = screen.getByText("hello from",{exact: false})
        expect(outputElement).toBeInTheDocument();
    
    })
})
