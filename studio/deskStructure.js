import S from '@sanity/desk-tool/structure-builder';
import { MdSettings, MdBusiness } from 'react-icons/md';
import { BsInfoSquare } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { FiNavigation2 } from 'react-icons/fi';

export default () =>
  S.list()
    .title('SEU')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(MdSettings)
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Company Info')
        .icon(BsInfoSquare)
        .child(
          S.list()
            .title('Company Info')
            .items([
              S.listItem()
                .title('Contact Info')
                .icon(MdBusiness)
                .child(S.document().schemaType('companyInfo').documentId('companyInfo')),
              S.documentTypeListItem('socialInfo').title('Social Info'),
              S.documentTypeListItem('companyLogo').title('Company Logos'),
            ]),
        ),
      S.listItem()
        .title('Website')
        .icon(AiOutlineGlobal)
        .child(
          S.list()
            .title('Website')
            .items([
              S.listItem()
                .title('Main Navigation')
                .icon(FiNavigation2)
                .child(
                  S.document().schemaType('mainNavbar').documentId('mainNavbar').title('Main Nav'),
                ),
              S.documentTypeListItem('page').title('Structured Pages'),
            ]),
        ),
      S.documentTypeListItem('redirect').title('Redirects'),
    ]);
