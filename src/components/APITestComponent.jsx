import React, { useState } from 'react';
import { testAllEndpoints, checkBackendHealth, testWebhook, createOrder, checkUserEnrollment, verifyPaymentAndOnboard, getCourseInfo } from '../utils/api';

/**
 * API Test Component for SkilliZee Lambda Backend
 * This component provides a UI for testing all API endpoints
 */
const APITestComponent = () => {
  const [testResults, setTestResults] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTest, setSelectedTest] = useState('all');
  const [testData, setTestData] = useState({
    name: 'Test User',
    email: 'test@example.com',
    phone: '9876543210',
    courseId: 'test-course-123',
    amount: 999,
    grade: '12th',
    password: 'testpass123',
    schoolName: 'Test School',
    address: 'Test Address',
    cityState: 'Test City, Test State',
    pincode: '123456'
  });

  // Test all endpoints
  const handleTestAll = async () => {
    setIsLoading(true);
    try {
      const results = await testAllEndpoints();
      setTestResults(results);
      console.log('All test results:', results);
    } catch (error) {
      console.error('Test all failed:', error);
      setTestResults({ error: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  // Test individual endpoint
  const handleTestEndpoint = async (endpoint) => {
    setIsLoading(true);
    try {
      let result;
      switch (endpoint) {
        case 'health':
          result = await checkBackendHealth();
          break;
        case 'webhook':
          result = await testWebhook({ test: true, timestamp: Date.now() });
          break;
        case 'createOrder':
          result = await createOrder(testData);
          break;
        case 'checkUserEnrollment':
          result = await checkUserEnrollment(testData);
          break;
        case 'verifyPaymentAndOnboard':
          result = await verifyPaymentAndOnboard({
            orderId: 'test-order-123',
            ...testData
          });
          break;
        case 'courseInfo':
          result = await getCourseInfo();
          break;
        default:
          throw new Error('Unknown endpoint');
      }
      setTestResults({ [endpoint]: result });
      console.log(`${endpoint} test result:`, result);
    } catch (error) {
      console.error(`${endpoint} test failed:`, error);
      setTestResults({ [endpoint]: { error: error.message } });
    } finally {
      setIsLoading(false);
    }
  };

  // Update test data
  const handleTestDataChange = (field, value) => {
    setTestData(prev => ({ ...prev, [field]: value }));
  };

  // Format test results for display
  const formatResult = (result) => {
    if (result.error) {
      return <span className="text-red-500">❌ {result.error}</span>;
    }
    return <span className="text-green-500">✅ Success</span>;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🔧 Lambda Backend API Tester</h1>
      
      {/* Test Controls */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Test Controls</h2>
        
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={handleTestAll}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isLoading ? 'Testing...' : '🧪 Test All Endpoints'}
          </button>
          
          <select
            value={selectedTest}
            onChange={(e) => setSelectedTest(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Select Individual Test</option>
            <option value="health">Health Check</option>
            <option value="webhook">Test Webhook</option>
            <option value="createOrder">Create Order</option>
            <option value="checkUserEnrollment">Check User Enrollment</option>
            <option value="verifyPaymentAndOnboard">Verify Payment & Onboard</option>
            <option value="courseInfo">Get Course Info</option>
          </select>
          
          {selectedTest !== 'all' && (
            <button
              onClick={() => handleTestEndpoint(selectedTest)}
              disabled={isLoading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? 'Testing...' : `Test ${selectedTest}`}
            </button>
          )}
        </div>
      </div>

      {/* Test Data Configuration */}
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Test Data Configuration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(testData).map(([field, value]) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {field.replace(/([A-Z])/g, ' $1').trim()}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleTestDataChange(field, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Test Results */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Test Results</h2>
        
        {Object.keys(testResults).length === 0 ? (
          <p className="text-gray-500">No tests run yet. Click "Test All Endpoints" to start testing.</p>
        ) : (
          <div className="space-y-4">
            {Object.entries(testResults).map(([endpoint, result]) => (
              <div key={endpoint} className="p-4 border border-gray-200 rounded-lg">
                <h3 className="font-semibold text-lg mb-2 capitalize">
                  {endpoint.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="mb-2">
                  Status: {formatResult(result)}
                </div>
                {result && !result.error && (
                  <details className="text-sm">
                    <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                      View Response Details
                    </summary>
                    <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-x-auto">
                      {JSON.stringify(result, null, 2)}
                    </pre>
                  </details>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* API Information */}
      <div className="p-4 bg-blue-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-800">ℹ️ API Information</h2>
        <div className="text-sm text-blue-700 space-y-2">
          <p><strong>Base URL:</strong> Check your API configuration</p>
          <p><strong>Endpoints:</strong> /api/health, /api/test-webhook, /api/create-order, /api/check-user-enrollment, /api/verify-payment-and-onboard, /api/course-info</p>
          <p><strong>Note:</strong> This tester helps verify your Lambda backend is working correctly before testing the full payment flow.</p>
        </div>
      </div>
    </div>
  );
};

export default APITestComponent;
