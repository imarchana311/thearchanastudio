import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto font-body"
    >
      <h1 className="font-headline text-4xl md:text-5xl text-primary mb-8">Terms of Service</h1>
      <div className="space-y-6 text-on-surface-variant leading-relaxed">
        <p>Last updated: April 11, 2026</p>
        
        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">1. Agreement to Terms</h2>
          <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and The Archana Studio ("we," "us" or "our"), concerning your access to and use of our website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p>Unless otherwise indicated, the Website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Website and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">3. User Representations</h2>
          <p>By using the Website, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">4. Booking and Cancellations</h2>
          <p>All bookings made through the website are subject to availability. We reserve the right to cancel or reschedule appointments due to unforeseen circumstances. Cancellation policies apply as communicated at the time of booking.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">5. Limitation of Liability</h2>
          <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages arising from your use of the website.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">6. Contact Us</h2>
          <p>In order to resolve a complaint regarding the Website or to receive further information regarding use of the Website, please contact us at contact@thearchanastudio.com.</p>
        </section>
      </div>
    </motion.div>
  );
}
