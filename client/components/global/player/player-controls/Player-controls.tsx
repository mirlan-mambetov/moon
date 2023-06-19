'use client'

import React from 'react'
import { IControlsProps } from './Player-controls.props'
import { TimeElapsed } from '../time-elapsed/Time-elapsed'
import styles from './Player-controls.module.scss'

export const Controlls = ({
	isPlaying,
	isMuted,
	durationSec,
	fullScreenHandler,
	progressRef,
	elapsedSec,
	bufferRef,
	seekToPostion,
	playPauseHandler,
	volumeRef,
	mutedHandler,
	changeVolume,
}: IControlsProps) => {
	return (
		<div className={styles.panel_control}>
			<div className={styles.panel}>
				<div className={styles.panel_column}>
					{!isPlaying ? (
						<button onClick={playPauseHandler} className={styles.playbtn}>
							<svg
								width='14'
								height='20'
								viewBox='0 0 19 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M17.409 7.35331C17.8893 7.60872 18.291 7.99 18.5712 8.45629C18.8514 8.92259 18.9994 9.45632 18.9994 10.0003C18.9994 10.5443 18.8514 11.078 18.5712 11.5443C18.291 12.0106 17.8893 12.3919 17.409 12.6473L4.597 19.6143C2.534 20.7363 0 19.2763 0 16.9683V3.03331C0 0.723308 2.534 -0.735693 4.597 0.385307L17.409 7.35331Z'
									fill='white'
								/>
							</svg>
						</button>
					) : (
						<button onClick={playPauseHandler} className={styles.pausebtn}>
							<svg
								width='14'
								height='20'
								viewBox='0 0 20 20'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0 4C0 2.114 -5.96046e-08 1.172 0.586 0.586C1.172 -5.96046e-08 2.114 0 4 0C5.886 0 6.828 -5.96046e-08 7.414 0.586C8 1.172 8 2.114 8 4V16C8 17.886 8 18.828 7.414 19.414C6.828 20 5.886 20 4 20C2.114 20 1.172 20 0.586 19.414C-5.96046e-08 18.828 0 17.886 0 16V4ZM12 4C12 2.114 12 1.172 12.586 0.586C13.172 -5.96046e-08 14.114 0 16 0C17.886 0 18.828 -5.96046e-08 19.414 0.586C20 1.172 20 2.114 20 4V16C20 17.886 20 18.828 19.414 19.414C18.828 20 17.886 20 16 20C14.114 20 13.172 20 12.586 19.414C12 18.828 12 17.886 12 16V4Z'
									fill='white'
								/>
							</svg>
						</button>
					)}
				</div>
				<div className={styles.panel_column}>
					<button className={styles.panel_volume}>
						{!isMuted ? (
							<svg
								width='14'
								height='19'
								viewBox='0 0 17 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.00356712 9.16276C0.0497102 6.9743 0.0727823 5.88066 0.826857 4.94495C0.964072 4.77396 1.16686 4.57091 1.33686 4.43316C2.26336 3.67795 3.48737 3.67795 5.93659 3.67795C6.81088 3.67795 7.24924 3.67795 7.66696 3.5687C7.75317 3.54495 7.83939 3.51883 7.92317 3.48914C8.33118 3.34546 8.69668 3.09728 9.42647 2.60331C12.3092 0.649955 13.7493 -0.326127 14.96 0.0977914C15.1919 0.179725 15.4166 0.297283 15.6169 0.442152C16.6624 1.19618 16.7426 2.9536 16.9016 6.46607C16.9524 7.47675 16.9852 8.48821 17 9.5C17 10.1187 16.9599 11.2337 16.9016 12.5339C16.7426 16.0464 16.6624 17.8038 15.6169 18.5578C15.4163 18.7027 15.1955 18.8186 14.9612 18.9022C13.7506 19.3261 12.3092 18.35 9.42647 16.3967C8.69668 15.9027 8.33118 15.6545 7.92317 15.5109C7.83892 15.4809 7.75345 15.4544 7.66696 15.4313C7.24924 15.3221 6.8121 15.3221 5.93659 15.3221C3.48737 15.3221 2.26336 15.3221 1.33564 14.5668C1.1499 14.4128 0.979536 14.2418 0.826857 14.0562C0.0727823 13.1182 0.0497102 12.0257 0.00356712 9.83724C-0.00118904 9.61204 -0.00118904 9.38796 0.00356712 9.16276Z'
									fill='white'
								/>
							</svg>
						) : (
							<svg
								width='25'
								height='19'
								viewBox='0 0 30 19'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.00356712 9.16276C0.0497102 6.9743 0.0727823 5.88066 0.826857 4.94495C0.964072 4.77396 1.16686 4.57091 1.33686 4.43316C2.26336 3.67795 3.48737 3.67795 5.93659 3.67795C6.81088 3.67795 7.24924 3.67795 7.66696 3.5687C7.75317 3.54495 7.83939 3.51883 7.92317 3.48914C8.33118 3.34546 8.69668 3.09728 9.42647 2.60331C12.3092 0.649955 13.7493 -0.326127 14.96 0.0977914C15.1919 0.179725 15.4166 0.297283 15.6169 0.442152C16.6624 1.19618 16.7426 2.9536 16.9016 6.46607C16.9524 7.47675 16.9852 8.48821 17 9.5C17 10.1187 16.9599 11.2337 16.9016 12.5339C16.7426 16.0464 16.6624 17.8038 15.6169 18.5578C15.4163 18.7027 15.1955 18.8186 14.9612 18.9022C13.7506 19.3261 12.3092 18.35 9.42647 16.3967C8.69668 15.9027 8.33118 15.6545 7.92317 15.5109C7.83892 15.4809 7.75345 15.4544 7.66696 15.4313C7.24924 15.3221 6.8121 15.3221 5.93659 15.3221C3.48737 15.3221 2.26336 15.3221 1.33564 14.5668C1.1499 14.4128 0.979536 14.2418 0.826857 14.0562C0.0727823 13.1182 0.0497102 12.0257 0.00356712 9.83724C-0.00118904 9.61204 -0.00118904 9.38796 0.00356712 9.16276Z'
									fill='white'
								/>
								<path
									d='M21 13C23.3333 10.5794 28 5.79185 28 6.00702'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
								/>
								<path
									d='M28 13C25.5794 10.6667 20.7918 6 21.007 6'
									stroke='white'
									strokeWidth='3'
									strokeLinecap='round'
								/>
							</svg>
						)}
						<input
							ref={volumeRef}
							// @ts-ignore
							onInput={changeVolume(volumeRef.current?.value)}
							// @ts-ignore
							onChange={changeVolume(volumeRef.current?.value)}
							type='range'
							defaultValue={50}
							min={0}
							max={100}
							step={0.1}
							onChangeCapture={e => mutedHandler(Number(e.currentTarget.value))}
						/>
					</button>
				</div>
				<div className={styles.panel_column}>
					<div className={styles.panel_time}>
						<TimeElapsed elapsedSec={elapsedSec} totalSec={durationSec} />
					</div>
				</div>
			</div>
			<div className={styles.panel_timeline} onClick={seekToPostion}>
				<div className={styles.panel_timeline__buffer} ref={bufferRef}></div>
				<div
					className={styles.panel_timeline__progress}
					ref={progressRef}
				></div>
			</div>
			<div className={styles.panel}>
				<div className={styles.panel_quality}>
					<button>
						<svg
							width='14'
							height='20'
							viewBox='0 0 19 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M9.50365 7.27699C8.83329 7.27699 8.20553 7.53629 7.73022 8.01017C7.25716 8.48405 6.99485 9.10993 6.99485 9.77828C6.99485 10.4466 7.25716 11.0725 7.73022 11.5464C8.20553 12.018 8.83329 12.2796 9.50365 12.2796C10.174 12.2796 10.8018 12.018 11.2771 11.5464C11.7501 11.0725 12.0124 10.4466 12.0124 9.77828C12.0124 9.10993 11.7501 8.48405 11.2771 8.01017C11.0449 7.77693 10.7686 7.59201 10.4642 7.46615C10.1597 7.34028 9.83322 7.27599 9.50365 7.27699ZM18.7474 12.5411L17.2812 11.2916C17.3507 10.8669 17.3865 10.4332 17.3865 10.0018C17.3865 9.5704 17.3507 9.13452 17.2812 8.71205L18.7474 7.46252C18.8582 7.36798 18.9375 7.24207 18.9747 7.10152C19.012 6.96097 19.0054 6.81245 18.9559 6.6757L18.9357 6.61758C18.5322 5.49254 17.9276 4.4497 17.1511 3.53958L17.1108 3.49264C17.0165 3.38211 16.8908 3.30266 16.7503 3.26475C16.6098 3.22684 16.4611 3.23226 16.3238 3.28029L14.5033 3.92629C13.8307 3.37641 13.0819 2.94276 12.2703 2.641L11.9183 0.743235C11.8917 0.60027 11.8222 0.468746 11.7188 0.366136C11.6155 0.263526 11.4833 0.194687 11.3398 0.168765L11.2793 0.157588C10.1135 -0.0525293 8.88485 -0.0525293 7.71901 0.157588L7.65848 0.168765C7.51498 0.194687 7.3828 0.263526 7.27948 0.366136C7.17616 0.468746 7.1066 0.60027 7.08004 0.743235L6.72581 2.64994C5.92189 2.95411 5.17298 3.3867 4.50847 3.93076L2.67451 3.28029C2.53722 3.23188 2.38841 3.22626 2.24784 3.2642C2.10728 3.30213 1.98162 3.3818 1.88757 3.49264L1.84721 3.53958C1.07213 4.45067 0.467642 5.49325 0.0625767 6.61758L0.0423987 6.6757C-0.0584914 6.95511 0.0244627 7.26805 0.250905 7.46252L1.73511 8.72546C1.66561 9.1457 1.63198 9.57487 1.63198 9.99958C1.63198 10.4288 1.66561 10.8579 1.73511 11.2737L0.255389 12.5366C0.144624 12.6312 0.0653488 12.7571 0.0281036 12.8976C-0.00914159 13.0382 -0.00259167 13.1867 0.0468826 13.3235L0.0670607 13.3816C0.472863 14.5059 1.07148 15.5453 1.85169 16.4596L1.89205 16.5065C1.98634 16.617 2.112 16.6965 2.25248 16.7344C2.39296 16.7723 2.54166 16.7669 2.67899 16.7189L4.51295 16.0684C5.18107 16.616 5.92541 17.0497 6.73029 17.3492L7.08453 19.2559C7.11108 19.3989 7.18064 19.5304 7.28396 19.633C7.38728 19.7356 7.51947 19.8045 7.66296 19.8304L7.7235 19.8416C8.90081 20.0528 10.1065 20.0528 11.2838 19.8416L11.3443 19.8304C11.4878 19.8045 11.62 19.7356 11.7233 19.633C11.8267 19.5304 11.8962 19.3989 11.9228 19.2559L12.2748 17.3582C13.0864 17.0542 13.8352 16.6227 14.5078 16.0729L16.3283 16.7189C16.4656 16.7673 16.6144 16.7729 16.755 16.735C16.8955 16.697 17.0212 16.6173 17.1152 16.5065L17.1556 16.4596C17.9358 15.5409 18.5344 14.5059 18.9402 13.3816L18.9604 13.3235C19.0568 13.0463 18.9739 12.7356 18.7474 12.5411ZM9.50365 13.7079C7.32666 13.7079 5.56221 11.9488 5.56221 9.77828C5.56221 7.60781 7.32666 5.84864 9.50365 5.84864C11.6806 5.84864 13.4451 7.60781 13.4451 9.77828C13.4451 11.9488 11.6806 13.7079 9.50365 13.7079Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
				<div className={styles.panel_fullscreen}>
					<button onClick={fullScreenHandler}>
						<svg
							width='14'
							height='18'
							viewBox='0 0 18 18'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1 12C1.26522 12 1.51957 12.1054 1.70711 12.2929C1.89464 12.4804 2 12.7348 2 13V16H5C5.26522 16 5.51957 16.1054 5.70711 16.2929C5.89464 16.4804 6 16.7348 6 17C6 17.2652 5.89464 17.5196 5.70711 17.7071C5.51957 17.8946 5.26522 18 5 18H2C1.46957 18 0.960859 17.7893 0.585786 17.4142C0.210714 17.0391 1.00268e-07 16.5304 1.00268e-07 16V13C1.00268e-07 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12ZM17 12C17.2449 12 17.4813 12.09 17.6644 12.2527C17.8474 12.4155 17.9643 12.6397 17.993 12.883L18 13V16C18.0002 16.5046 17.8096 16.9906 17.4665 17.3605C17.1234 17.7305 16.6532 17.9572 16.15 17.995L16 18H13C12.7451 17.9997 12.5 17.9021 12.3146 17.7272C12.1293 17.5522 12.0178 17.313 12.0028 17.0586C11.9879 16.8042 12.0707 16.5536 12.2343 16.3582C12.3979 16.1627 12.6299 16.0371 12.883 16.007L13 16H16V13C16 12.7348 16.1054 12.4804 16.2929 12.2929C16.4804 12.1054 16.7348 12 17 12ZM16 1.00268e-07C16.5046 -0.000159579 16.9906 0.190406 17.3605 0.533497C17.7305 0.876587 17.9572 1.34684 17.995 1.85L18 2V5C17.9997 5.25488 17.9021 5.50003 17.7272 5.68537C17.5522 5.8707 17.313 5.98224 17.0586 5.99717C16.8042 6.01211 16.5536 5.92933 16.3582 5.76574C16.1627 5.60215 16.0371 5.3701 16.007 5.117L16 5V2H13C12.7451 1.99972 12.5 1.90212 12.3146 1.72715C12.1293 1.55218 12.0178 1.31305 12.0028 1.05861C11.9879 0.804164 12.0707 0.553621 12.2343 0.358167C12.3979 0.162714 12.6299 0.0371037 12.883 0.00700007L13 1.00268e-07H16ZM5 1.00268e-07C5.25488 0.000282808 5.50003 0.0978792 5.68537 0.272848C5.8707 0.447818 5.98224 0.686953 5.99717 0.941395C6.01211 1.19584 5.92933 1.44638 5.76574 1.64183C5.60215 1.83729 5.3701 1.9629 5.117 1.993L5 2H2V5C1.99972 5.25488 1.90212 5.50003 1.72715 5.68537C1.55218 5.8707 1.31305 5.98224 1.05861 5.99717C0.804164 6.01211 0.553621 5.92933 0.358167 5.76574C0.162714 5.60215 0.0371037 5.3701 0.00700007 5.117L1.00268e-07 5V2C-0.000159579 1.49542 0.190406 1.00943 0.533497 0.639452C0.876587 0.269471 1.34684 0.0428434 1.85 0.00500021L2 1.00268e-07H5Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	)
}