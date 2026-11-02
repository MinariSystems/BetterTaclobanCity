import assert from 'node:assert/strict';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

const vite = await createServer({ server: { middlewareMode: true, hmr: false, watch: null }, appType: 'custom' });
try {
  const { default: Home } = await vite.ssrLoadModule('/src/pages/Home.tsx');
  const { default: ServicesSection } = await vite.ssrLoadModule('/src/components/home/ServicesSection.tsx');
  const { PreviewProvider } = await vite.ssrLoadModule('/src/components/PreviewContext.tsx');
  const { services } = await vite.ssrLoadModule('/src/data/tacloban-services.ts');
  const h = React.createElement;
  const render = component => renderToString(h(HelmetProvider, {}, h(MemoryRouter, {}, h(PreviewProvider, {}, component))));
  assert.equal(services.length, 12);
  assert.equal(new Set(services.map(service => service.id)).size, 12);
  for (const service of services) {
    assert.equal(service.steps.length, 3);
    assert.match(new URL(service.url).hostname, /(^|\.)tacloban\.gov\.ph$/);
  }
  const home = render(h(Home));
  for (const text of ['Maupay', 'Your city.', 'How can we help you today?', 'City Hall shouldn’t', 'A more open city.']) {
    assert(home.toLowerCase().includes(text.toLowerCase()), `Missing home content: ${text}`);
  }
  const cases = [
    [{ full: true }, 12],
    [{ full: true, initialCategory: 'visitors' }, 3],
    [{ full: true, initialCategory: 'business' }, 3],
    [{ query: 'birth certificate' }, 1],
    [{ query: 'kasal' }, 1],
    [{ query: 'amilyar' }, 1],
    [{ query: 'zzznomatchingservice' }, 0],
    [{}, 6],
  ];
  for (const [props, count] of cases) {
    const html = render(h(ServicesSection, props));
    assert.equal((html.match(/aria-haspopup="dialog"/g) || []).length, count, JSON.stringify(props));
    if (count === 0) assert(html.includes('No services found'));
  }
  console.log('PASS: home render, 12 official pathways, default/full directory, category filters, phrase/keyword search, and empty state.');
} finally { await vite.close(); }
