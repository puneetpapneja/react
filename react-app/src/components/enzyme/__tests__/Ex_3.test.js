import {shallow, mount} from 'enzyme'
import Ex_1 from '../Ex_1'

let wrapper = null;
beforeEach(()=> {
    wrapper = mount(<Ex_1 />)
})

describe('Enzyme: Ex_1 component test',()=>{
    test("render one h1 tag",()=>{        
        expect(wrapper.find('h1')).toHaveLength(1)
    })
    
    test("render update state",()=>{   
        //console.log("state value : " +wrapper.state('isChangeText'))
        //wrapper.setState({isChangeText:true})
       // console.log("after changestate value : " +wrapper.state('isChangeText'))
        //expect(wrapper.find('p')).toHaveLength(1)
        expect(wrapper.find('p').text()).toEqual('Initial text')
    })  
    
})