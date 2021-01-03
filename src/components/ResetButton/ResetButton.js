const ResetButton = ({ handleReset, name }) => (
	<>
		<button className="redButton" onClick={handleReset}>
			{name}
		</button>
	</>
);

export default ResetButton;
