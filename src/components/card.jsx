const Card = ({ image, title, desc, avatar, author, role, price, rating = 3.5, reviews = 86 }) => {
  return (
    <div className="w-[320px] sm:w-[384px] sm:h-[426px] bg-white rounded-[10px] shadow-sm border p-4 flex flex-col gap-3">
      {/* Image + Content */}
      <div className="flex flex-row sm:flex-col gap-3">
        {/* Image */}
        <img
          src={image}
          alt="Course"
          className="w-[82px] h-[82px] sm:w-[344px] sm:h-[193px] object-cover rounded-[10px]"
        />

        {/* Mobile: Title + Avatar */}
        <div className="flex flex-col gap-y-1 flex-1 sm:hidden">
          <h4 className="font-semibold text-[16px] font-secondary leading-snug">{title}</h4>
          <div className="flex items-center gap-2 w-full">
            <img src={avatar} alt="Avatar" className="w-[36px] h-[36px] rounded-[10px]" />
            <div className="flex-1 text-left text-xs leading-tight font-primary truncate whitespace-nowrap overflow-hidden">
              <p className="font-medium text-gray-800 text-[14px] leading-none mb-[6px]">{author}</p>
              <p className="text-[#333333AD] text-[12px] leading-none">{role}</p>
            </div>
          </div>
        </div>

        {/* Desktop: Title + Desc + Avatar */}
        <div className="hidden sm:block">
          <h4 className="font-semibold text-[18px] font-secondary mt-2">{title}</h4>
          <p className="text-[16px] font-medium text-[#333333AD] font-primary line-clamp-2 mt-2">{desc}</p>
          <div className="flex items-center gap-2 mt-2">
            <img src={avatar} alt="Avatar" className="w-[40px] h-[40px] rounded-[10px]" />
            <div className="text-left text-xs leading-tight font-primary">
              <p className="font-medium text-gray-800 text-[16px] mb-1">{author}</p>
              <p className="text-[#333333AD] font-normal text-[14px]">{role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Rating + Price */}
      <div className="flex justify-between items-center sm:hidden mt-2">
        <div className="flex items-center">
          {/* Stars */}
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 me-1 ${i < Math.floor(rating) ? "text-[#FCE91B]" : "text-[#3A35411F]"}`}
              fill="currentColor"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <p className="ms-1 text-[14px] mt-[2px] font-medium font-primary text-[#333333AD]">
            {rating}
          </p>
          <p className="ms-1 text-[14px] mt-[2px] font-medium font-primary text-[#333333AD]">
            ({reviews})
          </p>
        </div>
        <span className="text-[#3ECF4C] font-semibold text-[18px] font-secondary">{price}</span>
      </div>

      {/* Desktop: Rating + Price */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 me-1 ${i < Math.floor(rating) ? "text-[#FCE91B]" : "text-[#3A35411F]"}`}
              fill="currentColor"
              viewBox="0 0 22 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <p className="ms-1 text-[14px] font-medium font-primary text-[#333333AD]">{rating}</p>
          <p className="ms-1 text-[14px] font-medium font-primary text-[#333333AD]">({reviews})</p>
        </div>
        <span className="text-[#3ECF4C] font-semibold text-[24px] font-secondary">{price}</span>
      </div>
    </div>
  );
};

export default Card;
