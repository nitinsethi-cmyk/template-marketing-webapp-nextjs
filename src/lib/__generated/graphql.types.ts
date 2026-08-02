export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = _Node & {
  __typename?: 'Asset';
  _id: Scalars['ID']['output'];
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetCursorCollection = {
  __typename?: 'AssetCursorCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentDuplexCursorCollection?: Maybe<ComponentDuplexCursorCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentHeroBannerCursorCollection?: Maybe<ComponentHeroBannerCursorCollection>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentInfoBlockCursorCollection?: Maybe<ComponentInfoBlockCursorCollection>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  componentQuoteCursorCollection?: Maybe<ComponentQuoteCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  seoCollection?: Maybe<SeoCollection>;
  seoCursorCollection?: Maybe<SeoCursorCollection>;
  topicBusinessInfoCollection?: Maybe<TopicBusinessInfoCollection>;
  topicBusinessInfoCursorCollection?: Maybe<TopicBusinessInfoCursorCollection>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicPersonCursorCollection?: Maybe<TopicPersonCursorCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  topicProductCursorCollection?: Maybe<TopicProductCursorCollection>;
};


export type AssetLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentDuplexCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentHeroBannerCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentInfoBlockCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsComponentQuoteCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsSeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsSeoCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTopicBusinessInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTopicBusinessInfoCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTopicPersonCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsTopicProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCta = Entry & _Node & {
  __typename?: 'ComponentCta';
  _id: Scalars['ID']['output'];
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentCtaLinkingCollections>;
  subline?: Maybe<ComponentCtaSubline>;
  sys: Sys;
  targetPage?: Maybe<ComponentCtaTargetPage>;
  urlParameters?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentCta) */
export type ComponentCtaUrlParametersArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentCtaCollection = {
  __typename?: 'ComponentCtaCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentCtaCursorCollection = {
  __typename?: 'ComponentCtaCursorCollection';
  items: Array<Maybe<ComponentCta>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentCtaFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentCtaFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlParameters?: InputMaybe<Scalars['String']['input']>;
  urlParameters_contains?: InputMaybe<Scalars['String']['input']>;
  urlParameters_exists?: InputMaybe<Scalars['Boolean']['input']>;
  urlParameters_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  urlParameters_not?: InputMaybe<Scalars['String']['input']>;
  urlParameters_not_contains?: InputMaybe<Scalars['String']['input']>;
  urlParameters_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentCtaLinkingCollections = {
  __typename?: 'ComponentCtaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentCtaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentCtaLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentCtaLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentCtaLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentCtaLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentCtaOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC'
}

export type ComponentCtaSubline = {
  __typename?: 'ComponentCtaSubline';
  json: Scalars['JSON']['output'];
  links: ComponentCtaSublineLinks;
};

export type ComponentCtaSublineAssets = {
  __typename?: 'ComponentCtaSublineAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentCtaSublineEntries = {
  __typename?: 'ComponentCtaSublineEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentCtaSublineLinks = {
  __typename?: 'ComponentCtaSublineLinks';
  assets: ComponentCtaSublineAssets;
  entries: ComponentCtaSublineEntries;
  resources: ComponentCtaSublineResources;
};

export type ComponentCtaSublineResources = {
  __typename?: 'ComponentCtaSublineResources';
  block: Array<ComponentCtaSublineResourcesBlock>;
  hyperlink: Array<ComponentCtaSublineResourcesHyperlink>;
  inline: Array<ComponentCtaSublineResourcesInline>;
};

export type ComponentCtaSublineResourcesBlock = ResourceLink & {
  __typename?: 'ComponentCtaSublineResourcesBlock';
  sys: ResourceSys;
};

export type ComponentCtaSublineResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentCtaSublineResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentCtaSublineResourcesInline = ResourceLink & {
  __typename?: 'ComponentCtaSublineResourcesInline';
  sys: ResourceSys;
};

export type ComponentCtaTargetPage = Page;

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplex = Entry & _Node & {
  __typename?: 'ComponentDuplex';
  _id: Scalars['ID']['output'];
  bodyText?: Maybe<ComponentDuplexBodyText>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  containerLayout?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentDuplexLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentDuplexTargetPage>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexContainerLayoutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentDuplex) */
export type ComponentDuplexTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentDuplexBodyText = {
  __typename?: 'ComponentDuplexBodyText';
  json: Scalars['JSON']['output'];
  links: ComponentDuplexBodyTextLinks;
};

export type ComponentDuplexBodyTextAssets = {
  __typename?: 'ComponentDuplexBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentDuplexBodyTextEntries = {
  __typename?: 'ComponentDuplexBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentDuplexBodyTextLinks = {
  __typename?: 'ComponentDuplexBodyTextLinks';
  assets: ComponentDuplexBodyTextAssets;
  entries: ComponentDuplexBodyTextEntries;
  resources: ComponentDuplexBodyTextResources;
};

export type ComponentDuplexBodyTextResources = {
  __typename?: 'ComponentDuplexBodyTextResources';
  block: Array<ComponentDuplexBodyTextResourcesBlock>;
  hyperlink: Array<ComponentDuplexBodyTextResourcesHyperlink>;
  inline: Array<ComponentDuplexBodyTextResourcesInline>;
};

export type ComponentDuplexBodyTextResourcesBlock = ResourceLink & {
  __typename?: 'ComponentDuplexBodyTextResourcesBlock';
  sys: ResourceSys;
};

export type ComponentDuplexBodyTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentDuplexBodyTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentDuplexBodyTextResourcesInline = ResourceLink & {
  __typename?: 'ComponentDuplexBodyTextResourcesInline';
  sys: ResourceSys;
};

export type ComponentDuplexCollection = {
  __typename?: 'ComponentDuplexCollection';
  items: Array<Maybe<ComponentDuplex>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentDuplexCursorCollection = {
  __typename?: 'ComponentDuplexCursorCollection';
  items: Array<Maybe<ComponentDuplex>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentDuplexFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentDuplexFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  containerLayout?: InputMaybe<Scalars['Boolean']['input']>;
  containerLayout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  containerLayout_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  imageStyle?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentDuplexLinkingCollections = {
  __typename?: 'ComponentDuplexLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentDuplexLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentDuplexLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentDuplexLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentDuplexLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentDuplexLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentDuplexLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentDuplexOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentDuplexTargetPage = Page;

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBanner = Entry & _Node & {
  __typename?: 'ComponentHeroBanner';
  _id: Scalars['ID']['output'];
  bodyText?: Maybe<ComponentHeroBannerBodyText>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  ctaText?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  heroSize?: Maybe<Scalars['Boolean']['output']>;
  image?: Maybe<Asset>;
  imageStyle?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentHeroBannerLinkingCollections>;
  sys: Sys;
  targetPage?: Maybe<ComponentHeroBannerTargetPage>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerBodyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerHeroSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerImageStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentHeroBanner) */
export type ComponentHeroBannerTargetPageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeroBannerBodyText = {
  __typename?: 'ComponentHeroBannerBodyText';
  json: Scalars['JSON']['output'];
  links: ComponentHeroBannerBodyTextLinks;
};

export type ComponentHeroBannerBodyTextAssets = {
  __typename?: 'ComponentHeroBannerBodyTextAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentHeroBannerBodyTextEntries = {
  __typename?: 'ComponentHeroBannerBodyTextEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentHeroBannerBodyTextLinks = {
  __typename?: 'ComponentHeroBannerBodyTextLinks';
  assets: ComponentHeroBannerBodyTextAssets;
  entries: ComponentHeroBannerBodyTextEntries;
  resources: ComponentHeroBannerBodyTextResources;
};

export type ComponentHeroBannerBodyTextResources = {
  __typename?: 'ComponentHeroBannerBodyTextResources';
  block: Array<ComponentHeroBannerBodyTextResourcesBlock>;
  hyperlink: Array<ComponentHeroBannerBodyTextResourcesHyperlink>;
  inline: Array<ComponentHeroBannerBodyTextResourcesInline>;
};

export type ComponentHeroBannerBodyTextResourcesBlock = ResourceLink & {
  __typename?: 'ComponentHeroBannerBodyTextResourcesBlock';
  sys: ResourceSys;
};

export type ComponentHeroBannerBodyTextResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentHeroBannerBodyTextResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentHeroBannerBodyTextResourcesInline = ResourceLink & {
  __typename?: 'ComponentHeroBannerBodyTextResourcesInline';
  sys: ResourceSys;
};

export type ComponentHeroBannerCollection = {
  __typename?: 'ComponentHeroBannerCollection';
  items: Array<Maybe<ComponentHeroBanner>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentHeroBannerCursorCollection = {
  __typename?: 'ComponentHeroBannerCursorCollection';
  items: Array<Maybe<ComponentHeroBanner>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentHeroBannerFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentHeroBannerFilter>>>;
  bodyText_contains?: InputMaybe<Scalars['String']['input']>;
  bodyText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bodyText_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctaText?: InputMaybe<Scalars['String']['input']>;
  ctaText_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  ctaText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  ctaText_not?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_contains?: InputMaybe<Scalars['String']['input']>;
  ctaText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heroSize?: InputMaybe<Scalars['Boolean']['input']>;
  heroSize_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heroSize_not?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imageStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  targetPage_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentHeroBannerLinkingCollections = {
  __typename?: 'ComponentHeroBannerLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentHeroBannerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentHeroBannerLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentHeroBannerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentHeroBannerLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentHeroBannerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentHeroBannerLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentHeroBannerOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentHeroBannerTargetPage = Page;

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlock = Entry & _Node & {
  __typename?: 'ComponentInfoBlock';
  _id: Scalars['ID']['output'];
  block1Body?: Maybe<ComponentInfoBlockBlock1Body>;
  block1Image?: Maybe<Asset>;
  block2Body?: Maybe<ComponentInfoBlockBlock2Body>;
  block2Image?: Maybe<Asset>;
  block3Body?: Maybe<ComponentInfoBlockBlock3Body>;
  block3Image?: Maybe<Asset>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentInfoBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  test123?: Maybe<VariantContainer>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock1ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock2ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3BodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockBlock3ImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentInfoBlock) */
export type ComponentInfoBlockTest123Args = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantContainerFilter>;
};

export type ComponentInfoBlockBlock1Body = {
  __typename?: 'ComponentInfoBlockBlock1Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock1BodyLinks;
};

export type ComponentInfoBlockBlock1BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock1BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock1BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock1BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock1BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock1BodyLinks';
  assets: ComponentInfoBlockBlock1BodyAssets;
  entries: ComponentInfoBlockBlock1BodyEntries;
  resources: ComponentInfoBlockBlock1BodyResources;
};

export type ComponentInfoBlockBlock1BodyResources = {
  __typename?: 'ComponentInfoBlockBlock1BodyResources';
  block: Array<ComponentInfoBlockBlock1BodyResourcesBlock>;
  hyperlink: Array<ComponentInfoBlockBlock1BodyResourcesHyperlink>;
  inline: Array<ComponentInfoBlockBlock1BodyResourcesInline>;
};

export type ComponentInfoBlockBlock1BodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock1BodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock1BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock1BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock1BodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock1BodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock2Body = {
  __typename?: 'ComponentInfoBlockBlock2Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock2BodyLinks;
};

export type ComponentInfoBlockBlock2BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock2BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock2BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock2BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock2BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock2BodyLinks';
  assets: ComponentInfoBlockBlock2BodyAssets;
  entries: ComponentInfoBlockBlock2BodyEntries;
  resources: ComponentInfoBlockBlock2BodyResources;
};

export type ComponentInfoBlockBlock2BodyResources = {
  __typename?: 'ComponentInfoBlockBlock2BodyResources';
  block: Array<ComponentInfoBlockBlock2BodyResourcesBlock>;
  hyperlink: Array<ComponentInfoBlockBlock2BodyResourcesHyperlink>;
  inline: Array<ComponentInfoBlockBlock2BodyResourcesInline>;
};

export type ComponentInfoBlockBlock2BodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock2BodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock2BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock2BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock2BodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock2BodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock3Body = {
  __typename?: 'ComponentInfoBlockBlock3Body';
  json: Scalars['JSON']['output'];
  links: ComponentInfoBlockBlock3BodyLinks;
};

export type ComponentInfoBlockBlock3BodyAssets = {
  __typename?: 'ComponentInfoBlockBlock3BodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentInfoBlockBlock3BodyEntries = {
  __typename?: 'ComponentInfoBlockBlock3BodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentInfoBlockBlock3BodyLinks = {
  __typename?: 'ComponentInfoBlockBlock3BodyLinks';
  assets: ComponentInfoBlockBlock3BodyAssets;
  entries: ComponentInfoBlockBlock3BodyEntries;
  resources: ComponentInfoBlockBlock3BodyResources;
};

export type ComponentInfoBlockBlock3BodyResources = {
  __typename?: 'ComponentInfoBlockBlock3BodyResources';
  block: Array<ComponentInfoBlockBlock3BodyResourcesBlock>;
  hyperlink: Array<ComponentInfoBlockBlock3BodyResourcesHyperlink>;
  inline: Array<ComponentInfoBlockBlock3BodyResourcesInline>;
};

export type ComponentInfoBlockBlock3BodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock3BodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock3BodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock3BodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentInfoBlockBlock3BodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentInfoBlockBlock3BodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentInfoBlockCollection = {
  __typename?: 'ComponentInfoBlockCollection';
  items: Array<Maybe<ComponentInfoBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentInfoBlockCursorCollection = {
  __typename?: 'ComponentInfoBlockCursorCollection';
  items: Array<Maybe<ComponentInfoBlock>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentInfoBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentInfoBlockFilter>>>;
  block1Body_contains?: InputMaybe<Scalars['String']['input']>;
  block1Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block1Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block1Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_contains?: InputMaybe<Scalars['String']['input']>;
  block2Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block2Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block2Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_contains?: InputMaybe<Scalars['String']['input']>;
  block3Body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  block3Body_not_contains?: InputMaybe<Scalars['String']['input']>;
  block3Image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  test123?: InputMaybe<CfVariantContainerNestedFilter>;
  test123_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentInfoBlockLinkingCollections = {
  __typename?: 'ComponentInfoBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentInfoBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentInfoBlockLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentInfoBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentInfoBlockLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentInfoBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentInfoBlockLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentInfoBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTable = Entry & _Node & {
  __typename?: 'ComponentProductTable';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentProductTableLinkingCollections>;
  productsCollection?: Maybe<ComponentProductTableProductsCollection>;
  productsCursorCollection?: Maybe<ComponentProductTableProductsCursorCollection>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTableHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTableInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTableLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTableProductsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableProductsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTableProductsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableProductsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentProductTable) */
export type ComponentProductTableSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentProductTableCollection = {
  __typename?: 'ComponentProductTableCollection';
  items: Array<Maybe<ComponentProductTable>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentProductTableCursorCollection = {
  __typename?: 'ComponentProductTableCursorCollection';
  items: Array<Maybe<ComponentProductTable>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentProductTableFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentProductTableFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  products?: InputMaybe<CfTopicProductNestedFilter>;
  productsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentProductTableLinkingCollections = {
  __typename?: 'ComponentProductTableLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentProductTableLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentProductTableLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentProductTableLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentProductTableLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentProductTableLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentProductTableLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentProductTableOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentProductTableProductsCollection = {
  __typename?: 'ComponentProductTableProductsCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum ComponentProductTableProductsCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentProductTableProductsCursorCollection = {
  __typename?: 'ComponentProductTableProductsCursorCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum ComponentProductTableProductsCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuote = Entry & _Node & {
  __typename?: 'ComponentQuote';
  _id: Scalars['ID']['output'];
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  image?: Maybe<Asset>;
  imagePosition?: Maybe<Scalars['Boolean']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentQuoteLinkingCollections>;
  quote?: Maybe<ComponentQuoteQuote>;
  quoteAlignment?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteImagePositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteQuoteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentQuote) */
export type ComponentQuoteQuoteAlignmentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentQuoteCollection = {
  __typename?: 'ComponentQuoteCollection';
  items: Array<Maybe<ComponentQuote>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentQuoteCursorCollection = {
  __typename?: 'ComponentQuoteCursorCollection';
  items: Array<Maybe<ComponentQuote>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentQuoteFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentQuoteFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  imagePosition?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  imagePosition_not?: InputMaybe<Scalars['Boolean']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  quoteAlignment?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAlignment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quoteAlignment_not?: InputMaybe<Scalars['Boolean']['input']>;
  quote_contains?: InputMaybe<Scalars['String']['input']>;
  quote_exists?: InputMaybe<Scalars['Boolean']['input']>;
  quote_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentQuoteLinkingCollections = {
  __typename?: 'ComponentQuoteLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentQuoteLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentQuoteLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentQuoteLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentQuoteLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentQuoteLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentQuoteLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentQuoteOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ImagePositionAsc = 'imagePosition_ASC',
  ImagePositionDesc = 'imagePosition_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  QuoteAlignmentAsc = 'quoteAlignment_ASC',
  QuoteAlignmentDesc = 'quoteAlignment_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ComponentQuoteQuote = {
  __typename?: 'ComponentQuoteQuote';
  json: Scalars['JSON']['output'];
  links: ComponentQuoteQuoteLinks;
};

export type ComponentQuoteQuoteAssets = {
  __typename?: 'ComponentQuoteQuoteAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentQuoteQuoteEntries = {
  __typename?: 'ComponentQuoteQuoteEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentQuoteQuoteLinks = {
  __typename?: 'ComponentQuoteQuoteLinks';
  assets: ComponentQuoteQuoteAssets;
  entries: ComponentQuoteQuoteEntries;
  resources: ComponentQuoteQuoteResources;
};

export type ComponentQuoteQuoteResources = {
  __typename?: 'ComponentQuoteQuoteResources';
  block: Array<ComponentQuoteQuoteResourcesBlock>;
  hyperlink: Array<ComponentQuoteQuoteResourcesHyperlink>;
  inline: Array<ComponentQuoteQuoteResourcesInline>;
};

export type ComponentQuoteQuoteResourcesBlock = ResourceLink & {
  __typename?: 'ComponentQuoteQuoteResourcesBlock';
  sys: ResourceSys;
};

export type ComponentQuoteQuoteResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentQuoteQuoteResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentQuoteQuoteResourcesInline = ResourceLink & {
  __typename?: 'ComponentQuoteQuoteResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlock = Entry & _Node & {
  __typename?: 'ComponentTextBlock';
  _id: Scalars['ID']['output'];
  body?: Maybe<ComponentTextBlockBody>;
  colorPalette?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  headline?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<ComponentTextBlockLinkingCollections>;
  subline?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlockBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlockColorPaletteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlockHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlockInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/componentTextBlock) */
export type ComponentTextBlockSublineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentTextBlockBody = {
  __typename?: 'ComponentTextBlockBody';
  json: Scalars['JSON']['output'];
  links: ComponentTextBlockBodyLinks;
};

export type ComponentTextBlockBodyAssets = {
  __typename?: 'ComponentTextBlockBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type ComponentTextBlockBodyEntries = {
  __typename?: 'ComponentTextBlockBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type ComponentTextBlockBodyLinks = {
  __typename?: 'ComponentTextBlockBodyLinks';
  assets: ComponentTextBlockBodyAssets;
  entries: ComponentTextBlockBodyEntries;
  resources: ComponentTextBlockBodyResources;
};

export type ComponentTextBlockBodyResources = {
  __typename?: 'ComponentTextBlockBodyResources';
  block: Array<ComponentTextBlockBodyResourcesBlock>;
  hyperlink: Array<ComponentTextBlockBodyResourcesHyperlink>;
  inline: Array<ComponentTextBlockBodyResourcesInline>;
};

export type ComponentTextBlockBodyResourcesBlock = ResourceLink & {
  __typename?: 'ComponentTextBlockBodyResourcesBlock';
  sys: ResourceSys;
};

export type ComponentTextBlockBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'ComponentTextBlockBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type ComponentTextBlockBodyResourcesInline = ResourceLink & {
  __typename?: 'ComponentTextBlockBodyResourcesInline';
  sys: ResourceSys;
};

export type ComponentTextBlockCollection = {
  __typename?: 'ComponentTextBlockCollection';
  items: Array<Maybe<ComponentTextBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type ComponentTextBlockCursorCollection = {
  __typename?: 'ComponentTextBlockCursorCollection';
  items: Array<Maybe<ComponentTextBlock>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type ComponentTextBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ComponentTextBlockFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  headline?: InputMaybe<Scalars['String']['input']>;
  headline_contains?: InputMaybe<Scalars['String']['input']>;
  headline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  headline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  headline_not?: InputMaybe<Scalars['String']['input']>;
  headline_not_contains?: InputMaybe<Scalars['String']['input']>;
  headline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline?: InputMaybe<Scalars['String']['input']>;
  subline_contains?: InputMaybe<Scalars['String']['input']>;
  subline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subline_not?: InputMaybe<Scalars['String']['input']>;
  subline_not_contains?: InputMaybe<Scalars['String']['input']>;
  subline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type ComponentTextBlockLinkingCollections = {
  __typename?: 'ComponentTextBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type ComponentTextBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentTextBlockLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentTextBlockLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type ComponentTextBlockLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum ComponentTextBlockLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextBlockLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ComponentTextBlockOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CursorPages = {
  __typename?: 'CursorPages';
  next?: Maybe<Scalars['String']['output']>;
  prev?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryCursorCollection = {
  __typename?: 'EntryCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenu = Entry & _Node & {
  __typename?: 'FooterMenu';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  facebookLink?: Maybe<Scalars['String']['output']>;
  instagramLink?: Maybe<Scalars['String']['output']>;
  internalName?: Maybe<Scalars['String']['output']>;
  legalLinks?: Maybe<MenuGroup>;
  linkedFrom?: Maybe<FooterMenuLinkingCollections>;
  linkedinLink?: Maybe<Scalars['String']['output']>;
  menuItemsCollection?: Maybe<FooterMenuMenuItemsCollection>;
  menuItemsCursorCollection?: Maybe<FooterMenuMenuItemsCursorCollection>;
  sys: Sys;
  twitterLink?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuFacebookLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuInstagramLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuLegalLinksArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuLinkedinLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuMenuItemsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuMenuItemsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/footerMenu) */
export type FooterMenuTwitterLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterMenuCollection = {
  __typename?: 'FooterMenuCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterMenuCursorCollection = {
  __typename?: 'FooterMenuCursorCollection';
  items: Array<Maybe<FooterMenu>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type FooterMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  facebookLink?: InputMaybe<Scalars['String']['input']>;
  facebookLink_contains?: InputMaybe<Scalars['String']['input']>;
  facebookLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  facebookLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  facebookLink_not?: InputMaybe<Scalars['String']['input']>;
  facebookLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  facebookLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramLink?: InputMaybe<Scalars['String']['input']>;
  instagramLink_contains?: InputMaybe<Scalars['String']['input']>;
  instagramLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instagramLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instagramLink_not?: InputMaybe<Scalars['String']['input']>;
  instagramLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  instagramLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  legalLinks?: InputMaybe<CfMenuGroupNestedFilter>;
  legalLinks_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinLink?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_contains?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  linkedinLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  linkedinLink_not?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  linkedinLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  twitterLink?: InputMaybe<Scalars['String']['input']>;
  twitterLink_contains?: InputMaybe<Scalars['String']['input']>;
  twitterLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  twitterLink_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  twitterLink_not?: InputMaybe<Scalars['String']['input']>;
  twitterLink_not_contains?: InputMaybe<Scalars['String']['input']>;
  twitterLink_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FooterMenuLinkingCollections = {
  __typename?: 'FooterMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type FooterMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterMenuLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterMenuMenuItemsCollection = {
  __typename?: 'FooterMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterMenuMenuItemsCursorCollection = {
  __typename?: 'FooterMenuMenuItemsCursorCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum FooterMenuMenuItemsCursorCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterMenuOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroup = Entry & _Node & {
  __typename?: 'MenuGroup';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  featuredPagesCollection?: Maybe<MenuGroupFeaturedPagesCollection>;
  featuredPagesCursorCollection?: Maybe<MenuGroupFeaturedPagesCursorCollection>;
  groupLink?: Maybe<MenuGroupGroupLink>;
  groupName?: Maybe<Scalars['String']['output']>;
  internalTitle?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<MenuGroupLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFeaturedPagesFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroupFeaturedPagesCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFeaturedPagesFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroupGroupLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupGroupLinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroupGroupNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroupInternalTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/menuGroup) */
export type MenuGroupLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenuGroupCollection = {
  __typename?: 'MenuGroupCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuGroupCursorCollection = {
  __typename?: 'MenuGroupCursorCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type MenuGroupFeaturedPagesCollection = {
  __typename?: 'MenuGroupFeaturedPagesCollection';
  items: Array<Maybe<MenuGroupFeaturedPagesItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MenuGroupFeaturedPagesCursorCollection = {
  __typename?: 'MenuGroupFeaturedPagesCursorCollection';
  items: Array<Maybe<MenuGroupFeaturedPagesItem>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type MenuGroupFeaturedPagesFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFeaturedPagesFilter>>>;
  blackCardCtaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuGroupFeaturedPagesItem = Page;

export type MenuGroupFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPages?: InputMaybe<CffeaturedPagesMultiTypeNestedFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupLink?: InputMaybe<CfgroupLinkMultiTypeNestedFilter>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  groupName_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not?: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type MenuGroupGroupLink = Page;

export type MenuGroupGroupLinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<MenuGroupGroupLinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MenuGroupGroupLinkFilter>>>;
  blackCardCtaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MenuGroupLinkingCollections = {
  __typename?: 'MenuGroupLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  footerMenuCursorCollection?: Maybe<FooterMenuCursorCollection>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  navigationMenuCursorCollection?: Maybe<NavigationMenuCursorCollection>;
};


export type MenuGroupLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MenuGroupLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MenuGroupLinkingCollectionsFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsFooterMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MenuGroupLinkingCollectionsFooterMenuCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsFooterMenuCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MenuGroupLinkingCollectionsNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsNavigationMenuCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MenuGroupLinkingCollectionsNavigationMenuCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupLinkingCollectionsNavigationMenuCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum MenuGroupLinkingCollectionsFooterMenuCollectionOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export enum MenuGroupLinkingCollectionsFooterMenuCursorCollectionOrder {
  FacebookLinkAsc = 'facebookLink_ASC',
  FacebookLinkDesc = 'facebookLink_DESC',
  InstagramLinkAsc = 'instagramLink_ASC',
  InstagramLinkDesc = 'instagramLink_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LinkedinLinkAsc = 'linkedinLink_ASC',
  LinkedinLinkDesc = 'linkedinLink_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TwitterLinkAsc = 'twitterLink_ASC',
  TwitterLinkDesc = 'twitterLink_DESC'
}

export enum MenuGroupLinkingCollectionsNavigationMenuCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MenuGroupLinkingCollectionsNavigationMenuCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum MenuGroupOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/navigationMenu) */
export type NavigationMenu = Entry & _Node & {
  __typename?: 'NavigationMenu';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<NavigationMenuLinkingCollections>;
  menuItemsCollection?: Maybe<NavigationMenuMenuItemsCollection>;
  menuItemsCursorCollection?: Maybe<NavigationMenuMenuItemsCursorCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/navigationMenu) */
export type NavigationMenuInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/navigationMenu) */
export type NavigationMenuLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/navigationMenu) */
export type NavigationMenuMenuItemsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuMenuItemsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};

export type NavigationMenuCollection = {
  __typename?: 'NavigationMenuCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NavigationMenuCursorCollection = {
  __typename?: 'NavigationMenuCursorCollection';
  items: Array<Maybe<NavigationMenu>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type NavigationMenuFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<NavigationMenuFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  menuItems?: InputMaybe<CfMenuGroupNestedFilter>;
  menuItemsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type NavigationMenuLinkingCollections = {
  __typename?: 'NavigationMenuLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type NavigationMenuLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type NavigationMenuLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationMenuMenuItemsCollection = {
  __typename?: 'NavigationMenuMenuItemsCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum NavigationMenuMenuItemsCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type NavigationMenuMenuItemsCursorCollection = {
  __typename?: 'NavigationMenuMenuItemsCursorCollection';
  items: Array<Maybe<MenuGroup>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum NavigationMenuMenuItemsCursorCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum NavigationMenuOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  blackCardCtaText?: Maybe<VariantContainer>;
  contentfulMetadata: ContentfulMetadata;
  extraSectionCollection?: Maybe<PageExtraSectionCollection>;
  extraSectionCursorCollection?: Maybe<PageExtraSectionCursorCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageContent?: Maybe<PagePageContent>;
  pageName?: Maybe<Scalars['String']['output']>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  topSectionCollection?: Maybe<PageTopSectionCollection>;
  topSectionCursorCollection?: Maybe<PageTopSectionCursorCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageBlackCardCtaTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantContainerFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageExtraSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageExtraSectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageExtraSectionCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageExtraSectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PagePageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageSeoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageTopSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageTopSectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/page) */
export type PageTopSectionCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageTopSectionFilter>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageCursorCollection = {
  __typename?: 'PageCursorCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageExtraSectionCollection = {
  __typename?: 'PageExtraSectionCollection';
  items: Array<Maybe<PageExtraSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageExtraSectionCursorCollection = {
  __typename?: 'PageExtraSectionCursorCollection';
  items: Array<Maybe<PageExtraSectionItem>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageExtraSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageExtraSectionFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageExtraSectionItem = ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | ComponentTextBlock;

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  blackCardCtaText?: InputMaybe<CfVariantContainerNestedFilter>;
  blackCardCtaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSection?: InputMaybe<CfextraSectionMultiTypeNestedFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo?: InputMaybe<CfSeoNestedFilter>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topSection?: InputMaybe<CftopSectionMultiTypeNestedFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentCtaCursorCollection?: Maybe<ComponentCtaCursorCollection>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentDuplexCursorCollection?: Maybe<ComponentDuplexCursorCollection>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentHeroBannerCursorCollection?: Maybe<ComponentHeroBannerCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  menuGroupCursorCollection?: Maybe<MenuGroupCursorCollection>;
};


export type PageLinkingCollectionsComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentCtaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsComponentCtaCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentCtaCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentDuplexCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsComponentDuplexCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentDuplexCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentHeroBannerCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsComponentHeroBannerCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsComponentHeroBannerCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsMenuGroupCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsMenuGroupCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageLinkingCollectionsMenuGroupCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageLinkingCollectionsComponentCtaCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC'
}

export enum PageLinkingCollectionsComponentCtaCursorCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlParametersAsc = 'urlParameters_ASC',
  UrlParametersDesc = 'urlParameters_DESC'
}

export enum PageLinkingCollectionsComponentDuplexCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsComponentDuplexCursorCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  ContainerLayoutAsc = 'containerLayout_ASC',
  ContainerLayoutDesc = 'containerLayout_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsComponentHeroBannerCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsComponentHeroBannerCursorCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  CtaTextAsc = 'ctaText_ASC',
  CtaTextDesc = 'ctaText_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  HeroSizeAsc = 'heroSize_ASC',
  HeroSizeDesc = 'heroSize_DESC',
  ImageStyleAsc = 'imageStyle_ASC',
  ImageStyleDesc = 'imageStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsMenuGroupCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageLinkingCollectionsMenuGroupCursorCollectionOrder {
  GroupNameAsc = 'groupName_ASC',
  GroupNameDesc = 'groupName_DESC',
  InternalTitleAsc = 'internalTitle_ASC',
  InternalTitleDesc = 'internalTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PagePageContent = ComponentProductTable | TopicBusinessInfo | TopicProduct;

export type PageTopSectionCollection = {
  __typename?: 'PageTopSectionCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageTopSectionCursorCollection = {
  __typename?: 'PageTopSectionCursorCollection';
  items: Array<Maybe<PageTopSectionItem>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageTopSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageTopSectionFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageTopSectionItem = ComponentCta | ComponentDuplex | ComponentHeroBanner | ComponentInfoBlock | ComponentQuote | ComponentTextBlock;

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assetCursorCollection?: Maybe<AssetCursorCollection>;
  componentCta?: Maybe<ComponentCta>;
  componentCtaCollection?: Maybe<ComponentCtaCollection>;
  componentCtaCursorCollection?: Maybe<ComponentCtaCursorCollection>;
  componentDuplex?: Maybe<ComponentDuplex>;
  componentDuplexCollection?: Maybe<ComponentDuplexCollection>;
  componentDuplexCursorCollection?: Maybe<ComponentDuplexCursorCollection>;
  componentHeroBanner?: Maybe<ComponentHeroBanner>;
  componentHeroBannerCollection?: Maybe<ComponentHeroBannerCollection>;
  componentHeroBannerCursorCollection?: Maybe<ComponentHeroBannerCursorCollection>;
  componentInfoBlock?: Maybe<ComponentInfoBlock>;
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentInfoBlockCursorCollection?: Maybe<ComponentInfoBlockCursorCollection>;
  componentProductTable?: Maybe<ComponentProductTable>;
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  componentProductTableCursorCollection?: Maybe<ComponentProductTableCursorCollection>;
  componentQuote?: Maybe<ComponentQuote>;
  componentQuoteCollection?: Maybe<ComponentQuoteCollection>;
  componentQuoteCursorCollection?: Maybe<ComponentQuoteCursorCollection>;
  componentTextBlock?: Maybe<ComponentTextBlock>;
  componentTextBlockCollection?: Maybe<ComponentTextBlockCollection>;
  componentTextBlockCursorCollection?: Maybe<ComponentTextBlockCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  footerMenu?: Maybe<FooterMenu>;
  footerMenuCollection?: Maybe<FooterMenuCollection>;
  footerMenuCursorCollection?: Maybe<FooterMenuCursorCollection>;
  menuGroup?: Maybe<MenuGroup>;
  menuGroupCollection?: Maybe<MenuGroupCollection>;
  menuGroupCursorCollection?: Maybe<MenuGroupCursorCollection>;
  navigationMenu?: Maybe<NavigationMenu>;
  navigationMenuCollection?: Maybe<NavigationMenuCollection>;
  navigationMenuCursorCollection?: Maybe<NavigationMenuCursorCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
  seo?: Maybe<Seo>;
  seoCollection?: Maybe<SeoCollection>;
  seoCursorCollection?: Maybe<SeoCursorCollection>;
  topicBusinessInfo?: Maybe<TopicBusinessInfo>;
  topicBusinessInfoCollection?: Maybe<TopicBusinessInfoCollection>;
  topicBusinessInfoCursorCollection?: Maybe<TopicBusinessInfoCursorCollection>;
  topicPerson?: Maybe<TopicPerson>;
  topicPersonCollection?: Maybe<TopicPersonCollection>;
  topicPersonCursorCollection?: Maybe<TopicPersonCursorCollection>;
  topicProduct?: Maybe<TopicProduct>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  topicProductCursorCollection?: Maybe<TopicProductCursorCollection>;
  topicProductFeature?: Maybe<TopicProductFeature>;
  topicProductFeatureCollection?: Maybe<TopicProductFeatureCollection>;
  topicProductFeatureCursorCollection?: Maybe<TopicProductFeatureCursorCollection>;
  variantContainer?: Maybe<VariantContainer>;
  variantContainerCollection?: Maybe<VariantContainerCollection>;
  variantContainerCursorCollection?: Maybe<VariantContainerCursorCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryComponentCtaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentCtaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentCtaCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentCtaOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentCtaFilter>;
};


export type QueryComponentDuplexArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentDuplexCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentDuplexFilter>;
};


export type QueryComponentDuplexCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentDuplexOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentDuplexFilter>;
};


export type QueryComponentHeroBannerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentHeroBannerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentHeroBannerFilter>;
};


export type QueryComponentHeroBannerCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentHeroBannerOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentHeroBannerFilter>;
};


export type QueryComponentInfoBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentInfoBlockFilter>;
};


export type QueryComponentInfoBlockCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentInfoBlockOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentInfoBlockFilter>;
};


export type QueryComponentProductTableArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentProductTableFilter>;
};


export type QueryComponentProductTableCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentProductTableOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentProductTableFilter>;
};


export type QueryComponentQuoteArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentQuoteCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentQuoteFilter>;
};


export type QueryComponentQuoteCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentQuoteOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentQuoteFilter>;
};


export type QueryComponentTextBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryComponentTextBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentTextBlockFilter>;
};


export type QueryComponentTextBlockCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<ComponentTextBlockOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ComponentTextBlockFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryFooterMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryFooterMenuCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterMenuOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterMenuFilter>;
};


