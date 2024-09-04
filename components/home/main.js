import Link from "next/link";
import Animation from "../animation";

const Main = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요
          <br className="hidden lg:inline-block" />
          프론트엔드 개발자 이다현입니다.
        </h1>
        <p className="mb-8 leading-relaxed">
          마케팅 업무를 하면서 스크립트 삽입, 홈페이지 제작 등 코딩과 관련하여
          자주 마주할 수 있었습니다. <br />
          이로 인해 코딩에 관심을 가지게 되어 본격적으로 배우게 되었고 REACT를
          활용한 주니어 Frontend 개발자가 되었습니다. UI/UX와 깊은 관련이 있는
          마케팅 관련 업무를 했던 경험으로, <br />
          사용자들이 편안히 사용할 수 있도록 적재적소에 알맞은 기술을 적용해
          최고의 UX를 제공하며,
          <br /> 꾸준히 성장하고 실력있는 프론트엔드 개발자가 되고 싶습니다.
        </p>
        <div className="flex justify-center">
          <Link href="/project" legacyBehavior>
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Main;
