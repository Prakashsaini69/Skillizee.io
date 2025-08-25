// API utility functions for SkilliZee Lambda Backend
// This file provides helper functions for making API calls

import { config, API_ENDPOINTS } from '../config/api';

/**
 * Generic API GET request
 * @param {string} endpoint - API endpoint
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>} - API response
 */
export const apiGet = async (endpoint, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API GET request failed:', error);
    throw error;
  }
};

/**
 * Generic API POST request
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Data to send
 * @param {Object} options - Additional fetch options
 * @returns {Promise<Object>} - API response
 */
export const apiPost = async (endpoint, data, options = {}) => {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      body: JSON.stringify(data),
      ...options
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API POST request failed:', error);
    throw error;
  }
};

/**
 * Check if the backend is healthy
 * @returns {Promise<Object>} - Health check response
 */
export const checkBackendHealth = async () => {
  return apiGet(API_ENDPOINTS.health);
};

/**
 * Test webhook endpoint
 * @param {Object} data - Test data to send
 * @returns {Promise<Object>} - Webhook test response
 */
export const testWebhook = async (data) => {
  return apiPost(API_ENDPOINTS.testWebhook, data);
};

/**
 * Create a new order
 * @param {Object} orderData - Order data
 * @returns {Promise<Object>} - Order creation response
 */
export const createOrder = async (orderData) => {
  return apiPost(API_ENDPOINTS.createOrder, orderData);
};

/**
 * Check user enrollment status
 * @param {Object} userData - User data to check
 * @returns {Promise<Object>} - Enrollment check response
 */
export const checkUserEnrollment = async (userData) => {
  return apiPost(API_ENDPOINTS.checkUserEnrollment, userData);
};

/**
 * Verify payment and onboard user
 * @param {Object} paymentData - Payment verification data
 * @returns {Promise<Object>} - Payment verification response
 */
export const verifyPaymentAndOnboard = async (paymentData) => {
  return apiPost(API_ENDPOINTS.verifyPaymentAndOnboard, paymentData);
};

/**
 * Get course information
 * @returns {Promise<Object>} - Course information response
 */
export const getCourseInfo = async () => {
  return apiGet(API_ENDPOINTS.courseInfo);
};

/**
 * Test all API endpoints
 * @returns {Promise<Object>} - Test results
 */
export const testAllEndpoints = async () => {
  const results = {};
  
  try {
    // Test health endpoint
    results.health = await checkBackendHealth();
    console.log('✅ Health check passed');
  } catch (error) {
    results.health = { error: error.message };
    console.log('❌ Health check failed:', error.message);
  }

  try {
    // Test webhook endpoint
    results.webhook = await testWebhook({ test: true, timestamp: Date.now() });
    console.log('✅ Webhook test passed');
  } catch (error) {
    results.webhook = { error: error.message };
    console.log('❌ Webhook test failed:', error.message);
  }

  try {
    // Test course info endpoint
    results.courseInfo = await getCourseInfo();
    console.log('✅ Course info test passed');
  } catch (error) {
    results.courseInfo = { error: error.message };
    console.log('❌ Course info test failed:', error.message);
  }

  return results;
};
