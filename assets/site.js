
document.addEventListener('DOMContentLoaded',()=>{
 const form=document.getElementById('inquiryForm');
 if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const subject=encodeURIComponent('Website service inquiry — '+d.get('service'));
  const body=encodeURIComponent(`Name: ${d.get('name')}\nPhone: ${d.get('phone')}\nEmail: ${d.get('email')||'Not provided'}\nService: ${d.get('service')}\nLocation: ${d.get('location')}\nUrgency: ${d.get('urgency')}\n\nDetails:\n${d.get('details')||'Not provided'}`);
  document.getElementById('formNotice').textContent='Opening your email app with your inquiry details…';
  window.location.href=`mailto:hello@example.com?subject=${subject}&body=${body}`;
 });
 }
});
