import { css } from "@emotion/react";
import { padding, Stack } from "@toss/emotion-utils";
import { SSRSafeSuspense } from "~/components/Common";
import { HorizontalPostList } from "~/components/Profile/posts";
import Skeleton from "~/components/Skeleton";
import { useSetNavigation } from "~/hooks";
import { useFetchScrapedRestaurant } from "~/server/profile";

const ProfileSaved = () => {
  useSetNavigation({
    top: {},
    bottom: true
  });

  return (
    <section
      css={css`
        ${padding({ x: 16 })}
      `}
    >
      <SSRSafeSuspense
        fallback={
          <Stack.Vertical gutter={10}>
            <Skeleton.Box
              size={{
                width: "100%",
                height: 100
              }}
            />
            <Skeleton.Box
              size={{
                width: "100%",
                height: 100
              }}
            />
            <Skeleton.Box
              size={{
                width: "100%",
                height: 100
              }}
            />
            <Skeleton.Box
              size={{
                width: "100%",
                height: 100
              }}
            />
          </Stack.Vertical>
        }
      >
        <HorizontalPostList query={useFetchScrapedRestaurant} />
      </SSRSafeSuspense>
    </section>
  );
};

export default ProfileSaved;
