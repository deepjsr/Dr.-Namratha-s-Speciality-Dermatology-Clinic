import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import { CTABand } from '../components/CTABand';
import {
  clinic,
  serviceCategories,
  conditions,
  testimonials,
  faqs,
} from '../data/site';

export default function Home() {
  const [activeTab, setActiveTab] = useState('acne');

  const results = {
    acne: {
      title: "Acne Treatment Success",
      tagline: "12-Week Custom Skincare & Chemical Peels",
      description: "This case study shows a significant reduction in active inflammatory acne breakouts, calmed skin redness, and a restored epidermal skin barrier.",
      img: "/acne-before-after.png",
      details: [
        "Concerns: Inflammatory Acne & Post-Acne Erythema",
        "Therapy: Salicylic Peels, barrier repairing serums, and custom topical routine",
        "Result: 90% reduction in active lesions, improved texture, and zero scarring"
      ]
    },
    hair: {
      title: "Hair Regrowth & Density",
      tagline: "4-Month PRP & Medical Hair Regrowth Program",
      description: "This case study demonstrates significant improvement in crown area hair volume and follicle strengthening through targeted growth factor injections.",
      img: "/hair-before-after.png",
      details: [
        "Concerns: Pattern Hair Loss & Follicular Thinning",
        "Therapy: 4 Sessions of Platelet-Rich Plasma (PRP) + medical supplements",
        "Result: Visible crown coverage, increased hair strand thickness, and reduced shedding"
      ]
    }
  };

  const activeResult = results[activeTab];

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Speciality Skin & Hair Care</span>
            <h1>Welcome to {clinic.name}.</h1>
            <p className="hero-lede">
              From treating chronic acne and scalp conditions to advanced chemical peels, laser rejuvenation, and minor skin procedures, <strong>{clinic.name}</strong> provides expert care for your skin and hair health.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                <Icon name="calendar" size={18} /> Book an Appointment
              </Link>
              <Link to="/services" className="btn btn-secondary">
                <Icon name="arrow" size={18} /> See Our Services
              </Link>
            </div>
            <ul className="hero-assure">
              <li>
                <Icon name="check" size={18} /> Prioritized appointments
              </li>
              <li>
                <Icon name="check" size={18} /> Evidence-based treatments
              </li>
              <li>
                <Icon name="check" size={18} /> All skin & scalp types cared for
              </li>
            </ul>
          </div>

          <aside className="hero-card" aria-label="Clinic at a glance">
            <div className="hero-card-top">
              <span className="brand-mark" aria-hidden="true">
                <Icon name="sparkles" size={22} />
              </span>
              <div>
                <strong>{clinic.name}</strong>
                <small>{clinic.doctorTitle}</small>
              </div>
            </div>
            <dl className="hero-facts">
              <div>
                <dt>
                  <Icon name="user" size={18} /> Dermatologist
                </dt>
                <dd>{clinic.doctor}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="clock" size={18} /> Hours
                </dt>
                <dd>{clinic.hours}</dd>
              </div>
              <div>
                <dt>
                  <Icon name="map" size={18} /> Location
                </dt>
                <dd>
                  <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
                    {clinic.address}
                  </a>
                </dd>
              </div>
            </dl>
            <a
              href={`tel:${clinic.phone.replace(/\s/g, '')}`}
              className="hero-phone"
            >
              <Icon name="phone" size={18} /> {clinic.phone}
            </a>
          </aside>
        </div>
      </section>

      <section className="section section-tight trust-strip">
        <div className="container trust-grid">
          <div>
            <Icon name="stethoscope" size={22} className="tooth-icon-blue" />
            <strong>Clinical Dermatology</strong>
            <span>Acne, eczema, rashes & allergy relief</span>
          </div>
          <div>
            <Icon name="sparkles" size={22} />
            <strong>Aesthetic & Cosmetology</strong>
            <span>Peels, rejuvenation & scar care</span>
          </div>
          <div>
            <Icon name="droplet" size={22} />
            <strong>Hair & Trichology</strong>
            <span>PRP therapy & hair loss solutions</span>
          </div>
          <div>
            <Icon name="shieldCheck" size={22} />
            <strong>Minor Procedures</strong>
            <span>Warts, moles & skin tag removals</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>Complete skin & hair care under one roof</h2>
            <p>
              Four specialized areas of care, so you always know where to turn.
            </p>
          </div>
          <div className="grid grid-4">
            {serviceCategories.map((s) => (
              <Link to={s.to} key={s.to} className="card service-preview">
                <span className="icon-badge">
                  <Icon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.blurb}</p>
                <span className="card-link">
                  Learn more <Icon name="arrow" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Common concerns</span>
            <h2>Skin or hair concern? We can help.</h2>
            <p>
              We regularly help with these common skin, hair, and scalp concerns — no issue too small to discuss.
            </p>
          </div>
          <div className="grid grid-4">
            {conditions.map((c) => (
              <div className="card condition-card" key={c.name}>
                <span className="icon-badge icon-badge-sm">
                  <Icon name={c.icon} size={20} />
                </span>
                <p>{c.name}</p>
              </div>
            ))}
          </div>
          <p className="center-note">
            This list is a guide only. If you have a concern not listed here,
            please <Link to="/contact">get in touch</Link> — we’re glad to help.
          </p>
        </div>
      </section>

      <section className="section before-after-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Real Results</span>
            <h2>Before & After Case Studies</h2>
            <p>
              Witness real transformation. These cases demonstrate clinical improvement achieved through customized treatment plans.
            </p>
          </div>

          <div className="tab-container">
            <button 
              className={`tab-btn ${activeTab === 'acne' ? 'active' : ''}`}
              onClick={() => setActiveTab('acne')}
            >
              Acne Treatment Progress
            </button>
            <button 
              className={`tab-btn ${activeTab === 'hair' ? 'active' : ''}`}
              onClick={() => setActiveTab('hair')}
            >
              PRP Hair Regrowth
            </button>
          </div>

          <div className="card before-after-card grid grid-2">
            <div className="before-after-visual">
              <img 
                src={activeResult.img} 
                alt={activeResult.title} 
                className="before-after-img"
              />
            </div>
            <div className="before-after-content">
              <h3>{activeResult.title}</h3>
              <span className="eyebrow eyebrow-accent">{activeResult.tagline}</span>
              <p style={{ marginTop: '1rem' }}>{activeResult.description}</p>
              <ul className="check-list">
                {activeResult.details.map((detail, idx) => (
                  <li key={idx}>
                    <Icon name="check" size={18} />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                <Icon name="calendar" size={18} /> Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Our approach</span>
            <h2>Skincare that puts you at ease</h2>
            <p>
              Consulting a dermatologist should feel simple and reassuring. We listen to your goals, explain clinical diagnoses clearly, and design a customized regimen.
            </p>
            <ul className="check-list">
              <li>
                <Icon name="check" size={18} /> We explain your skin type and options in plain language
              </li>
              <li>
                <Icon name="check" size={18} /> We never rush your questions
              </li>
              <li>
                <Icon name="check" size={18} /> We focus on safe, clinically-proven solutions
              </li>
            </ul>
            <Link to="/about" className="btn btn-secondary">
              Meet {clinic.doctor}
            </Link>
          </div>
          <div className="approach-card">
            <Icon name="quote" size={34} />
            <blockquote>
              “My goal is simple — help you understand your skin and hair health, and feel confident about your care routine.”
            </blockquote>
            <cite>— {clinic.doctor}</cite>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Patient stories</span>
            <h2>Trusted by our patients</h2>
          </div>
          <div className="grid grid-3">
            {testimonials.slice(0, 3).map((t) => (
              <figure className="card testimonial-card" key={t.name}>
                <Icon name="quote" size={26} className="quote-mark" />
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="center-note">
            <Link to="/testimonials">Read more patient stories →</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-col faq-col">
          <div>
            <span className="eyebrow">Good to know</span>
            <h2>Questions, answered simply</h2>
            <p>A few things patients often ask before their first visit.</p>
          </div>
          <div className="faq-list">
            {faqs.slice(0, 3).map((f) => (
              <details key={f.q} className="faq">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
