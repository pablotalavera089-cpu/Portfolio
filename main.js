/* ═══════════════════════════════════════════════
   PABLO TALAVERA — PORTFOLIO
   assets/js/main.js

   DATA SECTION (edit this to update your site):
   - SCHEDULE  → upcoming/past events
   - WORKSHOPS → workshop curriculum
   - SETUPS    → performance setup cards
═══════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   SCHEDULE DATA
   ─ past: true  → greyed out row
   ─ type: 'fire' | 'workshop' | 'perf' | 'tbc'
   Update this array to keep your calendar live.
───────────────────────────────────────────── */
const SCHEDULE = [
  {
    day: '03', month: 'Feb 2025',
    event: 'Fai Jai Flow Festival',
    location: 'Pai, Thailand',
    type: 'fire', label: 'Fire Safety',
    past: true
  },
  {
    day: '—', month: 'Spring 2025',
    event: 'European Festival Circuit',
    location: 'Europe — TBC',
    type: 'perf', label: 'Performance',
    past: false
  },
  {
    day: '—', month: 'Summer 2025',
    event: 'Workshop Tour',
    location: 'Europe — TBC',
    type: 'workshop', label: 'Workshop',
    past: false
  }
  // ADD MORE EVENTS BELOW THIS LINE:
  // {
  //   day: '15', month: 'Aug 2025',
  //   event: 'Your Event Name',
  //   location: 'City, Country',
  //   type: 'perf', label: 'Performance',
  //   past: false
  // },
];

