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
          <div className="flex flex-col space-y-8 min-h-[600px] lg:min-h-[700px]">
            {/* Phone Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <BiPhone className="w-6 h-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Phone</h3>
                  <p className="text-slate-600 mb-2">Mon-Fri from 8am to 5pm</p>
                  <a href="tel:+2348033004581" className="text-purple-600 hover:text-purple-700 font-medium block">
                    (+234) 803-300-4581
                  </a>
                  <a href="tel:+2348093004581" className="text-purple-600 hover:text-purple-700 font-medium block">
                    (+234) 809-300-4581
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <BiEnvelope className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Email</h3>
                  <p className="text-slate-600 mb-2">We'll respond within 24hrs</p>
                  <a href="mailto:info@gladstonetech.com" className="text-blue-600 hover:text-blue-700 font-medium block">
                    info@gladstonetech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Office Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-teal-100 p-3 rounded-xl">
                  <BiMap className="w-6 h-6 text-teal-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Office</h3>
                  <p className="text-slate-600">
                    8 Sanyaolu Street Oregun,<br />
                  Ikeja Lagos.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <BiTime className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Business Hours</h3>
                  <p className="text-slate-600">
                    Monday - Friday: 8am - 5pm<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 h-full">
            <Formik
              initialValues={{
                fullName: '',
                company: '',
                email: '',
                phone: '',
                primaryService: '',
                industry: '',
                serviceLocation: '',
                serviceDate: '',
                details: ''
              }}
              validationSchema={Yup.object({
                fullName: Yup.string().required('Full name is required'),
                company: Yup.string().required('Company/Organization is required'),
                email: Yup.string().email('Invalid email address').required('Email is required'),
                phone: Yup.string().required('Phone number is required'),
                primaryService: Yup.string().required('Primary service is required'),
                industry: Yup.string().required('Industry sector is required'),
                serviceLocation: Yup.string().required('Service location is required'),
                serviceDate: Yup.string().required('Service timeline is required'),
                details: Yup.string().required('Details are required')
              })}
              onSubmit={(values, { setSubmitting, setStatus }) => {
                setStatus({ type: 'success', message: 'Thank you! Your message is being sent. You will be redirected to a confirmation page.' });
                setTimeout(() => {
                  const form = document.createElement('form');
                  form.method = 'POST';
                  form.action = 'https://formsubmit.co/info@gladstonetech.com';
                  
                  const fields = {
                    name: values.fullName,
                    company: values.company,
                    email: values.email,
                    phone: values.phone,
                    primaryService: values.primaryService,
                    industry: values.industry,
                    serviceLocation: values.serviceLocation,
                    serviceDate: values.serviceDate,
                    details: values.details,
                    _subject: `New Service Request: ${values.primaryService}`,
                    _captcha: 'false'
                  };
                  
                  Object.keys(fields).forEach(key => {
                    const input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = fields[key];
                    form.appendChild(input);
                  });
                  
                  document.body.appendChild(form);
                  form.submit();
                }, 1000);
                setSubmitting(false);
              }}
            >
              {({ isSubmitting, status }) => (
                <Form className="bg-white p-8 rounded-2xl shadow-lg min-h-[600px] lg:min-h-[700px] flex flex-col">
                  {status && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {status.message}
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <Field
                        type="text"
                        id="fullName"
                        name="fullName"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="John Doe"
                      />
                      <ErrorMessage name="fullName" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
                        Company/Organization *
                      </label>
                      <Field
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="Your Company"
                      />
                      <ErrorMessage name="company" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <Field
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="john@example.com"
                      />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <Field
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="+234 803 300 4581"
                      />
                      <ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="primaryService" className="block text-sm font-medium text-slate-700 mb-1">
                      Primary Service Needed *
                    </label>
                    <Field
                      as="select"
                      id="primaryService"
                      name="primaryService"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="Software Asset Management">Software Asset Management</option>
                      <option value="Hardware Asset Management">Hardware Asset Management</option>
                      <option value="Policy & Documentation">Policy & Documentation</option>
                      <option value="Security Management">Security Management</option>
                      <option value="Document & Records">Document & Records</option>
                      <option value="Web Solutions">Web Solutions</option>
                    </Field>
                    <ErrorMessage name="primaryService" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">
                        Industry Sector *
                      </label>
                      <Field
                        type="text"
                        id="industry"
                        name="industry"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="e.g., Banking, Oil & Gas, Manufacturing"
                      />
                      <ErrorMessage name="industry" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                    <div>
                      <label htmlFor="serviceLocation" className="block text-sm font-medium text-slate-700 mb-1">
                        Service Location *
                      </label>
                      <Field
                        type="text"
                        id="serviceLocation"
                        name="serviceLocation"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 placeholder:font-normal"
                        placeholder="Lagos, Abuja, etc."
                      />
                      <ErrorMessage name="serviceLocation" component="div" className="text-red-500 text-sm mt-1" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="serviceDate" className="block text-sm font-medium text-slate-700 mb-1">
                      When do you need this service? *
                    </label>
                    <Field
                      as="select"
                      id="serviceDate"
                      name="serviceDate"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select timeline</option>
                      <option value="Immediate (1-2 days)">Immediate (1-2 days)</option>
                      <option value="Within a week">Within a week</option>
                      <option value="Within a month">Within a month</option>
                      <option value="Within 3 months">Within 3 months</option>
                      <option value="Still in planning phase">Still in planning phase</option>
                    </Field>
                    <ErrorMessage name="serviceDate" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-1">
                      Details *
                    </label>
                    <Field
                      as="textarea"
                      id="details"
                      name="details"
                      rows="4"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-400 placeholder:font-normal"
                      placeholder="Please provide details about your requirements, current setup, challenges, or specific needs..."
                    />
                    <ErrorMessage name="details" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="mt-auto">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full rounded-lg py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      
      {/* Map Section - Full Width */}
      <div className="w-full h-[500px] relative -mb-20 mt-16">
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