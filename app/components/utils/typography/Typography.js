export const Heading = ({ type, text }) => {
	return (
		<h1
			className={`text-3xl md:text-4xl lg:text-5xl font-black ${
				type === 'primary' ? 'text-dark' : 'text-secondary'
			}`}
		>
			{text}
		</h1>
	);
};

export const SubHeading = ({ type, text }) => {
    return (
        <h2
            className={`text-xl md:text-2xl lg:text-3xl font-black ${
                type === 'primary' ? 'text-dark' : 'text-secondary'
            }`}
        >
            {text}
        </h2>
    );
}

export const Paragraph = ({ text, type }) => {
	return (
		<p
			className={`text-base lg:text-lg leading-7 lg:leading-9 ${
				type === 'primary' ? 'text-dark' : 'text-light'
			}`}
		>
			{text}
		</p>
	);
};

export const ParagraphLarge = ({ text, type }) => {
    return (
        <p
            className={`text-xl md:text-3xl leading-7 lg:leading-9 ${
                type === 'primary' ? 'text-dark' : 'text-light'
            }`}
        >
            {text}
        </p>
    );
}


export const AltText = ({ text, type }) => {
    return (
        <p
            className={`text-sm  italic ${
                type === 'primary' ? 'text-dark/70' : 'text-secondary/70'
            }`}
        >
            {text}
        </p>
    );
}