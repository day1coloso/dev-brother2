export enum CustomerLanguage {
  EN = 'EN',
  ZH_TW = 'ZH_TW',
  ES = 'ES',
  JA = 'JA',
  ID = 'ID',
}
export enum CustomerLanguageLabel {
  EN = 'English',
  ZH_TW = '\u7E41\u9AD4\u4E2D\u6587',
  ES = 'Espa\u00F1ol',
  JA = '\u65E5\u672C\u8A9E',
  ID = 'Bahasa Indonesia',
}
export enum CustomerLanguageLabelToKR {
  EN = '\uC601\uC5B4',
  ZH_TW = '\uC911\uAD6D\uC5B4(\uBC88\uCCB4)',
  ES = '\uC2A4\uD398\uC778\uC5B4',
  JA = '\uC77C\uBCF8\uC5B4',
  ID = '\uC778\uB3C4\uB124\uC2DC\uC544\uC5B4',
}
export enum CustomerLanguageCode {
  EN = 'en',
  ZH_TW = 'zh-TW',
  ES = 'es',
  JA = 'ja',
  ID = 'id',
}

export declare function getCustomerLanguageKrLabelByLanguageCode(
  customerLanguageCode: CustomerLanguageCode,
): CustomerLanguageLabelToKR;

export declare enum CustomerCountryLabel {
  AF = 'Afghanistan',
  AL = 'Albania',
  AD = 'Andorra',
  AM = 'Armenia',
  AU = 'Australia',
  BD = 'Bangladesh',
  BY = 'Belarus',
  BT = 'Bhutan',
  BA = 'Bosnia-Herzegovina',
  BN = 'Brunei Darussalam',
  KH = 'Cambodia',
  CA = 'Canada',
  CK = 'Cook Islands',
  CY = 'Cyprus',
  FJ = 'Fiji',
  HKG = 'Hong Kong',
  IS = 'Iceland',
  IN = 'India',
  ID = 'Indonesia',
  KZ = 'Kazakhstan',
  KI = 'Kiribati',
  XK = 'Kosovo',
  KG = 'Kyrgyzstan',
  LA = 'Laos',
  LI = 'Liechtenstein',
  MY = 'Malaysia',
  MV = 'Maldives',
  FM = 'Micronesia (Federated States of)',
  MD = 'Moldova',
  MC = 'Monaco',
  MN = 'Mongolia',
  ME = 'Montenegro',
  MM = 'Myanmar',
  NR = 'Nauru',
  NP = 'Nepal',
  NZ = 'New Zealand',
  NU = 'Niue',
  MK = 'North Macedonia',
  NO = 'Norway',
  PK = 'Pakistan',
  PW = 'Palau',
  PG = 'Papua New Guinea',
  PH = 'Philippines',
  WS = 'Samoa',
  SM = 'San Marino',
  RS = 'Serbia',
  SG = 'Singapore',
  SB = 'Solomon Islands',
  LK = 'Sri Lanka',
  CH = 'Swiss',
  TW = 'Taiwan',
  TJ = 'Tajikistan',
  TH = 'Thailand',
  TL = 'Timor-Leste',
  TO = 'Tonga',
  TR = 'Turkey',
  TM = 'Turkmenistan',
  TV = 'Tuvalu',
  UA = 'Ukraine',
  GB = 'United Kingdom',
  US = 'United States of America',
  UZ = 'Uzbekistan',
  VU = 'Vanuatu',
  VN = 'Viet Nam',
  ETC = 'Others',
}

export declare enum CustomerCountry {
  AF = 'AF',
  AL = 'AL',
  AD = 'AD',
  AM = 'AM',
  AU = 'AU',
  BD = 'BD',
  BY = 'BY',
  BT = 'BT',
  BA = 'BA',
  BN = 'BN',
  KH = 'KH',
  CA = 'CA',
  CK = 'CK',
  CY = 'CY',
  FJ = 'FJ',
  HKG = 'HKG',
  IS = 'IS',
  IN = 'IN',
  ID = 'ID',
  KZ = 'KZ',
  KI = 'KI',
  XK = 'XK',
  KG = 'KG',
  LA = 'LA',
  LI = 'LI',
  MY = 'MY',
  MV = 'MV',
  FM = 'FM',
  MD = 'MD',
  MC = 'MC',
  MN = 'MN',
  ME = 'ME',
  MM = 'MM',
  NR = 'NR',
  NP = 'NP',
  NZ = 'NZ',
  NU = 'NU',
  MK = 'MK',
  NO = 'NO',
  PK = 'PK',
  PW = 'PW',
  PG = 'PG',
  PH = 'PH',
  WS = 'WS',
  SM = 'SM',
  RS = 'RS',
  SG = 'SG',
  SB = 'SB',
  LK = 'LK',
  CH = 'CH',
  TW = 'TW',
  TJ = 'TJ',
  TH = 'TH',
  TL = 'TL',
  TO = 'TO',
  TR = 'TR',
  TM = 'TM',
  TV = 'TV',
  UA = 'UA',
  GB = 'GB',
  US = 'US',
  UZ = 'UZ',
  VU = 'VU',
  VN = 'VN',
  ETC = 'ETC',
}

export const DefaultLanguage = CustomerLanguage.EN;

export const LanguageCodes: string[] = Object.values(CustomerLanguageCode);
export const LanguageLabelList: [string, string][] = Object.entries(CustomerLanguageLabel);