/* ─────────────────────────────────────────────
   WORKSHOPS DATA
───────────────────────────────────────────── */
const WORKSHOPS = [
  {
    num: '01', title: 'Physical Preparation',
    sub: "The Performer's Body — Strength, Mobility & Readiness",
    type: 'Performance Training', dur: '90 min / Half Day',
    tags: ['All Levels', 'Circus', 'Dance', 'Theater'],
    overview: "The foundation every performer needs. Most train their art — almost none train the body to sustain it. A smart, functional physical toolkit built on 8 years of circus and somatic experience.",
    audience: ['Circus and dance students', 'Festival warm-up slot', 'Theater companies and acting schools', 'Yoga and wellness studios'],
    objectives: ['Personal, sustainable warm-up routine', 'Functional strength for circus and theatre', 'Injury prevention and body intelligence'],
    agenda: [
      ['0:00–0:30', 'Arrival & Body Scan', 'Breath, self-awareness, sensing the body.'],
      ['0:30–1:00', 'Joint Mobility & Flow', 'Systematic joint mobility. Animal Flow transitions.'],
      ['1:00–1:30', 'Functional Strength', 'Core, shoulders, hips — specific to circus and theatre.'],
      ['1:30–2:00', 'Flexibility', 'Active and passive stretching. Partner-assisted work.'],
      ['2:00–2:30', 'Injury Prevention', 'Body listening. Common performer injuries.'],
      ['2:30–3:00', 'Integration', 'Somatic floor work. Reflection circle.']
    ],
    hook: "Most performers train their art. Almost none train their body to sustain it."
  },
  {
    num: '02', title: 'Spatial Awareness & The Seven Spaces',
    sub: 'Seven Spatial Layers of Physical Theatre',
    type: 'Physical Theatre', dur: '1 Hour / Half Day',
    tags: ['Physical Theatre', 'Stage Composition', 'All Levels'],
    overview: "A practical and theoretical exploration of spatial awareness in dance and physical theatre. Space is not empty — it is actively created through movement. Seven simultaneous layers from inner breath to the audience's gaze.",
    audience: ['Performers and dancers', 'Theater students', 'Circus artists', 'Movement teachers'],
    objectives: ['Apply the seven spatial layers in performance', 'Improve movement clarity and composition', 'Strengthen group coordination', 'Enhance stage presence'],
    agenda: [
      ['0:00–0:10', 'Arrival', 'Breath. Sensing the room.'],
      ['0:10–0:20', 'Inner Space & Kinesphere', 'Solo exploration of your personal bubble.'],
      ['0:20–0:30', 'Body Space & Relational Space', 'Shape-making and duo awareness.'],
      ['0:30–0:40', 'Group & Stage Space', 'Formations, pathways, levels.'],
      ['0:40–0:50', 'Audience Space', 'Focus, direction, presence.'],
      ['0:50–1:00', 'Integration', 'Group composition. Reflection.']
    ],
    hook: "Space isn't empty. Every gap between bodies is language. This workshop teaches you to speak it."
  },
  {
    num: '03', title: 'Partner Movement',
    sub: 'Dialogue in Motion — Communication, Weight & Trust',
    type: 'Movement / Corporate', dur: '90 min / Half Day',
    tags: ['All Levels', 'Corporate', 'Wellness'],
    overview: "Learning to move with someone — not just next to them. Weight sharing, counter-balance, listening through touch. No experience needed. The most accessible offering in the portfolio.",
    audience: ['General public and wellness festivals', 'Corporate teams (team-building)', 'Theater and dance students', 'Yoga communities'],
    objectives: ['Movement as non-verbal dialogue', 'Physical communication and listening', 'Trust through shared weight'],
    agenda: [
      ['0:00–0:15', 'Individual Warm-Up', 'Sensing your own body first.'],
      ['0:15–0:30', 'First Contact', 'Back-to-back breathing. Leaning. Mirroring.'],
      ['0:30–0:50', 'Weight Sharing', 'Counter-balance, yielding and pushing.'],
      ['0:50–1:10', 'Moving Together', 'Leading and following as a pair.'],
      ['1:10–1:25', 'Free Exploration', 'Your own duet language.'],
      ['1:25–1:30', 'Closing Circle', 'One word. What did you feel?']
    ],
    hook: "You don't need to know how to dance. Just be willing to listen — with your whole body."
  },
  {
    num: '04', title: 'Beginner Acrobatics',
    sub: 'Your First Flight — Safe, Playful Entry into Acro',
    type: 'Circus / Movement', dur: '90 min',
    tags: ['Beginners', 'All Ages', 'Festival'],
    overview: "Removes fear and builds foundations. Rolls, cartwheels, handstands, basic partner lifts. Philosophy: prepare the body first, confidence second, play third. Max 16 participants.",
    audience: ['Complete beginners', 'Children and youth programs', 'Festival family slot', 'Dance students'],
    objectives: ['Fall safely and confidently', 'Floor skills: rolls, cartwheels, balance', 'First inversions and partner weight-sharing'],
    agenda: [
      ['0:00–0:15', 'Safety & Warm-Up', 'How to fall safely. Basic rules.'],
      ['0:15–0:35', 'Floor Skills', 'Rolls, cartwheels, log roll.'],
      ['0:35–0:55', 'Balance & Inversions', 'Headstand prep, wall handstand.'],
      ['0:55–1:15', 'First Partner Work', 'Simple counter-balance, beginner basing.'],
      ['1:15–1:30', 'Play & Celebration', 'Free exploration, group shapes.']
    ],
    hook: "You told yourself you couldn't do it. You were wrong."
  },
  {
    num: '05', title: 'Partner Acrobatics',
    sub: 'Base & Flyer — The Art of Shared Flight',
    type: 'Circus / Physical Theatre', dur: 'Half Day / Full Day',
    tags: ['Intermediate', 'Circus', 'Festival Acro'],
    overview: "L-basing, standing acro, shoulder stands, forward-flying. Technical precision meets artistic framing — acrobatics as physical poetry, not just sport.",
    audience: ['Circus artists cross-training', 'Dancers adding acro', 'Contact improv practitioners', 'Festival acro community'],
    objectives: ['L-base positions and transitions', 'Standing acro', 'Flow between shapes with intention'],
    agenda: [
      ['0:00–0:30', 'Warm-Up & Spotting', 'Wrists, shoulders, hips, core activation.'],
      ['0:30–1:00', 'L-Base Fundamentals', 'Foot-to-hip, foot-to-hand, basic flying shapes.'],
      ['1:00–1:30', 'Standing Acro', 'Shoulder stand, thigh stand, transitions.'],
      ['1:30–2:00', 'Flow & Transitions', 'Linking positions.'],
      ['2:00–2:30', 'Artistic Application', 'Duet phrasing, timing.'],
      ['2:30–3:00', 'Showing & Feedback', 'Pairs share. Collective reflection.']
    ],
    hook: "Two people becoming one moving thing. That's what we build here."
  },
  {
    num: '06', title: 'Contact Staff',
    sub: 'Object as Extension — The Body & the Staff as One',
    type: 'Circus / Flow Arts', dur: '90 min / Half Day',
    tags: ['Flow Arts', 'Circus', 'Festival'],
    overview: "Pablo's signature discipline. Contact staff is a niche skill with a devoted community in the European festival circuit. Technique meets the poetic relationship between body and object.",
    audience: ['Flow arts and circus community', 'Circus artists', 'Dancers interested in object work', 'Theater artists'],
    objectives: ['Grip positions, weight sensing, basic isolations', 'Core vocabulary: rolls, passes, spins', 'Body integration with the staff'],
    agenda: [
      ['0:00–0:20', 'Body Prep & Introduction', 'Grip positions, weight sensing.'],
      ['0:20–0:50', 'Core Vocabulary', 'Rolls, passes, spins.'],
      ['0:50–1:20', 'Body Integration', 'Moving with the staff, not just spinning.'],
      ['1:20–1:50', 'Spatial Awareness', 'Space, levels, direction. Staff as stage language.'],
      ['1:50–2:30', 'Phrase Building', 'Personal phrase creation.'],
      ['2:30–3:00', 'Showing & Dialogue', 'Share and discuss.']
    ],
    hook: "The staff doesn't move. You move. The staff just reveals it."
  },
  {
    num: '07', title: 'Contact Improvisation',
    sub: 'The Moving Conversation — Presence, Touch & Shared Weight',
    type: 'Dance / Somatic / Wellness', dur: '90 min / Multi-Day',
    tags: ['CI Circuit', 'Dance', 'Somatic', 'Wellness'],
    overview: "Pablo's deepest practice. The CI festival circuit in Europe is thriving. This workshop teaches from the ground up — safety, touch, gravity, falling, flying — while holding the poetic dimension of a living conversation between bodies.",
    audience: ['CI festival community', 'Dance and somatic practitioners', 'Theater makers', 'Wellness communities'],
    objectives: ['Principles of contact improvisation', 'Sensitivity to weight, momentum, shared contact', 'Fall safely, give and receive weight'],
    agenda: [
      ['0:00–0:15', 'Individual Tuning', 'Solo warm-up, sensing gravity.'],
      ['0:15–0:35', 'Point of Contact', 'Back-to-back. Discovering the shared point.'],
      ['0:35–0:55', 'Weight & Momentum', 'Giving weight, rolling point of contact.'],
      ['0:55–1:10', 'Falling Safely', 'Spiraling to the floor, trusting the ground.'],
      ['1:10–1:25', 'Free Jam', 'Open exploration with multiple partners.'],
      ['1:25–1:30', 'Landing', 'Stillness. One breath together.']
    ],
    hook: "Contact improvisation is not a dance style. It's a conversation your body has been waiting to have."
  }
];

