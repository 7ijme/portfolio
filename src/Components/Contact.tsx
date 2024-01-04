type Props = {};

export default function Contact({}: Props) {
	return (
		<section id="contact" className="contact">
			<h2>Contact</h2>
			{/* discord and email for contact */}
			<p>
				Discord:{" "}
				<a
					href="https://discord.com/channels/@me/331821337586827265/"
					target={"_blank"}
				>
					7ijme
				</a>
			</p>
			<p>
				Email:{" "}
				<a href="mailto:tijmevh@gmail.com" target={"_blank"}>
					tijmevh@gmail.com
				</a>
			</p>
		</section>
	);
}
