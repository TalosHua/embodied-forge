const menu=document.querySelector('.menu'),nav=document.querySelector('.nav nav');if(menu)menu.onclick=()=>nav.classList.toggle('open');document.querySelectorAll('.nav nav a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
const index=[
 {type:'项目',title:'仿生四足 Locomotion',desc:'动作数据、AMP、ADD、多步态、Sim2Real',url:'./projects/quadruped-locomotion/'},
 {type:'项目',title:'NexaArm',desc:'桌面机械臂、结构设计、关节控制、CAN',url:'./projects/nexaarm/'},
 {type:'项目',title:'多关节控制系统',desc:'C++、ROS 2、执行器、主从通信',url:'./projects/control-system/'},
 {type:'论文',title:'从 AMP 到行为基础模型',desc:'模仿学习、技能表征、Flow Matching、统一策略',url:'./papers/amp-to-foundation-models/'},
 {type:'教程',title:'使用 CAN 控制多关节电机',desc:'FOC、CANopen、CiA 402、主站与从站',url:'./tutorials/can-multi-motor/'},
 {type:'系统拆解',title:'MicroDuck：从硬件到软件的完整链路',desc:'双足机器人、硬件架构、Rust、ONNX、PPO、BAM、Sim2Real',url:'./analysis/microduck-full-stack/'}];
const dialog=document.querySelector('.search'),input=document.querySelector('#site-search'),results=document.querySelector('.search-results');
function render(q=''){const key=q.trim().toLowerCase(),items=index.filter(x=>!key||`${x.type}${x.title}${x.desc}`.toLowerCase().includes(key));results.innerHTML=items.length?items.map(x=>`<a href="${x.url}"><small>${x.type}</small><b>${x.title}</b><div>${x.desc}</div></a>`).join(''):'<div class="search-empty">没有找到相关内容</div>'}
document.querySelectorAll('.search-open').forEach(b=>b.onclick=()=>{render();dialog.showModal();setTimeout(()=>input.focus(),50)});if(dialog){document.querySelector('.search-close').onclick=()=>dialog.close();input.oninput=()=>render(input.value);dialog.onclick=e=>{if(e.target===dialog)dialog.close()}}
