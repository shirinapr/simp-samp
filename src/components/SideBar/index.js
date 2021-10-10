import React from 'react';
import Img from 'next/image';

import styles from './sidebar.module.css';
import bigpic from '../../assets/bigpic.png';
import avatar from '../../assets/avatar.png';
import lines from '../../assets/3lines.png';
import Order from '../Order';

// className={styles.}

const SideBar = () => {
	return (
		<div className='container'>
			<div className={styles.head}>
				<Img src={lines} width='30' height='35' />
				<Img src={avatar} width='60' height='55' />
			</div>
			<div className={styles.main}>
				{/* <Img src={bigpic} width='100' height='200' /> */}
			</div>
			<div className={styles.info}>
				<span className={styles.boldInfo}>
					Kick
					<br />
					Scooter T60
				</span>
				<p className={styles.mainInfo}>
					KickScooter T60 is developed exclusively for global shared-
				</p>
			</div>
			<Order size='small' />
		</div>
	);
};

export default SideBar;
