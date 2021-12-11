import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import "../../styles/cardArticle.scss";

const CardArticle = props => {
	const { store, actions } = useContext(Context);
	const agregarFavorito = item => {
		actions.addToCart(store.productoSeleccionado);
	};
	return (
		//style={{ maxWidth: "540px" }}
		<div className="card mb-3 mx-auto card-scale-none">
			<div className="row g-0 p-5">
				<div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
					<img src={props.image} className="img-fluid rounded-start w-50" alt="imagen articulo" />
					<div
						className="scroller scrolling-wrapper row flex-row flex-nowrap row-cols-1 row-cols-md-3"
						style={{ overflowX: "scroll", overflowY: "hidden", whiteSpace: "nowrap" }}>
						{store.probando.map((item, index) => {
							return <img key={index} className="w-25" src={props.image} />;
						})}
					</div>
					{/* <div className="d-flex ">
						<img 
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
						<img
							src="https://via.placeholder.com/150"
							className="img-fluid rounded-start m-1"
							alt="imagen articulo"
						/>
					</div> */}
				</div>
				<div className="col-md-6">
					<div className="card-body">
						<div>
							<h1 className="card-title mb-5">{props.name}</h1>
							<hr />
							<div className="card-text d-flex justify-content-between align-items-center">
								<h2>${props.unit_cost}</h2>
								<select className="w-25">
									<option>Seleccionar colores</option>
									<option>Rojo</option>
									<option>Amarillo</option>
									<option>Negro</option>
									<option>Gris</option>
								</select>
							</div>
							<hr />
							<p className="card-text text-secondary">
								{props.description}
								{/* <small className="text-muted">Last updated 3 mins ago</small> */}
							</p>
							<hr />
							<div className="d-flex justify-content-between align-items-center botones">
								{store.auth ? (
									<button type="button" className="btn btn-dark" onClick={() => agregarFavorito()}>
										Agregar al carrito
									</button>
								) : (
									<div>
										<small className="text-danger">
											Debes iniciar sesión para agregar el producto al carrito
										</small>
										<br />
										<button type="button" className="btn btn-dark disabled">
											Agregar al carrito
										</button>
									</div>
								)}
								<Link to="/">
									<button type="button" className="btn btn-dark">
										Volver
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardArticle;

CardArticle.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	unit_cost: PropTypes.string,
	description: PropTypes.string
};
