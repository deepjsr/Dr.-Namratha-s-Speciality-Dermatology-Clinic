import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { conditions } from '../data/site';

export default function ClinicalDermatology() {
  // Filter conditions relevant to clinical dermatology
  const clinicalConditions = conditions.filter(c => 
    c.icon === 'stethoscope' || c.name.toLowerCase().includes('rashes')
  );

  return (
    <>
      <PageHero
        eyebrow="Clinical Dermatology"
        title="Expert care for healthy, clear skin"
        intro="Your skin is your body’s first line of defense. We diagnose and treat a wide range of medical skin concerns, providing personalized care to help you feel comfortable in your own skin."
      />

      <section className="section section-tight-top">
6:       <div className="container">
          <div className="section-head">
            <h2>Conditions we commonly treat</h2>
            <p>
              If you’re noticing any of these skin concerns, book a visit with Dr. Namratha for an expert clinical evaluation.
            </p>
          </div>
          <div className="grid grid-3">
            {clinicalConditions.map((c) => (
              <div className="card condition-card" key={c.name}>
                <span className="icon-badge icon-badge-sm">
                  <Icon name={c.icon} size={20} />
                </span>
                <p>{c.name}</p>
              </div>
            ))}
            <div className="card condition-card">
              <span className="icon-badge icon-badge-sm">
                <Icon name="stethoscope" size={20} />
              </span>
              <p>Fungal & bacterial infections</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">What to expect</span>
            <h2>Your clinical consultation</h2>
            <ol className="steps">
              <li>
                <strong>Discuss your skin history</strong> — we listen to your symptoms, flare-up history, and daily skincare routine.
              </li>
              <li>
                <strong>Thorough skin examination</strong> — Dr. Namratha checks the affected areas, utilizing advanced dermatological tools if needed.
              </li>
              <li>
                <strong>Tailored treatment plan</strong> — you will receive a custom prescription of clinically-backed medicines and recommended skincare.
              </li>
              <li>
                <strong>Follow-up & guidance</strong> — we provide lifestyle tips and arrange follow-up checks to monitor your skin's healing process.
              </li>
            </ol>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                <strong>Sudden severe rashes, swelling, or allergic reactions</strong> should be evaluated promptly. Please contact the clinic or visit the nearest emergency medical room.
              </span>
            </div>
            <div className="card">
              <h3>Our medical approach</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> Evidence-based, clinical treatments
                </li>
                <li>
                  <Icon name="check" size={18} /> Careful evaluation of skin type and triggers
                </li>
                <li>
                  <Icon name="check" size={18} /> Focus on long-term skin health and barrier repair
                </li>
              </ul>
              <Link to="/contact" className="btn btn-primary">
                <Icon name="calendar" size={18} /> Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
