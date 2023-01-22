import { useTheme } from "@emotion/react";
import { Suspense } from "@suspensive/react";
import { Stack } from "@toss/emotion-utils";
import { useEffect } from "react";
import { Text } from "~/components/Common/Typo";
import { NotificationList } from "~/components/Notice";
import Skeleton from "~/components/Skeleton";
import { useSetNavigation } from "~/hooks";
import { useNoticeActivateSetter } from "~/recoil/atoms/noticeActivate";
import { generateComponent } from "~/utils";

const Notice = () => {
  const { colors, weighs } = useTheme();
  const setNoticeActivate = useNoticeActivateSetter();

  useEffect(() => {
    setNoticeActivate(false);
    return () => setNoticeActivate(false);
  }, [setNoticeActivate]);

  useSetNavigation({
    top: {
      title: (
        <Text _fontSize={19} weight={weighs.bold} _color={colors.secondary[47]}>
          Notifications
        </Text>
      )
    },
    bottom: true
  });
  return (
    <div>
      <Suspense.CSROnly
        fallback={
          <Stack.Vertical>
            {generateComponent(
              <Skeleton.Box
                size={{
                  width: "100%",
                  height: 40
                }}
              />,
              6
            )}
          </Stack.Vertical>
        }
      >
        <NotificationList />
      </Suspense.CSROnly>
    </div>
  );
};

export default Notice;
