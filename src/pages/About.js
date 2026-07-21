import React from 'react';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { clinic } from '../data/site';

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the Dermatologist"
        title={`Meet ${clinic.doctor}`}
        intro={`The specialist behind ${clinic.name} — committed to advanced skincare, evidence-based hair treatments, and clinical excellence in Hyderabad.`}
      />

      <section className="section section-tight-top">
        <div className="container two-col about-grid">
          <div className="about-portrait" aria-hidden="true" style={{ overflow: 'hidden' }}>
            <img 
              src="/doctor-portrait.jpg" 
              alt={clinic.doctor} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} 
            />
          </div>
          <div>
            <h2>A dermatologist who cares about your skin health</h2>
            <p>
              {clinic.doctor} is a {clinic.doctorTitle} who founded {clinic.name}{' '}
              to provide a dedicated space where skin, hair, and cosmetic concerns are addressed with
              scientific precision, personalization, and care.
            </p>
            <p>
              Whether you are consulting for active acne, seeking treatments for hair thinning,
              or planning minor procedures, Dr. Namratha ensures you receive clear diagnostic answers,
              expert treatment, and a routine you can easily manage.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> Skin & scalp care for all age groups
              </li>
              <li>
                <Icon name="check" size={18} /> Clear, evidence-based treatment plans
              </li>
              <li>
                <Icon name="check" size={18} /> Advanced clinical procedures and cosmetology
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2>Our Core Values</h2>
          </div>
          <div className="grid grid-3">
            <div className="card">
              <span className="icon-badge">
                <Icon name="heart" />
              </span>
              <h3>Patient-Centric Care</h3>
              <p>
                We listen closely to your concerns, understanding the emotional impact of skin and hair issues to offer supportive treatment.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge">
                <Icon name="shield" />
              </span>
              <h3>Clinical Integrity</h3>
              <p>
                We prescribe only what is scientifically necessary and effective, ensuring safe procedures with minimal risk.
              </p>
            </div>
            <div className="card">
              <span className="icon-badge">
                <Icon name="user" />
              </span>
              <h3>Science-Driven</h3>
              <p>
                We utilize proven dermatological treatments, state-of-the-art sterile protocols, and quality formulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
