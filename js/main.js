(function () {
    const navInnerHTML = `
        <div class="container">
            <nav>
                <div class="logo">
                    <a href="index.html"><img src="resources/images/logos/cyberbio26_medium.png" alt="CyberBio26" style="height: 60px;"></a>
                </div>
                <ul class="nav-links">
                    <li><a href="cfp.html" data-nav="cfp">Call for Papers</a></li>
                    <li><a href="program.html" data-nav="program">Program</a></li>
                    <li><a href="proceedings.html" data-nav="proceedings">Proceedings</a></li>
                    <li><a href="organization.html" data-nav="organization">Organizers</a></li>
                </ul>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </div>
    `;

    function mountNav() {
        const slot = document.getElementById('site-header');
        if (!slot) return;
        slot.innerHTML = navInnerHTML;

        const pathFile = (window.location.pathname.split('/').pop() || 'index.html');
        const navKey = pathFile.replace('.html', '') || 'index';
        const activeLink = slot.querySelector(`[data-nav="${navKey}"]`);
        if (activeLink) activeLink.classList.add('active');

        const hamburger = slot.querySelector('.hamburger');
        const navLinks = slot.querySelector('.nav-links');
        if (hamburger && navLinks) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navLinks.classList.toggle('active');
            });
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mountNav);
    } else {
        mountNav();
    }
})();
