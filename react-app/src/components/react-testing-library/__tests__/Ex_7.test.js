import {render} from '@testing-library/react'
import Ex_7 from '../Ex_7'

describe("Ex_7 Component render",()=>{
    let currentContainer = null;
    let unmountCallback = null
    beforeEach(() => {
        currentContainer = null;
        unmountCallback = null
    });

    afterEach(() => {
        // cleanup on exiting
        unmountCallback(currentContainer);        
        currentContainer.remove();
        currentContainer = null;
    });

    test("Render with or without name props",()=>{    
        const { container,unmount } =  render(<Ex_7 />)      
        currentContainer = container
        unmountCallback = unmount
    
        expect(container.textContent).toContain("Hello, Stranger!");
    })

    test("Render with  name props",()=>{
        const { container,unmount } =  render(<Ex_7 name ="Puneet"/>)      
        currentContainer = container
        unmountCallback = unmount      
        expect(container.textContent).toContain("Hello, Puneet!");
    })
})