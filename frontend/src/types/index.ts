export enum CampaignStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted'
}

export interface Lead {
  name: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  notes: string;
}

export interface Campaign {
  _id: string;
  name: string;
  description: string;
  status: CampaignStatus;
  leads: string[];
  accountIDs: string[];
}

export interface CampaignFormData {
  name: string;
  description: string;
  status: CampaignStatus;
  leads: string[];
  accountIDs: string[];
}

export interface LinkedInProfile {
  name: string;
  job_title: string;
  company: string;
  location?: string;
  summary?: string;
} 