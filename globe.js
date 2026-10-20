const globeCanvas = document.querySelector('#globe');
const globeContext = globeCanvas.getContext('2d');
const globeStage = document.querySelector('.globe-stage');
const labelRoot = document.querySelector('#skill-labels');
const panels = [...document.querySelectorAll('.skill-feature')];
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const nodeOrder = ['python','github','openai','java','c','mysql','web','androidstudio','rstudio','octave','react','sas',
  'python','github','openai','wechat','tapnow','figma','canva','notion','paris-cite','machine-learning','deep-learning','jianying'];
const repeatedSkills = new Set(['python','github','openai']);
const NODE_COUNT = nodeOrder.length;
const globeNodes = Array.from({length:NODE_COUNT},(_,i)=>{
  const skill=skillCatalog.find(item=>item.id===nodeOrder[i]);
  // Twelve upper-hemisphere anchors and their exact antipodes.
  const anchor=i%12, y=(anchor+.5)/12, phi=anchor*2.3999632297, r=Math.sqrt(1-y*y);
  const sign=i<12?1:-1;
  const el=document.createElement('div');el.className='skill';
  const holder=document.createElement('span');holder.className=`skill-icon icon-${skill.id}`;
  if(skill.icons.length>1)holder.classList.add('icon-combination');
  skill.icons.forEach(file=>{const img=document.createElement('img');img.src='assets/icons/'+file;img.alt='';img.draggable=false;holder.append(img);});
  const caption=document.createElement('span');caption.className='skill-name';caption.textContent=skill.name[language];
  el.append(holder,caption);labelRoot.append(el);
  return {el,skill,position:[sign*Math.cos(phi)*r,sign*y,sign*Math.sin(phi)*r]};
});
panels.forEach(panel=>{
  const category=document.createElement('span');category.className='feature-category';
  const title=document.createElement('h2'),description=document.createElement('p');
  panel.append(category,title,description);
});
const globePoints=Array.from({length:3400},(_,i)=>{
  const y=1-2*(i+.5)/3400,r=Math.sqrt(1-y*y),a=i*2.3999632297;
  return [r*Math.cos(a),y,r*Math.sin(a)];
});
let gw=1,gh=1,gr=1,gAngle=.35,gTilt=.12,gDrag=false,gLastX=0,gLastY=0,gVelocity=0,gLastTime=0;
let featureClock=0,visibleGlobe=true;
new IntersectionObserver(entries=>{visibleGlobe=entries[0].isIntersecting;}).observe(globeStage);
function resizeGlobe(){
  const rect=globeStage.getBoundingClientRect();if(!rect.width)return;
  gw=rect.width;gh=rect.height;
  const ratio=Math.min(devicePixelRatio||1,2);
  globeCanvas.width=gw*ratio;globeCanvas.height=gh*ratio;
  globeContext.setTransform(ratio,0,0,ratio,0,0);
  gr=Math.min(gw*(gw<700?.39:.31),gh*.385);
}
new ResizeObserver(resizeGlobe).observe(globeStage);
function gRotate(p,a=gAngle,t=gTilt){
  const x=p[0]*Math.cos(a)+p[2]*Math.sin(a),z=-p[0]*Math.sin(a)+p[2]*Math.cos(a);
  return [x,p[1]*Math.cos(t)-z*Math.sin(t),p[1]*Math.sin(t)+z*Math.cos(t)];
}
function gProject(p){
  const scale=4/(4-p[2]);
  return [gw/2+p[0]*gr*scale,gh*(gw<700?.38:.47)+p[1]*gr*scale,scale];
}
globeStage.addEventListener('pointerdown',e=>{
  if(e.button!==0)return;
  gDrag=true;gLastX=e.clientX;gLastY=e.clientY;gVelocity=0;
  globeStage.classList.add('dragging');globeStage.setPointerCapture(e.pointerId);
});
globeStage.addEventListener('pointermove',e=>{
  if(!gDrag)return;
  const dx=e.clientX-gLastX;gAngle+=dx*.005;
  gTilt=Math.max(-.7,Math.min(.7,gTilt+(e.clientY-gLastY)*.003));
  gVelocity=dx*.00018;gLastX=e.clientX;gLastY=e.clientY;
});
function releaseGlobe(){gDrag=false;globeStage.classList.remove('dragging');}
['pointerup','pointercancel','lostpointercapture'].forEach(event=>globeStage.addEventListener(event,releaseGlobe));
function gLine(points,colour,weight=.7){
  globeContext.beginPath();
  points.forEach((p,i)=>{const q=gProject(p);i?globeContext.lineTo(q[0],q[1]):globeContext.moveTo(q[0],q[1]);});
  globeContext.strokeStyle=colour;globeContext.lineWidth=weight;globeContext.stroke();
}
function smooth(v){v=Math.max(0,Math.min(1,v));return v*v*(3-2*v);}
function featureProgress(seconds){
  if(seconds<1)return 0;
  if(seconds<2.5)return smooth((seconds-1)/1.5);
  if(seconds<6.8)return 1;
  if(seconds<8.3)return 1-smooth((seconds-6.8)/1.5);
  return 0;
}
function drawGlobe(time){
  requestAnimationFrame(drawGlobe);
  const elapsed=Math.min(time-gLastTime,50)||16.67;gLastTime=time;
  if(document.hidden||currentPage||!visibleGlobe)return;
  const dt=elapsed/16.67,light=theme==='light',rgb=light?'44,65,75':'184,213,233';
  if(!gDrag&&!reducedMotion.matches){gAngle+=.0011*dt+gVelocity*dt;gVelocity*=Math.pow(.95,dt);featureClock+=elapsed/1000;}
  const ctx=globeContext,cx=gw/2,cy=gh*(gw<700?.38:.47),rim=gr*4/Math.sqrt(15);
  ctx.clearRect(0,0,gw,gh);
  // Atmospheric falloff and a thin luminous limb, aligned to the projected sphere.
  const halo=ctx.createRadialGradient(cx,cy,rim*.85,cx,cy,rim*1.12);
  halo.addColorStop(0,`rgba(${rgb},0)`);
  halo.addColorStop(.47,`rgba(${rgb},${light?.03:.025})`);
  halo.addColorStop(.55,`rgba(${rgb},${light?.08:.22})`);
  halo.addColorStop(.62,`rgba(${rgb},${light?.03:.07})`);
  halo.addColorStop(1,`rgba(${rgb},0)`);
  ctx.fillStyle=halo;ctx.fillRect(0,0,gw,gh);
  for(let k=0;k<6;k++){
    const points=[];
    for(let j=0;j<=90;j++){const a=j/90*Math.PI*2,p=k/6*Math.PI;points.push(gRotate([Math.cos(a)*Math.cos(p),Math.sin(a),Math.cos(a)*Math.sin(p)]));}
    gLine(points,`rgba(${rgb},${light?.18:.065})`,light?.8:.6);
  }
  for(let k=-2;k<=2;k++){
    const y=k*.32,r=Math.sqrt(1-y*y),points=[];
    for(let j=0;j<=90;j++){const a=j/90*Math.PI*2;points.push(gRotate([r*Math.cos(a),y,r*Math.sin(a)]));}
    gLine(points,`rgba(${rgb},${light?.16:.065})`,light?.8:.6);
  }
  for(let k=0;k<3;k++){
    const points=[];
    for(let j=0;j<=130;j++){const a=j/130*Math.PI*2;points.push(gRotate([1.28*Math.cos(a),.18*Math.sin(a),1.15*Math.sin(a)],k*1.13+.2,k*.48-.48));}
    ctx.save();ctx.shadowColor=`rgba(${rgb},.5)`;ctx.shadowBlur=light?0:5;
    const orbitAlpha=light?(k===1?.55:.36):(k===1?.25:.12);
    gLine(points,`rgba(${rgb},${orbitAlpha})`,light?(k===1?1.35:1):(k===1?1:.6));ctx.restore();
  }
  for(const point of globePoints){
    const p=gRotate(point),q=gProject(p),limb=1-Math.abs(p[2]-.25)/1.25;
    const centre=Math.abs(q[0]-cx)<Math.min(gw*.24,230)&&Math.abs(q[1]-cy)<100;
    const alpha=(.09+(p[2]+1)*.12+Math.pow(limb,5)*.38)*(centre?.22:1);
    ctx.fillStyle=`rgba(${rgb},${alpha})`;ctx.beginPath();
    ctx.arc(q[0],q[1],(.55+.35*limb)*q[2],0,Math.PI*2);ctx.fill();
  }
  ctx.save();ctx.shadowColor=light?'transparent':'#b6ddff';ctx.shadowBlur=18;
  ctx.beginPath();ctx.arc(cx,cy,rim,0,Math.PI*2);ctx.strokeStyle=`rgba(${rgb},${light?.65:.48})`;ctx.lineWidth=light?1.5:1.1;ctx.stroke();
  ctx.shadowBlur=7;ctx.lineWidth=.5;ctx.stroke();ctx.restore();
  // Opposing nodes travel out, hold their description, and return before the next pair.
  const cycle=Math.floor(featureClock/9.5),phase=featureClock%9.5;
  const progress=reducedMotion.matches?0:featureProgress(phase);
  const selected=[(cycle*5)%NODE_COUNT,(cycle*5+7)%NODE_COUNT];
  const targets=gw<700?[[gw*.25,gh*.71],[gw*.75,gh*.71]]:[[gw*.11,gh*.42],[gw*.89,gh*.42]];
  panels.forEach((panel,side)=>{
    const node=globeNodes[selected[side]],key=`${selected[side]}-${language}`;
    if(panel.dataset.key!==key){
      panel.dataset.key=key;panel.children[0].textContent=node.skill.type[language];
      panel.children[1].textContent=node.skill.name[language];panel.children[2].textContent=node.skill.description[language];
    }
    panel.style.left=`${targets[side][0]}px`;panel.style.top=`${targets[side][1]+46}px`;
    const alpha=smooth((progress-.75)/.25);panel.style.opacity=alpha;
    panel.style.visibility=alpha>.01?'visible':'hidden';
    panel.setAttribute('aria-hidden',String(alpha<.9));
  });
  globeNodes.forEach((node,i)=>{
    const p=gRotate(node.position),q=gProject(p),side=selected.indexOf(i);
    const mix=side<0?0:progress,target=side<0?q:targets[side];
    const x=q[0]+(target[0]-q[0])*mix,y=q[1]+(target[1]-q[1])*mix;
    const depth=(p[2]+1)/2,scale=(.6+depth*.44)*(1-mix)+(gw<700?1:1.25)*mix;
    const centre=Math.abs(q[0]-cx)<Math.min(gw*.25,245)&&Math.abs(q[1]-cy)<100;
    // A repeated tool appears only on the front; hide its twin during a feature.
    const twinFeatured=repeatedSkills.has(node.skill.id)&&selected.some(j=>j!==i&&globeNodes[j].skill.id===node.skill.id)&&progress>0;
    const visibility=repeatedSkills.has(node.skill.id)?smooth(p[2]/.2):1;
    const opacity=((centre?.08:.25+depth*.7)*visibility*(1-mix)+mix)*(twinFeatured?1-progress:1);
    const caption=node.el.querySelector('.skill-name');
    if(caption.textContent!==node.skill.name[language])caption.textContent=node.skill.name[language];
    node.el.style.transform=`translate(${x}px,${y}px) translate(-50%,-50%) scale(${scale})`;
    node.el.style.opacity=opacity;node.el.style.zIndex=mix>.05?'6':String(p[2]>0?3:1);
    node.el.querySelector('.skill-name').style.opacity=1-mix;
  });
}
resizeGlobe();requestAnimationFrame(drawGlobe);
