'use strict';

// This file mirrors the interactive behavior used in index.html.
// It can be linked separately if you later want to move the inline script out of HTML.

function byId(id) {
  return document.getElementById(id);
}

function toggleMobileMenu() {
  const nav = byId('mobileNav');
  if (nav) nav.classList.toggle('open');
}

function closeMobileMenu() {
  const nav = byId('mobileNav');
  if (nav) nav.classList.remove('open');
}

function gp(id) {
  const page = byId('pg-' + id);
  if (!page) return;

  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.pb').forEach(b => {
    b.classList.remove('on');
    b.setAttribute('aria-selected', 'false');
  });

  page.classList.add('on');
  const map = { home: 0, workshops: 1, performance: 2, gallery: 3, linktree: 4 };
  if (map[id] !== undefined) {
    const btn = document.querySelectorAll('.pb')[map[id]];
    if (btn) {
      btn.classList.add('on');
      btn.setAttribute('aria-selected', 'true');
    }
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  closeMobileMenu();
  setTimeout(() => document.querySelectorAll('.pg.on .rv').forEach(el => el.classList.add('in')), 80);
}

function closeAdmin() {
  const modal = byId('admin-modal');
  if (modal) modal.classList.remove('open');
}

function cwm() {
  const modal = byId('wmo');
  if (modal) modal.classList.remove('open');
}

function toggleAdmin() {
  if (prompt('Admin Password:') !== atob('UGFibG8tQWRtaW4tMjAyNQ==')) return;
  const modal = byId('admin-modal');
  if (modal) modal.classList.add('open');
}

function addEvent() {
  if (prompt('Admin Password:') !== atob('UGFibG8tQWRtaW4tMjAyNQ==')) return;
  const day = byId('evt-day')?.value.trim();
  const month = byId('evt-month')?.value.trim();
  const name = byId('evt-name')?.value.trim();
  const loc = byId('evt-location')?.value.trim();
  if (!day || !month || !name || !loc) return alert('Fill all fields');
  const row = document.createElement('div');
  row.className = 'sched-row upcoming';
  row.innerHTML = `<div><div class="sched-day">${day}</div><div class="sched-month">${month}</div></div><div><div class="sched-event">${name}</div><div class="sched-loc"><i class="fas fa-map-marker" aria-hidden="true"></i> ${loc}</div></div><span class="sched-badge"><i class="fas fa-star" aria-hidden="true"></i> Event</span>`;
  byId('sched-list')?.appendChild(row);
  ['evt-day', 'evt-month', 'evt-name', 'evt-location'].forEach(id => { const el = byId(id); if (el) el.value = ''; });
}

const WORKSHOPS = [
  ['Physical Preparation', 'The Performer\'s Body', 'Performance Training', '90 min'],
  ['Spatial Awareness', 'Seven Spatial Layers', 'Physical Theatre', '120 min'],
  ['Partner Movement', 'Dialogue in Motion', 'Movement', '90 min'],
  ['Beginner Acrobatics', 'Your First Flight', 'Circus', '60 min'],
  ['Partner Acrobatics', 'Base & Flyer', 'Circus', '60 min'],
  ['Contact Staff', 'Object as Extension', 'Circus', '120 min'],
  ['Contact Improvisation', 'Moving Conversation', 'Dance', '120 min']
];

const PERFORMANCES = [
  ['Fire Performance', 'Outdoor / Festival / Wedding', 'Solo or group fire performance with big variety of props. Full fire safety protocols included.'],
  ['Daytime and Kids Entertainment', 'Stage / Indoor / Outdoor', 'Physical theatre combining acting, movement, and character.'],
  ['Acrobatic Act', 'Stage / Festival', 'Partner acrobatics and floor-based circus arts with choreography.'],
  ['Acro Staff', 'Stage / Festival / Event', 'Acro staff performance, dance, and sculpture.']
];

function renderWS() {
  const grid = byId('wgrid');
  if (!grid) return;
  grid.innerHTML = WORKSHOPS.map(([title, sub, type], i) => `
    <div class="wcard rv" style="transition-delay:${(i % 3) * .1}s" role="listitem">
      <div class="wttl">${title}</div>
      <div class="wsub">${sub}</div>
      <div class="wtags"><span class="tag">${type}</span></div>
    </div>`).join('');
}

function renderPS() {
  const grid = byId('perf-cards');
  if (!grid) return;
  grid.innerHTML = PERFORMANCES.map(([title, type, desc]) => `
    <div class="pc rv" role="listitem">
      <div class="pc-ico" aria-hidden="true"><i class="fas fa-star"></i></div>
      <div class="pc-ttl">${title}</div>
      <div class="pc-type">${type}</div>
      <div class="pc-bd"><p>${desc}</p></div>
    </div>`).join('');
}

function renderGallery() {
  const grid = byId('gallery-grid');
  if (!grid) return;
  const gallery = JSON.parse(localStorage.getItem('portfolio_gallery') || '[]');
  grid.innerHTML = gallery.map((img) => `
    <div class="gallery-item rv" role="listitem">
      <img src="${img.url}" alt="${img.label}" loading="lazy"/>
      <div class="gallery-label">${img.label}</div>
    </div>`).join('');
}

function renderLinktree() {
  const grid = byId('linktree-grid');
  if (!grid) return;
  grid.innerHTML = '';
}

window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;
window.gp = gp;
window.toggleAdmin = toggleAdmin;
window.closeAdmin = closeAdmin;
window.addEvent = addEvent;
window.cwm = cwm;
window.renderWS = renderWS;
window.renderPS = renderPS;
window.renderGallery = renderGallery;
window.renderLinktree = renderLinktree;

function init() {
  renderWS();
  renderPS();
  renderGallery();
  renderLinktree();
  document.querySelectorAll('.pg.on .rv').forEach(el => el.classList.add('in'));
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
