import React from 'react';
import { Link } from 'react-router-dom';

export default function Category({Category}) {
	return (
		<li>
			<Link to={`/category/${Category}`}>{Category}</Link>
		</li>
  );
}
