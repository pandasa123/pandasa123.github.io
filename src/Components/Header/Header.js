import React, { memo } from 'react'
import styles from './HeaderStyles.module.css'

const Header = () => {
	return (
		<div id={styles.header}>
			<h1 id={styles.title}>
				<span className={styles.underline}>Hi, I'm Sanket Panda!</span>
			</h1>
		</div>
	)
}

export default memo(Header)