export type QueryMenuGroupArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMenuGroupCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


export type QueryMenuGroupCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MenuGroupOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MenuGroupFilter>;
};


export type QueryNavigationMenuArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryNavigationMenuCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryNavigationMenuCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<NavigationMenuOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<NavigationMenuFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QuerySeoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


export type QuerySeoCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoFilter>;
};


export type QueryTopicBusinessInfoArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicBusinessInfoCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicBusinessInfoFilter>;
};


export type QueryTopicBusinessInfoCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicBusinessInfoFilter>;
};


export type QueryTopicPersonArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicPersonCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicPersonOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicPersonFilter>;
};


export type QueryTopicPersonCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicPersonOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicPersonFilter>;
};


export type QueryTopicProductArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};


export type QueryTopicProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFilter>;
};


export type QueryTopicProductFeatureArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTopicProductFeatureCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


export type QueryTopicProductFeatureCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


export type QueryVariantContainerArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVariantContainerCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VariantContainerOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantContainerFilter>;
};


export type QueryVariantContainerCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VariantContainerOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VariantContainerFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type Seo = Entry & _Node & {
  __typename?: 'Seo';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<SeoLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  noFollow?: Maybe<Scalars['Boolean']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoNoFollowArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoNoIndexArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/seo) */
