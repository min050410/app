import { MainLayout } from "@/layouts";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";

interface SignupForm {
  username: string;
  password: string;
}

function Home() {
  const { register, handleSubmit } = useForm<SignupForm>();
  const onSubmit: SubmitHandler<SignupForm> = (data) => console.log(data);

  return (
    <div>
      <Head>
        <title>BSSM SH - 회원가입</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>회원가입 페이지 입니다. - oauth만 쓰면 필요없을수도</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} />
        <input {...register("password")} />
      </form>
    </div>
  );
}
export default function Page() {
  return <MainLayout app={<Home />} />;
}
