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



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9BY2NvcmRpb24uanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNwREE7QUFDQTtBQUNBIiwiZmlsZSI6ImpzLm1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFjY29yZGlvbjAge1xuICAgIGNvbnN0cnVjdG9yKGFjY29yZGlvbklELCBwYXJhbXMpIHtcbiAgICAgICAgdGhpcy5hY2NvcmRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhY2NvcmRpb25JRCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hY2NvcmRpb24uY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uLmNoaWxkcmVuW2ldLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5hZGQoYWNjb3JkaW9uSUQgKyAnX19saXN0LWl0ZW0tbGluaycpO1xuICAgICAgICAgICAgdGhpcy5hY2NvcmRpb24uY2hpbGRyZW5baV0uY2hpbGRyZW5bMV0uY2xhc3NMaXN0LmFkZChhY2NvcmRpb25JRCArICdfX3N0ZXAyLWxpc3QnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxpc3RDU1MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGFjY29yZGlvbklEICsgJ19fc3RlcDItbGlzdCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RDU1MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxpc3RDU1NbaV0uc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgbGlzdENTU1tpXS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgbGlzdENTU1tpXS5zdHlsZS50cmFuc2l0aW9uUHJvcGVydHkgPSAnYWxsJztcbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnRyYW5zaXRpb25EdXJhdGlvbikge1xuICAgICAgICAgICAgICAgIGxpc3RDU1NbaV0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gcGFyYW1zLnRyYW5zaXRpb25EdXJhdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdENTU1tpXS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnLjVzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJhbXMgJiYgcGFyYW1zLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIGxpc3RDU1NbaV0uc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gcGFyYW1zLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlzdENTU1tpXS5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSAnZWFzZS1pbi1vdXQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ28oYWNjb3JkaW9uSUQpO1xuICAgIH1cblxuICAgIGdvKGFjY29yZGlvbklEKSB7XG4gICAgICAgIHRoaXMuYWNjb3JkaW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoYWNjb3JkaW9uSUQgKyAnX19saXN0LWl0ZW0tbGluaycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodCArPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNoaWxkcmVuW2ldLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5zdHlsZS5tYXhIZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgbGV0IHNpYmxpbmcgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cbiAgICAgICAgICAgICAgICAgICAgc2libGluZy5jaGlsZHJlblsxXS5zdHlsZS5tYXhIZWlnaHQgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2libGluZyA9IHRhcmdldC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHdoaWxlIChzaWJsaW5nLm5leHRFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgICAgICBzaWJsaW5nID0gc2libGluZy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgICAgIHNpYmxpbmcuY2hpbGRyZW5bMV0uc3R5bGUubWF4SGVpZ2h0ID0gXCIwXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn0iLCJcblxuIl19
