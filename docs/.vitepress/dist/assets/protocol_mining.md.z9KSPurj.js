import{_ as a,c as e,ae as l,o as t}from"./chunks/framework.Dqr_tXBJ.js";const m=JSON.parse('{"title":"Mining and Emissions","description":"","frontmatter":{},"headers":[],"relativePath":"protocol/mining.md","filePath":"protocol/mining.md"}'),o={name:"protocol/mining.md"};function n(r,i,s,h,c,u){return t(),e("div",null,i[0]||(i[0]=[l(`<h1 id="mining-and-emissions" tabindex="-1">Mining and Emissions <a class="header-anchor" href="#mining-and-emissions" aria-label="Permalink to &quot;Mining and Emissions&quot;">​</a></h1><h2 id="mining-overview" tabindex="-1">Mining Overview <a class="header-anchor" href="#mining-overview" aria-label="Permalink to &quot;Mining Overview&quot;">​</a></h2><p>Salvium uses a proof-of-work (PoW) mining algorithm designed to be ASIC-resistant while maintaining network security and decentralization.</p><h2 id="mining-algorithm" tabindex="-1">Mining Algorithm <a class="header-anchor" href="#mining-algorithm" aria-label="Permalink to &quot;Mining Algorithm&quot;">​</a></h2><h3 id="randomx" tabindex="-1">RandomX <a class="header-anchor" href="#randomx" aria-label="Permalink to &quot;RandomX&quot;">​</a></h3><ul><li>CPU-optimized</li><li>Memory-hard</li><li>ASIC-resistant</li><li>Regular updates</li></ul><h3 id="specifications" tabindex="-1">Specifications <a class="header-anchor" href="#specifications" aria-label="Permalink to &quot;Specifications&quot;">​</a></h3><ul><li>Block time: 120 seconds</li><li>Memory requirement: 2GB</li><li>Verification time: &lt;1ms</li><li>Difficulty adjustment: Every block</li></ul><h2 id="emission-schedule" tabindex="-1">Emission Schedule <a class="header-anchor" href="#emission-schedule" aria-label="Permalink to &quot;Emission Schedule&quot;">​</a></h2><h3 id="initial-supply" tabindex="-1">Initial Supply <a class="header-anchor" href="#initial-supply" aria-label="Permalink to &quot;Initial Supply&quot;">​</a></h3><ul><li>Genesis block: 0 SAL</li><li>Pre-mine: None</li><li>Fair launch</li><li>Community-driven</li></ul><h3 id="emission-rate" tabindex="-1">Emission Rate <a class="header-anchor" href="#emission-rate" aria-label="Permalink to &quot;Emission Rate&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Block Reward = Base Reward × Emission Speed Factor</span></span></code></pre></div><h3 id="schedule" tabindex="-1">Schedule <a class="header-anchor" href="#schedule" aria-label="Permalink to &quot;Schedule&quot;">​</a></h3><ol><li><p><strong>Years 1-2</strong></p><ul><li>Higher emission rate</li><li>Community distribution</li><li>Network bootstrapping</li><li>Ecosystem development</li></ul></li><li><p><strong>Years 3-5</strong></p><ul><li>Moderate emission</li><li>Network stability</li><li>Balanced distribution</li><li>Market maturity</li></ul></li><li><p><strong>Years 6+</strong></p><ul><li>Tail emission</li><li>Long-term sustainability</li><li>Network security</li><li>Inflation control</li></ul></li></ol><h2 id="mining-guide" tabindex="-1">Mining Guide <a class="header-anchor" href="#mining-guide" aria-label="Permalink to &quot;Mining Guide&quot;">​</a></h2><h3 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h3><ol><li>Hardware requirements</li><li>Software setup</li><li>Pool selection</li><li>Configuration</li></ol><h3 id="solo-mining" tabindex="-1">Solo Mining <a class="header-anchor" href="#solo-mining" aria-label="Permalink to &quot;Solo Mining&quot;">​</a></h3><ul><li>Node setup</li><li>Wallet configuration</li><li>Mining software</li><li>Optimization</li></ul><h3 id="pool-mining" tabindex="-1">Pool Mining <a class="header-anchor" href="#pool-mining" aria-label="Permalink to &quot;Pool Mining&quot;">​</a></h3><ul><li>Pool selection</li><li>Account setup</li><li>Worker configuration</li><li>Payment settings</li></ul><h2 id="hardware-requirements" tabindex="-1">Hardware Requirements <a class="header-anchor" href="#hardware-requirements" aria-label="Permalink to &quot;Hardware Requirements&quot;">​</a></h2><h3 id="minimum-specs" tabindex="-1">Minimum Specs <a class="header-anchor" href="#minimum-specs" aria-label="Permalink to &quot;Minimum Specs&quot;">​</a></h3><ul><li>CPU: 4 cores</li><li>RAM: 4GB</li><li>Storage: 100GB</li><li>Network: Stable connection</li></ul><h3 id="recommended-specs" tabindex="-1">Recommended Specs <a class="header-anchor" href="#recommended-specs" aria-label="Permalink to &quot;Recommended Specs&quot;">​</a></h3><ul><li>CPU: 8+ cores</li><li>RAM: 16GB</li><li>Storage: 500GB SSD</li><li>Network: High-speed connection</li></ul><h2 id="software-setup" tabindex="-1">Software Setup <a class="header-anchor" href="#software-setup" aria-label="Permalink to &quot;Software Setup&quot;">​</a></h2><h3 id="required-software" tabindex="-1">Required Software <a class="header-anchor" href="#required-software" aria-label="Permalink to &quot;Required Software&quot;">​</a></h3><ol><li>Salvium node</li><li>Mining software</li><li>Wallet</li><li>Monitoring tools</li></ol><h3 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Example miner config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;algo&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;randomx&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;pool&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;pool.salvium.org:3333&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;wallet&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;SAL...&quot;,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  &quot;threads&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;auto&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="pool-mining-1" tabindex="-1">Pool Mining <a class="header-anchor" href="#pool-mining-1" aria-label="Permalink to &quot;Pool Mining&quot;">​</a></h2><h3 id="choosing-a-pool" tabindex="-1">Choosing a Pool <a class="header-anchor" href="#choosing-a-pool" aria-label="Permalink to &quot;Choosing a Pool&quot;">​</a></h3><ul><li>Hash rate distribution</li><li>Fee structure</li><li>Payment method</li><li>Server location</li></ul><h3 id="setup-process" tabindex="-1">Setup Process <a class="header-anchor" href="#setup-process" aria-label="Permalink to &quot;Setup Process&quot;">​</a></h3><ol><li>Create account</li><li>Add workers</li><li>Configure miner</li><li>Monitor performance</li></ol><h2 id="solo-mining-1" tabindex="-1">Solo Mining <a class="header-anchor" href="#solo-mining-1" aria-label="Permalink to &quot;Solo Mining&quot;">​</a></h2><h3 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h3><ul><li>Full node</li><li>Stable connection</li><li>Sufficient hardware</li><li>Technical knowledge</li></ul><h3 id="setup-steps" tabindex="-1">Setup Steps <a class="header-anchor" href="#setup-steps" aria-label="Permalink to &quot;Setup Steps&quot;">​</a></h3><ol><li>Node synchronization</li><li>Wallet setup</li><li>Miner configuration</li><li>Network connection</li></ol><h2 id="optimization" tabindex="-1">Optimization <a class="header-anchor" href="#optimization" aria-label="Permalink to &quot;Optimization&quot;">​</a></h2><h3 id="performance" tabindex="-1">Performance <a class="header-anchor" href="#performance" aria-label="Permalink to &quot;Performance&quot;">​</a></h3><ul><li>Thread optimization</li><li>Memory timing</li><li>CPU affinity</li><li>Cooling solution</li></ul><h3 id="efficiency" tabindex="-1">Efficiency <a class="header-anchor" href="#efficiency" aria-label="Permalink to &quot;Efficiency&quot;">​</a></h3><ul><li>Power management</li><li>Cost calculation</li><li>ROI optimization</li><li>Hardware selection</li></ul><h2 id="security" tabindex="-1">Security <a class="header-anchor" href="#security" aria-label="Permalink to &quot;Security&quot;">​</a></h2><h3 id="network-security" tabindex="-1">Network Security <a class="header-anchor" href="#network-security" aria-label="Permalink to &quot;Network Security&quot;">​</a></h3><ul><li>Hash rate distribution</li><li>Attack resistance</li><li>Network health</li><li>Protocol rules</li></ul><h3 id="miner-security" tabindex="-1">Miner Security <a class="header-anchor" href="#miner-security" aria-label="Permalink to &quot;Miner Security&quot;">​</a></h3><ul><li>Wallet security</li><li>Pool security</li><li>Software verification</li><li>System protection</li></ul><h2 id="economics" tabindex="-1">Economics <a class="header-anchor" href="#economics" aria-label="Permalink to &quot;Economics&quot;">​</a></h2><h3 id="profitability" tabindex="-1">Profitability <a class="header-anchor" href="#profitability" aria-label="Permalink to &quot;Profitability&quot;">​</a></h3><ul><li>Hardware costs</li><li>Energy costs</li><li>Network difficulty</li><li>Market price</li></ul><h3 id="roi-calculation" tabindex="-1">ROI Calculation <a class="header-anchor" href="#roi-calculation" aria-label="Permalink to &quot;ROI Calculation&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Daily Reward = (Hash Rate × 86400) ÷ (Network Difficulty × 2^32) × Block Reward</span></span></code></pre></div><h2 id="best-practices" tabindex="-1">Best Practices <a class="header-anchor" href="#best-practices" aria-label="Permalink to &quot;Best Practices&quot;">​</a></h2><h3 id="mining" tabindex="-1">Mining <a class="header-anchor" href="#mining" aria-label="Permalink to &quot;Mining&quot;">​</a></h3><ol><li>Regular maintenance</li><li>Performance monitoring</li><li>Security measures</li><li>Update management</li></ol><h3 id="hardware" tabindex="-1">Hardware <a class="header-anchor" href="#hardware" aria-label="Permalink to &quot;Hardware&quot;">​</a></h3><ol><li>Proper cooling</li><li>Power stability</li><li>Component quality</li><li>Regular cleaning</li></ol><h2 id="resources" tabindex="-1">Resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;Resources&quot;">​</a></h2><h3 id="software" tabindex="-1">Software <a class="header-anchor" href="#software" aria-label="Permalink to &quot;Software&quot;">​</a></h3><ul><li>Official miner</li><li>Pool software</li><li>Monitoring tools</li><li>Analysis tools</li></ul><h3 id="support" tabindex="-1">Support <a class="header-anchor" href="#support" aria-label="Permalink to &quot;Support&quot;">​</a></h3><ul><li>Mining forum</li><li>Technical support</li><li>Community guides</li><li>Update notifications</li></ul>`,67)]))}const p=a(o,[["render",n]]);export{m as __pageData,p as default};
