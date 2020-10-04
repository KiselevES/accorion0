class Accordion0 {
    constructor(accordionID, params) {
        this.accordion = document.getElementById(accordionID);
        for (let i = 0; i < this.accordion.children.length; i++) {
            this.accordion.children[i].children[0].classList.add(accordionID + '__list-item-link');
            this.accordion.children[i].children[1].classList.add(accordionID + '__step2-list');
        }

        const listCSS = document.getElementsByClassName(accordionID + '__step2-list');
        for (let i = 0; i < listCSS.length; i++) {
            listCSS[i].style.maxHeight = '0';
            listCSS[i].style.overflow = 'hidden';
            listCSS[i].style.transitionProperty = 'all';
            if (params && params.transitionDuration) {
                listCSS[i].style.transitionDuration = params.transitionDuration;
            } else {
                listCSS[i].style.transitionDuration = '.5s';
            }
            if (params && params.transitionTimingFunction) {
                listCSS[i].style.transitionTimingFunction = params.transitionTimingFunction;
            } else {
                listCSS[i].style.transitionTimingFunction = 'ease-in-out';
            }
        }
        this.go(accordionID);
    }

    go(accordionID) {
        this.accordion.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target;
            if (target.classList.contains(accordionID + '__list-item-link')) {
                let height = 0;
                for (let i = 0; i < target.nextElementSibling.children.length; i++) {
                    height += target.nextElementSibling.children[i].offsetHeight;
                }
                target.nextElementSibling.style.maxHeight = height + 'px';

                let sibling = target.parentElement;
                while (sibling.previousElementSibling) {
                    sibling = sibling.previousElementSibling;

                    sibling.children[1].style.maxHeight = "0";
                }
                sibling = target.parentElement;
                while (sibling.nextElementSibling) {
                    sibling = sibling.nextElementSibling;
                    sibling.children[1].style.maxHeight = "0";
                }
            }
        })
    }
}