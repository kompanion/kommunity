import * as React from 'react'

export interface IIconProps {
  fill?: string
}

export const QuoteIcon: React.SFC<IIconProps> = ({ fill = 'currentColor' }) => (
  <svg viewBox="0 0 33 20" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M.0760271 7.42668C.552753 10.5156 3.26643 12.7169 6.34681 12.8589c-.7701 2.7693-2.64033 3.87-4.91395 4.5091-.22002.071-.18335.284-.18335.284l.36671 2.2013s.03667.1775.33004.142C9.7939 19.1432 15.1112 13.3559 14.1211 6.32603 13.2043 1.4619 9.28051-.41984 5.65006.0772238 2.0196.645297-.474041 3.91172.0760271 7.42668zM25.1225 12.8589c-.7335 2.7693-2.677 3.87-4.914 4.5091-.22.071-.1833.284-.1833.284l.33 2.2013s.0367.1775.3301.142c7.8476-.8166 13.1282-6.6039 12.2115-13.63376-.9535-4.89963-4.914-6.781379-8.5078-6.2843146C20.7586.645299 18.265 3.91172 18.8517 7.42668c.4767 3.12442 3.1537 5.32572 6.2708 5.43222z" />
  </svg>
)

export const MailIcon: React.SFC<IIconProps> = ({ fill = 'currentColor' }) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6368 18.0278c-2.4896 0-4.54541 2.0415-4.54541 4.5139v54.1666c0 2.4724 2.05581 4.5139 4.54541 4.5139h72.7267c2.4896 0 4.5454-2.0415 4.5454-4.5139V22.5417c0-2.4724-2.0558-4.5139-4.5454-4.5139H13.6368zM.0005549 22.5417C.0005549 15.0834 6.12649 9 13.6368 9h72.7267c7.5103 0 13.6363 6.0834 13.6363 13.5417v54.1666c0 7.4583-6.126 13.5417-13.6363 13.5417H13.6368C6.12649 90.25.0005549 84.1666.0005549 76.7083V22.5417z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.822057 19.9531c1.439603-2.0423 4.273803-2.539 6.330383-1.1093L50 48.629l42.8476-29.7852c2.0565-1.4297 4.8907-.933 6.3303 1.1093 1.4401 2.0423.9391 4.8569-1.1171 6.2865L52.6066 57.8368c-1.5651 1.088-3.6481 1.088-5.2132 0L1.93918 26.2396C-.117389 24.81-.617543 21.9954.822057 19.9531z"
    />
  </svg>
)

export const CheckIcon: React.SFC<IIconProps> = ({ fill = 'currentColor' }) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#check-clip)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M97.3969 15.6031c3.4711 3.4708 3.4711 9.0981 0 12.5689L40.8673 84.7016c-3.4708 3.4708-9.0981 3.4708-12.5689 0L2.6031 59.0063c-3.470801-3.4708-3.470801-9.0981 0-12.5689 3.4708-3.4708 9.0981-3.4708 12.5689 0l19.4108 19.4109L84.828 15.6031c3.4708-3.4708 9.0981-3.4708 12.5689 0z"
      />
    </g>
    <defs>
      <clipPath id="check-clip">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const FilterIcon: React.SFC<IIconProps> = ({
  fill = 'currentColor'
}) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#filter-icon_clip)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.422252 4.63237C1.16706 3.02708 2.77585 2 4.54551 2H95.4545c1.7697 0 3.3784 1.02708 4.1233 2.63237.7452 1.60529.4902 3.49693-.6525 4.84819L63.6363 51.2097V92.909c0 1.5753-.8156 3.0383-2.1557 3.8666-1.3401.8282-3.0134.9035-4.4225.1989l-18.1818-9.0909c-1.5399-.7699-2.5126-2.3438-2.5126-4.0655V51.2097L1.07474 9.48056C-.0679733 8.1293-.322557 6.23766.422252 4.63237zM14.3423 11.0909l30.0376 35.5194c.6939.8206 1.0747 1.8604 1.0747 2.9351v31.4634l9.0909 4.5455V49.5454c0-1.0747.3807-2.1145 1.0746-2.9351l30.0376-35.5194H14.3423z"
        fill="#8B7AF0"
      />
    </g>
    <defs>
      <clipPath id="filter-icon_clip">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const MenuIcon: React.SFC<IIconProps> = ({ fill = 'currentColor' }) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 50c0-2.7614 2.23858-5 5-5h90c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5H5c-2.76142 0-5-2.2386-5-5zM0 20c0-2.7614 2.23858-5 5-5h90c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5H5c-2.76142 0-5-2.2386-5-5zM0 80c0-2.7614 2.23858-5 5-5h90c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5H5c-2.76142 0-5-2.2386-5-5z"
    />
  </svg>
)

export const ChevronIcon: React.SFC<IIconProps> = ({
  fill = 'currentColor'
}) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76.0508 2.09209c2.7894 2.78946 2.7894 7.31207 0 10.10151L38.2444 50l37.8064 37.8064c2.7894 2.7894 2.7894 7.312 0 10.1015-2.7895 2.7891-7.3121 2.7891-10.1016 0L23.0921 55.0508c-2.7895-2.7895-2.7895-7.3121 0-10.1016L65.9492 2.09209c2.7895-2.789455 7.3121-2.789455 10.1016 0z"
    />
  </svg>
)

export const CrossIcon: React.SFC<IIconProps> = ({ fill = 'currentColor' }) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M97.9079 2.09209c2.7891 2.78946 2.7891 7.31207 0 10.10151L12.1936 97.9079c-2.78944 2.7891-7.31205 2.7891-10.10151 0-2.789455-2.7895-2.789455-7.3121 0-10.1015L87.8064 2.09209c2.7894-2.789455 7.312-2.789455 10.1015 0z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.09209 2.09209c2.78946-2.789455 7.31207-2.789455 10.10151 0L97.9079 87.8064c2.7891 2.7894 2.7891 7.312 0 10.1015-2.7895 2.7891-7.3121 2.7891-10.1015 0L2.09209 12.1936c-2.789455-2.78944-2.789455-7.31205 0-10.10151z"
    />
  </svg>
)

