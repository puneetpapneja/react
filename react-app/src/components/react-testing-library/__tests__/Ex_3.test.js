import {render,screen} from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import Ex_3 from '../Ex_3'

describe('Ex_3 component test',()=>{
    test('render "initial text"',()=>{
        render(<Ex_3 />);         //arrange
        //act nothing        
        const outputElement = screen.getByText('initial text',{exact: false}) //assert
        expect(outputElement).toBeInTheDocument();
    })

    test('render "changed text"',()=>{        
        render(<Ex_3 />);        // arrange
        const clickHandler = screen.getByRole('button') //act
        UserEvent.click(clickHandler)
        const outputElement = screen.getByText('text changed',{exact: false}) //assert
        expect(outputElement).toBeInTheDocument();
    })

    test('"Initial text" removed if button click event fired',()=>{        
        render(<Ex_3 />); //arrange        
        const clickHandler = screen.getByRole('button') //act
        UserEvent.click(clickHandler)       //assert
        const outputElement = screen.queryByText('initial text',{exact: false})
        expect(outputElement).toBeNull();
    })
})