/* ─────────────────────────────────────────────
   PERFORMANCE SETUPS DATA
───────────────────────────────────────────── */
const SETUPS = [
  {
    ico: '🔥', title: 'Fire Performance', type: 'Outdoor / Festival', wide: false,
    desc: 'Solo or group fire performance — contact staff, fire juggling, fire dance. Full fire safety concept included.',
    specs: [
      ['Duration', '15–45 min'],
      ['Space', 'Min. 8×8m + safety perimeter'],
      ['Setup', '45 min incl. safety check and fuel prep'],
      ['Crew', '1–3 performers + 2 fire safety officers'],
      ['Conditions', 'Outdoor only; wind assessment required']
    ],
    tags: ['Fire Staff', 'Juggling', 'Night Show', 'Festival', 'Outdoor']
  },
  {
    ico: '🎭', title: 'Immersive Theatre Act', type: 'Stage / Indoor / Outdoor', wide: false,
    desc: 'Physical theatre combining acting, movement, contact improvisation, and spatial design. Site-specific or stage-based.',
    specs: [
      ['Duration', '20–60 min or ongoing ambient'],
      ['Space', 'Flexible — adapts to any environment'],
      ['Setup', '1–2 hours'],
      ['Performers', '1–6 (depending on concept)'],
      ['Format', 'Fixed show or interactive roaming installation']
    ],
    tags: ['Physical Theatre', 'Contact Improv', 'Site-Specific', 'Indoor', 'Outdoor']
  },
  {
    ico: '🤸', title: 'Acrobatic Act', type: 'Stage / Festival', wide: false,
    desc: 'Partner acrobatics and floor-based circus — L-basing, standing acro, choreographed contact movement.',
    specs: [
      ['Duration', '10–25 min'],
      ['Space', 'Min. 6×6m with crash mat or soft floor'],
      ['Setup', '30 min warm-up + safety check'],
      ['Crew', '2–4 performers'],
      ['Equipment', 'Crash mats (provided or required)']
    ],
    tags: ['Acrobatics', 'Partner Work', 'Stage', 'Corporate']
  },
  {
    ico: '🪄', title: 'Contact Staff Solo', type: 'Stage / Festival / Street', wide: false,
    desc: "Pablo's signature discipline. Meditative, high-skill contact staff — blurring the line between juggling, dance, and sculpture.",
    specs: [
      ['Duration', '10–30 min'],
      ['Space', 'Min. 4×4m clear'],
      ['Setup', '15 min'],
      ['Format', 'Fixed set or continuous roaming walkabout']
    ],
    tags: ['Contact Staff', 'Solo', 'Street', 'Stage', 'Walkabout']
  },
  {
    ico: '🏗️', title: 'Stage & Space Design', type: 'Event / Festival Architecture', wide: true,
    desc: 'Full-service stage and immersive space design. Yurt construction, light installations, full stage builds — artistic vision and technical hands-on skill.',
    specs: [
      ['Services', 'Stage construction, yurt building, set design, light & shadow installations, fire safety planning'],
      ['Scale', 'Small wellness spaces to large festival main stages'],
      ['Experience', '20+ festivals across Europe'],
      ['Deliverables', 'Concept design, technical rider, on-site build, teardown']
    ],
    tags: ['Stage Design', 'Festival', 'Light Installation', 'Fire Safety', 'Yurt Build']
  }
];

