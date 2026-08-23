import React, { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's connect
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Looking for a developer who builds secure, scalable applications? 
              I'm open to new opportunities.
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mb-1">Email</p>
                <a href="mailto:mhdziyannn@gmail.com" className="text-xl text-foreground hover:text-primary transition-colors">
                  mhdziyannn@gmail.com
                </a>
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium mb-1">Phone</p>
                <a href="tel:+918330047223" className="text-xl text-foreground hover:text-primary transition-colors">
                  +91 83300 47223
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-6 bg-surface-2 p-8 md:p-10 rounded-2xl border border-border/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-surface-3 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-surface-3 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-surface-3 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="btn-primary w-full md:w-auto mt-2 disabled:opacity-50"
              >
                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
