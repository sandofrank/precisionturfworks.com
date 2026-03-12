'use client';

import { useState } from 'react';
import { COMPANY } from '@/lib/constants';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = 'Contact Form Inquiry';
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      '',
      'Message:',
      form.message || '(not provided)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="block text-sm font-semibold text-gray-700 mb-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input type="text" id="contact-name" name="name" required value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" />
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-sm font-semibold text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input type="email" id="contact-email" name="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="you@example.com" />
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-semibold text-gray-700 mb-1">
          Phone
        </label>
        <input type="tel" id="contact-phone" name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(555) 555-5555" />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-semibold text-gray-700 mb-1">
          Message
        </label>
        <textarea id="contact-message" name="message" rows={5} value={form.message} onChange={handleChange} className="form-input" placeholder="How can we help?" />
      </div>

      <div className="pt-2">
        <button type="submit" className="btn-primary w-full justify-center text-center">
          Send Message
        </button>
        <p className="text-sm text-gray-500 mt-3 text-center">
          Or call us directly at{' '}
          <a href={COMPANY.phoneHref} className="text-ptw-green font-semibold hover:underline">
            {COMPANY.phone}
          </a>
        </p>
      </div>
    </form>
  );
}
