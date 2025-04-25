import { Link } from "react-router";

function NavBar() {
	return (
		<header>
			<nav className="nav rainbow">
				<div className="nav-container">
					<div className="nav-logo">
						<a href="/">
							<img
								src="src/assets/logoko_g.png"
								alt="Logo"
							/>
						</a>
					</div>
					<div className="nav-links">
                        <Link to="/" className="link"> Produtos </Link>
                        |
                        <Link to="/crud"  className="link"> CRUD </Link>
						|
						<Link to="/detalhes"  className="link"> Detalhes </Link>
					</div>
					<div className="nav-name">KH</div>
				</div>
			</nav>
		</header>
	);
}

export default NavBar;