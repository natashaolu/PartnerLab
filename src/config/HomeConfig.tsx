import HeroImage from "../assets/HeroImage.jpg";
import CoveoLogo from "../assets/CoveoLogo.svg";
import RecommendationDefault from "../assets/Recommendation.jpg";
import { RecommendationType } from "./Types/ConfigTypes";
import { ic_menu } from 'react-icons-kit/md/ic_menu';
import { ic_shopping_bag_outline } from 'react-icons-kit/md/ic_shopping_bag_outline';
import { ic_email_outline } from 'react-icons-kit/md/ic_email_outline';
import { search } from 'react-icons-kit/feather/search';
import {heart} from 'react-icons-kit/feather/heart'
import {plane} from 'react-icons-kit/fa/plane'

/* To import your Demo Logo
1. Place the logo in the assets Folder
2. import the logo into this file using the following statement

    import DemoLogo from "../assests/<Logo-Image-filename>"  

    * it is important to add the coorect image extension type in the end of the filename e.g. DemoImage.png, DemoImage.svg or DemoImage.jpg

3. Replace the CoveoLogo with DemoLogo below.
*/

export const HeaderLogo = CoveoLogo;

export const FooterLogo = CoveoLogo;

export const DefaultRecommendationImage = RecommendationDefault;

// TODO When generating JSON, dynamically generate internationalization config in admin console to include these elements.
export const HeaderConfig = [
  {
    title: 'Airport Shop',
    redirectTo: '/shop',
    icon: plane, // Icon object
  },

  {
    title: '',
    redirectTo: '/search',
    icon: heart, // Icon object
  },

  {
    title: '',
    redirectTo: '/contact',
    icon: ic_shopping_bag_outline, // Icon object
  },
];



export const TopHeaderConfig = [
  {
    title: "Home",
    redirectTo: "/home",
  },
  {
    title: "Products",
    redirectTo: "/search",
  },
  {
    title: "Our Company",
    redirectTo: "/",
  },
  
];



export const HeroConfig = {
  title: "Find clothes that fits you",
  description: "we believe that every person's shape should be celebrated with fabulous clothes that fit and feel good on your body today",
  background: HeroImage,
  buttonText: "Explore",
  onClickButtonRedirect: "/search",
  width : "100%",
  height: "700px",

  // Hero Image Text CSS config
  titleFontSize : "52px",
  titleFontWeight : "600",
  titleColor : '#000000',
  titleWidth : "600px",
  subTitleWidth : "550px",
  subTitleFontSize : "22px",
  subTitleColor : '#000000'

};

export const HomeRecommendationConfig: RecommendationType[] = [
  {
    title: "Recommendations",
    description: "Here are your personalized recommendations",
    numberOfResults: 15,
    imageField: "ec_images",
    pipeline: "cmh-recommendations-sandbox",
    searchHub: "default",
    id: "Recommendation",
    active : true,       // changing to "false" will hide this recommendation
    type: "slider" // "list" | "carousel" | "slider"
  },
  {
    title: "Popular Items",
    description: "Here are your personalized recommendations",
    numberOfResults: 15,
    imageField: "ec_images",
    pipeline: "cmh-recommendations-sandbox",
    searchHub: "default",
    id: "Recommendation",
    active : true,       // changing to "false" will hide this recommendation
    type: "carousel" // "list" | "carousel" | "slider"
  },
  {
    title: "Most Viewed",
    description: "Here are your personalized recommendations",
    numberOfResults: 8,
    imageField: "ec_images",
    pipeline: "cmh-recommendations-sandbox",
    searchHub: "default",
    id: "Recommendation",
    active : true,       // changing to "false" will hide this recommendation
    type: "list" // "list" | "carousel" | "slider"
  },
]

export const EnableAuthentication = false;
