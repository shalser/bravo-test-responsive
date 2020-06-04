let company = document.querySelector('.footer-blocks-nav-company-title-mob');

let a = document.querySelector('.footer-blocks-nav-company-about-mob');
let b = document.querySelector('.footer-blocks-nav-company-catalog-mob');
let c = document.querySelector('.footer-blocks-nav-company-blog-mob');
let d = document.querySelector('.footer-blocks-nav-company-contacts-mob');

a.style.display = 'none';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';

company.onclick = function() {
    if (a.style.display == 'none' &&
        b.style.display == 'none' &&
        c.style.display == 'none' &&
        d.style.display =='none') {
            a.style.display = 'block';
            b.style.display = 'block';
            c.style.display = 'block';
            d.style.display = 'block';
        } else {
            a.style.display = 'none';
            b.style.display = 'none';
            c.style.display = 'none';
            d.style.display = 'none';
        }
}