/* ═══════════════════════════════════════════════
   APPLICATION CODE — no need to edit below here
═══════════════════════════════════════════════ */

/* ── CURSOR ── */
const curEl  = document.getElementById('cur');
const curREl = document.getElementById('cur-r');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  curEl.style.left  = mx + 'px';
  curEl.style.top   = my + 'px';
});
(function loop() {
  rx += (mx - rx) * .11;
  ry += (my - ry) * .11;
  curREl.style.left = rx + 'px';
  curREl.style.top  = ry + 'px';
  requestAnimationFrame(loop);
})();

function curBig()   { curEl.classList.add('big');    curREl.classList.add('big'); }
function curSmall() { curEl.classList.remove('big'); curREl.classList.remove('big'); }
function attachCursor() {
  document.querySelectorAll('a, button, .ws-card, .pc, .ri-card').forEach(el => {
    el.addEventListener('mouseenter', curBig);
    el.addEventListener('mouseleave', curSmall);
  });
}

/* ── NAV SCROLL ── */
window.addEventListener('scroll', () => {
  document.getElementById('mnav').classList.toggle('scrolled', scrollY > 55);
});

/* ── INTERSECTION OBSERVER (reveal + phone) ── */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: .1, rootMargin: '0px 0px -35px 0px' });

function observe() {
  document.querySelectorAll('.rv, .rl, .rr, .ph').forEach(el => io.observe(el));
}

