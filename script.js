
const $ = id => document.getElementById(id);
function calcNC(v1,v2,T,prnt){return ((v2-v1)*T)/prnt;}
$('#calcBtn').addEventListener('click', ()=>{
  const v1 = parseFloat($('#v1').value)||0;
  const v2 = parseFloat($('#v2').value)||0;
  const T = parseFloat($('#tval').value)||0;
  const prnt = parseFloat($('#prnt').value)||100;
  const area = parseFloat($('#area').value)||1;
  const nc = calcNC(v1,v2,T,prnt);
  const kgHa = nc*1000;
  $('#ncText').textContent = `Necessidade: ${nc.toFixed(2)} t/ha`;
  $('#kgText').textContent = `Total para ${area} ha: ${(kgHa*area).toFixed(0)} kg`;
  $('#output').style.display='block';
});
