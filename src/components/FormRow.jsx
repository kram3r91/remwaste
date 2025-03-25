const FormRow = ({ type, name, placeholder, onChange }) => {
	return (
		<div className="form-row">
			<label htmlFor={name} className="form-label">
				{name}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				className="form-input"
				placeholder={placeholder}
				required
				onChange={onChange}
			/>
		</div>
	);
};

export default FormRow;
