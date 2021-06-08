import Ex_6 from '../Ex_6'
import renderer from 'react-test-renderer';

describe('Ex_6 component testing',()=>{
    test('render Example 6',()=>{
        //arrange
        const tree = renderer.create(<Ex_6/>).toJSON();
    
        //act 
        //nothing
    
        //assert        
        expect(tree).toMatchSnapshot();    
    })
})
