import React from 'react';

const Card = ({ movies }) => (
	<div className="col-md-4">
		<div className="card border-primary bg-white text-dark">
			<img src={movies.Poster} alt={movies.Title} className="card-img-top" width="100" />
			<div className="card-body">
				<h4>{movies.Title}</h4>
				<p>{movies.Type}</p>
			</div>
		</div>
	</div>
)

export default Card;