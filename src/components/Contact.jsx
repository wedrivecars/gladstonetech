import { BiPhone, BiEnvelope, BiMap, BiTime } from 'react-icons/bi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about our services? Get in touch with us. We're here to help you transform your business.
          </p>
          <div className="w-24 h-1 bg-linear-to-r from-purple-600 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <BiPhone className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Phone</h3>
                  <p className="text-slate-600">Mon-Fri from 8am to 5pm</p>
                  <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700 font-medium block mt-1">
                    (+234) 803-300-4581
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <BiEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Email</h3>
                  <p className="text-slate-600">We'll respond within 24hrs</p>
                  <a href="mailto:info@gladstonetech.com" className="text-blue-600 hover:text-blue-700 font-medium block mt-1">
                    info@gladstonetech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <BiMap className="w-6 h-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Office</h3>
                  <p className="text-slate-600">
                    8 Sanyaolu Street Oregun,<br />
                  Ikeja Lagos.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <BiTime className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-1">Business Hours</h3>
                  <p className="text-slate-600">
                    Monday - Friday: 8am - 5pm<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required('First name is required'),
                lastName: Yup.string().required('Last name is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                subject: Yup.string().required('Subject is required'),
                message: Yup.string().required('Message is required')
              })}
              onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
                try {
                  const response = await fetch('https://formsubmit.co/info@gladstonetech.com', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      name: `${values.firstName} ${values.lastName}`,
                      email: values.email,
                      subject: values.subject,
                      message: values.message,
                      _subject: `New Contact Form Submission: ${values.subject}`,
                      _captcha: false
                    })
                  });
                  
                  if (response.ok) {
                    setStatus({ type: 'success', message: 'Message sent successfully!' });
                    resetForm();
                  } else {
                    setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                  }
                } catch (error) {
                  setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
                }
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, status }) => (
                <Form className="bg-white p-8 rounded-2xl shadow-lg">
                  {status && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {status.message}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                        First Name
                      </label>
                      <Field
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="John"
                      />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                        Last Name
                      </label>
                      <Field
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                        placeholder="Doe"
                      />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      Subject
                    </label>
                    <Field
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="How can we help?"
                    />
                    <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      rows="4"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full rounded-lg py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      
      {/* Map Section - Full Width */}
      <div className="w-full h-[500px] relative -mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.355220527223!2d3.3614122744809576!3d6.602703022238951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9249336ddb1f%3A0x90e1e873d78fc7d5!2s8%20Sanyaolu%20Street%2C%20Oregun%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1761140553255!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
          className="absolute inset-0"
        ></iframe>
        {/* Gradient overlay for better integration */}
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-slate-50 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}

export default Contact;