
import './Wallet.css'; 
class Wallet {
    constructor(owner) {
        this.owner = owner;
        this.balance = 0;
        this.transactions = [];
    }

    // Method to generate a unique transaction ID
    generateTransactionID() {
        return `${this.owner}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    // Method to check the wallet balance
    getBalance() {
        return this.balance;
    }

    // Method to receive funds
    receive(amount, description = 'Funds received') {
        if (amount <= 0) {
            console.error("Amount to receive must be positive.");
            return;
        }

        this.balance += amount;
        const transaction = {
            id: this.generateTransactionID(),
            type: 'receive',
            amount: amount,
            description: description,
            date: new Date()
        };
        this.transactions.push(transaction);
        console.log(`${this.owner} received ${amount} units. New balance: ${this.balance}`);
    }

    // Method to send funds
    send(amount, recipientWallet, description = 'Funds sent') {
        if (amount <= 0) {
            console.error("Amount to send must be positive.");
            return;
        }

        if (this.balance < amount) {
            console.error("Insufficient balance.");
            return;
        }

        this.balance -= amount;
        const transaction = {
            id: this.generateTransactionID(),
            type: 'send',
            amount: amount,
            recipient: recipientWallet.owner,
            description: description,
            date: new Date()
        };
        recipientWallet.receive(amount, `Received from ${this.owner}`);
        this.transactions.push(transaction);
        console.log(`${this.owner} sent ${amount} units to ${recipientWallet.owner}. New balance: ${this.balance}`);
    }

    // Method to view transaction history
    getTransactions() {
        return this.transactions;
    }
}

export default Wallet;
