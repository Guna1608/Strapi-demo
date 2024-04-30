import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerHomeBanner extends Schema.Component {
  collectionName: 'components_banner_home_banners';
  info: {
    displayName: 'HomeBanner';
    icon: 'book';
    description: '';
  };
  attributes: {
    BannerText1: Attribute.Text;
    BannerText2: Attribute.Text;
    BannerText3: Attribute.Text;
    BannerImg: Attribute.Media;
  };
}

export interface ImgImg extends Schema.Component {
  collectionName: 'components_img_imgs';
  info: {
    displayName: 'Img';
    icon: 'calendar';
  };
  attributes: {
    Imgtext: Attribute.Media;
    Img2: Attribute.Media;
    imgText1: Attribute.String;
  };
}

export interface RevolutioniseYourCareerRevolutioniseYourCareer
  extends Schema.Component {
  collectionName: 'components_revolutionise_your_career_revolutionise_your_careers';
  info: {
    displayName: 'RevolutioniseYourCareer';
    icon: 'book';
    description: '';
  };
  attributes: {
    Imgtext: Attribute.Media;
    Text1: Attribute.Text;
    Text2: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.home-banner': BannerHomeBanner;
      'img.img': ImgImg;
      'revolutionise-your-career.revolutionise-your-career': RevolutioniseYourCareerRevolutioniseYourCareer;
    }
  }
}