export type SeoTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoCollection = {
  __typename?: 'SeoCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoCursorCollection = {
  __typename?: 'SeoCursorCollection';
  items: Array<Maybe<Seo>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type SeoFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type SeoLinkingCollections = {
  __typename?: 'SeoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type SeoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SeoLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SeoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SeoLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SeoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  NoFollowAsc = 'noFollow_ASC',
  NoFollowDesc = 'noFollow_DESC',
  NoIndexAsc = 'noIndex_ASC',
  NoIndexDesc = 'noIndex_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfo = Entry & _Node & {
  __typename?: 'TopicBusinessInfo';
  _id: Scalars['ID']['output'];
  body?: Maybe<TopicBusinessInfoBody>;
  contentfulMetadata: ContentfulMetadata;
  featuredImage?: Maybe<Asset>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicBusinessInfoLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfoBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfoFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfoInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfoLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfoNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicBusinessInfo) */
export type TopicBusinessInfoShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicBusinessInfoBody = {
  __typename?: 'TopicBusinessInfoBody';
  json: Scalars['JSON']['output'];
  links: TopicBusinessInfoBodyLinks;
};

export type TopicBusinessInfoBodyAssets = {
  __typename?: 'TopicBusinessInfoBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicBusinessInfoBodyEntries = {
  __typename?: 'TopicBusinessInfoBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicBusinessInfoBodyLinks = {
  __typename?: 'TopicBusinessInfoBodyLinks';
  assets: TopicBusinessInfoBodyAssets;
  entries: TopicBusinessInfoBodyEntries;
  resources: TopicBusinessInfoBodyResources;
};

export type TopicBusinessInfoBodyResources = {
  __typename?: 'TopicBusinessInfoBodyResources';
  block: Array<TopicBusinessInfoBodyResourcesBlock>;
  hyperlink: Array<TopicBusinessInfoBodyResourcesHyperlink>;
  inline: Array<TopicBusinessInfoBodyResourcesInline>;
};

export type TopicBusinessInfoBodyResourcesBlock = ResourceLink & {
  __typename?: 'TopicBusinessInfoBodyResourcesBlock';
  sys: ResourceSys;
};

export type TopicBusinessInfoBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicBusinessInfoBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicBusinessInfoBodyResourcesInline = ResourceLink & {
  __typename?: 'TopicBusinessInfoBodyResourcesInline';
  sys: ResourceSys;
};

export type TopicBusinessInfoCollection = {
  __typename?: 'TopicBusinessInfoCollection';
  items: Array<Maybe<TopicBusinessInfo>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicBusinessInfoCursorCollection = {
  __typename?: 'TopicBusinessInfoCursorCollection';
  items: Array<Maybe<TopicBusinessInfo>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type TopicBusinessInfoFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicBusinessInfoFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicBusinessInfoFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_not?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicBusinessInfoLinkingCollections = {
  __typename?: 'TopicBusinessInfoLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type TopicBusinessInfoLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicBusinessInfoLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicBusinessInfoLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicBusinessInfoLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicBusinessInfoLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TopicBusinessInfoLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicBusinessInfoLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicBusinessInfoOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPerson = Entry & _Node & {
  __typename?: 'TopicPerson';
  _id: Scalars['ID']['output'];
  avatar?: Maybe<Asset>;
  bio?: Maybe<TopicPersonBio>;
  cardStyle?: Maybe<Scalars['Boolean']['output']>;
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicPersonLinkingCollections>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  website?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonBioArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonCardStyleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicPerson) */
export type TopicPersonWebsiteArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicPersonBio = {
  __typename?: 'TopicPersonBio';
  json: Scalars['JSON']['output'];
  links: TopicPersonBioLinks;
};

export type TopicPersonBioAssets = {
  __typename?: 'TopicPersonBioAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicPersonBioEntries = {
  __typename?: 'TopicPersonBioEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicPersonBioLinks = {
  __typename?: 'TopicPersonBioLinks';
  assets: TopicPersonBioAssets;
  entries: TopicPersonBioEntries;
  resources: TopicPersonBioResources;
};

export type TopicPersonBioResources = {
  __typename?: 'TopicPersonBioResources';
  block: Array<TopicPersonBioResourcesBlock>;
  hyperlink: Array<TopicPersonBioResourcesHyperlink>;
  inline: Array<TopicPersonBioResourcesInline>;
};

export type TopicPersonBioResourcesBlock = ResourceLink & {
  __typename?: 'TopicPersonBioResourcesBlock';
  sys: ResourceSys;
};

export type TopicPersonBioResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicPersonBioResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicPersonBioResourcesInline = ResourceLink & {
  __typename?: 'TopicPersonBioResourcesInline';
  sys: ResourceSys;
};

export type TopicPersonCollection = {
  __typename?: 'TopicPersonCollection';
  items: Array<Maybe<TopicPerson>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicPersonCursorCollection = {
  __typename?: 'TopicPersonCursorCollection';
  items: Array<Maybe<TopicPerson>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type TopicPersonFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicPersonFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_contains?: InputMaybe<Scalars['String']['input']>;
  bio_exists?: InputMaybe<Scalars['Boolean']['input']>;
  bio_not_contains?: InputMaybe<Scalars['String']['input']>;
  cardStyle?: InputMaybe<Scalars['Boolean']['input']>;
  cardStyle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  cardStyle_not?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location?: InputMaybe<Scalars['String']['input']>;
  location_contains?: InputMaybe<Scalars['String']['input']>;
  location_exists?: InputMaybe<Scalars['Boolean']['input']>;
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  location_not?: InputMaybe<Scalars['String']['input']>;
  location_not_contains?: InputMaybe<Scalars['String']['input']>;
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  website?: InputMaybe<Scalars['String']['input']>;
  website_contains?: InputMaybe<Scalars['String']['input']>;
  website_exists?: InputMaybe<Scalars['Boolean']['input']>;
  website_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  website_not?: InputMaybe<Scalars['String']['input']>;
  website_not_contains?: InputMaybe<Scalars['String']['input']>;
  website_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TopicPersonLinkingCollections = {
  __typename?: 'TopicPersonLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type TopicPersonLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicPersonLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TopicPersonOrder {
  CardStyleAsc = 'cardStyle_ASC',
  CardStyleDesc = 'cardStyle_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  WebsiteAsc = 'website_ASC',
  WebsiteDesc = 'website_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProduct = Entry & _Node & {
  __typename?: 'TopicProduct';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<TopicProductDescription>;
  featuredImage?: Maybe<Asset>;
  featuresCollection?: Maybe<TopicProductFeaturesCollection>;
  featuresCursorCollection?: Maybe<TopicProductFeaturesCursorCollection>;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicProductLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductFeaturesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeaturesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductFeaturesCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeaturesCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<TopicProductFeatureFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProduct) */
export type TopicProductPriceArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicProductCollection = {
  __typename?: 'TopicProductCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductCursorCollection = {
  __typename?: 'TopicProductCursorCollection';
  items: Array<Maybe<TopicProduct>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type TopicProductDescription = {
  __typename?: 'TopicProductDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductDescriptionLinks;
};

export type TopicProductDescriptionAssets = {
  __typename?: 'TopicProductDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductDescriptionEntries = {
  __typename?: 'TopicProductDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductDescriptionLinks = {
  __typename?: 'TopicProductDescriptionLinks';
  assets: TopicProductDescriptionAssets;
  entries: TopicProductDescriptionEntries;
  resources: TopicProductDescriptionResources;
};

export type TopicProductDescriptionResources = {
  __typename?: 'TopicProductDescriptionResources';
  block: Array<TopicProductDescriptionResourcesBlock>;
  hyperlink: Array<TopicProductDescriptionResourcesHyperlink>;
  inline: Array<TopicProductDescriptionResourcesInline>;
};

export type TopicProductDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopicProductDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopicProductDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicProductDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicProductDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopicProductDescriptionResourcesInline';
  sys: ResourceSys;
};

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProductFeature) */
export type TopicProductFeature = Entry & _Node & {
  __typename?: 'TopicProductFeature';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  internalName?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<TopicProductFeatureLinkingCollections>;
  longDescription?: Maybe<TopicProductFeatureLongDescription>;
  name?: Maybe<Scalars['String']['output']>;
  shortDescription?: Maybe<TopicProductFeatureShortDescription>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProductFeature) */
export type TopicProductFeatureInternalNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProductFeature) */
export type TopicProductFeatureLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProductFeature) */
export type TopicProductFeatureLongDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProductFeature) */
export type TopicProductFeatureNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/topicProductFeature) */
export type TopicProductFeatureShortDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicProductFeatureCollection = {
  __typename?: 'TopicProductFeatureCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TopicProductFeatureCursorCollection = {
  __typename?: 'TopicProductFeatureCursorCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type TopicProductFeatureFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFeatureFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductFeatureLinkingCollections = {
  __typename?: 'TopicProductFeatureLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  topicProductCollection?: Maybe<TopicProductCollection>;
  topicProductCursorCollection?: Maybe<TopicProductCursorCollection>;
};


