export type Status = "blacklisted" | "active" | "inactive" | "pending";

export interface IUser {
  orgName: string;
  accountBalance: string;
  accountNumber: string;
  id: string;
  email: string;
  lastActiveDate: string;
  userName: string;
  status: Status;
  profile: IProfile;
  education: IEducation;
  socials: ISocialLinks;
  guarantor: IGuarantor;
  createdAt: string;
}

interface IProfile {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  gender: string;
  bvn: string;
  avatar: string;
}

interface IEducation {
  loanRepayment: string;
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  monthlyIncome: number[];
  officeEmail: string;
}

interface IGuarantor {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  address: string;
  gender: string;
}

interface ISocialLinks {
  twitter: string;
  facebook: string;
  instagram: string;
}
