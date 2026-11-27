import { useState } from 'react';
import { AlertCircle, CheckCircle2, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionHeader from '../common/SectionHeader';
import './Contact.css';

const INITIAL_FORM_STATE = {
  fullName: '',
  email: '',
  message: '',
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState({});
  const [submittedName, setSubmittedName] = useState('');
  const [sectionRef, isVisible] = useScrollReveal();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear the field-specific error as soon as the user edits it
    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }

    if (submittedName) {
      setSubmittedName('');
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    const trimmedName = formData.fullName.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      nextErrors.fullName = 'Please enter your full name.';
    } else if (trimmedName.length < 2) {
      nextErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!trimmedEmail) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
      nextErrors.email = 'Please enter a valid email address (e.g., alex@studio.com).';
    }

    if (!trimmedMessage) {
      nextErrors.message = 'Please tell us a little about your project.';
    } else if (trimmedMessage.length < 10) {
      nextErrors.message = 'Message must be at least 10 characters.';
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmittedName('');
      return;
    }

    const validName = formData.fullName.trim();
    setErrors({});
    setSubmittedName(validName);
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <section id="contact" className="section section--alt" ref={sectionRef}>
      <div className="container">
        <div className="contact-layout">
          <div className={`contact-info reveal ${isVisible ? 'reveal--visible' : ''}`}>
            <SectionHeader
              label="LET'S WORK TOGETHER"
              heading="HAVE A PROJECT IN MIND?"
              description="Let's discuss your ideas and create something extraordinary together."
            />

            <div className="contact-details">
              <div className="contact-detail-card">
                <div className="contact-detail-card__icon" aria-hidden="true">
                  <Sparkles size={19} />
                </div>
                <div>
                  <div className="contact-detail-card__label">Agency Philosophy</div>
                  <div className="contact-detail-card__value">
                    We transform creative ideas into powerful digital experiences through
                    innovative design, modern technology, and strategic thinking.
                  </div>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-chip">
                  <Mail size={16} aria-hidden="true" />
                  <span>hello@pixora.studio (demo)</span>
                </div>
                <div className="contact-detail-chip">
                  <MapPin size={16} aria-hidden="true" />
                  <span>Remote &bull; Worldwide</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`contact-form-card reveal ${isVisible ? 'reveal--visible' : ''}`}
            style={{ '--reveal-delay': '120ms' }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {submittedName && (
                <div className="contact-alert contact-alert--success" role="status">
                  <CheckCircle2 size={20} className="contact-alert__icon" aria-hidden="true" />
                  <div>
                    <strong>Thank you, {submittedName}!</strong>
                    <p>
                      Your project inquiry passed validation and has been previewed in this
                      frontend demo (no external email was sent).
                    </p>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name <span aria-hidden="true">*</span>
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Alex Mercer"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-input ${errors.fullName ? 'form-input--error' : ''}`}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                />
                {errors.fullName && (
                  <p id="fullName-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address <span aria-hidden="true">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'form-input--error' : ''}`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your timeline, goals, and what we can build together..."
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input form-textarea ${errors.message ? 'form-input--error' : ''}`}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="form-error" role="alert">
                    <AlertCircle size={14} aria-hidden="true" />
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="contact-form__footer">
                <button type="submit" className="btn btn--primary contact-form__submit">
                  Send Message
                  <Send size={17} aria-hidden="true" />
                </button>
                <span className="contact-form__note">
                  Frontend interactive validation demo
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