export type TopicProductFeatureLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductFeatureLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductFeatureLinkingCollectionsTopicProductCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductFeatureLinkingCollectionsTopicProductCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductFeatureLinkingCollectionsTopicProductCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TopicProductFeatureLinkingCollectionsTopicProductCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductFeatureLinkingCollectionsTopicProductCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureLongDescription = {
  __typename?: 'TopicProductFeatureLongDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductFeatureLongDescriptionLinks;
};

export type TopicProductFeatureLongDescriptionAssets = {
  __typename?: 'TopicProductFeatureLongDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureLongDescriptionEntries = {
  __typename?: 'TopicProductFeatureLongDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureLongDescriptionLinks = {
  __typename?: 'TopicProductFeatureLongDescriptionLinks';
  assets: TopicProductFeatureLongDescriptionAssets;
  entries: TopicProductFeatureLongDescriptionEntries;
  resources: TopicProductFeatureLongDescriptionResources;
};

export type TopicProductFeatureLongDescriptionResources = {
  __typename?: 'TopicProductFeatureLongDescriptionResources';
  block: Array<TopicProductFeatureLongDescriptionResourcesBlock>;
  hyperlink: Array<TopicProductFeatureLongDescriptionResourcesHyperlink>;
  inline: Array<TopicProductFeatureLongDescriptionResourcesInline>;
};

