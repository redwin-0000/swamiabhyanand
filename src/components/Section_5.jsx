import VideoPlayer from "./VideoPlayer";

function Section_5() {
  return (
    <section className="py-10 flex flex-col justify-center items-center bg-yellow-50 w-full">
      <img
        src="https://swamiabhyanand.com/images/cropped-logo.png"
        alt="Logo"
        className="w-14 h-14 rounded-full mb-4"
      />
      <div className="container px-6 md:px-12 text-center">
        <h1 className="text-4xl font-bold mb-4">वीडियो देखें</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="p-6 flex flex-col justify-center items-center">
            <VideoPlayer />
          </div>
          <div className="md:mt-28">
            <h1 className="text-3xl font-bold mb-4">
              श्रीमद्भगवत गीता अध्याय-9 | भग-7
            </h1>
            <p className="text-xl  mb-4">
              श्रीमद्भगवद्गीता अध्याय- 9 (राजविद्याराजगुह्ययोग), भाग -7, अनंत
              श्री विभूषित महामण्डलेश्वर स्वामी अभयानंद सरस्वती जी महाराज (श्री
              पंचायती अखाड़ा महानिर्वाणी) ” अध्यक्ष ” अखिल भारतीय संत समिति
              उत्तर प्रदेश स्वामी अभयानन्द वेद पाठशाला ,पपनामऊ,अनौरा कलां
              ,फैज़ाबाद रोड़ ,(लखनऊ )
            </p>
          </div>
        </div>
      </div>
      <button className="border border-red-500 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-red-500 hover:text-white mt-4">
        सभी वीडियो देखें
      </button>
    </section>
  );
}

export default Section_5;
