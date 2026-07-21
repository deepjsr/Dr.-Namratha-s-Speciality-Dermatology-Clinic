import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { hairTreatments, clinic } from '../data/site';

export default function TrichologyHair() {
  return (
    <>
      <PageHero
        eyebrow="Trichology & Hair Care"
        title="Restore hair volume, health and confidence"
        intro="Dealing with hair thinning, sudden fall, or scalp issues? We offer clinical hair restoration protocols, medical scalp therapies, and advanced PRP sessions to restore hair health."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {hairTreatments.map((h) => (
              <div className="card" key={h.title}>
                <span className="icon-badge">
                  <Icon name="droplet" />
                </span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">PRP & Medical Hair Care</span>
            <h2>Our scientific approach to hair fall</h2>
            <p>
              Hair health is closely linked to genetics, hormones, and nutrition. We treat hair loss from the roots, investigating triggers to provide long-lasting growth.
            </p>
            <ol className="steps">
              <li>
                <strong>Scalp & hair analysis</strong> — we examine thinning patterns and scalp inflammation under specialized lenses.
              </li>
              <li>
                <strong>Trigger identification</strong> — we check for vitamin deficiencies, thyroid concerns, or hormonal imbalances.
              </li>
              <li>
                <strong>Tailored hair regrowth regimen</strong> — a blend of advanced clinical PRP, scalp serums, and nutritional support.
              </li>
            </ol>
            <Link to="/contact" className="btn btn-primary">
              <Icon name="calendar" size={18} /> Book a Consultation
            </Link>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                Early intervention is key. Hair follicles that have been inactive for too long become harder to revive. Treating hair loss early leads to significantly better density.
              </span>
            </div>
            <div className="card">
              <h3>Before your visit</h3>
              <ul className="check-list">
                <li>
                  <Icon name="check" size={18} /> Bring any recent blood test reports
                </li>
                <li>
                  <Icon name="check" size={18} /> Note down when your hair fall started and if it's seasonal
                </li>
                <li>
                  <Icon name="check" size={18} /> Share details of any current hair supplements
                </li>
              </ul>
              <p>
                Have questions? Call{' '}
                <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                  {clinic.phone}
                </a>{' '}
                for assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