export type TopicProductFeatureLongDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopicProductFeatureLongDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopicProductFeatureLongDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicProductFeatureLongDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicProductFeatureLongDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopicProductFeatureLongDescriptionResourcesInline';
  sys: ResourceSys;
};

export enum TopicProductFeatureOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeatureShortDescription = {
  __typename?: 'TopicProductFeatureShortDescription';
  json: Scalars['JSON']['output'];
  links: TopicProductFeatureShortDescriptionLinks;
};

export type TopicProductFeatureShortDescriptionAssets = {
  __typename?: 'TopicProductFeatureShortDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TopicProductFeatureShortDescriptionEntries = {
  __typename?: 'TopicProductFeatureShortDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TopicProductFeatureShortDescriptionLinks = {
  __typename?: 'TopicProductFeatureShortDescriptionLinks';
  assets: TopicProductFeatureShortDescriptionAssets;
  entries: TopicProductFeatureShortDescriptionEntries;
  resources: TopicProductFeatureShortDescriptionResources;
};

export type TopicProductFeatureShortDescriptionResources = {
  __typename?: 'TopicProductFeatureShortDescriptionResources';
  block: Array<TopicProductFeatureShortDescriptionResourcesBlock>;
  hyperlink: Array<TopicProductFeatureShortDescriptionResourcesHyperlink>;
  inline: Array<TopicProductFeatureShortDescriptionResourcesInline>;
};

