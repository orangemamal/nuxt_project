// 지원되는 로케일 항목
const SUPPORTED_LOCALES = ["ko-kr", "en-us", "en-de"];

export default function({ route, redirect }) {
  const { language, pageName, country } = route.params;
  const locale = `${language}-${country}`;

  if (SUPPORTED_LOCALES.includes(locale)) return;

  // 현재 로케일이 지원되는 로케일이 아닐 경우 en-us의 콘텐츠로 리다이렉트
  const redirectRoute = `en/us/${pageName}`;
  redirect(redirectRoute);
}
