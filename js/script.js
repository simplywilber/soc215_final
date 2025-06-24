// Nav
const nav = document.getElementById("navigation");

nav.innerHTML = `
        <nav id="page-links" >
                <a href="./notes.html">NOTES</a>
                <a href="./index.html">PRESENTATION</a>
                <a href="./reflection.html">REFLECTION</a>
      </nav>
`;

// Footer
let n = new Date();
let year = n.getFullYear();

const footer = document.getElementById("footer");

footer.innerHTML = `
  <div class="footer-container">
    <div>
      <p>&copy; ${year} | Wilber Amaya-Maurisio</p>
    </div>
  </div>`;