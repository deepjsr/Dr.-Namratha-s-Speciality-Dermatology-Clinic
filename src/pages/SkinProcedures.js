import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero, CTABand } from '../components/CTABand';
import Icon from '../components/Icon';
import { skinProcedures } from '../data/site';

export default function SkinProcedures() {
  return (
    <>
      <PageHero
        eyebrow="Minor Skin Procedures"
        title="Safe, precise, and sterile skin removals"
        intro="Have a disturbing wart, skin tag, or mole? We perform minor in-clinic procedures under local anesthesia with advanced radiofrequency and sterile surgical precision for minimal scarring."
      />

      <section className="section section-tight-top">
        <div className="container">
          <div className="section-head">
            <h2>Procedures we perform</h2>
          </div>
          <div className="grid grid-2">
            {skinProcedures.map((p) => (
              <div className="card" key={p.title}>
                <span className="icon-badge">
                  <Icon name={p.icon || 'shieldCheck'} />
                </span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Important Guidelines</span>
            <h2>Care advice for skin growths</h2>
            <ul className="steps steps-unordered">
              <li>
                <strong>Do not pick or self-treat:</strong> Avoid trying to tie threads around skin tags or using over-the-counter acids, as these risk severe infections, chemical burns, and scarring.
              </li>
              <li>
                <strong>Observe changes:</strong> Pay attention to any mole that is growing quickly, has irregular borders, bleeds, or changes color (ABCDE criteria).
              </li>
              <li>
                <strong>Keep it clean:</strong> If a skin lesion gets scratched or irritated, wash it with mild soap and water, and avoid makeup before your clinic visit.
              </li>
            </ul>
          </div>
          <div>
            <div className="note" role="note" style={{ marginBottom: '1.5rem' }}>
              <Icon name="warning" />
              <span>
                <strong>Suspecting a suspicious growth?</strong> Do not ignore changing moles or lesions that bleed. Schedule a consultation for a dermatological examination.
              </span>
            </div>
            <div className="card">
              <h3>Procedure details</h3>
              <p>
                All minor surgical procedures and removals are done in-office under local anesthesia, ensuring a completely painless experience. We prioritize cosmetically-pleasing healing.
              </p>
              <Link to="/contact" className="btn btn-primary">
                <Icon name="calendar" size={18} /> Book a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
