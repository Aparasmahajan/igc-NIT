import { CountdownTimer } from "../../assets/CountdownTimer";
import land from "../../assets/land.jpg";
const Body = () => {
  return (
    <div className="container mx-auto px-4">
      <CountdownTimer className="timer" />
      <div className="grid relative ">
        <div
          className="flex flex-col text-gray-800 p-20 rounded-lg  relative text-left  bg-white bg-opacity-75 "
          style={{
            backgroundImage: `url(${land})`,
            height: "400px",
            width: "100%",
            backgroundRepeat: "no-repeat",
          }}
        >
            <h1 className="  font-bold text-orange-400 mb-4 ">Welcome to</h1>
            <h2 className="text-4xl font-bold text-cyan-700 mb-8  ">
              Indian Geotechnical Conference 2025
            </h2>
            {/* <p className="text-lg mb-8">Add your content here</p> */}
        </div>
      </div>
      <div className="flex mx-32 h-2/3 my-32 ">
        <div className="flex-shrink-0 mt-10">
          <img
            src="https://igc2024mit.com/assets/front/img/images/about_img01.jpg"
            className="w-full object-cover"
          />
        </div>
        <div className=" ml-16 flex-shrink flex-grow ml-4 ">
          <h1 className="mb-5 font-bold text-2xl text-orange-400 text-left">
            About
          </h1>
          <h1 className="text-4xl mb-10 text-cyan-700 text-left font-bold">
            The NITJ Chapter of the <br /> Indian Geotechnical Society Indian
            Geotechnical Society
          </h1>
          <p className="text-lg mb-10 text-left">
            It is established its 46th Local chapter at Aurangabad on 3rd
            October 2019 at Marathwada Institute of Technology, with the aim of
            catering to the needs of Professionals and students of Marathwada
            Region thereby promoting co-operation amongst engineers and
            scientists for the advancement and dissemination of knowledge in the
            field of Civil Engineering. The Chapter has conducted 6 STTP of one
            week ,2 conferences, more than 20 expert lectures, webinars, quiz
            competition, project
          </p>
          <p className="text-lg mb-10 text-left">
            231st IGS Executive Committee meeting was conducted on 11th June
            2022 at Marathwada Institute of Technology, Aurangabad.
          </p>
          <p className="text-lg mb-10 text-left">
            Also hosted the prestigious Ninth Indian Young Geotechnical
            Engineers Conference(9IYGEC) at MIT, Chhatrapati Sambhajinagar
            (Aurangabad) on 21-22 March 2023. 234th IGS Executive Committee
            meeting was conducted on 21st March 2023 at MIT, Chhatrapati
            Sambhajinagar (Aurangabad).
          </p>
          <p className="text-lg mb-10 text-left">
            IGS Aurangabad chapter received national level appreciation award
            for organising 9 IYGEC 2023 successfully. The award was presented by
            IGS National President Dr. Anil Joseph & National Secretary Dr. A.
            P. Singh at a grand event of IGC 2023 held at IIT Roorkee on 16th
            Dec. 2023
          </p>
        </div>
      </div>

      <div className="bg-cyan-700">
        <div className="flex mx-32 h-2/3">
          <div className=" ml-16 my-32 flex-shrink flex-grow ml-4">
            <h1 className="mb-5 font-bold text-2xl text-orange-400 text-left">
              About
            </h1>
            <h1 className="text-4xl mb-10 text-white text-left font-bold">
              IGS AND IGC 2025
            </h1>
            <p className="text-lg mb-10 text-left text-white">
              Indian Geotechnical Society (IGS) which is a prestigious
              professional body committed to the advancement and promotion of
              Geotechnical Engineering in India. The society was founded as the
              “Indian National Society of Soil Mechanics and Foundation
              Engineering” in 1948 by a group of engineers and scientists who
              identified the need for a platform to address the various
              challenges and advancements in the field of Geotechnical
              Engineering. Over the years, the IGS has expanded its influence to
              become one of the most renowned and respected organizations in the
              field of Geotechnical Engineering in India. The IGS has a vast
              network of Local Chapters and Student Chapters across the country.
              IGS collaborates with numerous national and international
              organizations and institutions to foster knowledge and exchange
              ideas in Geotechnical Engineering. The Society attained
              affiliation with the International Society for Soil Mechanics and
              Geotechnical Engineering (ISSMGE)
            </p>
            <p className="text-lg mb-10 text-left text-white">
              The Indian Geotechnical Society (IGS) aims to promote
              collaboration among engineers and scientists to enhance and
              disseminate knowledge in the fields of Soil Mechanics, Foundation
              Engineering, Soil Dynamics, Engineering Geology, Rock Mechanics,
              Snow and Ice Mechanics, and related fields, including their
              practical applications. The IGS serves as a shared platform for
              researchers, academicians, designers, construction engineers,
              equipment manufacturers, and others interested in geotechnical
              activities.
            </p>
            <p className="text-lg mb-10 text-left text-white">
              The Organizing Committee of the conference invites the original
              research and field case study papers from the researchers,
              academicians, industry practitioners for the presentation in the
              Indian Geotechnical Conference -2025 (IGC 2025) during 19th to
              21st December 2025 at Dr B R Ambedkar National Institute of
              Technology, Jalandhar.
            </p>
          </div>
          <div className="flex-shrink-0 mt-10">
            <img
              src="https://igc2024mit.com/assets/front/img/images/about_img01.jpg"
              className="w-full object-cover my-36"
            />
          </div>
        </div>
      </div>

      <div className="flex mx-32 h-2/3 my-32 ">
        <div className="flex-shrink-0 mt-10">
          <img
            src="https://igc2024mit.com/assets/front/img/images/about_img01.jpg"
            className="w-full object-cover"
          />
        </div>
        <div className=" ml-16 flex-shrink flex-grow ml-4 ">
          <h1 className="mb-5 font-bold text-2xl text-orange-400 text-left">
            About
          </h1>
          <h1 className="text-4xl mb-10 text-cyan-700 text-left font-bold">
            Dr B R Ambedkar National Institute of Technology, Jalandhar
          </h1>
          <p className="text-lg mb-10 text-left">
            Dr B R Ambedkar National Institute of Technology was established in
            the year 1987 as Regional Engineering College and was given the
            status of National Institute of Technology (Deemed University) by
            the Government of India on October 17, 2002 under the aegis of
            Ministry of Human Resource Development, New Delhi (Now the Ministry
            of Education).Government of India has declared the Institute as
            “Institute of National Importance” under the act of Parliament-2007.
            A large number of reputed Industrial houses in the country visit the
            Institution and select the final year students as Engineers/
            Management Trainees. As one of the National Institutes of Technology
            (NIT), the Institute has the responsibility of providing high
            quality education in Engineering, Technology and Sciences to produce
            competent technical and scientific manpower for the country. The
            Institute offers BTech, MTech, MSc, MBA and PhD programmes in the
            several disciplines of engineering, technology and Sciences.
          </p>
          <p className="text-lg mb-10 text-left">
            Our Institute is having more than 3500 students and more than 500
            qualified, experienced, and dedicated faculty members striving for
            the educational enrichment of our students.
          </p>
        </div>
      </div>

      <div className="bg-cyan-700">
        <div className="flex mx-32 h-2/3">
          <div className=" ml-16 my-32 flex-shrink flex-grow ml-4">
            <h1 className="mb-5 font-bold text-2xl text-orange-400 text-left">
              Venue
            </h1>
            <h1 className="text-4xl mb-10 text-white text-left font-bold">
              IGS AND IGC 2025
            </h1>
            <p className="text-lg mb-10 text-left text-white">
              Indian Geotechnical Society (IGS) which is a prestigious
              professional body committed to the advancement and promotion of
              Geotechnical Engineering in India. The society was founded as the
              “Indian National Society of Soil Mechanics and Foundation
              Engineering” in 1948 by a group of engineers and scientists who
              identified the need for a platform to address the various
              challenges and advancements in the field of Geotechnical
              Engineering. Over the years, the IGS has expanded its influence to
              become one of the most renowned and respected organizations in the
              field of Geotechnical Engineering in India. The IGS has a vast
              network of Local Chapters and Student Chapters across the country.
              IGS collaborates with numerous national and international
              organizations and institutions to foster knowledge and exchange
              ideas in Geotechnical Engineering. The Society attained
              affiliation with the International Society for Soil Mechanics and
              Geotechnical Engineering (ISSMGE)
            </p>
            <p className="text-lg mb-10 text-left text-white">
              The Indian Geotechnical Society (IGS) aims to promote
              collaboration among engineers and scientists to enhance and
              disseminate knowledge in the fields of Soil Mechanics, Foundation
              Engineering, Soil Dynamics, Engineering Geology, Rock Mechanics,
              Snow and Ice Mechanics, and related fields, including their
              practical applications. The IGS serves as a shared platform for
              researchers, academicians, designers, construction engineers,
              equipment manufacturers, and others interested in geotechnical
              activities.
            </p>
            <p className="text-lg mb-10 text-left text-white">
              The Organizing Committee of the conference invites the original
              research and field case study papers from the researchers,
              academicians, industry practitioners for the presentation in the
              Indian Geotechnical Conference -2025 (IGC 2025) during 19th to
              21st December 2025 at Dr B R Ambedkar National Institute of
              Technology, Jalandhar.
            </p>
          </div>
          <div className="flex-shrink-0 mt-10">
            <img
              src="https://igc2024mit.com/assets/front/img/images/about_img01.jpg"
              className="w-full object-cover my-36"
            />
          </div>
        </div>
      </div>

      <div className="flex mx-32 h-2/3 my-32 ">
        <div className="flex-shrink-0 mt-10">
          <img
            src="https://igc2024mit.com/assets/front/img/images/about_img01.jpg"
            className="w-full object-cover"
          />
        </div>
        <div className=" ml-16 flex-shrink flex-grow ml-4 ">
          <h1 className="mb-5 font-bold text-2xl text-orange-400 text-left">
            About
          </h1>
          <h1 className="text-4xl mb-10 text-cyan-700 text-left font-bold">
            CIVIL ENGINEERING DEPARTMENT
          </h1>
          <p className="text-lg mb-10 text-left">
            Established in the year 1990, The Department of Civil Engineering
            holds the distinction of being the oldest among the 12 departments
            at Dr. B R Ambedkar NIT Jalandhar. Over the years, it has evolved
            into a distinguished center for excellence, fostering innovation and
            conducting impactful research.
          </p>
          <p className="text-lg mb-10 text-left">
            The department boasts a dedicated faculty and staff, highly
            motivated students, and an environment that promotes innovative
            teaching and learning. The department offers a range of academic
            programs, including the undergraduate program B. Tech in Civil
            Engineering, postgraduate programs such as M. Tech in Geotechnical &
            Geo-environmental Engineering, and Structural & Construction
            Engineering. In addition, the department also offers Ph.D. programs
            to cater to the research aspirations of its students. Department of
            Civil Engineering at Dr. B R Ambedkar NIT Jalandhar has established
            itself as a prominent institution, equipping students with the
            necessary skills and knowledge to succeed in the field of civil
            engineering.
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <div className="container mx-auto px-4">
      <CountdownTimer className="timer mb-10" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div
          className="flex flex-col space-y-4 bg-white bg-opacity-75 text-gray-800 p-4 rounded-lg shadow-md"
          style={{
            backgroundImage: `url(${land})`,
            height: "400px",
            width: "100%",
          }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4">
            Welcome to
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-cyan-700 mb-8">
            Indian Geotechnical Conference 2025
          </h2>
          <p className="text-lg mb-8">{/* Add your content here */}</p>
        </div>
        <div className="relative">
          {" "}
          {/* Image section */}
          <img
            src={land}
            className="w-full h-64 lg:h-auto object-cover rounded-lg"
            alt="Land"
          />
        </div>

        {/* Second Section (About) - Similar structure as first section */}
        <div className="flex flex-col space-y-4 bg-cyan-700 text-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl sm:text-4xl font-bold text-orange-400 mb-4">
            About
          </h1>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            IGS AND IGC 2025
          </h2>
          <p className="text-lg mb-8">{/* Add your content here */}</p>
        </div>
        <div className="relative">
          <img
            src="https://igc2024mit.com/assets/front/img/images/about_img01.jpg"
            className="w-full h-64 lg:h-auto object-cover rounded-lg"
            alt="About Image"
          />
        </div>

        {/* Repeat similar structure for Venue and Civil Engineering Department sections */}
      </div>
    </div>
  );
};

export default Body;
