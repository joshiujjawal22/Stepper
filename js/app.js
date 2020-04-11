const prev=document.getElementById('prev');
const nxt=document.getElementById('nxt');
const finish=document.getElementById('finish');
const content=document.getElementById('content');
const bullets=document.querySelectorAll('.bullet');
const frm=document.querySelectorAll('.form');

const max_step=4;
let curr_step=1;
let cur_f_step=2;

nxt.addEventListener('click',()=>{
const curr_bullet=bullets[curr_step-1];
const curr_frm=frm[cur_f_step-1];
const prev_frm=frm[cur_f_step-2];
prev_frm.style.display='none';
curr_frm.style.display='block';

curr_bullet.classList.add('completed');
curr_step++;
cur_f_step++;
prev.disabled=false;
if(curr_step===max_step){
	nxt.disabled=true;
	finish.disabled=false;
}
content.innerText=`Step Number ${curr_step}`;
});

prev.addEventListener('click',()=>{
	const prev_bullet=bullets[curr_step-2];
	const curr_frm=frm[cur_f_step-2];
	const prev_frm=frm[cur_f_step-3];
	prev_frm.style.display='block';
	curr_frm.style.display='none';
	prev_bullet.classList.remove('completed');
	curr_step--;
	cur_f_step--;
	nxt.disabled=false;
	finish.disabled=true;
	if(curr_step===1){
		prev.disabled=true;
	}
content.innerText=`Step Number ${curr_step}`;
});

finish.addEventListener('click',()=>{
location.reload();
});