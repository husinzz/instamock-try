export default function PictureProfileCardDetail() {
  return(
    <div className="h-full">
      <div className="bg-gray-400 opacity-50 h-full w-full"></div>
      <div className="flex">
        {/* The picture */}
        <div className="min-h-[70%]">
          <img src="/human" alt="Posted picture" className="h-full" />
        </div>

        {/* Comments and interactions */}
        <div></div>
      </div>
    </div>
  )
}