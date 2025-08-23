const SSOButton = ({ text }) => (
  <button className="w-full border font-bold text-gray-500 flex items-center justify-center gap-2 py-2 rounded-[10px] hover:bg-gray-50">
    <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
    {text}
  </button>
);
export default SSOButton;
