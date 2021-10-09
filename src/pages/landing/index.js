import React from 'react';
import styles from './landing.module.css';
import cn from 'classnames';

const Landing = () => {
	return (
		<>
			<div className={cn('container', styles.containerBox)}>
				<div className='row'>
					<div className='col-10'>
						<div className={styles.box_1}>hey you</div>
					</div>
					<div className='col-2'>
						<div className={styles.box_2}>hi babe</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
