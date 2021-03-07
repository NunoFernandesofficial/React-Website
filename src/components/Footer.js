import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Junta-te a nossa newsletter para estares sempre a par das novidades!
        </p>
        <p className='footer-subscription-text'>
          Podes retirar a subscrição a qualquer momento!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='O teu Email'
            />
            <Button buttonStyle='btn--outline'>Subscrever</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Sobre nós</h2>
            <Link to='/sign-up'>Como funciona?</Link>
            <Link to='/'>Testemunhos</Link>
            <Link to='/'>Carreiras</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos e serviços</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contactos</h2>
            <Link to='/'>Contacto</Link>
            <Link to='/'>Supporte</Link>
            <Link to='/'>lorem ipsur</Link>
            <Link to='/'>lorem ipsur</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>lorem ipsur</Link>
            <Link to='/'>lorem ipsur</Link>
            <Link to='/'>lorem ipsur</Link>
            <Link to='/'>lorem ipsur</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Redes sociais</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              worldByourEyes
              <i class='fas fa-tree' />
            </Link>
          </div>
          <small class='website-rights'>worldByourEyes©2020, designed by Nuno Fernandes</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/https://www.facebook.com/nuno.fernandes.18847'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/https://www.instagram.com/nunofernandes.official/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/https://www.youtube.com/channel/UC5Sfq5pDTSmgVlkYbfuY8RQ'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/https://twitter.com/nunofernandis'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/https://www.linkedin.com/in/nuno-fernandes-00b293151/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;