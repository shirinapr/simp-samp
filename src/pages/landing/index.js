import React from 'react';
import cn from 'classnames';
import Img from 'next/image';

import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import Order from '../../components/Order';
import styles from './landing.module.css';

import bigpic from '../../assets/bigpic.png';
import arrow from '../../assets/arrow.png';
import emp from '../../assets/emp.png';
import avatar from '../../assets/avatar.png';
import SideBar from '../../components/SideBar';

const Landing = () => {
	return (
		<>
			<div className={cn('container', styles.containerBox)}>
				<div className='row'>
					<div className='col-9'>
						<div className={styles.box_1}>
							<nav className={styles.nav}>
								<a href='/#' className={styles.name}>
									Scooter
								</a>
								<a href='/#' className={cn(styles.anav1, styles.anav)}>
									About us
								</a>
								<a href='/#' className={cn(styles.anav2, styles.anav)}>
									Scooters
								</a>
								<a href='/#' className={cn(styles.anav3, styles.anav)}>
									Wheels
								</a>
								<a href='/#' className={cn(styles.anav4, styles.anav)}>
									Contact
								</a>
								<a href='/#' className={cn(styles.anav5, styles.anav)}>
									<Img src={avatar} width={65} height={60} />
								</a>
							</nav>
							<div className={styles.mainContainer}>
								<div>
									<span className={styles.mainHead}>
										Kick <br />
										Scooter T60
									</span>
									<p className={styles.mainInfo}>
										KickScooter T60 is developed exclusively for global
										shared-scooter service providers
									</p>
									<div className={styles.mainfoot}>
										<Order />
										<Img src={arrow} width={100} height={100} />
									</div>
								</div>
								<div className={styles.imgParent}>
									<Img
										src={bigpic}
										alt='Scooter'
										width={450}
										height={450}
										className={styles.bigImg}
									/>
								</div>
								<div className={styles.circles}>
									<div className={styles.circle1}>
										<BsArrowLeft />
									</div>
									<div className={styles.circle2}>
										<BsArrowRight />
									</div>
									<div className={styles.circle3}></div>
								</div>
							</div>
							<div className={styles.emp}>
								<Img src={emp} width={600} height={55}></Img>
							</div>
							<div className={styles.columnContainer}>
								<div>
									<span className={styles.colInfo}>
										Semi <br />
										auto Pilot
									</span>
									<p className={styles.column}>
										Our scooter is auto pilot mode You can use our auto pilot
										system Will help you
									</p>
								</div>
								<div>
									<span className={styles.colInfo}>
										Segway <br />
										Cloud System
									</span>
									<p className={styles.column}>
										We are offering more faster motor With Segway Cloud system
										Easy for user
									</p>
								</div>
								<div>
									<span className={styles.colInfo}>
										Low <br />
										maintenance cost
									</span>
									<p className={styles.column}>
										Ours Scooters have all parts available Easily maintenance
										also last Cost maintenance
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='col-3'>
						<div className={styles.box_2}>
							<p>
								<SideBar />
							</p>
						</div>
						<div className={styles.box_3}>
							<p></p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Landing;
