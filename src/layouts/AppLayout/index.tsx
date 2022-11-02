import { css } from "@emotion/react";
import { ScrollContainer } from "~/components/Common";

interface AppLayoutProps {
  children: JSX.Element | JSX.Element[];
}

const AppLayout = ({ children }: AppLayoutProps) => (
  <ScrollContainer>
    <main
      css={css`
        display: flex;
        flex-direction: column;
        flex: 1;
      `}
    >
      {children}
    </main>
    {/* TODO: 추후 로딩 라우팅시 프로그레스 추가 필요  */}
    {/* <PageLoader /> */}
  </ScrollContainer>
);
export default AppLayout;
