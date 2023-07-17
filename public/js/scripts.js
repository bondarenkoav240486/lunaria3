// // START


// змінні 
let header_top_wrapper = document.querySelector(
    '.header_top_wrapper'
    );
let infoPortfolioAndContacts = document.querySelector(
        '.info-portfolio-and-contacts'
    );
let sectionOurServicesThead = document.querySelector(
        '.section.our-services.thead'
    );
let headerTop = document.querySelector(
        '.header-top'
    );
let logo = document.querySelector('.logo');
let transitionEachRowTextAll = document.getElementsByClassName(
        'transitionEachRowText'
    );
let OverlayTransitionAll = document.getElementsByClassName(
    'OverlayTransition'
    ); 
let blockWithDinamicEffectsAll = document.getElementsByClassName(
        'blockWithDinamicEffects'
    );
let blockWithDinamicEffects = document.querySelector(
        '.blockWithDinamicEffects'
    );
let blockStickytAll = document.querySelectorAll('.block_sticky');
let sectionProjectsSliderWrapper = document.querySelector(
    '.section.projects.slider_wrapper'
    );
let sectionProjectsHeaderWrapper = document.querySelector(
        '.section.projects.header.wrapper'
    );
let advantageWrapperAll = document.querySelectorAll(
        '.advantage-wrapper'
    );
let advantageWrapperBodyP = document.querySelector(
        '.advantage-wrapper .body p'
    );
let inputBudget = document.querySelector(
        '.inputBudgetAndShowInfo input'
    );
let budgetShowInfo = document.querySelector(
        '.inputBudgetAndShowInfo .showInfo'
    );
// функції
// функція додавання infoPortfolioAndContacts до headerTop
function addInfoPortfolioAndContactsToHeaderTop() {
    if (
        sectionOurServicesThead.getBoundingClientRect().y 
        <=
        headerTop.clientHeight
    )
    {
        infoPortfolioAndContacts.remove();
        headerTop.append(infoPortfolioAndContacts);
    } else {
        infoPortfolioAndContacts.remove();
        sectionOurServicesThead.append(
            infoPortfolioAndContacts
        );
        stand_with_Ukraine.style.marginRight = '0%';
    }  
}
// функція додавання logo до headerTop
function addlogoToHeaderTop() {
    if (
        logo_wrapper
        .getBoundingClientRect()
        .y 
        <=headerTop
        .clientHeight
    )
    {
        logo.remove();
        headerTop.prepend(logo);
        logo.style.flexDirection = 'row'; 
        // 
        headerTop.style.justifyContent = 'space-between'; 
    } else {
        logo.remove();
        logo_wrapper.prepend(
            logo
        );
        logo.style.flexDirection = 'column'; 
        // 
        headerTop.style.justifyContent = 'flex-end'; 
    }  
}
// функція додавання висоти до (rowWrapper)- елементів-обгорток 
// для рядків вспливаючого(динамічні ефекти) тексту 
function addHeightForRowWrapper() {
    for(let transitionEachRowText of transitionEachRowTextAll){
        // add height for rowWrapper
        transitionEachRowText
        .parentElement
        .style
        .height 
        = 
        transitionEachRowText
        .getBoundingClientRect()
        .height
        // +
        // 5  
        + 'px';
    }
}
// 
function addHeightAndWidthForOverlayTransition() {
    for(let OverlayTransition of OverlayTransitionAll){
        OverlayTransition.style.height = 
            OverlayTransition
                .parentElement
                .getBoundingClientRect()
                .height
                +25
                +'px';
        OverlayTransition.style.width = 
            OverlayTransition
                .parentElement
                .getBoundingClientRect()
                .width 
            *3
            + 'px';
        // OverlayTransitionContent.style.position = 'relative';
        // OverlayTransitionContent.style.overflow = 'hidden';
        // OverlayTransition.style.background = 'green';
        // OverlayTransition.style.position = 'absolute';
        // OverlayTransition.style.transition = 'top ease 2s';
        // OverlayTransition.style.boxShadow = 
        // ' 0 -25px 15px rgba(0,128,1)' ;
    }
}
// функція відслідковування координат елементу відносно 
// положенню у вікні та запуску динамічих ефектів по 
// досягненню певного положення
function trackingСoordinatsAndLaunchinPopUpText() {
    for ( let blockWithDinamicEffects of blockWithDinamicEffectsAll) {
        let transitionEachRowTextAll 
            = 
            blockWithDinamicEffects
            .getElementsByClassName('transitionEachRowText');
        for( let transitionEachRowText of transitionEachRowTextAll )
        {
            // transitionEachRowText.parentElement.style.position = 'relative';
            // transitionEachRowText.parentElement.style.overflow = 'hidden';
            transitionEachRowText.style.position = 'absolute';
            transitionEachRowText.style.transition = 'all 2s ease-in 0s';
            transitionEachRowText.style.top 
                = 
                transitionEachRowText.getBoundingClientRect().height
                + 'px'  ;
            if(
                blockWithDinamicEffects
                    .getBoundingClientRect()
                    .top 
                <= 
                document
                    .documentElement
                    .clientHeight
                    *0.7 
                &&
                blockWithDinamicEffects
                    .getBoundingClientRect()
                    .bottom 
                > 
                document
                    .documentElement
                    .clientHeight
                    *0.15
            )
            {
                transitionEachRowText.style.top = '0';
            } 
            else {
                transitionEachRowText.style.top = 
                    transitionEachRowText.getBoundingClientRect().height
                    + 'px';
            }
        }   
    }
}
// 
function trackingСoordinatsAndLaunchinOverlayText() {
    for ( let blockWithDinamicEffects of blockWithDinamicEffectsAll ) {
         let OverlayTransitionAll 
            = 
            blockWithDinamicEffects
            .getElementsByClassName('OverlayTransition');
        for(let OverlayTransition of OverlayTransitionAll){

            OverlayTransition.style.background = '#000000';
            OverlayTransition.style.position = 'absolute';
            OverlayTransition.style.left = '-50px';
            OverlayTransition.style.transition = 'top 5s ease-out 0s';
            // all 1.5s ease-out 0s;
            OverlayTransition.style.boxShadow = 
            ' 0 -25px 15px rgba(0,0,0)' ;

             if(
                blockWithDinamicEffects
                    .getBoundingClientRect()
                    .top 
                <= 
                document
                    .documentElement
                    .clientHeight
                    *0.7 
                &&
                blockWithDinamicEffects
                    .getBoundingClientRect()
                    .bottom 
                > 
                document
                    .documentElement
                    .clientHeight
                    *0.15
            )
            {
                // OverlayTransition.style.top = '0';
                OverlayTransition.style.top = 
                    OverlayTransition.getBoundingClientRect().height
                    +
                    25
                    +
                     'px';
            } 
            else {
                // OverlayTransition.style.top = 
                //     OverlayTransition.getBoundingClientRect().height
                //     + 'px';
                OverlayTransition.style.top = '0';

            }
        } 

    }      
}
// додавання розрахункового значення топ до елементів з липким позиціюванням
// для накладання блоків при гортанні сторінки
function addTopToStickyElements() {
    for( let blockSticky of blockStickytAll ){
        if( blockSticky.getBoundingClientRect().top
           <=  
           header_top_wrapper.getBoundingClientRect().bottom
        ){
            blockSticky.style.top 
                =
                header_top_wrapper.getBoundingClientRect().bottom
                +
                'px';
        }
        // 
        sectionProjectsSliderWrapper.style.top 
        =
        header_top_wrapper.getBoundingClientRect().bottom
        +
        sectionProjectsHeaderWrapper.clientHeight
        +
        'px';
    }   
}