/* ── COUNTER ANIMATION ── */
const co = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count);
    const fmt    = el.dataset.fmt;
    let start = null;
    const step = ts => {
      if (!start) start = ts;
      const p   = Math.min((ts - start) / 1400, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      const v   = Math.floor(ease * target);
      el.textContent = fmt === 'k' ? (v / 1000).toFixed(3)
                     : fmt === 'p' ? v + '+'
                     : v;
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = fmt === 'k' ? (target / 1000).toFixed(3)
                          : fmt === 'p' ? target + '+'
                          : target;
    };
    requestAnimationFrame(step);
    co.unobserve(el);
  });
}, { threshold: .5 });

function observeCounters() {
  document.querySelectorAll('[data-count]').forEach(el => co.observe(el));
}

/* ── PAGE NAVIGATION ── */
function gp(id) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.pb').forEach(b => b.classList.remove('on'));
  document.getElementById('pg-' + id).classList.add('on');
  const map = { home: 0, workshops: 1, performance: 2, showreel: 3 };
  document.querySelectorAll('.pb')[map[id]].classList.add('on');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => { observe(); observeCounters(); attachCursor(); }, 120);
}

/* ── RENDER SCHEDULE ── */
function renderSchedule() {
  const list = document.getElementById('sched-list');
  if (!list) return;
  list.innerHTML = SCHEDULE.map(s => `
    <div class="sched-row ${s.past ? 'past' : 'upcoming'}">
      <div>
        <div class="sched-day">${s.day}</div>
        <div class="sched-month">${s.month}</div>
      </div>
      <div>
        <div class="sched-event">${s.event}</div>
        <div class="sched-loc">${s.location}</div>
      </div>
      <span class="badge ${s.type}">${s.label}</span>
    </div>`).join('');
}

