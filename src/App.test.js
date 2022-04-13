import React from 'react';
import { render, screen } from '@testing-library/react';

import App, {calcularNovoSaldo} from './App';


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

    // Testing a function
    describe('When I realized a transaction', () => {
        it('of withdraw, the value will decrease', () => {
            const valores = {
                transacao: 'saque',
                valor: 50
            };

            const novoSaldo = calcularNovoSaldo(valores, 150);
            expect(novoSaldo).toBe(100);
        })
    });
});