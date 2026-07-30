(function () {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;

    const isNestedPage = window.location.pathname.indexOf("/research/") !== -1;
    const basePath = isNestedPage ? "../" : "";

    sidebar.innerHTML = `
      <div class="inner">
        <nav id="menu">
          <header class="major">
            <h2>Menu</h2>
          </header>
          <ul>
            <li><a href="${basePath}about.html">About</a></li>
            <li>
              <span class="opener">People</span>
              <ul>
                <li><a href="${basePath}faculty.html">Faculty</a></li>
                <li><a href="${basePath}members.html">Members</a></li>
                <li><a href="${basePath}alumni.html">Alumni</a></li>
                <li><a href="${basePath}collaborators.html">Collaborators</a></li>
              </ul>
            </li>
            <li><a href="${basePath}research.html">Research</a></li>
            <li><a href="${basePath}publications.html">Publications</a></li>
            <li><a href="${basePath}news.html">News & Events</a></li>
          </ul>
        </nav>

        <section>
          <header class="major">
            <h2>Get in touch</h2>
          </header>
          <p>If you're interested in collaborating with us or learning more about our research, feel free to reach out.</p>
          <ul class="contact">
            <li class="icon solid fa-envelope"><a href="mailto:ptang@andrew.cmu.edu">ptang@andrew.cmu.edu</a></li>
            <li class="icon solid fa-phone">412.268.8215</li>
            <li class="icon solid fa-home">
              123F Porter Hall<br />
              Carnegie Mellon University<br />
              Pittsburgh, PA 15213
            </li>
          </ul>
        </section>
      </div>
    `;
})();
