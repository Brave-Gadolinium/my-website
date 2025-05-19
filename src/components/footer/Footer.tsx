import { Spotify } from '../spotify/Spotify';
import classes from './Footer.module.css';

const date = new Date();

const Footer = () => {
	return (
		<div className={classes.footer}>
			<div className={classes.text}>
				<h1>Nikita Pugachev</h1>
				<h2>Fullstack Developer • {date.getFullYear()}</h2>
			</div>
			<Spotify />
		</div>
	);
};

export default Footer;
