import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';


//Main = Principal
describe('Main component', () => {

    //To organize better the read of the tests, we put a describe to this context
    describe('When I open the bank app', () => {
        it('Show the bank name', () => {
            render(<App />);
            //Look in my html page if have a text Bytebank
            expect(screen.getByText('ByteBank')).toBeInTheDocument();
        });
    
        it('Show balance (saldo), the balance is visible ', () => {
            render(<App />);
    
            expect(screen.getByText('Saldo:')).toBeInTheDocument();
        });
    
        it('the button of accomplish (realizar) transaction to be visible', () => {
            render(<App/>);
    
            expect(screen.getByText('Realizar operação')).toBeInTheDocument();
        });

    });
})