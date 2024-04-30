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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.home-banner': BannerHomeBanner;
    }
  }
}
