import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
						Hi, my name is <em>Oleg</em>
					</strong>
					<br />a frontend developer
				</h1>
				<div className="header__text">
					<p>with passion for learning and creating.</p>
				</div>
				<a href="https://penza.hh.ru/resume/47e9515cff0dadb83c0039ed1f77384d696967" className="btn" target="_blank" rel="noreferrer">
				 My resume
				</a>
			</div>
		</header>
	);
}

export default Header;