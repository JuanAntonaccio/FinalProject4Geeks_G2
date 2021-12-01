import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const UserNavbar = () => {
	const { store, actions } = useContext(Context);

	const salir = () => {
		actions.salir();
	};
	return (
		<>
			{!store.auth ? (
				<li className="nav-item dropstart">
					<a
						className="nav-link dropstart"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<i className="fas fa-user" />
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li>
							<Link to="/signin">
								<a className="dropdown-item fortnite" href="#">
									Registrarse
								</a>
							</Link>
						</li>
						<li>
							<Link to="/login">
								<a className="dropdown-item fortnite" href="#">
									Ingresar
								</a>
							</Link>
						</li>
					</ul>
				</li>
			) : (
				<li className="nav-item dropstart">
					<a
						className="nav-link dropstart"
						href="#"
						id="navbarDropdown"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						<i className="fas fa-user" />
					</a>
					<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
						<li>
							<Link to="/profile">
								<a className="dropdown-item fortnite">Mi perfil</a>
							</Link>
						</li>
						<li>
							<Link to="/change_password">
								<a className="dropdown-item fortnite">Cambiar contraseña</a>
							</Link>
						</li>
						{store.admin ? (
							<li>
								<Link to="/admin">
									<a className="dropdown-item fortnite">Admin</a>
								</Link>
							</li>
						) : null}
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a className="dropdown-item fortnite text-danger" onClick={() => salir()}>
								Salir
							</a>
						</li>
					</ul>
				</li>
			)}
		</>
	);
};

export default UserNavbar;
