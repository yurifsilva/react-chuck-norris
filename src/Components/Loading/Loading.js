import React from 'react';

import GifLoading from '../../Assets/Img/loading.gif';
import './Loading.scss';

export default function Loading() {
	return (
		<div className="loading">
			<img src={GifLoading} alt="Carregando" />
			Carregando ...
		</div>
	);
}
