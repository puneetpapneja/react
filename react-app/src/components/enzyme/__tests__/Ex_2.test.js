import {shallow, mount} from 'enzyme'
import Ex_1 from '../Ex_1'

let wrapper = null;
beforeEach(()=> {
    wrapper = shallow(<Ex_1 />)
})

describe('Enzyme: Ex_1 component test',()=>{
    test("render one h1 tag",()=>{        
        expect(wrapper.find('h1')).toHaveLength(1)
    })
    
   /* test("render one p tag",()=>{        
        expect(wrapper.find('p')).toHaveLength(1)
    })  */
    
})