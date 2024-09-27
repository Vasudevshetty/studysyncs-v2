const InputField = ({
  id,
  label,
  type,
  register,
  validation,
  error,
  disabled,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        {...register(id, validation)}
        className={`mt-1 block w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default InputField;
