import React, { useState } from 'react';
import { submitApplicationForm } from '@/utils/api';

const ApplyForm = ({
  selectOptions = [],
  selectPlaceholder = "Select Option",
  title = 'Send Your Request',
    subtitle = ' Get Call Back',
    buttonText = 'Send Request',
  onSubmit,
  showDynamicSelect = true,        // NEW: default true
  showDetailsTextarea = false,     // NEW: default false
  formType = 'Application'         // NEW: form type for email subject
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    region: '',
    selectedOption: '',
    details: ''  // for textarea
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  // All 31 regions of Tanzania
  const tanzaniaRegions = [
    'Arusha', 'Dar es Salaam', 'Dodoma', 'Geita', 'Iringa', 'Kagera',
    'Kaskazini Pemba', 'Kaskazini Unguja', 'Katavi', 'Kigoma', 'Kilimanjaro',
    'Kusini Pemba', 'Kusini Unguja', 'Lindi', 'Manyara', 'Mara', 'Mbeya',
    'Mjini Magharibi', 'Morogoro', 'Mtwara', 'Mwanza', 'Njombe', 'Pwani',
    'Rukwa', 'Ruvuma', 'Shinyanga', 'Simiyu', 'Singida', 'Songwe', 'Tabora', 'Tanga'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear status message when user starts typing
    if (submitStatus.message) {
      setSubmitStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name and Email).'
      });
      return;
    }

    setSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      // Send to API
      await submitApplicationForm(formData, formType);
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your submission! We will contact you soon.'
      });
      
      // Call custom onSubmit if provided (before resetting form)
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        region: '',
        selectedOption: '',
        details: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Failed to submit application. Please try again later.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="col-xl-12 mt-5">
      <section className="apply-form-area">
        <div className="row">
          <div className="col-xl-12">
            <div className="apply-form-box clearfix">
              <div className="apply-form-box__content">
                <div className="sec-title">
                  <h2>{title} &<br /> {subtitle}</h2>
                  <div className="sub-title">
                    <p>Fill all the necessary details and Get call from experts.</p>
                  </div>
                </div>

                <form id="apply-form" className="default-form2" onSubmit={handleSubmit}>
                  {/* Status Message */}
                  {submitStatus.message && (
                    <div className={`alert ${submitStatus.type === 'success' ? 'alert-success' : 'alert-danger'}`} 
                         style={{
                           padding: '12px 20px',
                           marginBottom: '20px',
                           borderRadius: '4px',
                           backgroundColor: submitStatus.type === 'success' ? '#d4edda' : '#f8d7da',
                           color: submitStatus.type === 'success' ? '#155724' : '#721c24',
                           border: `1px solid ${submitStatus.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                         }}>
                      {submitStatus.message}
                    </div>
                  )}
                  
                  {/* Row 1: Name & Email */}
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="form-group">
                        <div className="input-box">
                          <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            disabled={submitting}
                          />
                          <div className="icon"><i className="fas fa-user"></i></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="form-group">
                        <div className="input-box">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            disabled={submitting}
                          />
                          <div className="icon"><i className="fas fa-envelope-open"></i></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Phone & Region */}
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="form-group">
                        <div className="input-box">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            disabled={submitting}
                          />
                          <div className="icon"><i className="fas fa-phone-alt"></i></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6">
                      <div className="form-group">
                        <div className="select-box clearfix">
                          <select
                            className="wide"
                            name="region"
                            value={formData.region}
                            onChange={handleChange}
                            required
                            disabled={submitting}
                          >
                            <option value="" disabled>City/Region</option>
                            {tanzaniaRegions.map((region, index) => (
                              <option key={index} value={region}>{region}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Dynamic Select (Conditional) */}
                  {showDynamicSelect && (
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="form-group">
                          <div className="select-box clearfix">
                            <select
                              className="wide"
                              name="selectedOption"
                              value={formData.selectedOption}
                              onChange={handleChange}
                              required
                              disabled={submitting}
                            >
                              <option value="" disabled>{selectPlaceholder}</option>
                              {selectOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6"></div>
                    </div>
                  )}

                  {/* Optional Textarea */}
                  {showDetailsTextarea && (
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group">
                          <textarea
                            name="details"
                            placeholder="Message"
                            value={formData.details}
                            onChange={handleChange}
                            rows="4"
                            className="form-control"
                            disabled={submitting}
                            style={{
                              width: '100%',
                              padding: '12px 20px',
                              border: '1px solid #f6f6f6',
                              borderRadius: '0',
                              fontFamily: 'var(--thm-font)',
                              fontSize: '16px',
                              color: '#7f7873',
                              resize: 'vertical',
                              opacity: submitting ? 0.6 : 1,
                              cursor: submitting ? 'not-allowed' : 'text'
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="button-box">
                        <button 
                          className="btn-one" 
                          type="submit"
                          disabled={submitting}
                          style={{ 
                            opacity: submitting ? 0.6 : 1, 
                            cursor: submitting ? 'not-allowed' : 'pointer' 
                          }}
                        >
                          <span className="txt">{submitting ? 'Submitting...' : buttonText}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyForm;