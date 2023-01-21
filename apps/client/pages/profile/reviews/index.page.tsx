import { css, useTheme } from "@emotion/react";
import { Suspense } from "@suspensive/react";
import { padding, Stack } from "@toss/emotion-utils";
import { Text } from "~/components/Common/Typo";
import { HorizontalPostList } from "~/components/Profile/posts";
import Skeleton from "~/components/Skeleton";
import { useSetNavigation } from "~/hooks";
import { useFetchReviewedRestaurant } from "~/server/profile";
import { generateComponent } from "~/utils";

const ProfileReviews = () => {
  const { colors, weighs } = useTheme();
  useSetNavigation({
    top: {
      title: (
        <Text _fontSize={19} _color={colors.secondary[47]} weight={weighs.bold}>
          All Reviews
        </Text>
      )
    },
    bottom: true
  });

  return (
    <section
      css={css`
        ${padding({ x: 16 })}
      `}
    >
      <Suspense.CSROnly
        fallback={
          <Stack.Vertical>
            {generateComponent(
              <Skeleton.Box
                size={{
                  width: "100%",
                  height: 100
                }}
              />,
              4
            )}
          </Stack.Vertical>
        }
      >
        <HorizontalPostList query={useFetchReviewedRestaurant} />
      </Suspense.CSROnly>
    </section>
  );
};

export default ProfileReviews;
