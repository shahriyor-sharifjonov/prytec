"use strict";var headerButton=document.querySelector(".header__button"),headerLinkDf=document.querySelector(".header__link__df"),galleryMenu=document.querySelector(".gallery__menu"),headerMenu=document.querySelector(".header__list"),menuOpened=!1,menuToggle=function(){menuOpened=!menuOpened,headerButton.classList.toggle("open"),headerMenu.classList.toggle("open")},galleryMenuOpened=!1,galleryMenuToggle=function(){galleryMenuOpened=!galleryMenuOpened,galleryMenu.classList.toggle("active")};headerLinkDf.onclick=galleryMenuToggle,headerButton.onclick=menuToggle,window.onclick=function(a){!menuOpened||a.composedPath().includes(headerButton)||a.composedPath().includes(headerMenu)||menuToggle()},window.onclick=function(a){galleryMenuOpened&&!a.composedPath().includes(headerLinkDf)&&galleryMenuToggle()},$(".slider__inner ").slick({infinite:!0,slidesToShow:6,slidesToScroll:1,arrows:!1,speed:500,responsive:[{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1,centerMode:!0,centerPadding:"20px"}}]});var first=document.querySelector(".first"),second=document.querySelector(".second"),third=document.querySelector(".third"),fourth=document.querySelector(".fourth"),firstDownload=document.querySelector(".first__download"),secondDownload=document.querySelector(".second__download"),thirdDownload=document.querySelector(".third__download"),fourthDownload=document.querySelector(".fourth__download"),cartTitle=document.querySelector(".finder__cart__title");first.addEventListener("click",function(){first.classList.add("current"),second.classList.remove("current"),third.classList.remove("current"),fourth.classList.remove("current"),firstDownload.classList.add("current"),secondDownload.classList.remove("current"),thirdDownload.classList.remove("current"),fourthDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 MEX \u0418 LEX"}),second.addEventListener("click",function(){second.classList.add("current"),first.classList.remove("current"),third.classList.remove("current"),fourth.classList.remove("current"),secondDownload.classList.add("current"),firstDownload.classList.remove("current"),thirdDownload.classList.remove("current"),fourthDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 CDS \u0418 NP"}),third.addEventListener("click",function(){third.classList.add("current"),second.classList.remove("current"),first.classList.remove("current"),fourth.classList.remove("current"),thirdDownload.classList.add("current"),secondDownload.classList.remove("current"),firstDownload.classList.remove("current"),fourthDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 DEX"}),fourth.addEventListener("click",function(){fourth.classList.add("current"),second.classList.remove("current"),third.classList.remove("current"),first.classList.remove("current"),fourthDownload.classList.add("current"),secondDownload.classList.remove("current"),thirdDownload.classList.remove("current"),firstDownload.classList.remove("current"),cartTitle.innerText="\u041F\u0420\u0418\u041C\u0415\u0420\u042B \u042D\u041A\u0421\u041F\u041B\u0423\u0410\u0422\u0410\u0426\u0418\u0418 VPM"});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbImhlYWRlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImhlYWRlckxpbmtEZiIsImdhbGxlcnlNZW51IiwiaGVhZGVyTWVudSIsIm1lbnVPcGVuZWQiLCJtZW51VG9nZ2xlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2FsbGVyeU1lbnVPcGVuZWQiLCJnYWxsZXJ5TWVudVRvZ2dsZSIsIm9uY2xpY2siLCJ3aW5kb3ciLCJlIiwiY29tcG9zZWRQYXRoIiwiaW5jbHVkZXMiLCIkIiwic2xpY2siLCJpbmZpbml0ZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXJyb3dzIiwic3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlyc3REb3dubG9hZCIsInNlY29uZERvd25sb2FkIiwidGhpcmREb3dubG9hZCIsImZvdXJ0aERvd25sb2FkIiwiY2FydFRpdGxlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZCIsInJlbW92ZSIsImlubmVyVGV4dCJdLCJtYXBwaW5ncyI6ImdCQUNNQSxDQUFBQSxZQUFZLENBQXNCQyxRQUFRLENBQUNDLGFBQVQsQ0FDdEMsaUJBRHNDLEMsQ0FHbENDLFlBQVksQ0FBbUJGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQyxDQUMvQkUsV0FBVyxDQUFtQkgsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDLENBQzlCRyxVQUFVLENBQXFCSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQyxDQUNqQ0ksVUFBVSxHLENBQ1JDLFVBQVUsQ0FBRyxVQUFLLENBQ3RCRCxVQUFVLENBQUcsQ0FBQ0EsVUFEUSxDQUV0Qk4sWUFBWSxDQUFDUSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixNQUE5QixDQUZzQixDQUd0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QUN2QixDQVZELEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBIZWFkZXIgTWVudVxyXG5jb25zdCBoZWFkZXJCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5oZWFkZXJfX2J1dHRvblwiXHJcbik7XHJcbmNvbnN0IGhlYWRlckxpbmtEZjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl9fbGlua19fZGZcIik7XHJcbmNvbnN0IGdhbGxlcnlNZW51OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FsbGVyeV9fbWVudVwiKTtcclxuY29uc3QgaGVhZGVyTWVudTogSFRNTFVMaXN0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19saXN0XCIpO1xyXG5sZXQgbWVudU9wZW5lZCA9IGZhbHNlO1xyXG5jb25zdCBtZW51VG9nZ2xlID0gKCkgPT4ge1xyXG4gIG1lbnVPcGVuZWQgPSAhbWVudU9wZW5lZDtcclxuICBoZWFkZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgaGVhZGVyTWVudS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxufTtcclxuXHJcbmxldCBnYWxsZXJ5TWVudU9wZW5lZCA9IGZhbHNlO1xyXG5jb25zdCBnYWxsZXJ5TWVudVRvZ2dsZSA9ICgpID0+IHtcclxuICBnYWxsZXJ5TWVudU9wZW5lZCA9ICFnYWxsZXJ5TWVudU9wZW5lZDtcclxuICBnYWxsZXJ5TWVudS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5oZWFkZXJMaW5rRGYub25jbGljayA9IGdhbGxlcnlNZW51VG9nZ2xlO1xyXG5cclxuaGVhZGVyQnV0dG9uLm9uY2xpY2sgPSBtZW51VG9nZ2xlO1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gIGlmIChcclxuICAgIG1lbnVPcGVuZWQgJiZcclxuICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlckJ1dHRvbikgJiZcclxuICAgICFlLmNvbXBvc2VkUGF0aCgpLmluY2x1ZGVzKGhlYWRlck1lbnUpXHJcbiAgKVxyXG4gICAgbWVudVRvZ2dsZSgpO1xyXG59O1xyXG5cclxud2luZG93Lm9uY2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gIGlmIChcclxuICAgIGdhbGxlcnlNZW51T3BlbmVkICYmXHJcbiAgICAhZS5jb21wb3NlZFBhdGgoKS5pbmNsdWRlcyhoZWFkZXJMaW5rRGYpXHJcbiAgKVxyXG4gIGdhbGxlcnlNZW51VG9nZ2xlKCk7XHJcbn07XHJcblxyXG4kKCcuc2xpZGVyX19pbm5lciAnKS5zbGljayh7XHJcbiAgaW5maW5pdGU6IHRydWUsXHJcbiAgc2xpZGVzVG9TaG93OiA2LFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIGFycm93czogZmFsc2UsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDk5MixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgXVxyXG59KTtcclxuXHJcbmxldCBmaXJzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5maXJzdCcpO1xyXG5sZXQgc2Vjb25kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZCcpO1xyXG5sZXQgdGhpcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhpcmQnKTtcclxubGV0IGZvdXJ0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3VydGgnKTtcclxubGV0IGZpcnN0RG93bmxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmlyc3RfX2Rvd25sb2FkJyk7XHJcbmxldCBzZWNvbmREb3dubG9hZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRfX2Rvd25sb2FkJyk7XHJcbmxldCB0aGlyZERvd25sb2FkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoaXJkX19kb3dubG9hZCcpO1xyXG5sZXQgZm91cnRoRG93bmxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm91cnRoX19kb3dubG9hZCcpO1xyXG5sZXQgY2FydFRpdGxlIDpIVE1MVGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbmRlcl9fY2FydF9fdGl0bGUnKTtcclxuXHJcbmZpcnN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICBmaXJzdC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgc2Vjb25kLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB0aGlyZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgZm91cnRoLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmaXJzdERvd25sb2FkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICBzZWNvbmREb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgdGhpcmREb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgZm91cnRoRG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGNhcnRUaXRsZS5pbm5lclRleHQgPSBcItCf0KDQmNCc0JXQoNCrINCt0JrQodCf0JvQo9CQ0KLQkNCm0JjQmCBNRVgg0JggTEVYXCI7XHJcbn0pO1xyXG5zZWNvbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIHNlY29uZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgZmlyc3QuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHRoaXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHNlY29uZERvd25sb2FkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICBmaXJzdERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICB0aGlyZERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGhEb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgY2FydFRpdGxlLmlubmVyVGV4dCA9IFwi0J/QoNCY0JzQldCg0Ksg0K3QmtCh0J/Qm9Cj0JDQotCQ0KbQmNCYIENEUyDQmCBOUFwiO1xyXG59KTtcclxudGhpcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gIHRoaXJkLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcclxuICBzZWNvbmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGguY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHRoaXJkRG93bmxvYWQuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG4gIHNlY29uZERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmaXJzdERvd25sb2FkLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGhEb3dubG9hZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgY2FydFRpdGxlLmlubmVyVGV4dCA9IFwi0J/QoNCY0JzQldCg0Ksg0K3QmtCh0J/Qm9Cj0JDQotCQ0KbQmNCYIERFWFwiO1xyXG59KTtcclxuZm91cnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICBmb3VydGguY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xyXG4gIHNlY29uZC5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XHJcbiAgdGhpcmQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGZpcnN0LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQnKTtcclxuICBmb3VydGhEb3dubG9hZC5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XHJcbiAgc2Vjb25kRG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIHRoaXJkRG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGZpcnN0RG93bmxvYWQuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudCcpO1xyXG4gIGNhcnRUaXRsZS5pbm5lclRleHQgPSBcItCf0KDQmNCc0JXQoNCrINCt0JrQodCf0JvQo9CQ0KLQkNCm0JjQmCBWUE1cIjtcclxufSk7XHJcblxyXG5cclxuIl19
