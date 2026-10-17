(function(){const S=window.SITE;if(!S)return;const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const yr=(S.startDate||"").slice(2,4),d={brandWordmark:`${S.eventName} ${yr?"'"+yr:""}`.trim(),eventWordmark:`${S.eventName} — ${S.edition}`};
$$("[data-text]").forEach(e=>{const v=d[e.dataset.text]??S[e.dataset.text];if(v)e.textContent=v});
$$("[data-src]").forEach(e=>{if(S[e.dataset.src])e.src=S[e.dataset.src];if(S[e.dataset.alt])e.alt=S[e.dataset.alt]});
const set=(k,html)=>{const b=$(`[data-${k}]`);if(b&&S[k])b.innerHTML=S[k].map(html).join("")};
set("about",p=>`<p>${p}</p>`);
set("stats",s=>`<div class="stat"><strong>${s.value}</strong><span>${s.label}</span></div>`);
set("sports",(sp,i)=>`<article class="sport-card" data-i="${i}"><div class="sport-body"><h3 class="sport-name">${sp.name}</h3><p class="sport-days">${sp.days||""}</p><button type="button" class="sport-more" aria-haspopup="dialog">View details</button></div></article>`);
const dlg=$("#sportDialog"),row=(h,v)=>`<div class="sd-row"><h4>${h}</h4><p>${v}</p></div>`;
if(dlg){$(".sd-close",dlg).onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
$$(".sport-card").forEach(c=>c.addEventListener("click",()=>{const sp=S.sports[c.dataset.i],lead=(S.team||[])[0],cats=(sp.categories||[]).join(", ");
$(".sd-title",dlg).textContent=sp.name;$(".sd-days",dlg).textContent=sp.days||"";
$(".sd-body",dlg).innerHTML=(sp.about?row("About",sp.about):"")+(cats?row("Categories",cats):"")+(sp.rules&&sp.rules.length?`<div class="sd-row"><h4>Rules</h4><ul class="sd-rules">${sp.rules.map(r=>`<li>${r}</li>`).join("")}</ul></div>`:"")+row("Venue",sp.venue||"To be announced")+row("Registration","Registration desk in school on 23 October during break.")+(lead?row("Questions",`Contact ${lead.name}${lead.phone?` \u00b7 <a href="tel:${lead.phone.replace(/\s/g,"")}">${lead.phone}</a>`:""}`):"");
dlg.showModal()}))}
set("schedule",x=>`<div class="day-card"><header class="day-head"><span class="day-num">${x.day}</span><span class="day-date">${x.date}</span></header><ul class="day-list">${x.items.map(i=>`<li><time>${i.time}</time><span>${i.title}</span></li>`).join("")}</ul></div>`);
const cb=$("[data-conduct]");if(cb)cb.innerHTML=S.conduct.map((r,i)=>`<li><span class="rule-num">${String(i+1).padStart(2,"0")}</span><span>${r}</span></li>`).join("");
const ini=n=>n.split(/\s+/).filter(w=>/[a-z]/i.test(w[0])).slice(0,2).map(w=>w[0].toUpperCase()).join("");
set("team",m=>`<article class="person"><div class="person-top"><span class="avatar">${ini(m.name)}</span><span class="dot"></span></div><h3 class="person-name">${m.name}</h3><p class="person-role">${m.role}</p><ul class="person-contact">${m.phone?`<li>☎ <a href="tel:${m.phone.replace(/\s/g,"")}">${m.phone}</a></li>`:""}${m.email?`<li><a href="mailto:${m.email}">${m.email}</a></li>`:""}</ul></article>`);
set("socials",s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`);
$("#year").textContent=new Date().getFullYear();
const cd=$("#countdown"),t=S.startDate?new Date(S.startDate):null;
if(cd&&t&&!isNaN(t)&&t>new Date()){cd.hidden=false;const c=k=>$(`[data-cd="${k}"]`,cd),p=n=>String(n).padStart(2,"0");
const tick=()=>{const f=t-new Date();if(f<=0){cd.hidden=true;return}c("days").textContent=p(Math.floor(f/864e5));c("hours").textContent=p(Math.floor(f%864e5/36e5));c("mins").textContent=p(Math.floor(f%36e5/6e4));c("secs").textContent=p(Math.floor(f%6e4/1e3))};tick();setInterval(tick,1000)}
const tg=$("#navToggle"),nav=$("#nav");
tg.onclick=()=>{const o=nav.classList.toggle("is-open");tg.setAttribute("aria-expanded",o);tg.classList.toggle("is-open",o)};
$$("a",nav).forEach(a=>a.onclick=()=>{nav.classList.remove("is-open");tg.classList.remove("is-open");tg.setAttribute("aria-expanded","false")});
const h=$("#header"),sc=()=>h.classList.toggle("is-scrolled",scrollY>24);sc();addEventListener("scroll",sc,{passive:true});
const rt=$$(".section-title,.kicker,.about-copy,.stat,.sport-card,.day-card,.person,.conduct-list li,.register-steps>div");
if("IntersectionObserver"in window){rt.forEach(e=>e.classList.add("reveal"));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");io.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});rt.forEach(e=>io.observe(e))}
})();
