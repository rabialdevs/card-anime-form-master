interface props {
  type: string;
  placeholder: string;
}

function CustomInput({ type, placeholder }: props) {
  return (
    <div>
      <input
        className="px-[12px] py-[6.5px] w-[260px] outline-none bg-[#f9f9f9] border-[1px] border-[#f6f6f6] rounded-md hover:bg-[#f7f7f7] hover:border-[#f0f0f0] transition-colors"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default CustomInput;
