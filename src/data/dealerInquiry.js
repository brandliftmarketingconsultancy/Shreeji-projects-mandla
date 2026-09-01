/* ------------------------------------------------------------------ */
/*  Dealer Inquiry page content                                       */
/*  Simple lead-capture form. No backend wired up yet — see TODO in   */
/*  DealerInquiryForm.jsx for where to connect a real submit handler. */
/* ------------------------------------------------------------------ */

export const dealerHero = {
  image:'/images/Shreeji_Hero_Banner.jpg',
  eyebrow: 'Become A Dealer',
  title: 'Dealer Inquiry',
  subtitle: 'Partner with Conecc — tell us about your business and monthly requirement.',
}

export const dealerForm = {
  heading: 'Submit Your Inquiry',
  subtext: 'Our sales team will get back to you within 1–2 business days.',
  nameLabel: 'Contact Person Name',
  businessLabel: 'Business Name',
  phoneLabel: 'Phone Number',
  locationLabel: 'Location / City',
  requirementLabel: 'Monthly Requirement',
  requirementOptions: [
    'Less than 500 blocks/month',
    '500 – 2,000 blocks/month',
    '2,000 – 5,000 blocks/month',
    '5,000+ blocks/month',
  ],
  submitLabel: 'Submit Inquiry',
  successMessage: "Thanks! We've received your inquiry and will be in touch soon.",
}