export type TopicProductFeatureShortDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'TopicProductFeatureShortDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type TopicProductFeatureShortDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'TopicProductFeatureShortDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type TopicProductFeatureShortDescriptionResourcesInline = ResourceLink & {
  __typename?: 'TopicProductFeatureShortDescriptionResourcesInline';
  sys: ResourceSys;
};

export type TopicProductFeaturesCollection = {
  __typename?: 'TopicProductFeaturesCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum TopicProductFeaturesCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFeaturesCursorCollection = {
  __typename?: 'TopicProductFeaturesCursorCollection';
  items: Array<Maybe<TopicProductFeature>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum TopicProductFeaturesCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type TopicProductFilter = {
  AND?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicProductFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  features?: InputMaybe<CfTopicProductFeatureNestedFilter>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type TopicProductLinkingCollections = {
  __typename?: 'TopicProductLinkingCollections';
  componentProductTableCollection?: Maybe<ComponentProductTableCollection>;
  componentProductTableCursorCollection?: Maybe<ComponentProductTableCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type TopicProductLinkingCollectionsComponentProductTableCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsComponentProductTableCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductLinkingCollectionsComponentProductTableCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsComponentProductTableCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type TopicProductLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TopicProductLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum TopicProductLinkingCollectionsComponentProductTableCollectionOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductLinkingCollectionsComponentProductTableCursorCollectionOrder {
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum TopicProductOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainer = Entry & _Node & {
  __typename?: 'VariantContainer';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  experiment?: Maybe<Scalars['JSON']['output']>;
  experimentId?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<VariantContainerLinkingCollections>;
  meta?: Maybe<Scalars['JSON']['output']>;
  sys: Sys;
  variantsCollection?: Maybe<VariantContainerVariantsCollection>;
  variantsCursorCollection?: Maybe<VariantContainerVariantsCursorCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainerExperimentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainerExperimentIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainerLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainerMetaArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainerVariantsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ei7qkoms0pgw/content_types/variantContainer) */
export type VariantContainerVariantsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VariantContainerCollection = {
  __typename?: 'VariantContainerCollection';
  items: Array<Maybe<VariantContainer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VariantContainerCursorCollection = {
  __typename?: 'VariantContainerCursorCollection';
  items: Array<Maybe<VariantContainer>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type VariantContainerFilter = {
  AND?: InputMaybe<Array<InputMaybe<VariantContainerFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VariantContainerFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  experimentId?: InputMaybe<Scalars['String']['input']>;
  experimentId_contains?: InputMaybe<Scalars['String']['input']>;
  experimentId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  experimentId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  experimentId_not?: InputMaybe<Scalars['String']['input']>;
  experimentId_not_contains?: InputMaybe<Scalars['String']['input']>;
  experimentId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  experiment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  variantsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VariantContainerLinkingCollections = {
  __typename?: 'VariantContainerLinkingCollections';
  componentInfoBlockCollection?: Maybe<ComponentInfoBlockCollection>;
  componentInfoBlockCursorCollection?: Maybe<ComponentInfoBlockCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type VariantContainerLinkingCollectionsComponentInfoBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VariantContainerLinkingCollectionsComponentInfoBlockCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VariantContainerLinkingCollectionsComponentInfoBlockCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VariantContainerLinkingCollectionsComponentInfoBlockCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VariantContainerLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VariantContainerLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VariantContainerLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VariantContainerLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VariantContainerLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VariantContainerLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VariantContainerLinkingCollectionsComponentInfoBlockCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VariantContainerLinkingCollectionsComponentInfoBlockCursorCollectionOrder {
  ColorPaletteAsc = 'colorPalette_ASC',
  ColorPaletteDesc = 'colorPalette_DESC',
  HeadlineAsc = 'headline_ASC',
  HeadlineDesc = 'headline_DESC',
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  SublineAsc = 'subline_ASC',
  SublineDesc = 'subline_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VariantContainerLinkingCollectionsPageCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VariantContainerLinkingCollectionsPageCursorCollectionOrder {
  InternalNameAsc = 'internalName_ASC',
  InternalNameDesc = 'internalName_DESC',
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum VariantContainerOrder {
  ExperimentIdAsc = 'experimentId_ASC',
  ExperimentIdDesc = 'experimentId_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type VariantContainerVariantsCollection = {
  __typename?: 'VariantContainerVariantsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VariantContainerVariantsCursorCollection = {
  __typename?: 'VariantContainerVariantsCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfMenuGroupNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfMenuGroupNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredPagesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName?: InputMaybe<Scalars['String']['input']>;
  groupName_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  groupName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  groupName_not?: InputMaybe<Scalars['String']['input']>;
  groupName_not_contains?: InputMaybe<Scalars['String']['input']>;
  groupName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle?: InputMaybe<Scalars['String']['input']>;
  internalTitle_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalTitle_not?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  noFollow?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noFollow_not?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_exists?: InputMaybe<Scalars['Boolean']['input']>;
  noIndex_not?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfTopicProductFeatureNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductFeatureNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  longDescription_contains?: InputMaybe<Scalars['String']['input']>;
  longDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  longDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription_contains?: InputMaybe<Scalars['String']['input']>;
  shortDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  shortDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfTopicProductNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfTopicProductNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  featuresCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  price?: InputMaybe<Scalars['Float']['input']>;
  price_exists?: InputMaybe<Scalars['Boolean']['input']>;
  price_gt?: InputMaybe<Scalars['Float']['input']>;
  price_gte?: InputMaybe<Scalars['Float']['input']>;
  price_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  price_lt?: InputMaybe<Scalars['Float']['input']>;
  price_lte?: InputMaybe<Scalars['Float']['input']>;
  price_not?: InputMaybe<Scalars['Float']['input']>;
  price_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfVariantContainerNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfVariantContainerNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfVariantContainerNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  experimentId?: InputMaybe<Scalars['String']['input']>;
  experimentId_contains?: InputMaybe<Scalars['String']['input']>;
  experimentId_exists?: InputMaybe<Scalars['Boolean']['input']>;
  experimentId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  experimentId_not?: InputMaybe<Scalars['String']['input']>;
  experimentId_not_contains?: InputMaybe<Scalars['String']['input']>;
  experimentId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  experiment_exists?: InputMaybe<Scalars['Boolean']['input']>;
  meta_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  variantsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfextraSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfextraSectionMultiTypeNestedFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CffeaturedPagesMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CffeaturedPagesMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CffeaturedPagesMultiTypeNestedFilter>>>;
  blackCardCtaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CfgroupLinkMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfgroupLinkMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfgroupLinkMultiTypeNestedFilter>>>;
  blackCardCtaText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  extraSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  seo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  topSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CftopSectionMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CftopSectionMultiTypeNestedFilter>>>;
  colorPalette?: InputMaybe<Scalars['String']['input']>;
  colorPalette_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_exists?: InputMaybe<Scalars['Boolean']['input']>;
  colorPalette_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  colorPalette_not?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_contains?: InputMaybe<Scalars['String']['input']>;
  colorPalette_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  internalName?: InputMaybe<Scalars['String']['input']>;
  internalName_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  internalName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  internalName_not?: InputMaybe<Scalars['String']['input']>;
  internalName_not_contains?: InputMaybe<Scalars['String']['input']>;
  internalName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type AssetFieldsFragment = { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } };

export type BusinessInfoFieldsFragment = { __typename: 'TopicBusinessInfo', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, body?: { __typename?: 'TopicBusinessInfoBody', json: any, links: { __typename?: 'TopicBusinessInfoBodyLinks', entries: { __typename?: 'TopicBusinessInfoBodyEntries', block: Array<
          | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'TopicBusinessInfoBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfBusinessInfoQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfBusinessInfoQuery = { __typename?: 'Query', topicBusinessInfo?: { __typename: 'TopicBusinessInfo', name?: string | null, shortDescription?: string | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, body?: { __typename?: 'TopicBusinessInfoBody', json: any, links: { __typename?: 'TopicBusinessInfoBodyLinks', entries: { __typename?: 'TopicBusinessInfoBodyEntries', block: Array<
            | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'TopicBusinessInfoBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type CtaFieldsFragment = { __typename: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
     | null } | null };

export type CtfCtaQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfCtaQuery = { __typename?: 'Query', componentCta?: { __typename: 'ComponentCta', headline?: string | null, ctaText?: string | null, urlParameters?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, subline?: { __typename?: 'ComponentCtaSubline', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
        | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
       | null } | null } | null };

export type DuplexFieldsFragment = { __typename: 'ComponentDuplex', containerLayout?: boolean | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
     | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfDuplexQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfDuplexQuery = { __typename?: 'Query', componentDuplex?: { __typename: 'ComponentDuplex', containerLayout?: boolean | null, headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentDuplexBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
        | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
       | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type FooterFieldsFragment = { __typename?: 'FooterMenuCollection', items: Array<{ __typename: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'FooterMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
              | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
             | null } | null> } | null } | null> } | null, legalLinks?: { __typename?: 'MenuGroup', featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
            | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
           | null } | null> } | null } | null } | null> };

export type CtfFooterQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfFooterQuery = { __typename?: 'Query', footerMenuCollection?: { __typename?: 'FooterMenuCollection', items: Array<{ __typename: 'FooterMenu', twitterLink?: string | null, facebookLink?: string | null, linkedinLink?: string | null, instagramLink?: string | null, sys: { __typename?: 'Sys', id: string }, menuItemsCollection?: { __typename?: 'FooterMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
                | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
               | null } | null> } | null } | null> } | null, legalLinks?: { __typename?: 'MenuGroup', featuredPagesCollection?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
              | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
             | null } | null> } | null } | null } | null> } | null };

export type HeroBannerFieldsFragment = { __typename: 'ComponentHeroBanner', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
     | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfHeroBannerQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfHeroBannerQuery = { __typename?: 'Query', componentHeroBanner?: { __typename: 'ComponentHeroBanner', headline?: string | null, ctaText?: string | null, imageStyle?: boolean | null, heroSize?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, bodyText?: { __typename?: 'ComponentHeroBannerBodyText', json: any } | null, targetPage?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
        | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
       | null } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type InfoBlockFieldsFragment = { __typename: 'ComponentInfoBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block1Body?: { __typename?: 'ComponentInfoBlockBlock1Body', json: any } | null, block2Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block2Body?: { __typename?: 'ComponentInfoBlockBlock2Body', json: any } | null, block3Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block3Body?: { __typename?: 'ComponentInfoBlockBlock3Body', json: any } | null };

export type CtfInfoBlockQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfInfoBlockQuery = { __typename?: 'Query', componentInfoBlock?: { __typename: 'ComponentInfoBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, block1Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block1Body?: { __typename?: 'ComponentInfoBlockBlock1Body', json: any } | null, block2Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block2Body?: { __typename?: 'ComponentInfoBlockBlock2Body', json: any } | null, block3Image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, block3Body?: { __typename?: 'ComponentInfoBlockBlock3Body', json: any } | null } | null };

export type NavigationFieldsFragment = { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', menuItemsCollection?: { __typename?: 'NavigationMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, link?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
            | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
           | null } | null, children?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
              | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
             | null } | null> } | null } | null> } | null } | null> };

export type CtfNavigationQueryVariables = Exact<{
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfNavigationQuery = { __typename?: 'Query', navigationMenuCollection?: { __typename?: 'NavigationMenuCollection', items: Array<{ __typename?: 'NavigationMenu', menuItemsCollection?: { __typename?: 'NavigationMenuMenuItemsCollection', items: Array<{ __typename: 'MenuGroup', groupName?: string | null, sys: { __typename?: 'Sys', id: string }, link?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
              | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
              | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
             | null } | null, children?: { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
                | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
                | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
               | null } | null> } | null } | null> } | null } | null> } | null };

type PageTopSectionFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageTopSectionFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageTopSectionFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageTopSectionFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageTopSectionFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageTopSectionFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageTopSectionFieldsFragment =
  | PageTopSectionFields_ComponentCta_Fragment
  | PageTopSectionFields_ComponentDuplex_Fragment
  | PageTopSectionFields_ComponentHeroBanner_Fragment
  | PageTopSectionFields_ComponentInfoBlock_Fragment
  | PageTopSectionFields_ComponentQuote_Fragment
  | PageTopSectionFields_ComponentTextBlock_Fragment
;

type PageContentFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable' };

type PageContentFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo' };

type PageContentFields_TopicProduct_Fragment = { __typename: 'TopicProduct' };

export type PageContentFieldsFragment =
  | PageContentFields_ComponentProductTable_Fragment
  | PageContentFields_TopicBusinessInfo_Fragment
  | PageContentFields_TopicProduct_Fragment
;

type PageExtraSectionItemFields_ComponentCta_Fragment = { __typename: 'ComponentCta' };

type PageExtraSectionItemFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex' };

type PageExtraSectionItemFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner' };

type PageExtraSectionItemFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock' };

type PageExtraSectionItemFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote' };

type PageExtraSectionItemFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock' };

export type PageExtraSectionItemFieldsFragment =
  | PageExtraSectionItemFields_ComponentCta_Fragment
  | PageExtraSectionItemFields_ComponentDuplex_Fragment
  | PageExtraSectionItemFields_ComponentHeroBanner_Fragment
  | PageExtraSectionItemFields_ComponentInfoBlock_Fragment
  | PageExtraSectionItemFields_ComponentQuote_Fragment
  | PageExtraSectionItemFields_ComponentTextBlock_Fragment
;

export type VariantContainerFieldsFragment = { __typename: 'VariantContainer', experimentId?: string | null, meta?: any | null, experiment?: any | null, sys: { __typename?: 'Sys', id: string }, variantsCollection?: { __typename?: 'VariantContainerVariantsCollection', items: Array<
      | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
     | null> } | null };

export type CtfPageFieldsFragment = { __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<
      | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
     | null> } | null, pageContent?:
    | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
    | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
    | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
   | null, blackCardCtaText?: { __typename: 'VariantContainer', experimentId?: string | null, meta?: any | null, experiment?: any | null, sys: { __typename?: 'Sys', id: string }, variantsCollection?: { __typename?: 'VariantContainerVariantsCollection', items: Array<
        | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
       | null> } | null } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<
      | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
     | null> } | null };

