import React from 'react';

const Newsletter = () => (
  <section className="newsletter">
    <h3>Suscríbete a nuestro boletín</h3>
    <p>Recibe ofertas exclusivas y novedades directamente en tu bandeja de entrada.</p>
    <form action="suscripcion.php" method="POST">
      <input type="email" name="email" placeholder="Ingresa tu correo electrónico" required />
      <button type="submit">Suscribirme</button>
    </form>
  </section>
);

export default Newsletter;