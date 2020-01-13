import React from 'react';
import { Link } from 'react-router-dom';

import './Category.scss';

export default function Category({Category}) {
	return (
		<li className="category">
			<Link to={`/category/${Category}`}>{Category}</Link>
		</li>
  );
}
