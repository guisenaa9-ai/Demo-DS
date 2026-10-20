// Troque pelo seu WhatsApp de vendas: 55 + DDD + número, só dígitos.
const WHATSAPP='5592900000000';
for(const link of document.querySelectorAll('[data-whatsapp]')){
 const plan=link.dataset.plan;
 link.href='https://wa.me/'+WHATSAPP+'?text='+encodeURIComponent(plan?'Olá! Quero o plano '+plan+' do Kryon Barber para minha barbearia.':'Olá! Vi a página do Kryon Barber e quero saber mais para minha barbearia.');
 link.target='_blank';link.rel='noopener noreferrer';
}
