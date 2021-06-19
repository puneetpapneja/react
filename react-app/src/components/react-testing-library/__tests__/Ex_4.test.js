import {render,screen} from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import Ex_4 from '../Ex_4'

describe('Ex_4 component test',()=>{
    test("render initial text",()=>{        
        render(<Ex_4 />); //arrange
        console.log(screen.debug())
        //act nothing             
        const outputElement = screen.getByText('initial text',{exact: false}) //assert
        expect(outputElement).toBeInTheDocument();
    })

    test("render changed text",()=>{        
        render(<Ex_4 />);        //arrange
        const clickHandler = screen.getByRole('button') //act
        UserEvent.click(clickHandler)        
        const outputElement = screen.getByText('text changed',{exact: false}) //assert
        expect(outputElement).toBeInTheDocument();
    })

    test("after button clicked initial text removed",()=>{        
        render(<Ex_4 />); //arrange        
        const clickHandler = screen.getByRole('button') //act
        UserEvent.click(clickHandler)        
        const outputElement = screen.queryByText('initial text',{exact: false}) //assert
        expect(outputElement).toBeNull();
    })
})