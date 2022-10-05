interface categoryItem {
  name: string;
  _id: string;
}

interface badgeItem {}

export interface ProjectItem {
  logo: string;
  fullName: string;
  name: string;
  coSecondaryCategories: categoryItem[];
  coPrimaryCategory: string;
  coStage: any;
  coTechnologies: categoryItem[];
  country: categoryItem[];
  email: string;
  foundationDate: number;
  introduction: any;
  investorOnHomepage: boolean;
  isActive: boolean;
  isFeatured: boolean;
  phone: any;
  priorityPoint: any;
  slug: string;
  tagline: string;
  createdAt: number;
  badge: object[];
  city: any;
  cityName: any;
}

export interface dataResponse {
  data: ProjectItem[];
  message: string;
  page: string;
  perPage: string;
  statusCode: number;
  total: number;
}

export interface resultResponse {
  config: object;
  data: dataResponse;
  headers: object;
  request: any;
  status: number;
  statusText: number;
}

export interface params {
  s?: string;
  page: number;
  orderBy?: string;
  category?: string;
  technologies?: string;
  location?: string;
  badge?: string;
}

export interface action {
  type: string;
  params: params;
}
