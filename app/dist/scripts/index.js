"use strict";var headerButton=document.querySelector(".header__button"),headerLinkDf=document.querySelector(".header__link__df"),galleryMenu=document.querySelector(".gallery__menu"),headerMenu=document.querySelector(".header__list"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")},galleryMenuOpened=!1,galleryMenuToggle=function(){galleryMenuOpened=!galleryMenuOpened,galleryMenu.classList.toggle("active")};headerLinkDf.onclick=galleryMenuToggle,headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},window.onclick=function(a){galleryMenuOpened&&!a.composedPath().includes(headerLinkDf)&&galleryMenuToggle()},$(".slider__inner ").slick({infinite:!0,slidesToShow:6,slidesToScroll:1,arrows:!1,speed:500,autoplay:!0,autoplaySpeed:2e3,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,centerPadding:"20px"}}]});var first=document.querySelector(".first"),second=document.querySelector(".second"),third=document.querySelector(".third"),fourth=document.querySelector(".fourth"),firstDownload=document.querySelector(".first__download"),secondDownload=document.querySelector(".second__download"),thirdDownload=document.querySelector(".third__download"),fourthDownload=document.querySelector(".fourth__download"),cartTitle=document.querySelector(".finder__cart__title");first.addEventListener("click",function(){first.classList.add("current"),second.classList.remove("current"),third.classList.remove("current"),fourth.classList.remove("current"),firstDownload.classList.add("current"),secondDownload.classList.remove("current"),thirdDownload.classList.remove("current"),fourthDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 MEX \u0418 LEX"}),second.addEventListener("click",function(){second.classList.add("current"),first.classList.remove("current"),third.classList.remove("current"),fourth.classList.remove("current"),secondDownload.classList.add("current"),firstDownload.classList.remove("current"),thirdDownload.classList.remove("current"),fourthDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 CDS \u0418 NP"}),third.addEventListener("click",function(){third.classList.add("current"),second.classList.remove("current"),first.classList.remove("current"),fourth.classList.remove("current"),thirdDownload.classList.add("current"),secondDownload.classList.remove("current"),firstDownload.classList.remove("current"),fourthDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 DEX"}),fourth.addEventListener("click",function(){fourth.classList.add("current"),second.classList.remove("current"),third.classList.remove("current"),first.classList.remove("current"),fourthDownload.classList.add("current"),secondDownload.classList.remove("current"),thirdDownload.classList.remove("current"),firstDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 VPM"});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckxpbmtEZiIsImdhbGxlcnlNZW51IiwiaGVhZGVyTWVudSIsIm1lbnVPcGVuZWQiLCJtZW51VG9nZ2xlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2FsbGVyeU1lbnVPcGVuZWQiLCJnYWxsZXJ5TWVudVRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCIkIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwic3BlZWQiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlyc3REb3dubG9hZCIsInNlY29uZERvd25sb2FkIiwidGhpcmREb3dubG9hZCIsImZvdXJ0aERvd25sb2FkIiwiY2FydFRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsInJlbW92ZSIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6ImdCQUNNQSxDQUFBQSxZQUFZLENBQXNCQyxRQUFRLENBQUNDLGFBQVQsQ0FDdEMsaUJBRHNDLEMsQ0FHbENDLFlBQVksQ0FBbUJGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQyxDQUMvQkUsV0FBVyxDQUFtQkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDLENBQzlCRyxVQUFVLENBQXFCSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQyxDQUNqQ0ksVUFBVSxHLENBQ1JDLFVBQVUsQ0FBRyxVQUFLLENBQ3RCRCxVQUFVLENBQUcsQ0FBQ0EsVUFEUSxDQUV0Qk4sWUFBWSxDQUFDUSxTQUFiLENBQXVCQyxN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QUFkLENBQXdCa0MsTUFBeEIsQ0FBK0IsU0FBL0IsQ0FSbUMsQ0FTbkNILFNBQVMsQ0FBQ0ksU0FBVixDQUFzQix5SEFDdkIsQ0FWRCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSGVhZGVyIE1lbnVcclxuY29uc3QgaGVhZGVyQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuaGVhZGVyX19idXR0b25cIlxyXG4pO1xyXG5jb25zdCBoZWFkZXJMaW5rRGY6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJfX2xpbmtfX2RmXCIpO1xyXG5jb25zdCBnYWxsZXJ5TWVudTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbGxlcnlfX21lbnVcIik7XHJcbmNvbnN0IGhlYWRlck1lbnU6IEhUTUxVTGlzdEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlzdFwiKTtcclxubGV0IG1lbnVPcGVuZWQgPSBmYWxzZTtcclxuY29uc3QgbWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBtZW51T3BlbmVkID0gIW1lbnVPcGVuZWQ7XHJcbiAgaGVhZGVyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xyXG4gIGhlYWRlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbn07XHJcblxyXG5sZXQgZ2FsbGVyeU1lbnVPcGVuZWQgPSBmYWxzZTtcclxuY29uc3QgZ2FsbGVyeU1lbnVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgZ2FsbGVyeU1lbnVPcGVuZWQgPSAhZ2FsbGVyeU1lbnVPcGVuZWQ7XHJcbiAgZ2FsbGVyeU1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG5cclxuaGVhZGVyTGlua0RmLm9uY2xpY2sgPSBnYWxsZXJ5TWVudVRvZ2dsZTtcclxuXHJcbmhlYWRlckJ1dHRvbi5vbmNsaWNrID0gbWVudVRvZ2dsZTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICBpZiAoXHJcbiAgICBtZW51T3BlbmVkICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJCdXR0b24pICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJNZW51KVxyXG4gIClcclxuICAgIG1lbnVUb2dnbGUoKTtcclxufTtcclxuXHJcbndpbmRvdy5vbmNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICBpZiAoXHJcbiAgICBnYWxsZXJ5TWVudU9wZW5lZCAmJlxyXG4gICAgIWUuY29tcG9zZWRQYXRoKCkuaW5jbHVkZXMoaGVhZGVyTGlua0RmKVxyXG4gIClcclxuICBnYWxsZXJ5TWVudVRvZ2dsZSgpO1xyXG59O1xyXG5cclxuJCgnLnNsaWRlcl9faW5uZXIgJykuc2xpY2soe1xyXG4gIGluZmluaXRlOiB0cnVlLFxyXG4gIHNsaWRlc1RvU2hvdzogNixcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBhcnJvd3M6IGZhbHNlLFxyXG4gIHNwZWVkOiA1MDAsXHJcbiAgYXV0b3BsYXk6IHRydWUsXHJcbiAgYXV0b3BsYXlTcGVlZDogMjAwMCxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcbmxldCBmaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdCcpO1xyXG5sZXQgc2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZCcpO1xyXG5sZXQgdGhpcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhpcmQnKTtcclxubGV0IGZvdXJ0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3VydGgnKTtcclxubGV0IGZpcnN0RG93bmxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3RfX2Rvd25sb2FkJyk7XHJcbmxldCBzZWNvbmREb3dubG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRfX2Rvd25sb2FkJyk7XHJcbmxldCB0aGlyZERvd25sb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoaXJkX19kb3dubG9hZCcpO1xyXG5sZXQgZm91cnRoRG93bmxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm91cnRoX19kb3dubG9hZCcpO1xyXG5sZXQgY2FydFRpdGxlIDpIVE1MVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbmRlcl9fY2FydF9fdGl0bGUnKTtcclxuXHJcbmZpcnN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICBmaXJzdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgc2Vjb25kLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB0aGlyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgZm91cnRoLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmaXJzdERvd25sb2FkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICBzZWNvbmREb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgdGhpcmREb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgZm91cnRoRG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGNhcnRUaXRsZS5pbm5lclRleHQgPSBcItCf0KDQmNCc0JXQoNCrINCt0JrQodCf0JvQo9CQ0KLQkNCm0JjQmCBNRVgg0JggTEVYXCI7XHJcbn0pO1xyXG5zZWNvbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIHNlY29uZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgZmlyc3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHRoaXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHNlY29uZERvd25sb2FkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICBmaXJzdERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB0aGlyZERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGhEb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgY2FydFRpdGxlLmlubmVyVGV4dCA9IFwi0J/QoNCY0JzQldCg0Ksg0K3QmtCh0J/Qm9Cj0JDQotCQ0KbQmNCYIENEUyDQmCBOUFwiO1xyXG59KTtcclxudGhpcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIHRoaXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICBzZWNvbmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHRoaXJkRG93bmxvYWQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG4gIHNlY29uZERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmaXJzdERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGhEb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgY2FydFRpdGxlLmlubmVyVGV4dCA9IFwi0J/QoNCY0JzQldCg0Ksg0K3QmtCh0J/Qm9Cj0JDQotCQ0KbQmNCYIERFWFwiO1xyXG59KTtcclxuZm91cnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICBmb3VydGguY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG4gIHNlY29uZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgdGhpcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGhEb3dubG9hZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgc2Vjb25kRG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHRoaXJkRG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGZpcnN0RG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGNhcnRUaXRsZS5pbm5lclRleHQgPSBcItCf0KDQmNCc0JXQoNCrINCt0JrQodCf0JvQo9CQ0KLQkNCm0JjQmCBWUE1cIjtcclxufSk7XHJcblxyXG5cclxuIl19
