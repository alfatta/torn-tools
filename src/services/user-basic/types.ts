export interface UserBasic {
  profile: {
    id: number;
    name: string;
    level: number;
    gender: string;
    status: {
      description: string;
      details: string | null;
      state: string;
      color: string;
      until: number | null;
      plane_image_type?: string;
    };
  };
}
