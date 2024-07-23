import React, { useState } from 'react';
import '../css/Donation.css';

const Dummy = () => {
    const [amount, setAmount] = useState('');
    const [customAmount, setCustomAmount] = useState('');
    const [details, setDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        pan: '',
        citizenship: 'Indian'
    });
    const [paymentMethod, setPaymentMethod] = useState('');

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setAmount('');
    };

    const handleDetailsChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit form logic
        alert('Form submitted');
    };

    return (
        <div className="donation-form-container">
            <h2>Make a Donation</h2>
            <form onSubmit={handleSubmit}>
                <div className="amount-selection">
                    <h3>Select Donation Amount</h3>
                    <div>
                        <label>
                            <input type="radio" value="4500" checked={amount === '4500'} onChange={handleAmountChange} />
                            ₹4500
                        </label>
                        <label>
                            <input type="radio" value="9000" checked={amount === '9000'} onChange={handleAmountChange} />
                            ₹9000
                        </label>
                        <label>
                            <input type="radio" value="13500" checked={amount === '13500'} onChange={handleAmountChange} />
                            ₹13500
                        </label>
                        <label>
                            <input type="radio" value="18000" checked={amount === '18000'} onChange={handleAmountChange} />
                            ₹18000
                        </label>
                        <label>
                            <input type="radio" value="24000" checked={amount === '24000'} onChange={handleAmountChange} />
                            ₹24000
                        </label>
                        <label>
                            <input type="radio" value="30000" checked={amount === '30000'} onChange={handleAmountChange} />
                            ₹30000
                        </label>
                        <label>
                            <input type="radio" value="45000" checked={amount === '45000'} onChange={handleAmountChange} />
                            ₹45000
                        </label>
                        <label>
                            <input type="radio" value="60000" checked={amount === '60000'} onChange={handleAmountChange} />
                            ₹60000
                        </label>
                        <label>
                            <input type="radio" value="75000" checked={amount === '75000'} onChange={handleAmountChange} />
                            ₹75000
                        </label>
                        <label>
                            <input type="radio" value="90000" checked={amount === '90000'} onChange={handleAmountChange} />
                            ₹90000
                        </label>
                        <label>
                            <input type="radio" value="150000" checked={amount === '150000'} onChange={handleAmountChange} />
                            ₹150000
                        </label>
                    </div>
                    <label>
                        <input type="radio" value="custom" checked={amount === '' && customAmount !== ''} onChange={() => setAmount('')} />
                        Custom Amount:
                        <input type="number" value={customAmount} onChange={handleCustomAmountChange} placeholder="Enter amount" />
                    </label>
                </div>

                <div className="personal-details">
                    <h3>Personal Details</h3>
                    <div>
                        <label>
                            Name:
                            <input type="text" name="name" value={details.name} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            Email:
                            <input type="email" name="email" value={details.email} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            Phone:
                            <input type="tel" name="phone" value={details.phone} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            Address:
                            <input type="text" name="address" value={details.address} onChange={handleDetailsChange} required />
                        </label>
                        <label>
                            PAN:
                            <input type="text" name="pan" value={details.pan} onChange={handleDetailsChange} required />
                        </label>
                    </div>
                </div>

                <div className="payment-method">
                    <h3>Select Payment Method</h3>
                    <label>
                        <input type="radio" value="debit" checked={paymentMethod === 'debit'} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Debit/Credit Card
                    </label>
                    <label>
                        <input type="radio" value="netbanking" checked={paymentMethod === 'netbanking'} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Net Banking
                    </label>
                    <label>
                        <input type="radio" value="wiretransfer" checked={paymentMethod === 'wiretransfer'} onChange={(e) => setPaymentMethod(e.target.value)} />
                        Wire Transfer
                    </label>
                </div>

                <div className="confirmation">
                    <label>
                        <input type="checkbox" required />
                        I agree to the terms and conditions
                    </label>
                </div>

                <button type="submit">Donate</button>
            </form>
        </div>
    );
};

export default Dummy;
