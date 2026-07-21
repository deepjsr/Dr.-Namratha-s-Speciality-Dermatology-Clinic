import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { cosmeticTreatments, clinic } from '../data/site';

export default function CosmeticDermatology() {
  return (
    <>
      <PageHero
        eyebrow="Aesthetic & Cosmetic Dermatology"
        title="Enhance your skin's natural radiance"
        intro="Reveal smoother, brighter, and youthful-looking skin. We offer advanced aesthetic treatments customized for your unique concerns and skin goals under strict medical safety."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="grid grid-2">
            {cosmeticTreatments.map((c) => (
              <div className="card" key={c.title}>
                <span className="icon-badge">
                  <Icon name="sparkles" />
                </span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="note" role="note" style={{ marginTop: '2rem' }}>
            <Icon name="warning" />
            <span>
              Healthy skin barriers come first. Dr. Namratha assesses your skin barrier and underlying conditions before recommending any cosmetic treatment, ensuring long-lasting, safe results.
            </span>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">How it works</span>
            <h2>Your aesthetic journey</h2>
            <ol className="steps">
              <li>
                <strong>Aesthetic assessment</strong> — we listen to your cosmetic goals and examine your skin texture, tone, and sensitivity.
              </li>
              <li>
                <strong>Customized routine & plan</strong> — we recommend the right clinical peels or therapies, showing you expected timelines and costs.
                </li>
              <li>
                <strong>Comfortable clinic session</strong> — procedures are conducted with high hygiene standards and soothing post-care.
              </li>
            </ol>
          </div>
          <div className="card">
            <h3>Good to know</h3>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> Natural-looking, gradual enhancements
              </li>
              <li>
                <Icon name="check" size={18} /> State-of-the-art sterile procedures
              </li>
              <li>
                <Icon name="check" size={18} /> Minimal downtime and clear recovery guides
              </li>
            </ul>
            <p>
              Interested in a personalized skin routine? Call{' '}
              <a href={`tel:${clinic.phone.replace(/\s/g, '')}`}>
                {clinic.phone}
              </a>{' '}
              or <Link to="/contact">book an appointment</Link>.
            </p>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