/* ── RENDER WORKSHOPS ── */
function renderWorkshops() {
  const grid = document.getElementById('ws-grid');
  if (!grid) return;
  grid.innerHTML = WORKSHOPS.map((w, i) => `
    <div class="ws-card rv" style="transition-delay:${(i % 3) * .08}s" onclick="openModal(${i})">
      <div class="ws-num">${w.num}</div>
      <div class="ws-title">${w.title}</div>
      <div class="ws-sub">${w.sub}</div>
      <div class="ws-tags">${w.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

/* ── WORKSHOP MODAL ── */
function openModal(i) {
  const w = WORKSHOPS[i];
  document.getElementById('m-cat').textContent   = `${w.type} · ${w.dur}`;
  document.getElementById('m-title').textContent = w.title;
  document.getElementById('m-sub').textContent   = w.sub;

  document.getElementById('m-body').innerHTML = `
    <div class="wm-sec">
      <div class="wm-sec-title">Overview</div>
      <p>${w.overview}</p>
      <div class="wm-tags">${w.tags.map(t => `<span class="tag tag-light">${t}</span>`).join('')}</div>
    </div>
    <div class="wm-sec" style="display:grid;grid-template-columns:1fr 1fr;gap:1.8rem;">
      <div>
        <div class="wm-sec-title">Who it's for</div>
        <ul>${w.audience.map(a => `<li>${a}</li>`).join('')}</ul>
      </div>
      <div>
        <div class="wm-sec-title">Objectives</div>
        <ul>${w.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="wm-sec">
      <div class="wm-sec-title">Agenda</div>
      <table class="wm-table">
        <tr><th>Time</th><th>Block</th><th>Content</th></tr>
        ${w.agenda.map(a => `<tr><td>${a[0]}</td><td>${a[1]}</td><td>${a[2]}</td></tr>`).join('')}
      </table>
    </div>
    <div class="wm-sec">
      <div class="wm-sec-title">Hook</div>
      <div class="wm-hook"><p>"${w.hook}"</p></div>
    </div>`;

  document.getElementById('wmo').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  document.getElementById('wmo').classList.remove('open');
  document.body.style.overflow = '';
}
function overlayClick(e) {
  if (e.target === document.getElementById('wmo')) closeModal();
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ── RENDER PERFORMANCE SETUPS ── */
function renderSetups() {
  const c = document.getElementById('perf-cards');
  if (!c) return;
  c.innerHTML = SETUPS.map(s => `
    <div class="pc rv ${s.wide ? 'wide' : ''}">
      <div class="pc-hd">
        <div class="pc-ico">${s.ico}</div>
        <div class="pc-title">${s.title}</div>
        <div class="pc-type">${s.type}</div>
      </div>
      <div class="pc-bd">
        <p class="pc-desc">${s.desc}</p>
        <div class="pc-specs">${s.specs.map(r => `
          <div class="pc-row">
            <div class="pc-key">${r[0]}</div>
            <div class="pc-val">${r[1]}</div>
          </div>`).join('')}
        </div>
        <div class="pc-tags">${s.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      </div>
    </div>`).join('');
}

/* ── VIDEO REEL ── */
let videos = [];

function parseURL(url) {
  const yt = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  if (yt) return {
    embed: `https://www.youtube.com/embed/${yt[1]}?rel=0`,
    thumb: `https://img.youtube.com/vi/${yt[1]}/mqdefault.jpg`,
    type: 'YouTube', id: yt[1]
  };
  const vi = url.match(/vimeo\.com\/(\d+)/);
  if (vi) return {
    embed: `https://player.vimeo.com/video/${vi[1]}`,
    thumb: null, type: 'Vimeo', id: vi[1]
  };
  return null;
}

function setFeatured(url) {
  document.getElementById('vfeat').innerHTML =
    `<iframe src="${url}" allowfullscreen allow="autoplay;fullscreen;picture-in-picture"></iframe>`;
}
function promptFeatured() {
  const u = prompt('Paste your YouTube or Vimeo URL for the featured video:');
  if (!u) return;
  const p = parseURL(u.trim());
  if (p) setFeatured(p.embed);
  else alert('Could not parse that URL. Try a YouTube or Vimeo link.');
}
function addVideo() {
  const url   = document.getElementById('vurl').value.trim();
  const title = document.getElementById('vtitle').value.trim() || 'Untitled Video';
  if (!url) return;
  const p = parseURL(url);
  if (!p) { alert('Please use a YouTube or Vimeo link.'); return; }
  videos.push({ ...p, title });
  document.getElementById('vurl').value   = '';
  document.getElementById('vtitle').value = '';
  if (videos.length === 1) setFeatured(p.embed);
  renderReel();
}
function removeVideo(i) { videos.splice(i, 1); renderReel(); }
function playVideo(i)   { setFeatured(videos[i].embed); document.querySelector('.reel-feat').scrollIntoView({ behavior: 'smooth' }); }

function renderReel() {
  const grid = document.getElementById('rgrid');
  const cnt  = document.getElementById('vcnt');
  cnt.textContent = videos.length + (videos.length === 1 ? ' video' : ' videos');
  if (!videos.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;padding:2.5rem 0;text-align:center;">
      <p style="font-family:'DM Mono',monospace;font-size:.65rem;letter-spacing:2px;text-transform:uppercase;color:rgba(237,232,222,.2);">
        Add videos above to populate this grid
      </p></div>`;
    return;
  }
  grid.innerHTML = videos.map((v, i) => `
    <div class="ri-card" onclick="playVideo(${i})">
      <div class="ri-thumb">
        ${v.thumb
          ? `<img src="${v.thumb}" alt="${v.title}"/>`
          : `<div class="ri-thumb-ph"><span>▶</span></div>`}
      </div>
      <div class="ri-info">
        <div class="ri-title">${v.title}</div>
        <div class="ri-meta">${v.type} · click to play</div>
      </div>
      <button class="ri-del" onclick="event.stopPropagation();removeVideo(${i})">✕</button>
    </div>`).join('');
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderSchedule();
  renderWorkshops();
  renderSetups();
  renderReel();
  observe();
  observeCounters();
  attachCursor();
});