// початок роботи сторінки
// 
// додавання висоти до (rowWrapper)- елементів-обгорток 
// для рядків вспливаючого(динамічні ефекти) тексту
addHeightForRowWrapper();
// 
addHeightAndWidthForOverlayTransition()
// 
// letStartPopUpTextinHeader();
// 
trackingСoordinatsAndLaunchinPopUpText();
// 
trackingСoordinatsAndLaunchinOverlayText();


// подальша робота сторінки
// події 

// подія 'scroll'
window.addEventListener('scroll', 
    function(e) {
        // додавання "липких"" елементів до headerTop
        addInfoPortfolioAndContactsToHeaderTop();
        addlogoToHeaderTop();
        // dinamic effects
        trackingСoordinatsAndLaunchinPopUpText();
        trackingСoordinatsAndLaunchinOverlayText();
        addTopToStickyElements();
    }
);
// подія 'resize'
window.addEventListener('resize', 
    function(e) 
    {
        addHeightForRowWrapper();
        addHeightAndWidthForOverlayTransition()
    }
);

Object.values(advantageWrapperAll)
.forEach(
    function(elem)
    {
        elem.querySelector('.head')
        .addEventListener
        (
            'click', 
            function(e) 
            {
                elem.querySelector('.body p')
                .classList.toggle('visible');
                elem.classList.toggle('active');
                elem.querySelector('.head .plus ').innerHTML == '+' 
                ?
                elem.querySelector('.head .plus').innerHTML = '-'
                :
                elem.querySelector('.head .plus').innerHTML = '+';
            }
        )
    }        
)

budgetShowInfo.innerHTML = '$ 0' 
inputBudget.addEventListener(
    'input',
    function(e)
    {
        inputBudget.value < 25000
        ?
        budgetShowInfo.innerHTML = '$ ' + inputBudget.value
        :
        budgetShowInfo.innerHTML = 'More than $ 25 000'
    }
)

$(function(){
    var mouseX = 0, mouseY = 0;
     // limitX = 150-10, limitY = 150-10; 
// Определяет границы, по которым будет двигаться объект
    $(window).mousemove(function(e){
        var offset = $('.move-wrap').offset();
        // mouseX = Math.min(e.pageX - offset.left, limitX);
        mouseX = e.pageX;
        // mouseY = Math.min(e.pageY - offset.top, limitY);
        mouseY = e.pageY;
// Ищет координаты курсора
        if (mouseX < 0) mouseX = 0;
// С какого момента (координат) начинать движение за курсором
        if (mouseY < 0) mouseY = 0;
// Если курсор находится вне веб-страницы на момент загрузки, то установит объект в координатах x=0, y=0.
     
});
 
    var follower = $("#follower");
    var follower2 = $("#follower2");
    var xp = 0, yp = 0; // Начальные координаты объекта на момент загрузки страницы
    var loop = setInterval(function(){
// Далее определяется скорость, с которой будет двигаться объект.
// Изменить значение 20, для изменения скорости. Чем больше это значение, тем медленнее движется объект.
         
            xp += (mouseX - xp) / 20;
        yp += (mouseY - yp) / 20;
        follower.css({left:xp, top:yp});
        // follower2.css({left:xp+37, top:yp+37});
// Изменение позиционирования объекта с помощью css
         
    }, 10);
     var loop2 = setInterval(function(){
// Далее определяется скорость, с которой будет двигаться объект.
// Изменить значение 20, для изменения скорости. Чем больше это значение, тем медленнее движется объект.
         
            xp += (mouseX - xp) / 20;
        yp += (mouseY - yp) / 20;
        // follower.css({left:xp, top:yp});
        follower2.css({left:xp+10, top:yp+10});
// Изменение позиционирования объекта с помощью css
         
    }, 10);
//В данном случае это значение определяет, насколько плавно и быстро будет происходить движение
});
