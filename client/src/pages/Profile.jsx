import { useSelector } from "react-redux"

export default function Profile() {
  const {currentUser} = useSelector(state => state.user) 
  return (
    <div className=" p-3 max-w-lg mx-auto">
      <h1 className='text-3xl text-center font-semibold my-7'>Profile</h1>
      <form className="flex flex-col gap-4">
        <img className="rounded-full h-24 w-24 object-cover cursor-pointer self-center" src={currentUser.avatar} alt="Profile" />
        <input type="text" placeholder="username" id="username" className="border p-3 rounded-lg bg-white" />
        <input type="email" placeholder="email" id="email" className="border p-3 rounded-lg bg-white" />
        <input type="text" placeholder="password" id="password" className="border p-3 rounded-lg bg-white" />
        <button  className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
      </form>
      <div className=" flex mt-5 justify-between">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>

      </div>
    </div>
  )
}
