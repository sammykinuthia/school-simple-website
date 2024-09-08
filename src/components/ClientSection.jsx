import React from "react";
import MoreBtn from "./MoreBtn";
import img1 from "../assets/images/product-cover-233 sec-.png";
import img2 from "../assets/images/product-cover-232 sec-.png";

const ClientSection = () => {
  return (
    <div className="client-section container">
      <h4 className="text-accent font-bold">Practice Advice</h4>
      <h2 className="h2">Every Client Matters</h2>
      <p className="text-secondary">
        Problems trying to resolve the conflict between
        <br />
        the Major realms of classical physics: Newtonian Mechanics
      </p>
      <div className="client-section-card-parent">
        <div className="client-card">
          <div className="img-parent">
            <img src={img1} />
            <p className="sale-budge bg-danger text-white">Sale</p>
              <div className="card-icons">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <mask id="ipTLike0">
                        <path
                          fill="#555"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"
                        />
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h48v48H0z"
                      mask="url(#ipTLike0)"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                      <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
                    </g>
                  </svg>
                </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <p className="text-accent font-bold">Training Courses</p>
              <p className="budge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#fcea2b"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                </svg>
                4.9
              </p>
            </div>
            <h4 className="h4">Every client Matters</h4>
            <p className="text-secondary">
              we focus on economics and meeting you where you work. It's only a
              keystroke away{" "}
            </p>
            <p className="font-bold text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M19.31 12.051c.381 0 .69.314.69.7v4.918c-.006.67-.127 1.2-.399 1.594c-.328.476-.908.692-1.747.737l-15.903-.002c-.646-.046-1.168-.302-1.507-.777c-.302-.423-.446-.95-.444-1.558V12.75c0-.386.309-.7.69-.7s.688.314.688.7v4.913c0 .333.065.572.182.736c.081.114.224.184.44.201l15.817.001c.42-.023.627-.1.655-.14c.084-.123.146-.393.15-.8V12.75c0-.386.308-.7.689-.7M9.99 0c.38 0 .69.313.69.7l-.001 10.869l3.062-3.079a.68.68 0 0 1 .975.004a.707.707 0 0 1-.004.99l-4.356 4.38a.68.68 0 0 1-.973-.003l-4.296-4.38a.707.707 0 0 1 .002-.99a.68.68 0 0 1 .975.002L9.3 11.794V.699C9.3.313 9.61 0 9.99 0"
                />
              </svg>{" "}
              16 sales
            </p>
            <div className="flex gap-1">
              <p className="text-secondary-2 font-bold">$16.48</p>
              <p className="text-orange font-bold">$6.48</p>
            </div>
            <div className="flex gap-1">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  >
                    <path d="M 80.039519,211.06969 64.056987,239.90745" />
                    <path d="m 175.96058,211.06969 15.98254,28.83776" />
                    <circle cx="128" cy="128.007" r="95.915" />
                    <path d="M 35.294352,102.43866 A 47.957299,47.957299 0 0 1 17.212686,53.792007 47.957299,47.957299 0 0 1 53.990946,17.175027 47.957299,47.957299 0 0 1 102.55767,35.470309" />
                    <path d="m 127.99967,32.092482 3.8e-4,-15.985761" />
                    <path d="M 128.00005,80.049788 V 128.00708" />
                    <path d="m 128.00005,128.00708 33.91093,33.91093" />
                    <path d="M 220.70575,102.43866 A 47.957299,47.957299 0 0 0 238.78742,53.792007 47.957299,47.957299 0 0 0 202.00916,17.175027 47.957299,47.957299 0 0 0 153.44244,35.470309" />
                  </g>
                </svg> 
                {" "}
                22hr
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#ffac70"
                    d="m20.476 8.015l-7.029-3.804a2.01 2.01 0 0 0-2.115.205L4 10.001V2H2v26a2 2 0 0 0 2 2h26V5.735ZM28 20.21l-7.62 1.802l-7.029-2.884a1.99 1.99 0 0 0-2.022.37L4 25.836V21.38l8.375-9.4l7.019 5.62a2.02 2.02 0 0 0 2.046.212l6.56-3.21ZM12.524 5.985l7.03 3.804a2 2 0 0 0 1.34.16L28 8.265v4.113l-7.381 3.642L13.6 10.4a1.99 1.99 0 0 0-2.688.264L4 18.384v-5.87ZM4.55 28l8.069-7.011l7.029 2.884a2 2 0 0 0 1.147.077L28 22.26V28Z"
                  />
                </svg>
                {" "}
                64 Lessons
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#ffac70"
                    d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v103.19L93.37 101a4 4 0 0 1 5-.19l61.41 46.05L221.37 93a4 4 0 0 1 5.26 6l-64 56a4 4 0 0 1-5 .19l-61.41-46L36 161.81V204h188a4 4 0 0 1 4 4"
                  />
                </svg>
                {" "}
                Progress
              </p>
            </div>
            <div className="learn-more-btn">
              <MoreBtn path={"#"} text={"Learn More"} />
            </div>
          </div>
        </div>
        <div className="client-card">
          <div className="img-parent">
            <img src={img2} />
            <p className="sale-budge bg-danger text-white">Sale</p>
              <div className="card-icons">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <defs>
                      <mask id="ipTLike0">
                        <path
                          fill="#555"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="4"
                          d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"
                        />
                      </mask>
                    </defs>
                    <path
                      fill="currentColor"
                      d="M0 0h48v48H0z"
                      mask="url(#ipTLike0)"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M17 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M1 2v2h2l3.6 7.59l-1.36 2.45c-.15.28-.24.61-.24.96a2 2 0 0 0 2 2h12v-2H7.42a.25.25 0 0 1-.25-.25q0-.075.03-.12L8.1 13h7.45c.75 0 1.41-.42 1.75-1.03l3.58-6.47c.07-.16.12-.33.12-.5a1 1 0 0 0-1-1H5.21l-.94-2M7 18c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                      <path d="M21 12q-3.6 6-9 6t-9-6q3.6-6 9-6t9 6" />
                    </g>
                  </svg>
                </button>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-center">
              <p className="text-accent font-bold">Training Courses</p>
              <p className="budge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 72 72"
                >
                  <path
                    fill="#fcea2b"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                  <path
                    fill="none"
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    stroke-width="2"
                    d="M35.993 10.736L27.791 27.37L9.439 30.044l13.285 12.94l-3.128 18.28l16.412-8.636l16.419 8.624l-3.142-18.278l13.276-12.95l-18.354-2.66z"
                  />
                </svg>
                4.9
              </p>
            </div>
            <h4 className="h4">Every client Matters</h4>
            <p className="text-secondary">
              we focus on economics and meeting you where you work. It's only a
              keystroke away{" "}
            </p>
            <p className="font-bold text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M19.31 12.051c.381 0 .69.314.69.7v4.918c-.006.67-.127 1.2-.399 1.594c-.328.476-.908.692-1.747.737l-15.903-.002c-.646-.046-1.168-.302-1.507-.777c-.302-.423-.446-.95-.444-1.558V12.75c0-.386.309-.7.69-.7s.688.314.688.7v4.913c0 .333.065.572.182.736c.081.114.224.184.44.201l15.817.001c.42-.023.627-.1.655-.14c.084-.123.146-.393.15-.8V12.75c0-.386.308-.7.689-.7M9.99 0c.38 0 .69.313.69.7l-.001 10.869l3.062-3.079a.68.68 0 0 1 .975.004a.707.707 0 0 1-.004.99l-4.356 4.38a.68.68 0 0 1-.973-.003l-4.296-4.38a.707.707 0 0 1 .002-.99a.68.68 0 0 1 .975.002L9.3 11.794V.699C9.3.313 9.61 0 9.99 0"
                />
              </svg>{" "}
              16 sales
            </p>
            <div className="flex gap-1">
              <p className="text-secondary-2 font-bold">$16.48</p>
              <p className="text-orange font-bold">$6.48</p>
            </div>
            <div className="flex gap-1">
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="16"
                  >
                    <path d="M 80.039519,211.06969 64.056987,239.90745" />
                    <path d="m 175.96058,211.06969 15.98254,28.83776" />
                    <circle cx="128" cy="128.007" r="95.915" />
                    <path d="M 35.294352,102.43866 A 47.957299,47.957299 0 0 1 17.212686,53.792007 47.957299,47.957299 0 0 1 53.990946,17.175027 47.957299,47.957299 0 0 1 102.55767,35.470309" />
                    <path d="m 127.99967,32.092482 3.8e-4,-15.985761" />
                    <path d="M 128.00005,80.049788 V 128.00708" />
                    <path d="m 128.00005,128.00708 33.91093,33.91093" />
                    <path d="M 220.70575,102.43866 A 47.957299,47.957299 0 0 0 238.78742,53.792007 47.957299,47.957299 0 0 0 202.00916,17.175027 47.957299,47.957299 0 0 0 153.44244,35.470309" />
                  </g>
                </svg> 
                {" "}
                22hr
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#ffac70"
                    d="m20.476 8.015l-7.029-3.804a2.01 2.01 0 0 0-2.115.205L4 10.001V2H2v26a2 2 0 0 0 2 2h26V5.735ZM28 20.21l-7.62 1.802l-7.029-2.884a1.99 1.99 0 0 0-2.022.37L4 25.836V21.38l8.375-9.4l7.019 5.62a2.02 2.02 0 0 0 2.046.212l6.56-3.21ZM12.524 5.985l7.03 3.804a2 2 0 0 0 1.34.16L28 8.265v4.113l-7.381 3.642L13.6 10.4a1.99 1.99 0 0 0-2.688.264L4 18.384v-5.87ZM4.55 28l8.069-7.011l7.029 2.884a2 2 0 0 0 1.147.077L28 22.26V28Z"
                  />
                </svg>
                {" "}
                64 Lessons
              </p>
              <p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="#ffac70"
                    d="M228 208a4 4 0 0 1-4 4H32a4 4 0 0 1-4-4V48a4 4 0 0 1 8 0v103.19L93.37 101a4 4 0 0 1 5-.19l61.41 46.05L221.37 93a4 4 0 0 1 5.26 6l-64 56a4 4 0 0 1-5 .19l-61.41-46L36 161.81V204h188a4 4 0 0 1 4 4"
                  />
                </svg>
                {" "}
                Progress
              </p>
            </div>
            <div className="learn-more-btn">
              <MoreBtn path={"#"} text={"Learn More"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
