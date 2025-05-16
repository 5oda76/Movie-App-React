import React from "react";

function Impressum() {
  return (
    <div className="impressumContainer">
      <h1>Impressum</h1>
      <p><strong>Movietown</strong></p>
      <p>Movie Blvd. 66<br />Movietown 55612<br />Deutschland</p>

      <p><strong>Vertreten durch:</strong><br />Samuel Wimmer, Julian Zehentbauer</p>

      <p><strong>Kontakt:</strong><br />
        Telefon: +49 999 12345678<br />
        E-Mail: contact@movietown.co
      </p>

      <p><strong>Haftungsausschluss:</strong><br />
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
        Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
      </p>
    </div>
  );
}

export default Impressum; 