import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('button has correct initial color', () => {
    render(<App />);


  //find an element with the role of button and test of 'Change to blue'
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

    
  //expect the background color to be red
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' });


    //click the button
    fireEvent.click(colorButton);

    //expect the background color to be blue
    expect(colorButton).toHaveStyle({ backgroundColor: 'red' })

    //expect the button text content to be 'Change to red'
    expect(colorButton.textContent).toBe( 'Change to red');
});

test('button turns blue when clicked', () => {
    render(<App />);
    const colorButton = screen.getByRole('button', { name: "Change to blue" });
});
