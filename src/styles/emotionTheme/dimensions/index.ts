/*
 사용하는 부분에선 다음과 같이 사용해주세요.
 import { useTheme } from "@emotion/react"
 const theme = useTheme()

 <Dummy height={theme.dimensions.bottomNavigationHeight}/>
*/
const dimensions = {
  bottomNavigationHeight: 85,
  defaultWidth: 390,
  viewWidth: 590
} as const;

export default dimensions;
