import Section_6ImageSlider from "./section_6ImageSlider";

function Section_6() {
  return (
    <div className="grid grid-cols-2 gap-4 p-8 text-center bg-amber-50">
      <div className="bg-amber-50 px-6  shadow-md text-white justify-center items-center flex flex-col gap-6">
        <Section_6ImageSlider />
        <h2 className="text-xl font-bold text-black">स्वामी अभयानंद गौशाला समिति</h2>
        <p className="text-black">
          गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी
          कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा
          के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को
          पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः
          हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।
        </p>
        <button className="border border-red-500 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-red-500 hover:text-white mt-4">
        और पढ़े
          </button>
      </div>

      <div className="bg-amber-50 p-6 shadow-md text-white justify-center items-center flex flex-col gap-6">
        <Section_6ImageSlider />
        <h2 className="text-xl font-bold text-black">स्वामी अभयानंद संस्कृत विद्यालय</h2>
        <p className="text-black">
          स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी
          वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है।
          साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता
          है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी
          विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक
          रविवार।
        </p>
      <button className="border border-red-500 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-red-500 hover:text-white mt-4">
      और पढ़े
          </button>
      </div>
    </div>
  );
}

export default Section_6;
