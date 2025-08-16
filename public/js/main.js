console.log('Main.js at your service!!!:)')

const table_links = document.querySelectorAll(".table_link")

for ( let link of table_links ) {
    link.addEventListener('click', function(e){
        e.preventDefault()

        const blockID = this.getAttribute('data-href').replace('#', '')

        window.scrollTo({
            behavior: 'smooth',
            top: document.getElementById(blockID).getBoundingClientRect().top - document.body.getBoundingClientRect().top - 70,
         })
    })
}

if ( document.querySelector('.scrollTop') ) {
    document.querySelector('.scrollTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
}


function openCloseMenu(e){
    e.preventDefault()
    document.getElementById('mobileMenu').toggleAttribute('hidden')
    document.querySelector('.overlay').toggleAttribute('hidden')
}

if ( document.querySelector('.burger') ){
    document.querySelector('.burger').addEventListener('click', openCloseMenu)
    //document.querySelector('.close').addEventListener('click', openCloseMenu)
    document.querySelector('.overlay').addEventListener('click', openCloseMenu)
}


for ( let b of document.querySelectorAll('button:not(.apkClick)')){
    b.addEventListener('click', function() {
        let goal = this.getAttribute('data-goal')
        
        if (typeof ym === "function") {
            ym(94117567,'reachGoal', goal)
            console.log(`goal ${goal} reached`)
        }
        
        let link = 'https://1wyvrz.life/casino/list?open=register&p=c24l'
        let split = this.getAttribute('data-split')
        location.href=`${link}&split=${split}`
    })
}

// Button android
if (document.querySelector('.apkClick')){
    
    document.querySelector('.apkClick').addEventListener('click', function(){
        location.href='https://1wyvrz.life/casino/list?open=register&p=c24l';
    })
    
}

const handleScroll = () => {
    if ( window.scrollY > 1000) {
        document.querySelector('.scrollTop').style.opacity = '1';
    } else {
        document.querySelector('.scrollTop').style.opacity = '0';
    }
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', function() {
    let promoCodeCopy = document.querySelector('.content-side__promocode-copy');
    let promoCodeButton = document.querySelector('.content-side__promocode-button');
  
    if (promoCodeButton) {
        promoCodeButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log(promoCodeCopy.textContent)
            if (promoCodeCopy) {
                navigator.clipboard.writeText(promoCodeCopy.textContent);
            }
        });
    }
});

let thirdScroll = false
let halfScroll = false
let fullScroll = false


setTimeout( function(){
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(94117567, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
    });

    window.onscroll = function() {
  
        let pageY = window.scrollY
        let innerHeight = document.documentElement.scrollHeight;
        let delta = innerHeight / pageY;
      
        if( delta >= 2 && thirdScroll == false ){
          thirdScroll = true
          ym(94117567,'reachGoal','partsScrollGoal1')
        }
      
        if( delta <= 2 && delta >= 1.5 && halfScroll == false ){
          halfScroll = true
          ym(94117567,'reachGoal','partsScrollGoal2')
        }
      
        if( delta <= 1.5 && fullScroll == false ){
          fullScroll = true
          ym(94117567,'reachGoal','partsScrollGoal3')
        }
      
      }

}, 3000 )
