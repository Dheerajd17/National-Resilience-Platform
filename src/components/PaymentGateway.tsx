import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Smartphone, QrCode } from 'lucide-react';

const PaymentGateway: React.FC = () => {
  const navigate = useNavigate();

  const handlePaymentMethod = (method: string) => {
    // Here you would integrate with the actual payment gateway
    console.log(`Processing payment with ${method}`);
    alert(`Payment initiated with ${method}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose Payment Method</h1>
        
        <div className="space-y-4">
          <button
            onClick={() => handlePaymentMethod('Credit/Debit Card')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-4"
          >
            <CreditCard className="h-8 w-8 text-blue-600" />
            <span className="text-lg">Credit/Debit Card</span>
          </button>

          <button
            onClick={() => handlePaymentMethod('UPI')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-4"
          >
            <QrCode className="h-8 w-8 text-green-600" />
            <span className="text-lg">UPI Payment</span>
          </button>

          <button
            onClick={() => handlePaymentMethod('Google Pay')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-4"
          >
            <Smartphone className="h-8 w-8 text-blue-600" />
            <span className="text-lg">Google Pay</span>
          </button>

          <button
            onClick={() => handlePaymentMethod('Razorpay')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-4"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/razorpay-icon.png" 
                alt="Razorpay" 
                className="max-w-full max-h-full object-contain"
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <span className="text-lg">Razorpay</span>
          </button>

          <button
            onClick={() => handlePaymentMethod('Amazon Pay')}
            className="w-full p-4 border rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-4"
          >
            <div className="w-8 h-8 flex items-center justify-center">
              <img 
                src="/amazon-pay-icon.png" 
                alt="Amazon Pay" 
                className="max-w-full max-h-full object-contain"
                style={{ width: '32px', height: '32px' }}
              />
            </div>
            <span className="text-lg">Amazon Pay</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:text-blue-800"
          >
            Cancel Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway; 