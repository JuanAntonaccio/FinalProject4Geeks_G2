import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/cardProducto.scss";

const CardProducto = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="col-md-3 col-12">
			<div className="card h-100">
				<img
					src={props.imagen}
					className="card-img-top img-fluid mx-auto"
					alt="imagen del producto"
					style={{ width: "50%" }}
				/>
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="card-text w-100">{props.descripcion}</p>
					<p className="card-text">{"$" + props.precio + " USD"}</p>
					<Link to={"/productos/" + props.id}>
						<button type="button" className="btn btn-outline-dark">
							Ver más
						</button>
					</Link>
					&nbsp;
					<button
						type="button"
						onClick={() => actions.addToCart(item)}
						className={store.auth ? "btn btn-outline-dark" : "btn btn-outline-dark disabled"}>
						Agregar al carrito
					</button>
					{/* &nbsp;
								<button
									onClick={() => actions.addFavorite(item.nombre)}
									className="btn btn-outline-primary">
									<i className="corazon fas fa-heart " />
								</button> */}
				</div>
			</div>
		</div>
	);
};

CardProducto.propTypes = {
	nombre: PropTypes.string,
	imagen: PropTypes.string,
	descripcion: PropTypes.string,
	id: PropTypes.number,
	precio: PropTypes.number
};

export default CardProducto;