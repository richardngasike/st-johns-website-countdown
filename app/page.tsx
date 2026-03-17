'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaBook, FaGraduationCap, FaMapMarkerAlt, FaLaptopCode, FaCertificate, FaUsers } from 'react-icons/fa';

const LAUNCH_DATE = new Date('2026-04-10T08:00:00');

function getTimeLeft() {
  const now = new Date();
  const diff = LAUNCH_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, progress: 100 };
  const START = new Date('2024-09-01T00:00:00').getTime();
  const total = LAUNCH_DATE.getTime() - START;
  const elapsed = now.getTime() - START;
  const progress = Math.min(100, Math.max(0, (elapsed / total) * 100));
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    progress,
  };
}

function CountdownCard({ value, unit }: { value: number; unit: string }) {
  const [tick, setTick] = useState(false);
  const prev = useRef(value);
  useEffect(() => {
    if (prev.current !== value) {
      setTick(true);
      setTimeout(() => setTick(false), 300);
      prev.current = value;
    }
  }, [value]);
  return (
    <div className="countdown-card">
      <div className={`countdown-num${tick ? ' tick' : ''}`}>
        {String(value).padStart(2, '0')}
      </div>
      <div className="countdown-unit">{unit}</div>
    </div>
  );
}

export default function HomePage() {
  const [time, setTime] = useState(getTimeLeft());
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(''); }
  };

  return (
    <>
      <div className="bg-canvas" />
      <div className="bg-grid" />
      <div className="particles">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${(i * 5.5 + 3) % 100}%`,
            ['--dur' as string]: `${7 + (i % 5)}s`,
            ['--delay' as string]: `${(i * 0.5) % 8}s`,
          }} />
        ))}
      </div>
      <main className="page-wrapper">
        <header className="header">
          <div className="logo-ring">
            {!logoError ? (
              <Image src="/logo.png" alt="St. Johns Training College Samburu Logo" width={90} height={90} onError={() => setLogoError(true)} priority />
            ) : (
              <span className="logo-fallback">🎓</span>
            )}
          </div>
          <h1 className="college-name">St. John&apos;s Training College Maralal</h1>
          <p className="college-subtitle">Samburu County · Kenya</p>
          <div className="divider">
            <div className="divider-line" />
            <div className="divider-diamond" />
            <div className="divider-line right" />
          </div>
          <div className="location-tag">
          Website Launching Countdown
          </div>
        </header>

        <div className="coming-soon-wrap">
          <div className="coming-soon-badge">Coming Soon !!!</div>
        </div>

        <section className="countdown-section">
          <p className="countdown-label">Launching in</p>
          <div className="countdown-grid">
            <CountdownCard value={time.days} unit="Days" />
            <CountdownCard value={time.hours} unit="Hours" />
            <CountdownCard value={time.minutes} unit="Minutes" />
            <CountdownCard value={time.seconds} unit="Seconds" />
          </div>
          <div className="progress-wrap">
            <div className="progress-label">
              <span>Preparation progress</span>
              <span>{time.progress.toFixed(1)}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${time.progress}%` }} />
            </div>
          </div>
        </section>



<div className="info-cards">
  <div className="info-card">
    <span className="info-card-icon"><FaBook size={30} /></span>
    <div className="info-card-text">
      <h3>Quality Education</h3>
      <p>Professional training programs for the Samburu community</p>
    </div>
  </div>

  <div className="info-card">
    <span className="info-card-icon"><FaGraduationCap size={30} /></span>
    <div className="info-card-text">
      <h3>Certified Courses</h3>
      <p>Government-accredited certificates &amp; diplomas</p>
    </div>
  </div>

  <div className="info-card">
    <span className="info-card-icon"><FaMapMarkerAlt size={30} /></span>
    <div className="info-card-text">
      <h3>Samburu County</h3>
      <p>Proudly serving Kenya since inception</p>
    </div>
  </div>

  <div className="info-card">
    <span className="info-card-icon"><FaLaptopCode size={30} /></span>
    <div className="info-card-text">
      <h3>Tech Skills</h3>
      <p>Hands-on coding & ICT programs for students</p>
    </div>
  </div>

  <div className="info-card">
    <span className="info-card-icon"><FaCertificate size={30} /></span>
    <div className="info-card-text">
      <h3>Professional Certifications</h3>
      <p>Earn industry recognized credentials after courses</p>
    </div>
  </div>

  <div className="info-card">
    <span className="info-card-icon"><FaUsers size={30} /></span>
    <div className="info-card-text">
      <h3>Community Network</h3>
      <p>Build connections with fellow students and professionals</p>
    </div>
  </div>
</div>

        <section className="notify-section">
          {submitted ? (
            <div className="notify-success">Thank you! We&apos;ll notify you when we launch.</div>
          ) : (
            <>
              <p className="notify-title">Be the first to know when we <span>go live</span></p>
              <form className="notify-form" onSubmit={handleNotify}>
                <input type="email" className="notify-input" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} required />
                <button type="submit" className="notify-btn">Notify Me</button>
              </form>
            </>
          )}
        </section>

        <footer className="footer">
         
          <p className="footer-text">
            © {new Date().getFullYear()} St. John&apos;s Training College, Samburu &nbsp;·&nbsp;{' '}
            <a href="mailto:stjohnstrainingcollege@gmail.com">stjohnstrainingcollege@gmail.com</a>
          </p>
        </footer>
      </main>
    </>
  );
}
