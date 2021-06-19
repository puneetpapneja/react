import {shallow, mount} from 'enzyme'
import Ex_1 from '../Ex_1'

describe('Enzyme: Ex_1 component test',()=>{
    test("render component without error",()=>{        
        
        const wrapper = shallow(<Ex_1 />)
        
        
        
        /*using react testing library
        render(<Ex_1 />); //arrange
        //act nothing  
        console.log(screen.debug());      
        const outputElement = screen.getByText('initial text',{exact: false}) //assert
        expect(outputElement).toBeInTheDocument(); */
        
    })

    /*test("render changed text",()=>{        
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
    })*/
})