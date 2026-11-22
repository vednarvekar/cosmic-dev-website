import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { projects } from '@/data/projects';
import { drivers, links } from '@/data/site';
import { career } from '@/data/experience';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import UnderDevelopment from '@/pages/UnderDevelopment';

const robots = () => document.head.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content;

describe('content', () => {
  it('has unique project slugs and the fields the shelf needs', () => {
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    for (const p of projects) {
      expect(p.name && p.label && p.description && p.color).toBeTruthy();
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });

  it('uses absolute https links for social profiles', () => {
    for (const url of [links.github, links.linkedin, links.x]) expect(url).toMatch(/^https:\/\//);
  });

  it('has three driver cards', () => {
    expect(drivers).toHaveLength(3);
  });
});

describe('pages', () => {
  it('home has exactly one h1 with Ved’s name and is indexable', () => {
    sessionStorage.setItem('ved-booted', '1');
    render(<Home />);
    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0].textContent).toMatch(/Ved/);
    expect(document.title).toBe("Ved's Universe · Ved Narvekar");
    expect(robots()).toBe('index, follow');
  });

  it('home lists every project on the shelf', () => {
    sessionStorage.setItem('ved-booted', '1');
    render(<Home />);
    for (const p of projects) expect(screen.getByText(`${p.name} ↗`)).toBeInTheDocument();
  });

  it('home shows the career log with the current role first', () => {
    sessionStorage.setItem('ved-booted', '1');
    render(<Home />);
    expect(career[0].current).toBe(true);
    expect(screen.getByRole('heading', { level: 3, name: new RegExp(career[0].title) })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download resume/i })).toHaveAttribute('href', '/resume.pdf');
  });

  it('404 is noindex and echoes the missing path', () => {
    render(
      <MemoryRouter initialEntries={['/nope']}>
        <NotFound />
      </MemoryRouter>,
    );
    expect(robots()).toBe('noindex, follow');
    expect(screen.getByText(/cd \/nope/)).toBeInTheDocument();
  });

  it('under development page is noindex and names the project', () => {
    render(
      <MemoryRouter initialEntries={['/under-development?project=ml-quant']}>
        <UnderDevelopment />
      </MemoryRouter>,
    );
    expect(robots()).toBe('noindex, follow');
    expect(document.title).toMatch(/^ml-quant/);
  });
});
