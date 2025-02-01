function Section_4() {
    return (
      <section className="py-10 flex flex-col justify-center items-center bg-yellow-50 w-full">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="Logo"
          className="w-14 h-14 rounded-full mb-4"
        />
        <div className="container px-6 md:px-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Latest From Our Blog</h1>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Left Blog Card */}
            <img
                src=" https://swamiabhyanand.com/images/DSC06339.JPG"
                alt="Logo"
                className="w-full h-96 mb-4"
              />
            {/* Right Column with Items     */}
            <div className="flex flex-col gap-4">
              {/* Item 1 */}
              <div className="flex items-center gap-4 ">
                <img
                  src="https://swamiabhyanand.com/images/goshala.png"
                  alt="गौशाला"
                  className="w-16 h-16 rounded-lg"
                />
                <h1 className="text-lg font-semibold">गौशाला</h1>
              </div>
  
              {/* Item 2 */}
              <div className="flex items-center gap-4 ">
                <img
                  src="https://swamiabhyanand.com/images/sanskrit%20vidyalay.png"
                  alt="संस्कृत विद्यालय"
                  className="w-16 h-16 rounded-lg"
                />
                <h1 className="text-lg font-semibold">संस्कृत विद्यालय</h1>
              </div>
  
              {/* Item 3 */}
              <div className="flex items-center gap-4 ">
                <img
                  src="https://swamiabhyanand.com/images/pustkalay.png"
                  alt="पुस्तकालय"
                  className="w-16 h-16 rounded-lg"
                />
                <h1 className="text-lg font-semibold">पुस्तकालय</h1>
              </div>
  
              {/* Item 4 */}
              <div className="flex items-center gap-4 ">
                <img
                  src="https://swamiabhyanand.com/images/satsang.png"
                  alt="सत्संग"
                  className="w-16 h-16 rounded-lg"
                />
                <h1 className="text-lg font-semibold">सत्संग</h1>
              </div>
  
              {/* Item 5 */}
              <div className="flex items-center gap-4">
                <img
                  src="https://swamiabhyanand.com/images/bhagwat%20arti.png"
                  alt="भगवत आरती"
                  className="w-16 h-16 rounded-lg"
                />
                <h1 className="text-lg font-semibold">भगवत आरती</h1>
              </div>
            </div>
          </div>
        </div>
        <button className="border border-red-500 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-red-500 hover:text-white mt-4">
            Read All
          </button>
      </section>
    );
  }
  
  export default Section_4;
  