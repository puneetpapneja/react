import Ex_2 from '../Ex_2'
import {render, screen} from '@testing-library/react'

describe('Ex_2 component testing',()=>{
    test('render Example 2',()=>{
        //arrange
        render(<Ex_2 />);
    
        //act 
        //nothing
        
        //assert
        const outputElement = screen.getByText("Example 2",{exact: false})
        expect(outputElement).toBeInTheDocument();
    
    })
})
