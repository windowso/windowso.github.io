const ME = '<strong>Ziyang Zhang</strong>';
const PUBS = [
  { y: 2026, t: 'ts', title: 'MMTA: Benchmarking Multimodal Temporal Analysis with Time Series, Text, and Vision',
    au: ME + '*, Shenyi Li*, Yilin Wang, Ziyun Cui, Bowen Zhou, Wen Wu, Chao Zhang', venue: 'NeurIPS 2026 (Evaluations &amp; Datasets Track)', accepted: true,
    links: [['Paper','https://arxiv.org/abs/2610.17856'],['Project','https://windowso.github.io/MMTA/'],['Code','https://github.com/OpenTSLab/TimeOmni-v'],['Data','https://huggingface.co/datasets/OpenTSLab/MMTA-v1.0']] },
  { y: 2026, t: 'ts', title: 'TimeOmni-o1: Bidirectionally Coupling Time Series Foundation Models and LLMs for Multimodal Reasoning and Forecasting',
    au: ME + ', Shenyi Li, Wen Wu, Chao Zhang', venue: 'Preprint',
    links: [['Paper','https://openreview.net/pdf?id=BjAsH3A6Y5'],['Project','https://windowso.github.io/TimeOmni-o1-web/'],['Code','https://github.com/OpenTSLab/TimeOmni-o1']] },
  { y: 2026, t: 'ts', title: 'Time-JEPA: Grounding Video World Models with Physical Time Series',
    au: 'Shenyi Li*, ' + ME + '*, Wen Wu, Ming Liu, Chao Zhang', venue: 'arXiv 2026',
    links: [['Paper','https://arxiv.org/abs/2610.23982']] },
  { y: 2026, t: 'ts', title: 'SciTS: Scientific Time Series Understanding and Generation with LLMs',
    au: 'Wen Wu, ' + ME + ', Liwei Liu, Xuenan Xu, et al., Chao Zhang', venue: 'ICLR 2026', accepted: true,
    links: [['Paper','https://proceedings.iclr.cc/paper_files/paper/2026/file/ba1d33849b963efc6b5d3082ad68f480-Paper-Conference.pdf'],['Code','https://github.com/OpenTSLab/TimeOmni']] },
  { y: 2026, t: 'sp', title: 'TVPara: Paralinguistic Captioning of Expressive TV-Series Speech in Complex Acoustic Environments',
    au: ME + ', Wenyi Yu, Wen Wu, Xuenan Xu, Chao Zhang', venue: 'arXiv 2026',
    links: [['Paper','https://arxiv.org/abs/2610.19678'],['Project','https://windowso.github.io/TVPara/']] },
  { y: 2026, t: 'ts', title: 'Intern-S2-Preview: Scientific Agentic Foundation Model',
    au: (document.documentElement.lang.startsWith('zh') ? 'Intern-S2-Preview 团队（含 ' + ME + '）' : 'Intern-S2-Preview Team, including ' + ME), venue: 'Technical report',
    links: [['Paper','https://arxiv.org/abs/2608.13505']] },
  { y: 2025, t: 'sp', title: 'Bayesian Speech Synthesizers Can Learn from Multiple Teachers',
    au: ME + ', Yifan Gao, Xuenan Xu, Baoxiang Li, Wen Wu, Chao Zhang', venue: 'arXiv 2025',
    links: [['Paper','https://arxiv.org/abs/2510.24372'],['Demo','https://windowso.github.io/BELLE-demo/'],['Code','https://github.com/OpenTSLab/BELLE']] },
  { y: 2025, t: 'ts', title: 'Intern-S1: A Scientific Multimodal Foundation Model',
    au: (document.documentElement.lang.startsWith('zh') ? 'Intern-S1 团队（含 ' + ME + '）' : 'Intern-S1 Team, including ' + ME), venue: 'Technical report',
    links: [['Paper','https://arxiv.org/abs/2508.15763']] },
  { y: 2025, t: 'al', title: 'Bayesian WeakS-to-Strong from Text Classification to Generation',
    au: 'Ziyun Cui*, ' + ME + '*, Guangzhi Sun, Wen Wu, Chao Zhang', venue: 'ICLR 2025', accepted: true,
    links: [['Paper','https://proceedings.iclr.cc/paper_files/paper/2025/file/495e55f361708bedbab5d81f92048dcd-Paper-Conference.pdf']] },
  { y: 2024, t: 'ts', title: 'SWIM: Short-Window CNN Integrated with Mamba for EEG-Based Auditory Spatial Attention Decoding',
    au: ME + ', Andrew Thwaites, Alexandra Woolgar, Brian Moore, Chao Zhang', venue: 'IEEE SLT 2024', accepted: true,
    links: [['Paper','https://arxiv.org/abs/2409.19884'],['Code','https://github.com/windowso/SWIM-ASAD']] },
];
const LANG = document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';
const AREA = LANG === 'zh' ? { ts: '时序', sp: '语音', al: '对齐' } : { ts: 'Time series', sp: 'Speech', al: 'Alignment' };
const VZH = { 'Preprint': '预印本', 'NeurIPS 2026 (Evaluations &amp; Datasets Track)': 'NeurIPS 2026（Evaluations &amp; Datasets Track）', 'arXiv 2026': 'arXiv 2026', 'arXiv 2025': 'arXiv 2025', 'Technical report': '技术报告' };
const LZH = { Paper: '论文', Project: '项目页', Code: '代码', Data: '数据', Demo: '音频样例' };
const tv = v => LANG === 'zh' ? (VZH[v] || v) : v;
const tl = k => LANG === 'zh' ? (LZH[k] || k) : k;
const list = document.getElementById('pubs');
list.innerHTML = PUBS.map(p => `
  <li class="pub a-${p.t}" data-t="${p.t}">
    <span class="year">${p.y}</span>
    <div>
      <h3>${p.title}</h3>
      <p class="au">${p.au}</p>
      <p class="meta"><span class="venue${p.accepted ? ' acc' : ''}">${tv(p.venue)}</span><span class="area">${AREA[p.t]}</span>
      ${p.links.map(([k, u]) => `<a href="${u}">${tl(k)}</a>`).join('')}</p>
    </div>
  </li>`).join('');
