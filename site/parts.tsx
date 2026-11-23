import type { ReactNode } from 'react';
import { Container, Heading, SectionLabel, Text } from '@/index';

/* Small scaffolding pieces the sections share. Deliberately thin — anything
 * with a visual opinion belongs to the library, not to the site. */

export interface SectionProps {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  desc: ReactNode;
  children: ReactNode;
}

export function Section({ id, num, eyebrow, title, desc, children }: SectionProps) {
  return (
    <section className="site-section" id={id}>
      <Container>
        <div className="site-section__head">
          <SectionLabel face="mono" meta={num}>
            {eyebrow}
          </SectionLabel>
          <Heading level={2}>{title}</Heading>
          <Text className="site-section__desc" tone="secondary">
            {desc}
          </Text>
        </div>
        {children}
      </Container>
    </section>
  );
}

export interface SpecimenProps {
  /** Component or group being shown. */
  name: string;
  /** The prop or token line that produced what's on screen. */
  api?: string;
  /** Drops the body inset for specimens that supply their own. */
  tight?: boolean;
  children: ReactNode;
}

export function Specimen({ name, api, tight, children }: SpecimenProps) {
  return (
    <div className="site-specimen">
      <div className="site-specimen__head">
        <span className="site-specimen__name">{name}</span>
        {api ? <span className="site-specimen__api">{api}</span> : null}
      </div>
      <div className={tight ? 'site-specimen__body site-specimen__body--tight' : 'site-specimen__body'}>
        {children}
      </div>
    </div>
  );
}

/** A horizontal run of loose controls. */
export function Row({ children }: { children: ReactNode }) {
  return <div className="site-row">{children}</div>;
}

/* Lucide dropped brand glyphs, so the one the site needs is drawn here.
 * Everything else comes from the library's <Icon />. */
export const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 13.5c-3 .9-3-1.5-4.2-1.8M10 15.5v-2.6a2.3 2.3 0 0 0-.6-1.7c2.1-.2 4.3-1 4.3-4.7a3.6 3.6 0 0 0-1-2.5 3.4 3.4 0 0 0 0-2.5s-.8-.2-2.6 1a8.9 8.9 0 0 0-4.7 0C3.6 1.3 2.8 1.5 2.8 1.5a3.4 3.4 0 0 0 0 2.5 3.6 3.6 0 0 0-1 2.5c0 3.7 2.2 4.5 4.3 4.7a2.3 2.3 0 0 0-.6 1.7v2.6" />
  </svg>
);