export const CollaboratorsIcon: React.SFC<IIconProps> = ({
  fill = 'currentColor'
}) => (
  <svg viewBox="0 0 100 100" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <g
      clipPath="url(#collaborators__clip)"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path d="M6.10194 64.1019C10.0089 60.1949 15.308 58 20.8333 58h33.3334c5.5253 0 10.8244 2.1949 14.7314 6.1019C72.8051 68.009 75 73.308 75 78.8333v8.3334c0 2.3011-1.8655 4.1666-4.1667 4.1666-2.3012 0-4.1666-1.8655-4.1666-4.1666v-8.3334c0-3.3152-1.317-6.4946-3.6612-8.8388-2.3442-2.3442-5.5236-3.6612-8.8388-3.6612H20.8333c-3.3152 0-6.4946 1.317-8.8388 3.6612-2.34421 2.3442-3.66117 5.5236-3.66117 8.8388v8.3334c0 2.3011-1.86548 4.1666-4.16666 4.1666C1.86548 91.3333 0 89.4678 0 87.1667v-8.3334C0 73.308 2.19493 68.009 6.10194 64.1019zM37.5 16.3333c-6.9036 0-12.5 5.5965-12.5 12.5 0 6.9036 5.5964 12.5 12.5 12.5s12.5-5.5964 12.5-12.5c0-6.9035-5.5964-12.5-12.5-12.5zm-20.8333 12.5C16.6667 17.3274 25.9941 8 37.5 8s20.8333 9.3274 20.8333 20.8333c0 11.506-9.3274 20.8334-20.8333 20.8334s-20.8333-9.3274-20.8333-20.8334zM79.299 61.6667c.5753-2.2281 2.8479-3.568 5.076-2.9927 4.4694 1.154 8.429 3.7597 11.2571 7.4079 2.8281 3.6482 4.3645 8.1323 4.3679 12.7483v8.3365c0 2.3012-1.8655 4.1667-4.1667 4.1667-2.3011 0-4.1666-1.8655-4.1666-4.1667v-8.3302c-.0024-2.7692-.9242-5.4605-2.6208-7.6491-1.6968-2.1889-4.0726-3.7523-6.7542-4.4447-2.2281-.5753-3.568-2.8479-2.9927-5.076zM62.6302 11.6749c.5708-2.22932 2.8407-3.57379 5.07-3.003 4.4813 1.1474 8.4533 3.7536 11.2897 7.4079 2.8365 3.6542 4.3761 8.1485 4.3761 12.7744s-1.5396 9.1202-4.3761 12.7744c-2.8364 3.6542-6.8084 6.2605-11.2897 7.4079-2.2293.5708-4.4992-.7737-5.07-3.003-.5708-2.2293.7737-4.4992 3.003-5.0699 2.6888-.6885 5.072-2.2522 6.7738-4.4448 1.7019-2.1925 2.6257-4.8891 2.6257-7.6646s-.9238-5.4721-2.6257-7.6647c-1.7018-2.1925-4.085-3.7562-6.7738-4.4447-2.2293-.5708-3.5738-2.8407-3.003-5.0699z" />
    </g>
    <defs>
      <clipPath id="collaborators__clip">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
)

export const SearchCloudIcon: React.SFC<{}> = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#search-cloud__clip)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M51.8733 8.03458c-19.2584 0-34.8703 15.61192-34.8703 34.87032 0 19.2583 15.6119 34.8703 34.8703 34.8703 19.2583 0 34.8703-15.612 34.8703-34.8703 0-19.2584-15.612-34.87032-34.8703-34.87032zM12.9684 42.9049C12.9684 21.4183 30.3867 4 51.8733 4c21.4865 0 38.9048 17.4183 38.9048 38.9049 0 21.4865-17.4183 38.9048-38.9048 38.9048-21.4866 0-38.9049-17.4183-38.9049-38.9048z"
        fill="#ADB5BD"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M76.4987 67.5303c.7878-.7878 2.0651-.7878 2.8529 0l20.0576 20.0576c.7878.7878.7878 2.0651 0 2.8529-.7878.7878-2.0651.7878-2.8529 0L76.4987 70.3832c-.7878-.7878-.7878-2.0651 0-2.8529z"
        fill="#ADB5BD"
      />
      <path
        d="M61.9812 57.2997c-.1261 0-.2774-.0252-.4034-.0252-.6556 0-1.3113 0-1.9669.0756-2.3451-10.2882-11.5742-18.0295-22.6189-18.0295-12.8097 0-23.1736 10.3134-23.1736 23.0475 0 .7817.0505 1.5382.1261 2.2947C6.12752 65.3436 0 72.2528 0 80.1959c0 8.4222 6.75792 15.7349 15.2053 15.7349h46.7759c10.5656 0 19.1138-8.75 19.1138-19.2399 0-10.4899-8.5482-19.3912-19.1138-19.3912z"
        fill="#D9D2FF"
        fill-opacity=".7"
        filter="url(#filter0_b)"
      />
    </g>
    <defs>
      <filter
        id="filter0_b"
        x="-10"
        y="29.3206"
        width="101.095"
        height="76.6102"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur"
          result="shape"
        />
      </filter>
      <clipPath id="search-cloud__clip">
        <path fill="#fff" d="M0 0h100v100H0z" />
      </clipPath>
    </defs>
  </svg>
)
