export type Invite = {
  id: string;
  guests: Guest[];
  inviteCode: string; // invite code is generated using uuidv4
  responded: boolean;
};

export type Guest = {
  id: string;
  name: string;
  coming: boolean;
};
