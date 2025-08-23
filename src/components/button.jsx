const Button = ({ children, variant="primary", onClick }) => {
  const base = "w-full font-bold py-2 rounded-[10px] transition";
  const styles = {
    primary: "bg-[#3ECF4C] hover:bg-[#35b943] text-white",
    secondary: "bg-[#e2fcd9d3] hover:bg-[#cdddc8] text-[#3ECF4C]",
  };
  return (
    <button onClick={onClick} className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
};
export default Button;
