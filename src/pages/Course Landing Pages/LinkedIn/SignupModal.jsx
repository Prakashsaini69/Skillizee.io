import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

// Main SignupModal Component
export default function SignupModal() {
  // State to control the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });
  
  // State for form validation errors
  const [errors, setErrors] = useState({});

  // State to show success message after submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State for loading state during submission
  const [isLoading, setIsLoading] = useState(false);

  // Check if user has already submitted the form
  const hasUserSubmitted = () => {
    try {
      return localStorage.getItem('skillizee_form_submitted') === 'true';
    } catch (error) {
      console.error('Error checking localStorage:', error);
      return false;
    }
  };

  // Mark user as having submitted the form
  const markUserAsSubmitted = () => {
    try {
      localStorage.setItem('skillizee_form_submitted', 'true');
      // Also store submission timestamp for future reference
      localStorage.setItem('skillizee_form_submitted_at', new Date().toISOString());
    } catch (error) {
      console.error('Error setting localStorage:', error);
    }
  };

  // useEffect to open the modal after 5 seconds when the component mounts
  // Only if the user hasn't submitted the form before
  useEffect(() => {
    // Check if user has already submitted the form
    if (hasUserSubmitted()) {
      console.log('User has already submitted the form, not showing modal');
      return;
    }

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form state for next time it opens
    setIsSubmitted(false);
    setFormData({ name: '', email: '', phoneNumber: '' });
    setErrors({});
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phoneNumber') {
      // Format phone number as user types
      const cleanValue = value.replace(/\D/g, '');
      let formattedValue = cleanValue;
      
      // Limit to 10 digits
      if (cleanValue.length <= 10) {
        formattedValue = cleanValue;
      }
      
      setFormData(prevState => ({
        ...prevState,
        [name]: formattedValue
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };
  
  // Function to validate the form data
  const validateForm = () => {
    let formErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
        formErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
        formErrors.name = "Name must be at least 2 characters long";
    }
    
    // Email validation
    if (!formData.email.trim()) {
        formErrors.email = "Email is required";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            formErrors.email = "Please enter a valid email address";
        }
    }
    
    // Phone number validation
    if (!formData.phoneNumber) {
        formErrors.phoneNumber = "Phone number is required";
    } else {
        // Remove all non-digit characters
        const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
        
        if (cleanPhone.length !== 10) {
            formErrors.phoneNumber = "Phone number must be exactly 10 digits";
        } else if (!/^[6-9]/.test(cleanPhone)) {
            formErrors.phoneNumber = "Phone number must start with 6, 7, 8, or 9";
        } else if (!/^\d{10}$/.test(cleanPhone)) {
            formErrors.phoneNumber = "Please enter a valid 10-digit number";
        }
    }
    
    setErrors(formErrors);
    // Return true if there are no errors
    return Object.keys(formErrors).length === 0;
  };

  // Function to submit data to Google Sheets
  const submitToGoogleSheets = async (data) => {
    try {
      // Replace this URL with your Google Apps Script web app URL
      const scriptURL = 'https://script.google.com/macros/s/AKfycby5vFpPZlR9rcBp37dxRnJaSbXZhh3DnrNK7UDvPmHx-eNEcn_ORlDmT5RPJbsq5SOq/exec';
      
      // Use fetch with proper error handling and no redirect
      const response = await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors', // This prevents CORS issues
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: data.name,
          email: data.email,
          phoneNumber: data.phoneNumber,
          timestamp: new Date().toISOString(),
          source: 'Bundle Registration Landing Page'
        })
      });
      
      // Since no-cors mode doesn't give us response details, we'll assume success
      // The important thing is that the request was sent
      console.log('Data submitted to Google Sheets successfully');
      return true;
      
    } catch (error) {
      console.error('Error submitting to Google Sheets:', error);
      return false;
    }
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        setIsLoading(true);
        
        try {
          const success = await submitToGoogleSheets(formData);
          if (success) {
            setIsSubmitted(true);
            // Mark user as having submitted the form
            markUserAsSubmitted();
            
            // Close the modal automatically after a delay
            setTimeout(() => {
                setIsModalOpen(false);
                // Reset form state
                setIsSubmitted(false);
                setFormData({ name: '', email: '', phoneNumber: '' });
                setErrors({});
            }, 3000);
          } else {
            alert('Failed to submit. Please try again.');
          }
        } catch (error) {
          console.error('Submission error:', error);
          alert('An error occurred. Please try again.');
        } finally {
          setIsLoading(false);
        }
    }
  };
  
  // If the modal is not open, don't render anything
  if (!isModalOpen) {
    return null;
  }

  // --- Class name definitions for clarity ---
  const baseInputClass = "w-full px-4 py-3 bg-gray-100 border-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 transition-colors";
  const errorInputClass = "border-red-500 focus:ring-red-500";
  const normalInputClass = "border-transparent focus:ring-blue-500";
  
  const nameInputClasses = baseInputClass + ' ' + (errors.name ? errorInputClass : normalInputClass);
  const emailInputClasses = baseInputClass + ' ' + (errors.email ? errorInputClass : normalInputClass);
  const phoneInputClasses = baseInputClass + ' ' + (errors.phoneNumber ? errorInputClass : normalInputClass);

  // Render the modal
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl transform transition-all duration-300 ease-in-out scale-100 overflow-hidden">
        
        {/* No close button - Form is mandatory */}
        
        {/* Header with Image */}
        {!isSubmitted && (
            <div className="w-full">
                <img 
                    src="https://res.cloudinary.com/dpstp4ovd/image/upload/v1755158586/Coming_Soon_3_rudwev.svg" 
                    alt="SkilliZee Community Banner"
                    className="w-full h-48 object-cover bg-blue-600"
                />
            </div>
        )}

        {/* Modal Content: Switches between form and success message */}
        <div className="p-4 md:p-6 text-center">
            {isSubmitted ? (
                // --- Success View ---
                <div className="py-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                       <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Thank You!</h2>
                    <p className="text-gray-500 mt-2">You've successfully joined.</p>
                    <p className="text-sm text-gray-400 mt-2">You won't see this form again on future visits.</p>
                </div>
            ) : (
                // --- Form View ---
                <>
                    {/* Header Text - Now below the image */}
                    <div className="mb-4">
                        <h2 className="text-2xl font-bold text-gray-800">Join Our Community</h2>
                        <p className="text-gray-500 mt-1">Enter your details below to get updates and insights first!</p>
                    </div>
                    
                    {/* Form */}
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-3">
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className={nameInputClasses}
                                />
                                {errors.name && <p className="text-red-500 text-sm text-left mt-1">{errors.name}</p>}
                            </div>
                            
                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email address"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={emailInputClasses}
                                />
                                {errors.email && <p className="text-red-500 text-sm text-left mt-1">{errors.email}</p>}
                            </div>
                            
                            {/* Phone Number Input */}
                            <div>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="Enter 10-digit phone number"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    maxLength="10"
                                    className={phoneInputClasses}
                                />
                                {errors.phoneNumber && <p className="text-red-500 text-sm text-left mt-1">{errors.phoneNumber}</p>}
                                <p className="text-xs text-gray-500 text-left mt-1">Format: 9876543210</p>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            disabled={isLoading}
                            className="w-full mt-4 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Submitting...' : 'Join Now'}
                        </button>
                    </form>
                    
                    {/* Form is mandatory - no option to decline */}
                    <p className="mt-3 text-sm text-gray-500">
                        This form is required to continue
                    </p>
                </>
            )}
        </div>
      </div>
    </div>
  );
}
