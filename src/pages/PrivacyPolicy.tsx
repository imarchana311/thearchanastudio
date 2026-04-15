import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-16 px-6 md:px-12 max-w-4xl mx-auto font-body"
    >
      <h1 className="font-headline text-4xl md:text-5xl text-primary mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-on-surface-variant leading-relaxed">
        <p>Last updated: April 11, 2026</p>
        
        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">1. Introduction</h2>
          <p>Welcome to The Archana Studio. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">2. Information We Collect</h2>
          <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Name and Contact Data: We collect your first and last name, email address, postal address, phone number, and other similar contact data.</li>
            <li>Credentials: We collect passwords, password hints, and similar security information used for authentication and account access.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">4. Sharing Your Information</h2>
          <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-headline text-secondary mt-8 mb-4">5. Contact Us</h2>
          <p>If you have questions or comments about this policy, you may email us at contact@thearchanastudio.com or by post to our studio locations.</p>
        </section>
      </div>
    </motion.div>
  );
}
