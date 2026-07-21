import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { serviceCategories, clinic } from '../data/site';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Advanced care for skin and hair"
        intro="From clinical dermatology and aesthetic rejuvenation to trichology and minor skin procedures, find the specialized care you need to restore your skin and hair health."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2 service-row">
            {serviceCategories.map((s, i) => (
              <div className={`card service-block ${i % 2 ? 'reverse' : ''}`} key={s.to}>
                <span className="icon-badge">
                  <Icon name={s.icon} />
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.blurb}</p>
                  <Link to={s.to} className="btn btn-secondary">
                    Explore <Icon name="arrow" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="note" role="note" style={{ marginTop: '2.5rem' }}>
            <Icon name="warning" />
            <span>
              <strong>Have a sudden skin flare or allergy?</strong> {clinic.emergency} Learn more about our{' '}
              <Link to="/services/clinical-dermatology">clinical dermatology</Link> and{' '}
              <Link to="/services/skin-procedures">procedures</Link>.
            </span>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
