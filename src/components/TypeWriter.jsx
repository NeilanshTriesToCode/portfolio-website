// Component displaying text, with a Typing effect
import React, { useState, useEffect, useRef } from 'react';

const TypeWriter = ({ text }) => {
    // state-variable for displaying the text
    const [currentText, setCurrentText] = useState('');

    // useRef to keep track of current index of text that's being displayed
    /* NOTE: useRef() is also used to keep track of variable values. 
             The change in its corresponding variable doesn't cause re-renders.
            -> Moreover, the value persists across component re-renders, which is
               why we're using it to track the current index of the text that's being printed.
    */
   const index = useRef(0);

    // useEffect for typing effect
    /*
    - useEffect will have a setTimeout() function.
    - setTimeout() will update the state-variable currentText at a fixed interval
    - The <h1> tag printing the state-variable value will appear to have a typing animation
    */
   useEffect(() => {
        const intervalID = setTimeout(() => {
            // update currentText at every interval
            if(index.current < text.length){
               // capturing index.current in a new, temporary variable
                /*
                REASON -> CLOSURES
                - Update state methods (setCurrentText() in this case) don't execute immediately and are scheduled.
                - A new closure is created inside setCurrentText().
                - So when setCurrentState() is executed, its closure may use the current value of index.current,
                  rather than the value at the time setCurrentState() was called.
                - Since then the value of index.current may have changed, and may not reflect the previous value.
                - So to avoid using the updated value of index.current and to use the value of index.current at the time 
                  setCurrentText() was called, store it in a temp variable.
                - And then use that temp variable inside setCurrentText():
                  setCurrentText(current => current + text[temp]) instead of setCurrentText(current => current + text[index.current])
                */
               const currentIndex = index.current;
                setCurrentText(current => current + text[currentIndex]);
            }
            index.current++;  
        }, 85);
        

        // cleanup function to disconnect setTimeout()
        return () => clearInterval(intervalID);
   }, [currentText]);

    return (
        <h1 className='mb-4 title-font font-blacksans font-medium text-white text-4xl md:text-5xl'>{currentText}</h1>
    );
}

export default TypeWriter;