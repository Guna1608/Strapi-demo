import type { Schema, Attribute } from '@strapi/strapi';

export interface BannerHeroSection extends Schema.Component {
  collectionName: 'components_banner_hero_sections';
  info: {
    displayName: 'Hero-section';
    icon: 'book';
    description: '';
  };
  attributes: {
    HeroText1: Attribute.String & Attribute.Required;
    HeroText2: Attribute.String & Attribute.Required;
    HeroBanner: Attribute.Media & Attribute.Required;
    UspSection: Attribute.Component<'banner.usp-section', true>;
    HeroText3: Attribute.Text;
  };
}

export interface BannerUspSection extends Schema.Component {
  collectionName: 'components_banner_usp_sections';
  info: {
    displayName: 'UspSection';
    icon: 'attachment';
  };
  attributes: {
    UspSectionText: Attribute.Text;
    UspSectionIcon: Attribute.Media;
  };
}

export interface ExperienceSectionExperienceSectionCard
  extends Schema.Component {
  collectionName: 'components_experience_section_experience_section_cards';
  info: {
    displayName: 'ExperienceSectionCard';
    icon: 'book';
  };
  attributes: {
    Frame: Attribute.Media;
    CardHeding: Attribute.String;
    CardDesc: Attribute.Text;
  };
}

export interface ExperienceSectionExperienceSection extends Schema.Component {
  collectionName: 'components_experience_section_experience_sections';
  info: {
    displayName: 'ExperienceSection';
    icon: 'book';
  };
  attributes: {
    Heading: Attribute.String;
    SubHeading: Attribute.Text;
    ExperienceSectionCard: Attribute.Component<
      'experience-section.experience-section-card',
      true
    >;
  };
}

export interface FooterFooterQuicklinks extends Schema.Component {
  collectionName: 'components_footer_footer_quicklinks';
  info: {
    displayName: 'FooterQuicklinks';
    icon: 'chartCircle';
  };
  attributes: {
    LinkText: Attribute.String;
    Link: Attribute.String;
  };
}

export interface FooterMainFooter extends Schema.Component {
  collectionName: 'components_footer_main_footers';
  info: {
    displayName: 'MainFooter';
    icon: 'discuss';
    description: '';
  };
  attributes: {
    FooterDesc: Attribute.Text;
    FooterSideText: Attribute.String;
    QuickLinks: Attribute.Component<'footer.footer-quicklinks', true>;
    Adress: Attribute.Component<
      'office-location-address.office-location-address',
      true
    > &
      Attribute.Required;
  };
}

export interface LocationSectionLocationSection extends Schema.Component {
  collectionName: 'components_location_section_location_sections';
  info: {
    displayName: 'LocationSection';
    icon: 'pinMap';
  };
  attributes: {
    LocationHeding: Attribute.String;
    LocationSubHeding: Attribute.Text;
    LocationDec: Attribute.Text;
    MapImg: Attribute.Media;
    LocationPinImg: Attribute.Media;
    OfficeLocation: Attribute.Component<
      'office-location-address.office-location-address',
      true
    >;
  };
}

export interface OfficeLocationAddressOfficeLocationAddress
  extends Schema.Component {
  collectionName: 'components_office_location_address_office_location_addresses';
  info: {
    displayName: 'OfficeLocationAddress';
    icon: 'pinMap';
  };
  attributes: {
    CountryName: Attribute.String & Attribute.Required;
    OfficeAddress: Attribute.Text;
    OfficeName: Attribute.Text;
  };
}

export interface OurAlumniOurAlumni extends Schema.Component {
  collectionName: 'components_our_alumni_our_alumni';
  info: {
    displayName: 'OurAlumni';
    icon: 'alien';
  };
  attributes: {
    OurAlumniHeading: Attribute.String;
    OurAlumniImgs: Attribute.Media;
  };
}

export interface StudentTestimonialsStudentReview extends Schema.Component {
  collectionName: 'components_student_testimonials_student_reviews';
  info: {
    displayName: 'StudentReview';
  };
  attributes: {
    StudentName: Attribute.String;
    StudentReviewText: Attribute.Text;
    StudentImg: Attribute.Media;
  };
}

export interface StudentTestimonialsStudentTestimonials
  extends Schema.Component {
  collectionName: 'components_student_testimonials_student_testimonials';
  info: {
    displayName: 'StudentTestimonials';
    icon: 'pencil';
  };
  attributes: {
    Heading: Attribute.String;
    StudentReviewSlide: Attribute.Component<
      'student-testimonials.student-review',
      true
    >;
  };
}

export interface TwoTextComponentTwoTextComponent extends Schema.Component {
  collectionName: 'components_two_text_component_two_text_components';
  info: {
    displayName: 'TwoTextComponent';
    icon: 'apps';
  };
  attributes: {
    Text1: Attribute.Text;
    Text2: Attribute.Text;
  };
}

export interface VideoTestimonialsVideoTestimonials extends Schema.Component {
  collectionName: 'components_video_testimonials_video_testimonials';
  info: {
    displayName: 'VideoTestimonials';
    icon: 'play';
  };
  attributes: {
    VideoTestimonialsHeding: Attribute.String;
    YoutubeLinks: Attribute.Text;
  };
}

export interface WhyChooseWhyChooseCards extends Schema.Component {
  collectionName: 'components_why_choose_why_choose_cards';
  info: {
    displayName: 'WhyChooseCards';
    icon: 'bell';
  };
  attributes: {
    WhyChooseText: Attribute.String;
    WhyChooseDesc: Attribute.Text;
    WhyChooseImg: Attribute.Media;
  };
}

export interface WhyChooseWhyChooseDr extends Schema.Component {
  collectionName: 'components_why_choose_why_choose_drs';
  info: {
    displayName: 'WhyChooseDR';
  };
  attributes: {
    Heading: Attribute.String & Attribute.Required;
    SubHeading: Attribute.Text;
    WhyChooseCards: Attribute.Component<'why-choose.why-choose-cards', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.hero-section': BannerHeroSection;
      'banner.usp-section': BannerUspSection;
      'experience-section.experience-section-card': ExperienceSectionExperienceSectionCard;
      'experience-section.experience-section': ExperienceSectionExperienceSection;
      'footer.footer-quicklinks': FooterFooterQuicklinks;
      'footer.main-footer': FooterMainFooter;
      'location-section.location-section': LocationSectionLocationSection;
      'office-location-address.office-location-address': OfficeLocationAddressOfficeLocationAddress;
      'our-alumni.our-alumni': OurAlumniOurAlumni;
      'student-testimonials.student-review': StudentTestimonialsStudentReview;
      'student-testimonials.student-testimonials': StudentTestimonialsStudentTestimonials;
      'two-text-component.two-text-component': TwoTextComponentTwoTextComponent;
      'video-testimonials.video-testimonials': VideoTestimonialsVideoTestimonials;
      'why-choose.why-choose-cards': WhyChooseWhyChooseCards;
      'why-choose.why-choose-dr': WhyChooseWhyChooseDr;
    }
  }
}
