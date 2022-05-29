export type ButtonProps = {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	label: string;
};

export const Button = ({ onClick, label }: ButtonProps) => {
	return (
		<button onClick={onClick} style={{ padding: "10px" }}>
			{label}
		</button>
	);
};
