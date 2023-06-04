export type User = {
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  name: string;
  registration: string;
  status: boolean;
  passwordUpdate: string;
  email: string;
  phone: string;
  emailVerification: boolean;
  phoneVerification: boolean;
  prefs: [key: string];

  // profiles data
  role: 'user' | 'seller' | 'admin';
  profile_img: string;
};
