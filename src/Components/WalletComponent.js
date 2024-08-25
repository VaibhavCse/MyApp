import React, { useState } from 'react';
import Wallet from './Wallet';
import './Wallet.css';

const WalletComponent = () => {
    const [aliceWallet, setAliceWallet] = useState(new Wallet('Alice'));
    const [bobWallet, setBobWallet] = useState(new Wallet('Bob'));

    const receiveFunds = (amount, wallet) => {
        wallet.receive(amount);
        setAliceWallet(new Wallet('Alice', wallet.getBalance(), wallet.getTransactions()));
    };

    const sendFunds = (amount, fromWallet, toWallet) => {
        fromWallet.send(amount, toWallet);
        setAliceWallet(new Wallet('Alice', fromWallet.getBalance(), fromWallet.getTransactions()));
        setBobWallet(new Wallet('Bob', toWallet.getBalance(), toWallet.getTransactions()));
    };

    return (
        <div className="wallet-container">
            <h1 className="title">Wallet Example</h1>
            <div className="balance-container">
                <div className="balance-card">
                    <h2>Alice's Wallet</h2>
                    <p>Balance: <span>{aliceWallet.getBalance()}</span></p>
                    <button className="walletbtn" onClick={() => receiveFunds(100, aliceWallet)}>Alice Receives 100</button>
                    <h3>Transaction History</h3>
                    <ul className="transaction-list">
                        {aliceWallet.getTransactions().map(tx => (
                            <li key={tx.id} className="transaction-item">
                                <span className="date">{tx.date.toLocaleString()}</span>: 
                                <span className={`transaction-type ${tx.type}`}>{tx.type}</span> 
                                <span className="amount">{tx.amount}</span> - 
                                <span className="description">{tx.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="balance-card">
                    <h2>Bob's Wallet</h2>
                    <p>Balance: <span>{bobWallet.getBalance()}</span></p>
                    <button className="walletbtn" onClick={() => sendFunds(50, aliceWallet, bobWallet)}>Alice Sends 50 to Bob</button>
                    <h3>Transaction History</h3>
                    <ul className="transaction-list">
                        {bobWallet.getTransactions().map(tx => (
                            <li key={tx.id} className="transaction-item">
                                <span className="date">{tx.date.toLocaleString()}</span>: 
                                <span className={`transaction-type ${tx.type}`}>{tx.type}</span> 
                                <span className="amount">{tx.amount}</span> - 
                                <span className="description">{tx.description}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WalletComponent;
