const navToggleBtn = document.getElementById('nav-toggle-btn');
const navList = document.getElementById('nav-list');
const navLinks = document.querySelectorAll('#nav-list li a');

function handleNavTogglebtnClick() {
	const height = navList.scrollHeight;
	if(navList.style.height == '') navList.style.height = height + 'px';
	else navList.style.height = '';
}

navToggleBtn.addEventListener('click', handleNavTogglebtnClick);

navLinks.forEach(link => link.addEventListener('click', handleNavTogglebtnClick));

const section = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let visibleSectionIndex = -1;
    section.forEach((item, index) => {
        const sectionTop = item.offsetTop;
        const sectionHeight = item.offsetHeight;
        const scrollTop = window.pageYOffset;
        const sectionBottom = sectionTop + sectionHeight;
        const isSectionVisible = scrollTop >= sectionTop - 100 && scrollTop <= sectionBottom;
        if(isSectionVisible) {
            visibleSectionIndex = index;
        }      
    });

    if(visibleSectionIndex !== -1) {
        navLinks.forEach((item, index) => {
            if(index === visibleSectionIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }      
        });
    }
});