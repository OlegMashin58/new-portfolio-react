import "./style.css";

import vk from './../../img/icons/vk.svg';
import telegram from './../../img/icons/telegram.svg';
import gitHub from './../../img/icons/gitHub.svg';

const Footer = () => {
    return (
		<footer className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<ul className="social">
						<li className="social__item">
							<a href="https://vk.com/olegmashin58" target="_blank" rel="noreferrer">
								<img src={vk} alt="Link" />
							</a>
						</li>
						<li className="social__item">
							<a href="https://t.me/Dioptriyy" target="_blank" rel="noreferrer">
								<img src={telegram} alt="Link" />
							</a>
						</li>
						
						<li className="social__item">
							<a href="https://github.com/OlegMashin58" target="_blank" rel="noreferrer">
								<img src={gitHub} alt="Link" />
							</a>
						</li>
						
					</ul>
					<div className="copyright">
						<p>© 2024 frontend-dev.com</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;