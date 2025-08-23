const InputField = ({ label, type="text", id, placeholder }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm sm:text-base font-primary text-[#333333AD] mb-1">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required
      className="w-full border rounded-md px-4 py-2 text-sm sm:text-base font-primary focus:outline-none focus:ring-2 focus:ring-green-300"
    />
  </div>
);
export default InputField;
