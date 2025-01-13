

const Navbar = () => {
  return (
    <div className="bg-[#E9EFFE] shadow-sm">
        <div className="flex gap-[60px] items-center py-6  lg:max-w-screen-lg mx-auto">
            <h2 className="text-2xl font-bold ">Freelance It</h2>
            <div className="flex items-center gap-3">
                <ul className="flex items-center gap-5 ">
                    <li className="text-lg font-semibold">Portfolio</li>
                    <li className="text-lg font-semibold">Process</li>
                    <li className="text-lg font-semibold">Testimonials</li>
                    <li className="text-lg font-semibold">Pricing</li>
                    <li className="text-lg font-semibold">Deliverable</li>
                </ul>

                <div className="flex justify-center items-center  ">
  <div className="relative inline-block text-left">
    <select 
      className="block w-[70px] px-2 py-1 text-sm text-gray-700  rounded-md shadow-sm "
      name="language"
      id="language-dropdown"
    >
      <option value="eng" className="text-gray-900">Eng</option>
      <option value="fra" className="text-gray-900">Fra</option>
    </select>
  </div>
</div>


            </div>
        </div>
 {/* <div className="min-h-screen bg-grid-pattern bg-grid-size">
      <div className="flex items-center justify-center h-full">
        <h1 className="text-4xl font-bold text-blue-500">
          Background with Mini Grid
        </h1>
      </div>
    </div> */}
    </div>
  )
}

export default Navbar