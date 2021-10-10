import React from 'react';
import styles from './order.module.css';
import cn from 'classnames';

const Order = ({ size }) => {
	return (
		<div className={cn(styles.circle, size === 'small' ? styles.small : ' ')}>
			<a href='/#' className={styles.orderLink}>
				Order Now
			</a>
		</div>
	);
};

export default Order;
