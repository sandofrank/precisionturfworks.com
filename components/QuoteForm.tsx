'use client';

import { useState } from 'react';
import { COMPANY } from '@/lib/constants';

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    projectType: '',
    details: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const subject = `Quote Request – ${form.projectType || 'Turf Installation'}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : '',
      form.address ? `Address: ${form.address}` : '',
      form.city ? `City: ${form.city}` : '',
      form.projectType ? `Project Type: ${form.projectType}` : '',
      '',
      'Project Details:',
      form.details || '(not provided)',
    ]
      .filter(Boolean)
      .join('\n');

    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="bg-ptw-cream rounded-xl p-8 sm:p-10">
      <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-ptw-green tracking-wider uppercase mb-6">
        Project Details
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Name <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} className="form-input" placeholder="Your full name" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} className="form-input" placeholder="you@example.com" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
            Phone
          </label>
          <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="form-input" placeholder="(555) 555-5555" />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-1">
            Address
          </label>
          <input type="text" id="address" name="address" value={form.address} onChange={handleChange} className="form-input" placeholder="Street address" />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-1">
            City
          </label>
          <input type="text" id="city" name="city" value={form.city} onChange={handleChange} className="form-input" placeholder="City" />
        </div>

        <div>
          <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-1">
            Project Type
          </label>
          <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange} className="form-input">
            <option value="">Select a project type</option>
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Putting Green">Putting Green</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="details" className="block text-sm font-semibold text-gray-700 mb-1">
            Project Details
          </label>
          <textarea id="details" name="details" rows={4} value={form.details} onChange={handleChange} className="form-input" placeholder="Tell us about your project..." />
        </div>

        <div className="pt-2">
          <button type="submit" className="btn-primary w-full justify-center text-center">
            Send Quote Request
          </button>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Or call us directly at{' '}
            <a href={COMPANY.phoneHref} className="text-ptw-green font-semibold hover:underline">
              {COMPANY.phone}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
