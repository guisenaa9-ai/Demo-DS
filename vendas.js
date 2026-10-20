// Troque pelo seu WhatsApp de vendas: 55 + DDD + número, só dígitos.
const WHATSAPP='5592999447802';
for(const link of document.querySelectorAll('[data-whatsapp]')){
 const plan=link.dataset.plan;
 link.href='https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(plan?'Olá! Quero o plano '+plan+' do sistema da Kryon para minha barbearia.':'Olá! Vi a página da Kryon e quero o sistema para minha barbearia.');
 link.target='_blank';link.rel='noopener noreferrer';
}
