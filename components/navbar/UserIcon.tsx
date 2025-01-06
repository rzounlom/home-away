import Image from "next/image";
import { LuUser } from "react-icons/lu";
import { fetchProfileImage } from "@/utils/actions";

export default async function UserIcon() {
  const profileImage = await fetchProfileImage();

  if (profileImage)
    return (
      <Image
        src={profileImage}
        className="w-6 h-6 rounded-full object-cover"
        height={24}
        width={24}
        alt="profile image"
      />
    );

  return <LuUser className="w-6 h-6 bg-primary rounded-full text-white" />;
}
