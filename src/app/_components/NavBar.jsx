import { UserRound, Map, Bookmark, House } from "lucide-react"

export const NavBar = () => {
  return (
    <>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] h-20 bg-linear-to-b from-[#1D5D36] to-[#144022] rounded-3xl shadow-2xl flex justify-between items-center px-6 z-50">
        <div className="flex w-16 h-16 bg-[#196033] rounded-2xl items-center justify-center shadow-inner shadow-black/40 transform transition-transform duration-200 hover:scale-110">
          <House color="white" size={32} />
        </div>
        <div className="flex w-16 h-16 bg-[#196033] rounded-2xl items-center justify-center shadow-inner shadow-black/40 transform transition-transform duration-200 hover:scale-110">
          <Bookmark color="white" size={32} />
        </div>
        <div className="flex w-16 h-16 bg-[#196033] rounded-2xl items-center justify-center shadow-inner shadow-black/40 transform transition-transform duration-200 hover:scale-110">
          <Map color="white" size={32} />
        </div>
        <div className="flex w-16 h-16 bg-[#196033] rounded-2xl items-center justify-center shadow-inner shadow-black/40 transform transition-transform duration-200 hover:scale-110">
          <UserRound color="white" size={32} />
        </div>
      </div>
    </>
  )
}