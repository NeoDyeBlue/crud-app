import Color from "color";
import classNames from "classnames";

export default function Base({
  employeeId = "0294023jk4h5",
  color = "#ba2222",
  name = "test",
}) {
  const buildingColor = Color(color);
  return (
    <div className="w-[320px] relative building flex-shrink-0">
      <div
        className="absolute top-[23%] left-[50%] translate-x-[-50%] flex-col
      translate-y-[-50%] w-[75%] flex items-center justify-center gap-1"
      >
        <div
          className={classNames(
            "w-full h-[25px] flex items-center justify-center bg-white rounded-r-full rounded-l-full drop-shadow-md"
          )}
        >
          <p className="uppercase font-bold whitespace-nowrap leading-none">
            {name}
          </p>
        </div>
        <p
          className={classNames(
            "whitespace-nowrap text-[0.5rem] font-semibold",
            {
              "text-white": buildingColor.isDark(),
              "text-black": buildingColor.isLight(),
            }
          )}
        >
          {employeeId}
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        //   width="1024"
        //   height="768"
        version="1.1"
        viewBox="0 0 169.429 101.738"
      >
        <g transform="translate(-51.211 -53.284)">
          <g transform="translate(.575 -24.711)">
            {/* main */}
            <path
              fill={buildingColor.hex()}
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeWidth="0"
              d="M60.691 85.933H210.242V177.08800000000002H60.691z"
            ></path>
            {/* windows */}
            <path
              fill="#00d6ff"
              fillOpacity="1"
              stroke={buildingColor.darken(0.4).string()}
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.323"
              d="M73.889 116.068H92.689V171.796H73.889z"
            ></path>
            <path
              fill="#00d6ff"
              fillOpacity="1"
              stroke={buildingColor.darken(0.4).string()}
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.323"
              d="M177.095 116.068H195.895V171.796H177.095z"
            ></path>
            {/* entrance */}
            <path
              fill="#00d6ff"
              fillOpacity="1"
              stroke={buildingColor.darken(0.5).string()}
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="1.475"
              d="M109.297 144.032H161.636V176.36H109.297z"
            ></path>
            {/* topmost bar */}
            <rect
              width="169.198"
              height="7.937"
              x="50.868"
              y="77.995"
              fill="#757575"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeWidth="0"
              rx="3.969"
              ry="2.932"
            ></rect>
            {/* entrance bar */}
            <rect
              width="66.806"
              height="6.615"
              x="102.301"
              y="136.65"
              fill="#ccc"
              stroke="#000"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeWidth="0"
              rx="2.646"
              ry="3.475"
            ></rect>
            {/* window middle */}
            <path
              fill={buildingColor.darken(0.5).string()}
              fillOpacity="1"
              stroke="#272727"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0"
              d="M176.5 143.271H196.623V144.594H176.5z"
            ></path>
            <path
              fill={buildingColor.darken(0.5).string()}
              fillOpacity="1"
              stroke="#272727"
              strokeDasharray="none"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeOpacity="1"
              strokeWidth="0"
              d="M73.228 143.271H93.351V144.594H73.228z"
            ></path>
            {/* bushes */}
            <path
              fill="#71c837"
              fillOpacity="1"
              strokeWidth="0.009"
              d="M193.397 179.46c-1.55-.004-3.27-.01-3.824-.014l-1.004-.007-.218-.114c-1.322-.69-2.208-1.362-2.55-1.935a.829.829 0 01-.138-.427c0-.137.041-.235.142-.33.132-.125.333-.2.638-.24.13-.017.56-.015.738.005.317.033.71.103 1.03.182.077.019.14.031.14.027s-.013-.01-.03-.016a12.416 12.416 0 01-.668-.352c-1.048-.603-1.678-1.223-1.833-1.805-.143-.538.184-.984.801-1.095.137-.025.408-.023.56.004a2 2 0 01.596.204c.226.118.378.231.583.437.164.164.282.314.405.513.041.067.075.12.075.116 0-.003-.042-.1-.093-.215-.495-1.109-.805-2.038-.89-2.668a2.306 2.306 0 01-.01-.513c.039-.237.138-.354.301-.354.4 0 1.064.703 1.643 1.743.3.538.532 1.063.817 1.85l.037.102-.005-.058c-.002-.032-.018-.194-.035-.36-.165-1.632-.16-2.801.014-3.333.261-.8.865-.093 1.53 1.788.066.188.189.564.257.787.016.053.03.094.032.092a2.024 2.024 0 00-.033-.175c-.497-2.36-.676-3.977-.528-4.761.063-.334.197-.513.383-.514.289-.002.7.363 1.267 1.123.257.345.728 1.06 1 1.518.024.04.046.074.049.074a.787.787 0 00-.02-.127 9.745 9.745 0 01-.141-.972 4.009 4.009 0 01.004-.636c.04-.311.13-.48.296-.558.047-.022.06-.024.158-.024.1 0 .113.003.203.034.3.102.655.367 1.091.813.348.355.68.758 1 1.214.023.034.043.06.045.058a3.726 3.726 0 00-.06-.203 17.98 17.98 0 01-.745-3.735 9.497 9.497 0 01-.04-1.045c0-.502.005-.624.04-.942.077-.684.248-1.138.47-1.247a.258.258 0 01.238.006c.082.04.216.175.302.303.368.546.725 1.649 1.054 3.258.027.13.04.18.044.164.003-.011.013-.1.021-.199.036-.431.116-1.173.174-1.61.169-1.257.373-2.096.597-2.455.235-.376.482-.222.697.435.157.48.265 1.141.325 1.98.015.215.021 1.006.01 1.246a9.87 9.87 0 01-.069.791c-.012.073.01.007.06-.179.213-.785.428-1.288.643-1.503.102-.101.193-.135.292-.11.144.037.279.191.42.48.16.328.296.74.495 1.507.096.371.138.516.149.516.004 0-.01-.12-.032-.269-.271-1.91-.336-3.44-.184-4.366.09-.556.263-.86.476-.84.23.02.493.41.71 1.053.234.69.404 1.61.491 2.657l.02.25.006-.623c.005-.62.013-.887.04-1.32.098-1.671.365-2.887.77-3.501a1.21 1.21 0 01.162-.195.547.547 0 01.174-.136c.189-.092.364-.055.533.113.473.471.684 1.764.525 3.22a11.537 11.537 0 01-.356 1.827c-.025.087-.043.16-.041.162a.475.475 0 00.037-.088l.122-.322c.76-1.984 1.513-3.22 2.074-3.407a.32.32 0 01.151-.02.251.251 0 01.125.027c.194.1.31.376.351.838.012.126.011.444 0 .61-.1 1.415-.716 3.2-1.666 4.82-.085.145-.25.415-.319.52a.323.323 0 00-.037.065.622.622 0 00.09-.062c.443-.337.76-.454.965-.357.175.083.27.312.3.718.019.258.01.516-.037 1.187-.027.393-.044.957-.03 1.029.004.019.008.03.01.025.001-.005.02-.119.04-.253.16-1.087.36-1.901.605-2.475a5.73 5.73 0 01.244-.492c.067-.116.231-.363.334-.502.15-.204.892-1.123.978-1.212.225-.236.386-.307.488-.214.218.197.137 1.164-.212 2.534-.06.235-.19.704-.21.753-.017.043.01.003.081-.12.621-1.08 1.233-1.671 1.726-1.67a.6.6 0 01.48.282c.126.189.188.42.196.728a2.554 2.554 0 01-.942 2.014.201.201 0 00-.042.037c0 .003.057-.018.127-.048.405-.169.783-.256 1.118-.257.356-.001.598.097.696.283.08.153.065.328-.046.559-.148.308-.454.653-.931 1.05-.259.216-.7.534-1.046.754a1.99 1.99 0 00-.163.11c.002.002.063-.018.135-.045.773-.285 1.292-.3 1.549-.043.128.129.188.309.188.567 0 .262-.056.552-.179.928-.129.395-.286.767-.56 1.325-.083.168-.149.304-.146.302l.154-.23c.567-.852 1.134-1.43 1.643-1.677.19-.092.328-.129.483-.129.165 0 .276.044.385.151.114.113.175.264.195.481.01.113 0 .282-.023.408-.02.1-.017.101.028.018.297-.554.727-1.021 1.205-1.307.193-.116.404-.202.581-.237.108-.02.29-.02.37 0 .347.094.452.45.288.975-.13.415-.434.952-.859 1.518-.054.072-.1.136-.102.14a.73.73 0 00.15.076c.997.428 1.558.833 1.665 1.202.02.067.02.179 0 .245-.117.404-.798.774-2.085 1.13-.281.079-.211.071-.747.082-2.935.057-7.388.092-13.788.107-4.027.01-4.294.01-8.413-.001z"
            ></path>
            <path
              fill="#71c837"
              fillOpacity="1"
              strokeWidth="0.009"
              d="M75.684 179.725c1.55-.004 3.271-.01 3.824-.015l1.005-.007.217-.113c1.323-.69 2.208-1.363 2.55-1.935a.829.829 0 00.138-.427.414.414 0 00-.142-.33c-.132-.126-.333-.201-.638-.24a5.057 5.057 0 00-.738.004c-.317.034-.71.103-1.03.182a.755.755 0 01-.14.028 12.416 12.416 0 00.698-.368c1.049-.603 1.678-1.223 1.833-1.806.143-.537-.184-.983-.801-1.095a2.048 2.048 0 00-.56.004 2 2 0 00-.596.205c-.226.117-.378.23-.583.436a2.642 2.642 0 00-.405.514c-.04.066-.075.119-.075.116 0-.003.042-.1.094-.215.494-1.11.804-2.038.89-2.668.021-.166.026-.409.01-.514-.04-.237-.14-.353-.302-.353-.4 0-1.064.703-1.643 1.742-.3.539-.532 1.063-.817 1.85l-.037.102.005-.057c.002-.032.019-.194.035-.36.165-1.632.16-2.802-.014-3.334-.26-.8-.865-.093-1.53 1.789-.065.187-.188.563-.256.786a.608.608 0 01-.033.093c-.002-.002.013-.08.033-.176.497-2.359.676-3.977.528-4.76-.063-.334-.197-.513-.383-.514-.289-.002-.7.362-1.266 1.122-.258.346-.729 1.06-1 1.519a.457.457 0 01-.05.073.787.787 0 01.02-.127c.064-.325.12-.703.142-.971a4.009 4.009 0 00-.004-.636c-.042-.312-.132-.481-.297-.559-.047-.022-.06-.024-.158-.023a.46.46 0 00-.203.033c-.3.103-.655.367-1.091.813a9.636 9.636 0 00-1 1.215.324.324 0 01-.045.058 3.726 3.726 0 01.06-.203 17.98 17.98 0 00.745-3.735c.036-.43.04-.551.04-1.045 0-.502-.005-.625-.04-.943-.077-.683-.248-1.138-.47-1.247a.258.258 0 00-.237.006c-.083.04-.217.175-.303.303-.368.547-.724 1.65-1.054 3.258-.027.131-.04.18-.044.165a2.966 2.966 0 01-.021-.2 39.234 39.234 0 00-.174-1.609c-.169-1.257-.373-2.097-.597-2.455-.235-.377-.482-.223-.697.434-.156.48-.265 1.142-.325 1.981a19.59 19.59 0 00-.01 1.246c.014.278.048.665.07.79.012.074-.01.008-.061-.178-.213-.786-.428-1.289-.643-1.503-.102-.102-.193-.136-.292-.11-.143.036-.279.19-.42.48-.16.327-.296.74-.495 1.506-.096.371-.138.517-.149.517-.004 0 .011-.121.032-.27.271-1.909.336-3.44.184-4.366-.09-.555-.263-.859-.476-.84-.23.021-.493.41-.71 1.054-.234.69-.404 1.609-.49 2.657l-.022.249-.005-.623a21.967 21.967 0 00-.039-1.32c-.099-1.67-.366-2.886-.77-3.5a1.21 1.21 0 00-.163-.196.547.547 0 00-.174-.135c-.189-.093-.363-.056-.532.112-.474.472-.685 1.765-.525 3.22.065.6.183 1.205.356 1.827.024.088.042.16.04.163a.475.475 0 01-.037-.088l-.122-.323c-.76-1.983-1.513-3.22-2.074-3.406a.32.32 0 00-.151-.02.251.251 0 00-.125.027c-.194.1-.309.375-.351.838a5.393 5.393 0 000 .609c.1 1.416.716 3.201 1.666 4.82.085.146.251.416.32.52.022.034.038.064.037.066a.622.622 0 01-.09-.063c-.444-.337-.76-.453-.966-.356-.175.082-.27.312-.3.718-.019.258-.01.516.037 1.187.027.392.044.957.03 1.028-.004.02-.008.03-.01.026-.001-.005-.02-.12-.04-.254-.16-1.086-.36-1.9-.605-2.474a5.73 5.73 0 00-.244-.492 6.888 6.888 0 00-.334-.502 38.595 38.595 0 00-.978-1.213c-.225-.236-.386-.306-.488-.214-.218.197-.137 1.164.212 2.534.06.236.191.705.21.754.017.042-.01.003-.08-.12-.622-1.08-1.233-1.672-1.727-1.67a.6.6 0 00-.48.282c-.125.188-.188.419-.196.727a2.554 2.554 0 00.942 2.015.201.201 0 01.042.036.903.903 0 01-.126-.047c-.406-.17-.784-.257-1.119-.258-.356 0-.598.097-.696.284-.08.152-.065.327.046.558.149.309.454.653.931 1.05.259.216.7.535 1.046.755.092.058.165.108.163.11a1.147 1.147 0 01-.135-.046c-.773-.285-1.292-.3-1.548-.043-.13.13-.19.31-.19.568 0 .262.057.552.18.928.129.394.286.766.56 1.324l.147.302a19.997 19.997 0 01-.155-.23c-.567-.851-1.134-1.43-1.643-1.676a1.045 1.045 0 00-.483-.13.497.497 0 00-.385.152c-.114.113-.175.263-.195.48-.01.114 0 .283.023.408.02.1.017.102-.028.019-.297-.554-.727-1.022-1.205-1.308a1.913 1.913 0 00-.581-.236 1.074 1.074 0 00-.37 0c-.346.094-.452.449-.287.975.13.415.433.952.858 1.518.054.072.1.135.102.14a.73.73 0 01-.15.075c-.996.428-1.558.834-1.665 1.203a.527.527 0 000 .244c.117.405.798.774 2.085 1.131.282.078.211.07.747.081 2.935.058 7.389.093 13.789.107 4.026.01 4.294.01 8.412 0z"
            ></path>
          </g>
        </g>
      </svg>
    </div>
  );
}