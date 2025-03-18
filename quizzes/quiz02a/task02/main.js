document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");
  const trackList = document.querySelector("#track-list");

  btn.addEventListener("click", function () {
    const newHTML = `
            <section class="track">
                <img src="https://i.scdn.co/image/ab67616d0000b273f6e31941d10e4819d290af41" alt="When the Sun Hits">
                <div>
                    <h3>When the Sun Hits</h3>
                    <p>Slowdive</p>
                    <p>Souvlaki</p>
                </div>
            </section> `;
    trackList.innerHTML += newHTML;
  });
});