document.querySelector('.filters').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  document.querySelectorAll('.filters button').forEach(x => x.setAttribute('aria-pressed', x === b ? 'true' : 'false'));
  const f = b.dataset.f;
  list.querySelectorAll('.pub').forEach(li => { li.hidden = !(f === 'all' || li.dataset.t === f); });
});


/* One trace through the three research areas: a speech waveform, a time series with a forecast band,
   and a policy distribution moving away from its reference. Drawn once on load. */
(function () {
  const W = 1200, H = 120, mid = 60;
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const pts = [];
  for (let x = 0; x <= 360; x += 2) {                       // speech: modulated oscillation
    const env = Math.sin(Math.PI * x / 360) * (0.55 + 0.45 * Math.sin(x / 23));
    pts.push([x, mid - env * 34 * Math.sin(x * 0.9) * (0.6 + 0.4 * rnd())]);
  }
  let y = mid;
  for (let x = 362; x <= 840; x += 4) {                     // time series: random walk with seasonality
    y += (rnd() - 0.5) * 7 + Math.sin(x / 26) * 1.6;
    y = Math.max(18, Math.min(102, y));
    const k = Math.min(1, (x - 362) / 20); pts.push([x, mid * (1 - k) + y * k]);
  }
  const yEnd = pts[pts.length - 1][1];
  for (let x = 844; x <= 1200; x += 4) {                    // alignment: shift toward the preferred mode
    const u = (x - 844) / 356;
    const g = (c, s) => Math.exp(-Math.pow((u - c) / s, 2) / 2);
    const target = mid + 40 - 72 * g(0.62, 0.13);
    const k = Math.min(1, u / 0.12);
    pts.push([x, yEnd * (1 - k) + target * k]);
  }
  const d = pts.map((p, i) => (i ? 'L' : 'M') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const svg = document.getElementById('trace');
  const line = svg.querySelector('.line');
  line.setAttribute('d', d);
  const fc = pts.filter(p => p[0] >= 700 && p[0] <= 840);   // forecast interval on the last stretch of the series
  const up = fc.map((p, i) => [p[0], p[1] - 4 - i * 0.6]), dn = fc.map((p, i) => [p[0], p[1] + 4 + i * 0.6]).reverse();
  svg.querySelector('.band').setAttribute('d', 'M' + up.map(p => p.join(' ')).join(' L') + ' L' + dn.map(p => p.join(' ')).join(' L') + ' Z');
  const len = line.getTotalLength();
  line.style.strokeDasharray = len; line.style.strokeDashoffset = len;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { line.style.strokeDashoffset = 0; }
  else { requestAnimationFrame(() => { line.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(.4,.1,.2,1)'; line.style.strokeDashoffset = 0; }); }
})();
