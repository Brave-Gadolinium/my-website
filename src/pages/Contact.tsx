// import Message from '../components/message/Message';
import { SiDiscord, SiTelegram } from 'react-icons/si';
import ContactLink from '../components/message/ContactLink';
import Message from '../components/message/Message';
import TimeStatus from '../components/timeStatus/TimeStatus';
import { Translations } from '../interfaces';
import classes from './Contact.module.css';
import { FiMail } from 'react-icons/fi';

interface Props {
	translations: Translations;
	language: string;
}

export const Contact = ({ translations, language }: Props) => {
	return (
		<section className={classes.hero}>
			<div className={classes.profile}>
				<h1>{translations[language].chat} 💬</h1>
			</div>
			<p className={classes.subtitle}>{translations[language].chat_info}</p>
			<TimeStatus translations={translations} language={language} />
			<div className={classes.msg_links_list}>
				<Message translations={translations} language={language} />
				<div className={classes.links_list}>
					<ContactLink
						name='@Brave_Gadolinium'
						icon={
							<SiDiscord
								className={classes.link_icon}
								style={{ color: '#5865F2' }}
							/>
						}
						link='#'
					/>

					<ContactLink
						name='@Brave_Gadolinium'
						icon={
							<SiTelegram
								className={classes.link_icon}
								style={{ color: '#24A1DE' }}
							/>
						}
						link='https://t.me/Brave_Gadolinium'
					/>

					<ContactLink
						name='@Brave_Gadolinium'
						icon={<FiMail className={classes.link_icon} />}
						link='@Brave_Gadolinium'
					/>
				</div>
			</div>
		</section>
	);
};
