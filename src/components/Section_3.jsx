function Section_3() {
    return (
        <section className=" flex flex-col justify-center items-center bg-yellow-50 w-full">
        <img
          src="https://swamiabhyanand.com/images/cropped-logo.png"
          alt="Logo"
          className="w-14 h-14 rounded-full"
        />
        <div className="container px-6 md:px-12 text-center">
          <h1 className="text-4xl font-bold mb-4">हमारे बारे में</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "स्वामी अभयानंद संस्कृत विद्यालय ​",
                img: "https://swamiabhyanand.com/images/cropped-logo.png",
                desc: "स्वामी अभ्यानंद वेद पाठशाला के अन्तर्गत 3 आचार्य एवं 21 विद्यार्थी वर्तमान में शुक्लयजुर्वेद, व्याकरण व आधुनिक शिक्षा भी प्राप्त करते है। साथ ही साथ स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशित किया जाता है जिसमें लगभग 30 पुस्तकें प्रकाशित हो चुकी हैं। नित्य प्रति किसी विद्वान संत द्वारा सुबह स्वाध्याय एवं सायं सत्संग प्रवचन प्रत्येक रविवार हवन, स्वाध्याय, आदि ।",
              },
              {
                title: "स्वामी अभयानंद गौशाला समिति",
                img: "https://swamiabhyanand.com/images/pic2.png",
                desc: "गौ रक्षा मानव समाज के लिए आवश्यक है। यहाँ तक कि स्वयं भगवान कृष्ण भी कहते हैं कि गायें उन्हें विशेष रूप से प्रिय हैं, वे गोपाल और गोविंदा के रूप में जाने जाते हैं और वृंदावन में गाय चराते हैं। केवल गायों को पालने से ही व्यक्ति बहुत ही प्राकृतिक और समृद्ध जीवन जी सकता है। अतः हमारे गौशाला के अंतर्गत गौरक्षा, संरक्षण एवं संवर्धन किया जाता है।",
              },
              {
                title: "स्वामी अभयानंद पुस्तकालय​",
                img: "https://swamiabhyanand.com/images/pic3.png",
                desc: "स्वामी अभयानंद पुस्तकालय​ अंतर्गत, हमारे सदगुरुदेव भगवान के प्रवचनों का संकलन किया जाता है। अभी तक स्वामी जी के प्रवचनों को पुस्तक रूप में प्रकाशीत करने की पंक्ति में 30 पुस्तकें प्रकाशित की जा चुकी हैं।",
              },
              {
                title: "दैनिक सत्संग",
                img: "https://swamiabhyanand.com/images/pic4.png",
                desc: "इसका कार्य शुद्ध भक्ति जीवन की उन्नति के लिए अनुकूल एक शुद्ध और आध्यात्मिक रूप से सराबोर वातावरण उत्पन्न करना है। यहाँ प्रातः एवं सायं भगवत्नाम संकीर्तन एवं कथा वाचन किया जाता है ।",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 flex flex-col justify-center items-center"
              >
                <img
                  src={item.img}
                  alt="Image"
                  className="w-60 h-60 rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Section_3;
  