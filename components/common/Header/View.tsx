import Link from "next/link";
import { Logo, SearchBar, Avatar, HeaderButton } from "@/components";
import { useRouter } from "next/router";

interface HeaderProps {
  avatarUrl?: string;
  isLogined?: boolean;
  onLeftButtonClick?: () => void;
  onRightButtonClick?: () => void;
}

export default function HeaderView({
  avatarUrl,
  isLogined,
  onLeftButtonClick,
  onRightButtonClick,
}: HeaderProps) {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="flex justify-between items-center m-4 w-74">
        <Link href="/">
          <Logo />
        </Link>
        <SearchBar />
        <div className="flex gap-4">
          <HeaderButton onClick={onLeftButtonClick}>
            {isLogined ? "log out" : "log in"}
          </HeaderButton>
          <HeaderButton onClick={onRightButtonClick} varient="secondary">
            {isLogined ? "upload +" : "sign up"}
          </HeaderButton>
        </div>
        <div className="relative">
          <Avatar imageUrl={avatarUrl} onClick={() => router.push("/mypage")} />
        </div>
      </div>
    </div>
  );
}