export type CtfPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfPageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename: 'Page', pageName?: string | null, slug?: string | null, internalName?: string | null, sys: { __typename?: 'Sys', id: string }, seo?: { __typename?: 'Seo', title?: string | null, description?: string | null, noIndex?: boolean | null, noFollow?: boolean | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null, topSectionCollection?: { __typename?: 'PageTopSectionCollection', items: Array<
          | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
         | null> } | null, pageContent?:
        | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
        | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
       | null, blackCardCtaText?: { __typename: 'VariantContainer', experimentId?: string | null, meta?: any | null, experiment?: any | null, sys: { __typename?: 'Sys', id: string }, variantsCollection?: { __typename?: 'VariantContainerVariantsCollection', items: Array<
            | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
           | null> } | null } | null, extraSectionCollection?: { __typename?: 'PageExtraSectionCollection', items: Array<
          | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
         | null> } | null } | null> } | null };

export type PersonFieldsFragment = { __typename: 'TopicPerson', name?: string | null, website?: string | null, location?: string | null, cardStyle?: boolean | null, sys: { __typename?: 'Sys', id: string }, bio?: { __typename?: 'TopicPersonBio', json: any } | null, avatar?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfPersonQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfPersonQuery = { __typename?: 'Query', topicPerson?: { __typename: 'TopicPerson', name?: string | null, website?: string | null, location?: string | null, cardStyle?: boolean | null, sys: { __typename?: 'Sys', id: string }, bio?: { __typename?: 'TopicPersonBio', json: any } | null, avatar?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type ProductFeatureFieldsFragment = { __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfProductFeatureQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfProductFeatureQuery = { __typename?: 'Query', topicProductFeature?: { __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type ProductTableFieldsFragment = { __typename: 'ComponentProductTable', headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<{ __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null> } | null };

export type CtfProductTableQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfProductTableQuery = { __typename?: 'Query', componentProductTable?: { __typename: 'ComponentProductTable', headline?: string | null, subline?: string | null, sys: { __typename?: 'Sys', id: string }, productsCollection?: { __typename?: 'ComponentProductTableProductsCollection', items: Array<{ __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null> } | null } | null };

export type ProductFieldsFragment = { __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null };

export type CtfProductQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfProductQuery = { __typename?: 'Query', topicProduct?: { __typename: 'TopicProduct', name?: string | null, price?: number | null, sys: { __typename?: 'Sys', id: string }, featuredImage?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null, description?: { __typename?: 'TopicProductDescription', json: any } | null, featuresCollection?: { __typename?: 'TopicProductFeaturesCollection', items: Array<{ __typename: 'TopicProductFeature', name?: string | null, sys: { __typename?: 'Sys', id: string }, longDescription?: { __typename?: 'TopicProductFeatureLongDescription', json: any, links: { __typename?: 'TopicProductFeatureLongDescriptionLinks', assets: { __typename?: 'TopicProductFeatureLongDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, shortDescription?: { __typename?: 'TopicProductFeatureShortDescription', json: any, links: { __typename?: 'TopicProductFeatureShortDescriptionLinks', assets: { __typename?: 'TopicProductFeatureShortDescriptionAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null };

export type QuoteFieldsFragment = { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<
          | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null };

export type CtfQuoteQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfQuoteQuery = { __typename?: 'Query', componentQuote?: { __typename: 'ComponentQuote', quoteAlignment?: boolean | null, imagePosition?: boolean | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, quote?: { __typename?: 'ComponentQuoteQuote', json: any, links: { __typename?: 'ComponentQuoteQuoteLinks', entries: { __typename?: 'ComponentQuoteQuoteEntries', block: Array<
            | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'ComponentQuoteQuoteAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null } | null };

export type RichTextHyperlinkFieldsFragment = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
     | null } | null };

export type CtfRichTextHyperlinkQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfRichTextHyperlinkQuery = { __typename?: 'Query', page?: { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
     | null } | null };

export type TextBlockFieldsFragment = { __typename: 'ComponentTextBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
          | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
          | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
         | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null };

export type CtfTextBlockQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CtfTextBlockQuery = { __typename?: 'Query', componentTextBlock?: { __typename: 'ComponentTextBlock', headline?: string | null, subline?: string | null, colorPalette?: string | null, sys: { __typename?: 'Sys', id: string }, body?: { __typename?: 'ComponentTextBlockBody', json: any, links: { __typename?: 'ComponentTextBlockBodyLinks', entries: { __typename?: 'ComponentTextBlockBodyEntries', block: Array<
            | { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Page', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } }
            | { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } }
           | null> }, assets: { __typename?: 'ComponentTextBlockBodyAssets', block: Array<{ __typename: 'Asset', contentType?: string | null, title?: string | null, description?: string | null, width?: number | null, height?: number | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null };

export type PageLinkFieldsFragment = { __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
    | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
    | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
    | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
   | null };

type ComponentReferenceFields_ComponentCta_Fragment = { __typename: 'ComponentCta', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentDuplex_Fragment = { __typename: 'ComponentDuplex', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentHeroBanner_Fragment = { __typename: 'ComponentHeroBanner', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentInfoBlock_Fragment = { __typename: 'ComponentInfoBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentProductTable_Fragment = { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentQuote_Fragment = { __typename: 'ComponentQuote', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_ComponentTextBlock_Fragment = { __typename: 'ComponentTextBlock', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_FooterMenu_Fragment = { __typename: 'FooterMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_MenuGroup_Fragment = { __typename: 'MenuGroup', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_NavigationMenu_Fragment = { __typename: 'NavigationMenu', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Page_Fragment = { __typename: 'Page', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_Seo_Fragment = { __typename: 'Seo', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicBusinessInfo_Fragment = { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicPerson_Fragment = { __typename: 'TopicPerson', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicProduct_Fragment = { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_TopicProductFeature_Fragment = { __typename: 'TopicProductFeature', sys: { __typename?: 'Sys', id: string } };

type ComponentReferenceFields_VariantContainer_Fragment = { __typename: 'VariantContainer', sys: { __typename?: 'Sys', id: string } };

export type ComponentReferenceFieldsFragment =
  | ComponentReferenceFields_ComponentCta_Fragment
  | ComponentReferenceFields_ComponentDuplex_Fragment
  | ComponentReferenceFields_ComponentHeroBanner_Fragment
  | ComponentReferenceFields_ComponentInfoBlock_Fragment
  | ComponentReferenceFields_ComponentProductTable_Fragment
  | ComponentReferenceFields_ComponentQuote_Fragment
  | ComponentReferenceFields_ComponentTextBlock_Fragment
  | ComponentReferenceFields_FooterMenu_Fragment
  | ComponentReferenceFields_MenuGroup_Fragment
  | ComponentReferenceFields_NavigationMenu_Fragment
  | ComponentReferenceFields_Page_Fragment
  | ComponentReferenceFields_Seo_Fragment
  | ComponentReferenceFields_TopicBusinessInfo_Fragment
  | ComponentReferenceFields_TopicPerson_Fragment
  | ComponentReferenceFields_TopicProduct_Fragment
  | ComponentReferenceFields_TopicProductFeature_Fragment
  | ComponentReferenceFields_VariantContainer_Fragment
;

export type MenuGroupFieldsFragment = { __typename?: 'MenuGroupFeaturedPagesCollection', items: Array<{ __typename: 'Page', slug?: string | null, pageName?: string | null, sys: { __typename?: 'Sys', id: string }, pageContent?:
      | { __typename: 'ComponentProductTable', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicBusinessInfo', sys: { __typename?: 'Sys', id: string } }
      | { __typename: 'TopicProduct', sys: { __typename?: 'Sys', id: string } }
     | null } | null> };
